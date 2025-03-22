'use client'

import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PaymentError() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full space-y-8 text-center"
        >
          <div className="flex justify-center">
            <div className="rounded-full bg-red-100 p-3">
              <XCircle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-700">
            Payment Failed
          </h2>
          <p className="mt-2 text-gray-600">
            We were unable to process your payment. Please try again or contact our support team if the problem persists.
          </p>
          <div className="mt-8 space-y-4">
            <Button asChild className="w-full bg-red-600 hover:bg-red-700">
              <Link href="/pricing">
                Try Again
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full border-red-100 text-gray-600 hover:bg-red-50">
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  )
} 