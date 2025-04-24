import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {ArrowRight} from "lucide-react"

export default function Waitlist({ emailRef }: { emailRef: React.RefObject<HTMLInputElement | null> }) {
  return (
    <section className="relative p-3 md:py-20 h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-black to-black z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-white">
              Introducing
              <br />
              Waffy
            </h2>
            <p className="text-gray-300 mb-8">
              Unlock the power of artificial intelligence. Instantly responds. Engage with an intelligent AI assistants and collaborate with your team, all within
              one unified brand.
            </p>

             
              <div className="flex flex-row gap-3 p-2 mt-4 sm:mt-6 items-center justify-start">
        <Input
          placeholder="Enter your email to join the waitlist"
          className="w-full text-sm md:text-md max-w-md px-4 py-2 rounded-lg bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 border-0 focus:ring-green-500"
          type="email"
          aria-label="Email"
          id="email"
          required
          ref={emailRef}
        />
        <Button className="bg-green-800/40 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,200,83,0.15)] hover:bg-green-500/50 hover:cursor-pointer">
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
