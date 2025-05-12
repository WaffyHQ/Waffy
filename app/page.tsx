"use client"
import { useEffect, useRef, useState } from "react"
import Hero from "./_components/Hero"
import Footer from "./_components/Footer"
import Waitlist from "./_components/NewWaitlist"
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
        <>
        <Hero isMobile={isMobile} scrollEmail={scrollEmail} />
        <Waitlist emailRef={emailRef} />
        <Footer />
        </>
    
  )
}