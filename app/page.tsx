import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d17] flex flex-col">
      <header className="border-b border-gray-800">
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
              <span className="text-white text-lg sm:text-xl font-bold">Waffy</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative overflow-hidden py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  <span className="text-white">AI innovations for future</span>
                  <br />
                  <span className="text-orange-500">Waffy : AI tech</span>
                </h1>
                <p className="text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
                  Building future tech with waffy. Ensures better performance and scalability. AI powered better tech 
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Button className="bg-orange-500 text-sm sm:text-base hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3">
                    Get started
                  </Button>
                </div>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[80vh] w-full mt-6 md:mt-0">
                <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-72 lg:w-[300px] h-48 sm:h-64 md:h-72 lg:h-[400px] bg-gradient-to-br from-orange-500/30 to-purple-500/30 blur-3xl rounded-full"></div>
                <div className="absolute top-1/4 right-1/4 transform rotate-12">
                  <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/40 rounded-lg shadow-lg transform rotate-6"></div>
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