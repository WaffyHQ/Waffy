"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {useRef, useState } from "react"
import {Input} from "@/components/ui/input"
import {ArrowRight, Menu, X} from "lucide-react"

export default function Home() {
  const [hovered, setHovered] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  
  const scrollEmail = () => {
    emailRef.current?.scrollIntoView({ behavior: 'smooth' })
    emailRef.current?.focus();
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const hoverIt1 = () => {
    setHovered(1);
  }
  const hoverIt2 = () => {
    setHovered(2);
  }
  const hoverIt3 = () => {
    setHovered(3);
  }
  return (
    <div className="min-h-screen bg-[#0d0d17] flex flex-col">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
      <header className="border-b border-gray-800 relative">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="https://raw.githubusercontent.com/WaffyHQ/Waffy/e0983678d5098058d9ba4c30d7b12833989b178e/public/waffy.png"
                alt="Logo"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
              />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li onMouseEnter={hoverIt1} onMouseLeave={()=>setHovered(0)}>
                <Link href="/pricing"  className="text-gray-400 hover:text-white text-base">
                  Pricing
                  {hovered === 1 && (
                    <span className="block h-1 w-full bg-green-500 rounded mt-1"></span>
                  )}
                </Link>
              </li>
              <li onMouseEnter={hoverIt2} onMouseLeave={()=>setHovered(0)}>
                <Link href="/features" className="text-gray-400 hover:text-white text-base">
                  Features
                  {hovered===2 && (
                    <span className="block h-1 w-full bg-green-500 rounded mt-1"></span>
                  )}
                </Link>
              </li>
              <li onMouseEnter={hoverIt3} onMouseLeave={()=>setHovered(0)}>
                <Link href="/documentation" className="text-gray-400 hover:text-white text-base">
                  Documentation
                  <span className="block h-1 w-full"></span>
                  {hovered===3 && (
                    <span className="block h-1 w-full bg-green-500 rounded mt-1"></span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-gray-400 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#0d0d17] border-t border-gray-800 py-4 absolute w-full z-50">
            <nav className="container mx-auto px-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link 
                    href="/" 
                    className="text-gray-400 hover:text-white text-lg block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-400 hover:text-white text-lg block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/features" 
                    className="text-gray-400 hover:text-white text-lg block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section className="relative overflow-hidden py-20 sm:py-20 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left ">
                <p></p>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
                  <span className="text-white">AI innovations for future</span>
                  <br />
                  <span className="text-green-500">Waffy : AI tech</span>
                </h1>
                <p className="text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
                  Building future tech with waffy. Ensures better performance and scalability. AI powered better tech 
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Button onClick={scrollEmail} className="shadow-[5px_5px_rgba(120,_255,_120,_0.4),_10px_10px_rgba(120,_255,_120,_0.3),_15px_15px_rgba(120,_255,_120,_0.2),_20px_20px_rgba(120,_255,_120,_0.1),_25px_25px_rgba(120,_255,_120,_0.05)] bg-green-500 text-sm sm:text-base hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3">
                    Join Waitlist
                  </Button>
                </div>
              </div>

              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[80vh] w-full md:p-0 p-10 mt-7 sm:mt-28 md:mb-0 mb-32 md:mt-0">
                <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-72 lg:w-[300px] h-48 sm:h-64 md:h-72 lg:h-[400px] bg-gradient-to-br from-orange-500/30 to-purple-500/30 blur-3xl rounded-full"></div>
                <div className="absolute top-1/4 right-1/4 transform rotate-12">
                  <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                    <div className="shadow-[0_20px_50px_rgba(0,_200,_83,_0.7)] absolute inset-0 bg-gradient-to-r from-green-500/30 to-green-500/40 rounded-lg transform rotate-6"></div>
                    <Image 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 text-white"
                      alt="Waffy Logo"
                      src="https://raw.githubusercontent.com/WaffyHQ/Waffy/e0983678d5098058d9ba4c30d7b12833989b178e/public/waffy.png"
                      width={128}
                      height={128}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-auto border-t border-gray-800">
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
              onChange={(e)=>setEmail(e.target.value)}
            />
            <Button className="bg-green-800/40 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,200,83,0.15)] focus:bg-green-500/50">
              <ArrowRight size={36} />
            </Button>
          </div>
          <div className="container mx-auto px-4 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Image 
                src="https://raw.githubusercontent.com/WaffyHQ/Waffy/e0983678d5098058d9ba4c30d7b12833989b178e/public/waffy.png"
                alt="Logo"
                width={40}
                height={40}
                className="mb-2 sm:mb-0"
              />
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Terms of Service
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="text-center text-gray-500 mt-4 text-sm">
              &copy; {new Date().getFullYear()} Waffy. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}