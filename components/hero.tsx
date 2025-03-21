"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Upload } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
              Transform Your Images into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                {" "}
                Vector Art
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black/70 text-xl mb-8 max-w-2xl mx-auto"
          >
            Upload any image and our AI will convert it into high-quality vector graphics, perfect for logos, illustrations, and designs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-3xl mx-auto"
          >
            <div className="border-2 border-dashed border-red-200 rounded-lg p-8 bg-white/50 backdrop-blur-sm hover:border-red-300 transition-colors">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Upload className="w-12 h-12 text-red-500" />
                <div className="text-center">
                  <p className="text-lg font-medium text-black">Drag and drop your image here</p>
                  <p className="text-sm text-black/70 mt-1">or click to browse</p>
                </div>
                <p className="text-sm text-black/50">PNG, JPG, JPEG up to 10MB</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 