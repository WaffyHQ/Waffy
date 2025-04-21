"use client"
import VideoPlayer from "@/components/custom/Video"

export default function VideoSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 mb-20">
      <div className="w-fit max-w-4xl mx-auto shadow-[0_20px_50px_rgba(0,_200,_83,_0.7)] h-fit rounded-xl overflow-hidden">
        <VideoPlayer />
      </div>
    </section>
  )
}