'use client'

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PaymentSuccess() {
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
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-700">
            Payment Successful!
          </h2>
          <p className="mt-2 text-gray-600">
            Thank you for your payment. Your transaction has been completed successfully.
            You can now start using our premium features.
          </p>
          <div className="mt-8 space-y-4">
            <Button asChild className="w-full bg-red-600 hover:bg-red-700">
              <Link href="/dashboard">
                Go to Dashboard
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full border-red-100 text-gray-600 hover:bg-red-50">
              <Link href="/">
                Return to Home
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  )
} 