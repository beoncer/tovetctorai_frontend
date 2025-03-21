"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Pricing from "@/components/pricing"
import Reviews from "@/components/reviews"
import SharedBackground from "@/components/shared-background"
import BackgroundPaths from "@/components/background-paths"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <SharedBackground />
      <BackgroundPaths />
      <div className="relative z-10">
        <Navbar />
        
        {/* Pricing Section */}
        <div className="pt-4">
          <Pricing />
        </div>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Start Converting Your Images
                <span className="block text-red-600">With One Free Preview</span>
              </h2>
              <p className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto mb-8">
                Register now to receive your complimentary vector preview. Experience our AI-powered conversion before committing.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-medium text-lg px-8 py-6">
                Register Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Reviews Section */}
        <div className="py-16">
          <Reviews />
        </div>

        <Footer />
      </div>
    </main>
  )
} 