"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "motion/react"
import { GridPattern } from "@/components/magicui/grid-pattern"

export default function Hero({ isMobile, scrollEmail }: { isMobile: boolean, scrollEmail: () => void }) {
  return (
    <section className="relative overflow-hidden mb-10 py-10 sm:py-14 md:py-6 md:h-screen">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mt-20">
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
              <Button onClick={scrollEmail} className="cursor-pointer shadow-[5px_5px_rgba(120,_255,_120,_0.4),_10px_10px_rgba(120,_255,_120,_0.3),_15px_15px_rgba(120,_255,_120,_0.2),_20px_20px_rgba(120,_255,_120,_0.1),_25px_25px_rgba(120,_255,_120,_0.05)] bg-green-500 text-sm sm:text-base hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3">
                Join Waitlist
              </Button>
            </div>
          </div>

          <div className="relative z-0 h-[250px] sm:h-[300px] md:h-[450px] w-full mt-5 sm:mt-10 md:mt-0">
            {
              isMobile ? (
                <div className="absolute inset-0 z-0">
                  <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    className="w-full h-full [mask-image:radial-gradient(200px_circle_at_center,white,transparent)] z-0"
                  />
                </div>
              ) : (
                <div className="absolute inset-0 z-0">
                  <GridPattern
                    width={40}
                    height={40}
                    x={-1}
                    y={-1}
                    className="w-full h-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)] z-0"
                  />
                </div>
              )
            }

            <div className="absolute inset-0 z-10 flex justify-center items-center md:top-1/4 md:right-1/4 md:justify-end md:items-start">
              <motion.div
                className="relative z-20 flex justify-center items-center w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60"
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 10, 5, -10, 0],
                  scale: [1, 1.15, 1.05, 1.10, 1],
                }}
                // whileHover={{
                //   y: 0,
                //   rotate: 0,
                //   scale: 1,
                // }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute backdrop-filter backdrop-blur-sm inset-0 bg-gradient-to-r from-green-600/95 to-green-500/0 rounded-lg transform shadow-[0_20px_50px_rgba(0,_200,_83,_0.7)]"></div>
                <Image
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-28 lg:w-28 text-white"
                  alt="Waffy Logo"
                  src="https://raw.githubusercontent.com/WaffyHQ/Waffy/e0983678d5098058d9ba4c30d7b12833989b178e/public/waffy.png"
                  width={128}
                  height={128}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}