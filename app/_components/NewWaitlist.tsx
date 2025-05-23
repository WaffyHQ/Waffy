import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Loader,CircleCheck } from "lucide-react";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
export default function Waitlist({ emailRef }: { emailRef: React.RefObject<HTMLInputElement | null> }) {
  const [email, setEmail] = useState("");
  const submitEmail = async (email: string) => {
    console.log("Submitting email:", email);
    const response = await axios.post("/api/waitlist", { email });
    return response.data;
  };
  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: submitEmail,
  });
  const handleSubmit = () => {
    if (email.trim()) {
      mutate(email);
    }
  };
  return (
    <section className="relative md:p-3 p-9 md:py-20 h-fit flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div
          className="absolute md:w-72 w-64 h-40 md:h-64 -left-11 md:left-1/5 top-23 md:top-1/4 bg-gradient-to-br from-green-600/95 via-green-700 to-green-600/0 opacity-40 blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute w-72 h-72 bottom-1/4 left-1/3  bg-gradient-to-r from-green-600/95 via-grenn-700 to-green-800 opacity-20 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Introducing
              <br />
              Waffy
            </h2>
            <p className="text-gray-300 text-sm md:text-base  mb-8">
              Unlock the power of artificial intelligence. Instantly responds. Engage with an intelligent AI assistants and collaborate with your team, all within
              one unified brand.
            </p>


            <div className="flex flex-row gap-3 p-2 mt-4 sm:mt-6 items-center justify-start">
              {isPending && (
               <Loader className="animate-spin text-green-500" size={32} />
              
              )}
              {isSuccess && (
                <>
                  <CircleCheck className="text-green-500" />
                </>
              )}
              {error && (
                <h1 className="text-red-500">Already waitisted</h1>
              )}

              <Input
                placeholder="Enter your email to join the waitlist"
                className="w-full text-sm md:text-md max-w-md px-4 py-2 rounded-lg bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 border-0 focus:ring-green-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
                id="email"
                required
                ref={emailRef}
              />
              <Button onClick={handleSubmit} className="bg-green-800/40 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,200,83,0.15)] hover:bg-green-500/50 hover:cursor-pointer">
                <ArrowRight size={36} />
              </Button>
            </div>

          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-700">
            <Image
              src="/waffy.png"
              alt="Introducing waffy AI"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
