
const MICROSOFT_AUTH_URL = `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}/oauth2/v2.0/authorize`;
const MICROSOFT_TOKEN_URL = `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}/oauth2/v2.0/token`;
const MICROSOFT_USERINFO_URL = `https://graph.microsoft.com/v1.0/me`;

export function microsoftAuthUrl(codeAuth: string){
    const params = new URLSearchParams({
        client_id: process.env.MICROSOFT_CLIENT_ID!,
        redirect_uri: process.env.MICROSOFT_REDIRECT_URI!,
        response_type: 'code',
        scope: 'openid email profile User.Read',
        response_mode: 'query',
        code_challenge: codeAuth,
        code_challenge_method: 'S256',
    });
    return `${MICROSOFT_AUTH_URL}?${params.toString()}`;
}
export async function microsoftToken(code: string, codeToVeri: string){
    const res= await fetch(MICROSOFT_TOKEN_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            client_id: process.env.MICROSOFT_CLIENT_ID!,
            client_secret: process.env.MICROSOFT_CLIENT_SECRET!,
            code,
            redirect_uri: process.env.MICROSOFT_REDIRECT_URI!,
            grant_type: 'authorization_code',
            code_verifier: codeToVeri,
        }),
    });
    if (!res.ok) {
        const error = await res.json();
        console.error("🔴 Microsoft Token Error:", error);
        throw new Error(`Failed to fetch access token: ${JSON.stringify(error)}`);
    }
    return res.json();
}
export async function microsoftUserInfo(accessToken: string) {
    const res = await fetch(MICROSOFT_USERINFO_URL, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    if (!res.ok) {
        const error = await res.json();
        console.error("🔴 Microsoft UserInfo Error:", error);
        throw new Error(`Failed to fetch user info: ${JSON.stringify(error)}`);
    }
    return res.json();
}