import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import ScrollToTop from "@/components/scroll-to-top"
import Footer from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Amulya Artistry",
    template: `%s | Amulya Artistry`,
  },
  description: "Amulya Artistry - Art and Design Studio",
  keywords: ["art", "design", "studio", "Amulya Artistry", "paintings", "crafts"],
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
        <main>{children}
          <SpeedInsights />
        </main>
        <Footer/>
      </body>
    </html>
  )
}



import './globals.css'