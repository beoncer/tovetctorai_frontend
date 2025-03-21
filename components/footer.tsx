"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-red-100">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#pricing" className="text-base text-black/70 hover:text-red-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black/70 hover:text-red-600 transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black/70 hover:text-red-600 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black/70 hover:text-red-600 transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-black/70 hover:text-red-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black/70 hover:text-red-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black/70 hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-black/70 hover:text-red-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black/70 hover:text-red-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black/70 hover:text-red-600 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-red-100 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="#" className="text-black/50 hover:text-red-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-black/50 hover:text-red-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-black/50 hover:text-red-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-8 text-base text-black/70 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Tovector.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 