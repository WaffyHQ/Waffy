import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from '@/lib/supabase';
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { sendEmail } from "@/lib/mail";
import { render } from "@react-email/render";
import WaitlistConfirmationEmail from "../../_components/mails/Waitlist";
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: true,
});
const emailSchema = z.object({
    email: z.string().email("Invalid email"),
});

export async function POST(request: Request) {
    const ip = request.headers.get("x-forwarded-for") || "anonymous";

    console.log("IP Address:", ip);
    const { success } = await ratelimit.limit(ip);

    if (!success) {
        return NextResponse.json(
            { error: "Too many requests. Please wait 10 minutes." },
            { status: 429 }
        );
    }

    try {
        const body = await request.json();
        const parseResult = emailSchema.safeParse(body);

        if (!parseResult.success) {
            return NextResponse.json(
                { error: parseResult.error.errors[0].message },
                { status: 400 }
            );
        }

        const { email } = parseResult.data;

        const { data, error } = await supabase
            .from("email")
            .insert([{ email }]);
        if (error?.message === "duplicate key value violates unique constraint \"email_pkey\"") {
            return NextResponse.json({ error: "Email already registered for waitlist" }, { status: 409 });
        }

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
       // return NextResponse.json({ message: "Email saved", data }, { status: 200 });
    const html = await render(<WaitlistConfirmationEmail userEmail={email} />);

    await sendEmail(
        email, 
        "✅ You're on the Waitlist!", 
        html
    );
        console.log("Email sent to:", email);
        return NextResponse.json({ message: "Email saved & mail sent", data }, { status: 200 });

    } catch (error) {
        console.error("Error parsing request body:", error);
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
