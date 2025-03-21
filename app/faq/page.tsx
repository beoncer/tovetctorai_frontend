"use client"

import { motion } from "framer-motion"
import BackgroundPaths from "@/components/background-paths"
import SharedBackground from "@/components/shared-background"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const faqs = [
  {
    question: "How do I know if my images will work with your service?",
    answer: "Our AI is designed to handle a wide variety of images. We provide instant, interactive previews so you can see exactly how your image will be vectorized before proceeding. This ensures you can make an informed decision about whether our service meets your specific needs."
  },
  {
    question: "Is the service compatible with my design software?",
    answer: "Yes! Our vectorized outputs follow industry standard file format specifications and are compatible with all major design software. We offer multiple export options and customization settings to ensure maximum compatibility with your preferred tools. You can even test the output formats with our sample images before starting."
  },
  {
    question: "What happens if I need more processing capacity?",
    answer: "Our system is designed to scale with your needs. If you find yourself requiring additional processing power or higher volume capabilities, you can easily upgrade your plan at any time. We offer flexible scaling options to accommodate growing demands."
  },
  {
    question: "Can I test the service before committing?",
    answer: "Absolutely! You can upload and preview as many images as you'd like without any commitment. This allows you to thoroughly test our vectorization quality and see exactly what you'll get before making any purchase."
  },
  {
    question: "How does the credit system work?",
    answer: "Each successful vectorization uses one credit. Unused credits from API plans can roll over (up to 5× your monthly limit), giving you flexibility for varying usage patterns. This ensures you only pay for what you need while maintaining a buffer for busy periods."
  },
  {
    question: "What happens if I run out of credits?",
    answer: "If you exhaust your credits, new vectorization requests will be paused until your next billing cycle or until you upgrade your plan. We provide clear notifications before this happens, and you can set up automatic renewals to prevent any interruption in service."
  },
  {
    question: "Do you offer customization options for the output?",
    answer: "Yes! We provide extensive customization options for your vectorized outputs, including file format selection, curve type preferences, and various optimization settings. This ensures you get exactly the type of vector file that works best for your specific use case."
  },
  {
    question: "How do I manage my subscription?",
    answer: "Managing your subscription is simple and straightforward. You can upgrade, downgrade, or cancel your plan at any time through your account dashboard. All changes take effect immediately, and there's no need for lengthy processes or phone calls."
  }
]

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white relative">
      <SharedBackground />
      <BackgroundPaths />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-black/70">
                Everything you need to know about our vectorization service
              </p>
            </motion.div>

            <div className="grid gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-red-100 rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-black mb-3">{faq.question}</h3>
                  <p className="text-black/70 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
} 