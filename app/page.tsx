"use client"
import { useEffect, useRef, useState } from "react"
import Hero from "./_components/Hero"
import Footer from "./_components/Footer"
import Waitlist from "./_components/Waitlist"
import Navbar from "./_components/Navbar"
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const scrollEmail = () => {
    emailRef.current?.scrollIntoView({ behavior: 'smooth' })
    emailRef.current?.focus();
  }
  

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero isMobile={isMobile} scrollEmail={scrollEmail} />
        <Waitlist emailRef={emailRef} />
        <Footer />
      </main>
    </div>
  )
}