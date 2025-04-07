import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amulya Artistry",
  description: "Amulya Artistry - Art and Design Studio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}



import './globals.css'