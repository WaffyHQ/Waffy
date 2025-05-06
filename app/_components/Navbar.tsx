"use client"
import React ,{ useState } from 'react'
import { X, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
function Navbar() {
    const [hovered, setHovered] = useState<number>(0);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      }
      const hoverIt1 = () => {
        setHovered(1);
      }
      const hoverIt2 = () => {
        setHovered(2);
      }
  return (
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

      <nav className="hidden md:block ">
        <div className="flex flex-row justify-center items-center gap-10">
        <ul className="flex space-x-6 mt-4 items-center">
          <li onMouseEnter={hoverIt1} onMouseLeave={() => setHovered(0)} className="cursor-pointer">
            <Link href="/pricing" className="text-white font-semibold hover:text-white text-base">
              Pricing
              {hovered === 1 && (
                <span className="cursor-pointer block h-1 w-full bg-green-500 rounded mt-1"></span>
              )}
            </Link>
          </li>
          <li onMouseEnter={hoverIt2} onMouseLeave={() => setHovered(0)} className="cursor-pointer">
            <Link className="text-white font-semibold hover:text-white text-base" href="#"
            >
              About us
              {hovered === 2 && (
                <span className="cursor-pointer block h-1 w-full bg-green-500 rounded mt-1"></span>
              )}
            </Link>
          </li>
          

        </ul>
        <div className=" flex flex-row md:gap-0 justify-center gap-10 md:flex-row items-center">
              <div className="flex flex-row justify-center items-center md:flex-row gap-4 mt-4">
                <Button className=" drop-shadow-green-500/50 drop-shadow-lg bg-green-500 text-sm sm:text-base hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3">Signup</Button>
                <Button className="text-white px-4 sm:px-6 py-2 sm:py-3 text-sm  border border-green-500">Login</Button>
              </div>
              </div>
              </div>
      </nav>

      <button
        onClick={toggleMenu}
        className="md:hidden text-white font-semibold hover:text-white p-2 focus:outline-none"
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
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-filter backdrop-blur-md  border-t border-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
    >
      <nav className="container mx-auto px-4 py-6 mb-12 flex flex-col justify-center items-center">
        <ul className="flex flex-col space-y-4 items-center">
          <li>
            <Link
              href="/pricing"
              className="text-white font-semibold mt-9 hover:text-white text-lg block"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white font-semibold hover:text-white text-lg block"
            >
              About us
            </Link>
          </li>
        </ul>
        <div className="mx-auto flex flex-row md:gap-0 justify-center gap-10 md:flex-col items-center">
              <div className="flex flex-row justify-center items-center md:flex-col gap-4 mt-4">
                <Button className=" drop-shadow-green-500/50 drop-shadow-lg bg-green-500 text-sm sm:text-base hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3">Signup</Button>
                <Button className="text-white px-4 sm:px-6 py-2 sm:py-3 text-sm  border border-green-500">Login</Button>
              </div>
              </div>
      </nav>
        
    </div>
  </header>
  )
}

export default Navbar