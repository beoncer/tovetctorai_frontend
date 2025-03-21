"use client"

import { motion } from "framer-motion"
import { Upload, Wand2, Download } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "UPLOAD",
      description: "Simply drag and drop your bitmap images onto our platform. We support all common formats including JPG and PNG files for seamless processing.",
      details: "Our advanced system handles high-resolution images with precision, ensuring every detail is preserved."
    },
    {
      icon: Wand2,
      title: "TRANSFORM",
      description: "Watch in real-time as our AI technology analyzes your image, intelligently converting pixels into clean, precise vector shapes.",
      details: "Experience the power of AI as it transforms your artwork into infinitely scalable vector graphics."
    },
    {
      icon: Download,
      title: "DOWNLOAD",
      description: "Preview your vectorized masterpiece and download it instantly in your preferred format, ready for professional use in any project.",
      details: "Export your design in multiple formats including SVG, PDF, EPS, DXF, and PNG for any application."
    }
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-600"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center space-y-4 h-full p-6 bg-white/80 backdrop-blur-sm rounded-xl">
                <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold tracking-wide text-black">{step.title}</h3>
                <p className="text-black leading-relaxed min-h-[80px] flex items-center">{step.description}</p>
                <p className="text-black/70 min-h-[48px] flex items-center">{step.details}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-0.5 bg-red-200"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 