import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-screen overflow-hidden overflow-y-scroll">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
