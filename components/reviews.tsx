"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Chen",
    role: "Graphic Designer",
    quote:
      "This AI vectorization tool is incredible! It perfectly converts my sketches into clean vector graphics, saving me hours of manual work.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Brand Manager at CreativeHub",
    quote:
      "The vector conversion quality is outstanding. We use it for all our logo conversions and brand assets - it never disappoints.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "UI/UX Designer",
    quote:
      "Finally found a reliable tool for converting complex images to vectors. The accuracy and attention to detail is remarkable.",
    rating: 5
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? "fill-red-600 text-red-600" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-16 w-32 h-32 bg-red-50 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-16 w-24 h-24 bg-red-50 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">What Our Users Say</h2>
          <p className="text-xl text-black/70">
            Trusted by designers and creative professionals worldwide
          </p>
        </motion.div>
        
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white border border-red-100 shadow-lg rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="px-6 py-8">
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-black/80 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="text-lg font-medium text-black">{testimonial.name}</div>
                  <div className="text-sm text-black/70">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 