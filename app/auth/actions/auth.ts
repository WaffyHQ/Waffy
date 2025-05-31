
"use server";
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import db from "@/db/index"
import { users } from "@/db/schema"
import {
  googleAuthUrl,
  generateCode,
} from "@/app/actions/oAuthGoogle"
import bcrypt from "bcryptjs"
import {eq} from "drizzle-orm"
export async function loginWithGoogle() {
  const codeVerifier = generateCode()
  const cookieStore = await cookies()
  cookieStore.set("google_code_verifier", codeVerifier, {
    httpOnly: true,
    maxAge: 300,
    sameSite: "lax",
    secure: true
  })

  const url = await googleAuthUrl(codeVerifier) 
  redirect(url)
}

export async function loginInWithEmail(email: string, password: string) {
    try{
    const [user] = await db.select().from(users).where(eq(users.email, email));
    if (!user || !user.password) {
        return new Response("User not found", { status: 404 });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password as string);
    if (!isPasswordValid) {
        return new Response("Invalid password", { status: 401 });
    }else{
        redirect("/");
        return new Response("Login successful", { status: 200 });
        
    }
    }catch(error){
        console.error("Error during email login:", error);
        return new Response("Login failed", { status: 500 });
    }

}

export async function signUpWithEmail(
  name: string,
  email: string,
  phoneNo: string,
  password: string,
) {
  try {
    if (!name?.trim() || !email?.trim() || !password?.trim()) {
      return {
        success: false,
        error: "Name, email, and password are required"
      }
    }
    if (password.length < 8) {
      return {
        success: false,
        error: "Password must be at least 8 characters long"
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: hashedPassword,
      provider: "email",
      providerId: email.trim().toLowerCase(),
      phoneNo: phoneNo?.trim() || null,
    }
    const [user] = await db.insert(users).values(newUser).returning()
    if (!user) {
      return {
        success: false,
        error: "Failed to create user account"
      }
    }
    return {
      success: true,
      message: "Account created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    }

  } catch (error) {
    console.error("Error during user creation:", error)
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      "message" in error
    ) {
      if ((error as { code: string; message: string }).code === 'ENOTFOUND') {
        return {
          success: false,
          error: "Database connection failed. Please check your database configuration."
        }
      }
      if (
        (error as { code: string; message: string }).code === '23505' ||
        (typeof (error as { message: string }).message === "string" &&
          ((error as { message: string }).message.includes('duplicate') ||
            (error as { message: string }).message.includes('unique')))
      ) {
        return {
          success: false,
          error: "An account with this email already exists"
        }
      }
    }
    return { 
      success: false,
      error: "Failed to create account. Please try again."
    }
  }
}
