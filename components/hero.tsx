"use client"

import { motion } from "framer-motion"
import { Upload } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              <span className="block">Transform Your</span>
              <span className="block">Images into</span>
              <span className="block text-red-600">Vector Art</span>
            </h1>
            <p className="text-xl text-black/70 max-w-xl mb-8">
              Upload any image and our AI will convert it into high-quality vector graphics,
              perfect for logos, illustrations, and designs.
            </p>
          </motion.div>

          {/* Right side - Uploader */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:justify-self-end w-full max-w-xl"
          >
            <div className="border-2 border-dashed border-red-200 rounded-2xl p-12 text-center h-[280px] flex flex-col items-center justify-center">
              <div className="mx-auto w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Drag and drop your image here
              </h3>
              <p className="text-black/70 mb-2">or click to browse</p>
              <p className="text-black/50 text-sm">PNG, JPG, JPEG up to 10MB</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 