"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function SharedBackground() {
  const [bubbles, setBubbles] = useState<{ id: number; x: number; size: number; delay: number }[]>([])

  useEffect(() => {
    // Create 25 bubbles with random positions and sizes
    const newBubbles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random x position (0-100%)
      size: Math.random() * (100 - 20) + 20, // Random size (20-100px)
      delay: Math.random() * 5, // Random delay for animation start (0-5s)
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bg-red-50/90 rounded-full"
          style={{
            left: `${bubble.x}%`,
            width: bubble.size,
            height: bubble.size,
          }}
          initial={{ y: "100vh" }}
          animate={{
            y: [null, "-100vh"],
          }}
          transition={{
            duration: 15 + Math.random() * 10, // Random duration between 15-25s
            repeat: Infinity,
            ease: "linear",
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  )
} 