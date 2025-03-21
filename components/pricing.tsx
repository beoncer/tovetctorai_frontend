"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Basic",
    price: "$12.99",
    credits: "10 credits",
    previews: "2 free previews",
    features: [
      "Preview functionality",
      "Vectorization service",
      "24 hour results storage",
      "Support"
    ],
  },
  {
    name: "Standard",
    price: "$25.99",
    credits: "25 credits",
    previews: "5 free previews",
    features: [
      "Preview functionality",
      "Vectorization service",
      "24 hour results storage",
      "Support"
    ],
  },
  {
    name: "Professional",
    price: "$39.99",
    credits: "50 credits",
    previews: "10 free previews",
    features: [
      "Preview functionality",
      "Vectorization service",
      "24 hour results storage",
      "Support"
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-black/70">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="bg-white/80 backdrop-blur-sm border border-red-100 rounded-xl shadow-lg divide-y divide-red-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-black mb-4">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                </div>
                <p className="mt-2 text-black/70">{plan.credits}</p>
                <p className="mt-1 text-red-600 font-medium">{plan.previews}</p>
                <Button className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white">
                  Get Started
                </Button>
              </div>
              <div className="p-8">
                <h4 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">What's included</h4>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-red-600" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-black/70">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 