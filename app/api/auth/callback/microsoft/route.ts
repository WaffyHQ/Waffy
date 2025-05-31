import {cookies} from "next/headers";
import { microsoftUserInfo, microsoftToken } from "@/app/actions/oAuthMicrosoft";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const code = searchParams.get("code");
    const cookieStore = await cookies();
    const codeToVeri = cookieStore.get("microsoft_code_verifier")?.value;

   if (!code || !codeToVeri) {
       return new Response("Missing code or codetoveri", { status: 400 });
   }

   try {
       const tokenResponse = await microsoftToken(code, codeToVeri);
       const userInfo = await microsoftUserInfo(tokenResponse.access_token);
       console.log("Microsoft User Info:", userInfo);
       return new Response("Login successful", { status: 200 });
   } catch (error) {
       console.error("Error during Microsoft login:", error);
       return new Response("Login failed..go back and try again fail again fail better", { status: 500 });
   }
}