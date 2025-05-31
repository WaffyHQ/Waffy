"use client"

import type React from "react"
import { useState,useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock, User, Chrome, Check, X, Phone } from "lucide-react"
import Link from "next/link"
import { loginWithGoogle, signUpWithEmail } from "../actions/auth"
import { useToast } from "@/components/custom/toast-provider"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [verificationTab, setVerificationTab] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [phnOtp, setPhnOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const passwordsMatch = password === confirmPassword && confirmPassword !== ""
  const passwordStrong = password.length >= 8


  useEffect(() => {
    if (emailOtp.length === 6) {
      (async () => {
        const res = await sendOtp(emailOtp, email);
        if (res && res.ok) {
          success({
                title: "Success!",
                description: "Your email verification was completed successfully.",
              })
          setOne(false);
          setTwo(true);
          setIsLoading(false);
        } else {
          setTwo(true);
          setOne(false);
          error({
            title: "Error!",
            description: "Failed to verify OTP. Please try again later.",
          })
          setIsLoading(false);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailOtp]);

  useEffect(() => {
    if (phnOtp.length === 6) {
      (async () => {
        const res = await sendOtp(phnOtp, phoneNo);
        if (res && res.ok) {
          success({
            title: "Success!",
            description: "Your phone number verification was completed successfully.",
          })
          setOne(false);
          setTwo(false);
          setIsLoading(false);
          setOtpVerified(true);
          window.location.href = "/auth/login";
        } else {
          error({
            title: "Error!",
            description: "Failed to verify OTP. Please try again later.",
          })
          setIsLoading(false);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phnOtp]);
  async function sendOtp(otp: string, arg: string) {
    setIsLoading(true);
   
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailOtp, arg }),
      })
      return res;

    } catch (e) {
      console.error("Error during OTP verification:", e);
    }
  }
  const handleSubmit = async (e: React.FormEvent) => {
    if (!otpVerified) {
      setVerificationTab(true);
      setOne(true);
      setTwo(false);
      return;
    }
    e.preventDefault()
    if (!passwordsMatch || !passwordStrong || !agreedToTerms) return
    try {
      const result = await signUpWithEmail(name, email, phoneNo, password)

      if (result.success) {
        success({
          title: "Account Created!",
          description: "Your account has been created successfully.",
        })
        setName("")
        setEmail("")
        setPhoneNo("")
        setPassword("")
        setConfirmPassword("")
        setAgreedToTerms(false)
      }
    } catch (error) {
      console.error("Signup error:", error)
    } finally {
      setIsLoading(false)
    }
  }


  const handleGoogleSignup = async () => {
    setIsLoading(true)
    await loginWithGoogle();
    setTimeout(() => setIsLoading(false), 2000)
  }
  const { success, error } = useToast();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />

      <Card className="w-full max-w-md bg-black/40 backdrop-blur-xl border border-green-500/20 shadow-2xl">
        {verificationTab ? (
          <>
            <CardHeader className=" text-center">
              <CardTitle className="text-2xl font-bold text-white">Verify Account</CardTitle>
              <CardDescription className="text-gray-300"></CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {one && (
                <div className="flex flex-col items-center space-y-4">
                  <p className="text-gray-300">A verification link has been sent to your email address. Please check your inbox and follow the instructions to verify your account.</p>
                  <p className="text-gray-300">If you haven&apos;t received the email, please check your spam folder or click the button below to resend the verification link.</p>
                  <InputOTP maxLength={6}
                    className="text-white"
                    value={emailOtp}
                    onChange={(value) => setEmailOtp(value)}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              )} {
                two && (
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-gray-300">A verification otp has been sent to your PHONE NUMBER. Please check your inbox and follow the instructions to verify your account.</p>
                    <p className="text-gray-300">If you haven&apos;t received the message</p>
                    <InputOTP maxLength={6}
                      className="text-white"
                      value={phnOtp}
                      onChange={(value) => setPhnOtp(value)}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                )
              }
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-gray-400">
                Back to {" "}
                <Link href="/auth/login" className="text-green-400 hover:text-green-300 font-medium transition-colors">
                  signup
                </Link>
              </div>
            </CardFooter>
          </>
        ) : (
          <>
            <CardHeader className=" text-center">
              <CardTitle className="text-2xl font-bold text-white">Create Account</CardTitle>
              <CardDescription className="text-gray-300">Sign up to get started with your account</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white text-sm font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 bg-white/10 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500/20"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/10 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500/20"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white text-sm font-medium">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      name="phoneNo"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      className="pl-10 bg-white/10 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500/20"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 bg-white/10 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500/20"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    {passwordStrong ? <Check className="h-3 w-3 text-green-400" /> : <X className="h-3 w-3 text-red-400" />}
                    <span className={passwordStrong ? "text-green-400" : "text-red-400"}>At least 8 characters</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white text-sm font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      name="password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10 pr-10 bg-white/10 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500/20"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  {confirmPassword && (
                    <div className="flex items-center space-x-2 text-xs">
                      {passwordsMatch ? (
                        <Check className="h-3 w-3 text-green-400" />
                      ) : (
                        <X className="h-3 w-3 text-red-400" />
                      )}
                      <span className={passwordsMatch ? "text-green-400" : "text-red-400"}>
                        {passwordsMatch ? "Passwords match" : "Passwords don't match"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-start flex-row space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 rounded border-green-500/30 bg-white/10 text-green-500 focus:ring-green-500/20"
                    required
                  />
                  <Label htmlFor="terms" className="md:text-sm text-xs text-gray-300 leading-relaxed">
                    I agree to the
                    <Link href="/terms" className="text-green-400 hover:text-green-300 transition-colors">
                      Terms of Service and Privacy Policy
                    </Link>

                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
                  disabled={isLoading || !passwordsMatch || !passwordStrong || !agreedToTerms}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-green-500/20" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-black/40 px-2 text-gray-400">Or continue with</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full bg-white/5 border-green-500/30 text-white hover:bg-white/10 hover:border-green-500/50 transition-all duration-200"
                onClick={handleGoogleSignup}
                disabled={isLoading}
              >
                <Chrome className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-green-400 hover:text-green-300 font-medium transition-colors">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>

  )
}
