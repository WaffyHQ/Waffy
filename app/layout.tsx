import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waffy",
  description: "Ai innvoations",
  icons: {
    icon: "https://raw.githubusercontent.com/WaffyHQ/Waffy/refs/heads/main/app/favicon.ico",
    shortcut: "https://raw.githubusercontent.com/WaffyHQ/Waffy/refs/heads/main/app/favicon.ico",
  },
};

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
