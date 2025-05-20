import type React from "react";
import "./globals.css";
import { ThemeProvider } from "next-themes";  
import type { Metadata } from "next";
import Navbar from "./_components/Navbar";
import { ReactQueryProvider } from "./_providers/ReactQueryProvider"; // <-- import it

export const metadata: Metadata = {
  title: "Waffy",
  description: "AI innovations",
  icons: {
    icon: "https://raw.githubusercontent.com/WaffyHQ/Waffy/refs/heads/main/app/favicon.ico",
    shortcut: "https://raw.githubusercontent.com/WaffyHQ/Waffy/refs/heads/main/app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-screen overflow-hidden overflow-y-scroll">
        <div className="min-h-screen bg-[#000000] flex flex-col">
          <Navbar />
          <main className="flex-grow px-5">
             <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <ReactQueryProvider>
              {children}
            </ReactQueryProvider>
            </ThemeProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
