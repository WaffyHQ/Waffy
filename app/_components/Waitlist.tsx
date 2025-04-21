import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Waitlist({ emailRef }: { emailRef: React.RefObject<HTMLInputElement | null> }) {
  const [email, setEmail] = React.useState<string>("");

  return (
    <section className="container mx-auto px-4 sm:px-6 mb-20">
      <div className="flex flex-row gap-3 p-2 mt-4 sm:mt-6 items-center justify-center">
        <Input
          placeholder="Enter your email to join the waitlist"
          className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 border-0 focus:ring-green-500"
          type="email"
          aria-label="Email"
          value={email}
          id="email"
          required
          ref={emailRef}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="bg-green-800/40 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,200,83,0.15)] hover:bg-green-500/50 hover:cursor-pointer">
          <ArrowRight size={36} />
        </Button>
      </div>
    </section>
  )
}