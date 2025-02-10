import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AnimatedBackground from "./components/AnimatedBackground"
import type { Metadata } from "next"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Srushti Raste - Robotics Engineer",
  description: "Portfolio of Srushti Raste, a robotics engineer showcasing projects and skills.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <AnimatedBackground />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

