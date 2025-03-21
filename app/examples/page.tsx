"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SharedBackground from "@/components/shared-background"
import BackgroundPaths from "@/components/background-paths"
import { Button } from "@/components/ui/button"

const examples = [
  {
    id: 1,
    title: "Logo Vectorization",
    description: "Transform pixelated logos into crisp, scalable vector graphics",
    beforeImage: "/examples/logo-before.png",
    afterImage: "/examples/logo-after.svg",
    category: "Logos"
  },
  {
    id: 2,
    title: "Icon Conversion",
    description: "Convert raster icons into clean vector paths",
    beforeImage: "/examples/icon-before.png",
    afterImage: "/examples/icon-after.svg",
    category: "Icons"
  },
  {
    id: 3,
    title: "Illustration Vectorization",
    description: "Turn hand-drawn illustrations into vector art",
    beforeImage: "/examples/illustration-before.png",
    afterImage: "/examples/illustration-after.svg",
    category: "Illustrations"
  }
]

export default function Examples() {
  return (
    <main className="relative min-h-screen bg-white">
      <SharedBackground />
      <BackgroundPaths />
      <div className="relative z-10">
        <Navbar />
        
        <div className="pt-4 pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
                See the Magic in Action
              </h1>
              <p className="text-xl text-black/70 max-w-3xl mx-auto mb-8">
                Real examples of pixel images transformed into scalable vector graphics. 
                Perfect for logos, icons, illustrations, and more.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-medium text-lg px-8 py-6">
                Register Now to Get Your Free Preview
              </Button>
            </div>

            <div className="grid gap-12 mb-24">
              {examples.map((example) => (
                <motion.div
                  key={example.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm border border-red-100 rounded-2xl p-8 shadow-lg"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left side - Before */}
                    <div className="space-y-4">
                      <div className="aspect-square relative rounded-xl overflow-hidden border-2 border-dashed border-red-100">
                        <Image
                          src={example.beforeImage}
                          alt={`${example.title} Before`}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-medium text-black/50">Before</span>
                      </div>
                    </div>

                    {/* Right side - After */}
                    <div className="space-y-4">
                      <div className="aspect-square relative rounded-xl overflow-hidden border-2 border-red-200">
                        <Image
                          src={example.afterImage}
                          alt={`${example.title} After`}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-medium text-black/50">After</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-black mb-2">{example.title}</h3>
                    <p className="text-black/70">{example.description}</p>
                    <span className="inline-block mt-2 text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {example.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Ready to Transform Your Images?
              </h2>
              <p className="text-xl text-black/70 max-w-2xl mx-auto mb-8">
                Start converting your images into beautiful vector graphics today. Get one free preview to experience the magic.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-medium text-lg px-8 py-6">
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
} 