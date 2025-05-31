
import { cookies } from "next/headers";
import { googleUserInfo, googleAccessToken } from "@/app/actions/oAuthGoogle";
import { redirect } from "next/navigation";
import crypto from "crypto";
export async function GET(request: Request) {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const cookieStore = await cookies();
    const verifier = cookieStore.get("google_code_verifier")?.value;
    if (!verifier) return new Response("Missing code_verifier", { status: 400 })
    if (!code) return new Response("Missing code", { status: 400 });
    const { access_token } = await googleAccessToken(code, verifier);
    const user = await googleUserInfo(access_token);
    console.log("Google User Info:", user);

    const sessIonIdGen = () => {
        return crypto
            .createHash('sha256')
            .update(user.id)
            .digest('hex');
    }
    const sessionId = sessIonIdGen();
    cookieStore.set("session", sessionId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, 
        sameSite: "lax",
        secure: true
    })
    return redirect("/");
}