"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {useRef, useState } from "react"
import {Input} from "@/components/ui/input"
import {ArrowRight, Menu, X, Twitter, Instagram, Linkedin, Github, Youtube} from "lucide-react"

export default function Home() {
  const [hovered, setHovered] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollEmail = () => {
    emailRef.current?.scrollIntoView({ behavior: 'smooth' })
    emailRef.current?.focus();
  }
  const scrollFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' })
    footerRef.current?.focus();
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
  // const hoverIt3 = () => {
  //   setHovered(3);
  // }
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col">
      
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
                  Support
                  {hovered === 1 && (
                    <span className="block h-1 w-full bg-green-500 rounded mt-1"></span>
                  )}
                </Link>
              </li>
              <li onMouseEnter={hoverIt2} onMouseLeave={()=>setHovered(0)}>
                <Link  className="text-gray-400 hover:text-white text-base" href="#"
                  onClick={(e) => {scrollFooter(); e.preventDefault();}}
                >
                  About us
                  {hovered===2 && (
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
  
        <div 
          className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0d0d17] border-t border-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <nav className="container mx-auto px-4 py-6 mb-12">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/support" 
                  className="text-gray-400 hover:text-white text-lg block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Support
                </Link>
              </li>
              <li>
                <Link 
                href="#"
                  className="text-gray-400 hover:text-white text-lg block"
                  onClick={(e) => {e.preventDefault();scrollFooter();setIsMenuOpen(false)}}
                >
                  About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
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
                <div className="absolute top-1/4 right-1/4 transform rotate-12">
                  <div className="relative flex justify-center items-center w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                    <div className="shadow-[0_20px_50px_rgba(0,_200,_83,_0.7)] absolute inset-0 bg-gradient-to-r from-green-500/30 to-green-500/40 rounded-lg transform rotate-6"></div>
                    <Image 
                      className="absolute rotate-347 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 text-white"
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

        <footer ref={footerRef} className="mt-auto border-t border-gray-800">
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
          <div className="container md:gap-0 gap-4 flex flex-col md:flex-row justify-evenly mx-auto px-4 py-6 sm:py-8">
           <div className="w-full md:w-[30%]">
              <h3 className="text-lg font-bold">About Us</h3>
              <p className="text-gray-400 mt-2">
                Waffy is a cutting-edge AI technology company dedicated to revolutionizing the way we interact with technology. Our mission is to create innovative solutions that enhance productivity, streamline processes, and empower individuals and businesses to achieve their goals.
              </p>

           </div>
           <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 flex gap-4 flex-col">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white">Support</Link>
              </li>
              <li>
                <Link href="" onClick={(e) => {scrollFooter(); e.preventDefault()}} className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              </ul>
           </div>
          <div>
            <h3 className="text-lg font-bold">Contact With Us</h3>
            <div className="flex flex-row gap-4 items-center mt-2">
            <div className="bg-gray-500/40 rounded-full p-2 w-fit">
            <Link href="https://x.com/WaffyHQ" className="bg-gray-400 rounded-full">
            <Twitter />
            </Link> 
            </div>
            <div className="bg-gray-500/40 rounded-full p-2 w-fit">
            <Link href="https://www.instagram.com/waffyhq" className="bg-gray-400 rounded-full">
            <Instagram />
            </Link> 
            </div>
            <div className="bg-gray-500/40 rounded-full p-2 w-fit">
            <Link href="https://linkedin.com/company/WaffyHQ" className="bg-gray-400 rounded-full">
            <Linkedin />
            </Link> 
            </div>
            <div className="bg-gray-500/40 rounded-full p-2 w-fit">
            <Link href="https://www.youtube.com/@WaffyHQ" className="bg-gray-400 rounded-full">
            <Youtube />
            </Link> 
            </div>
            <div className="bg-gray-500/40 rounded-full p-2 w-fit">
            <Link href="https://github.com/WaffyHQ" className="bg-gray-400 rounded-full">
            <Github />
            </Link> 
            </div>
            </div>
          </div>
          </div>
        </footer>
      </main>
    </div>
  )
}