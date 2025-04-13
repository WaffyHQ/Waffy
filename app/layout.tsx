import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"


export const metadata = {
  title: "n8n - Flexible AI workflow automation for technical teams",
  description:
    "Build with the precision of code or the speed of drag-n-drop. Host with on-prem control or in-the-cloud convenience.",
}

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
