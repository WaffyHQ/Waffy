
import crypto from 'crypto';

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token"
const GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v2/userinfo"

const REDIRECT_URI = `http://localhost:3000/api/auth/callback/google`;

export const generateCode = () => {
    return crypto.randomBytes(32).toString('hex');
}
export const generateCodeAuth = (codeToVeri: string)=> {
    return crypto
        .createHash('sha256')
        .update(codeToVeri)
        .digest()
        .toString('base64url');
}

export async function googleAuthUrl(codeToVeri: string){
    const authCode = generateCodeAuth(codeToVeri);
    const params = new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        redirect_uri: REDIRECT_URI,
        response_type: 'code',
        scope: 'openid email profile',
        code_challenge: authCode,
        code_challenge_method: 'S256',
    })
    return `${GOOGLE_AUTH_URL}?${params.toString()}`;
}

export async function googleAccessToken (code: string, codeToVeri: string) {
    const res = await fetch(GOOGLE_TOKEN_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            code,
            client_id: process.env.GOOGLE_CLIENT_ID!,
            client_secret: process.env.GOOGLE_CLIENT_SECRET!,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code',
            code_verifier: codeToVeri,
        }),
    })
    if (!res.ok) {
    const error = await res.json()
    console.error("🔴 Google Token Error:", error)
    throw new Error(`Failed to fetch access token: ${JSON.stringify(error)}`)
  }
    return res.json();
}

export async function googleUserInfo(accessToken: string) {
    const res = await fetch(GOOGLE_USERINFO_URL, {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    })
    if (!res.ok) {
        throw new Error('Failed to fetch user infoo');
    }
    return res.json();
}