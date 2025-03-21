"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SharedBackground from "@/components/shared-background"
import BackgroundPaths from "@/components/background-paths"
import { Mail, MessageSquare, User } from "lucide-react"

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-white">
      <SharedBackground />
      <BackgroundPaths />
      <div className="relative z-10">
        <Navbar />
        
        {/* Contact Form Section */}
        <div className="pt-4 pb-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-black/70">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm border border-red-100 rounded-2xl p-8 shadow-lg"
            >
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-red-600" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        className="block w-full pl-10 pr-3 py-3 border border-red-100 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent
                                 bg-white/50 backdrop-blur-sm"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-red-600" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        className="block w-full pl-10 pr-3 py-3 border border-red-100 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent
                                 bg-white/50 backdrop-blur-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-red-600" />
                      </div>
                      <textarea
                        id="message"
                        rows={6}
                        className="block w-full pl-10 pr-3 py-3 border border-red-100 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent
                                 bg-white/50 backdrop-blur-sm resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-medium text-lg px-8 py-6">
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
} 