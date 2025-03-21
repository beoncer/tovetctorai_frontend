"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 py-4 backdrop-blur-sm"
    >
      <Link href="/" className="flex items-center">
        <span className="text-red-600 font-bold text-2xl font-space-grotesk pl-0.5">Tovector.ai</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/examples">Examples</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
        <NavLink href="/faq">FAQ</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="text-black hover:text-red-600 hover:bg-transparent">
          Sign In
        </Button>
        <Button className="bg-red-600 hover:bg-red-700 text-white font-medium">Get Started</Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-black">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-600 hover:text-black transition-colors relative group font-medium">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full" />
    </Link>
  )
} 