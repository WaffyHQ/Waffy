import { Github, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-800">
      <div className="container md:gap-0 gap-4 flex flex-col md:flex-row justify-evenly mx-auto px-4 py-6 sm:py-8">
        {/* <div className=" flex flex-row md:gap-0 justify-center gap-10 md:flex-col items-center">
        <Image
          src="https://raw.githubusercontent.com/WaffyHQ/Waffy/e0983678d5098058d9ba4c30d7b12833989b178e/public/waffy.png"
          alt="Logo"
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
        />
        <div className="flex flex-row justify-center items-center md:flex-col gap-4 mt-4">
          <Button className=" drop-shadow-green-500/50 drop-shadow-lg bg-green-500 text-sm sm:text-base hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3">Signup</Button>
          <Button className="text-white px-4 sm:px-6 py-2 sm:py-3 text-sm  border border-green-500">Login</Button>
        </div> */}
        {/* </div> */}
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
              <Link href="" className="text-gray-400 hover:text-white">About Us</Link>
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
      <div>
        <p className="text-center text-gray-400 p-2">
          &copy; {new Date().getFullYear()} Waffy Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}