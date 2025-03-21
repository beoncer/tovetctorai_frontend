"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Array of beautiful red color combinations
const bubbleColors = [
  "rgba(255, 69, 0, 0.7)",    // Red-Orange
  "rgba(220, 20, 60, 0.7)",   // Crimson
  "rgba(178, 34, 34, 0.7)",   // Firebrick
  "rgba(255, 99, 71, 0.7)",   // Tomato
  "rgba(205, 92, 92, 0.7)",   // Indian Red
  "rgba(240, 128, 128, 0.7)", // Light Coral
  "rgba(250, 128, 114, 0.7)", // Salmon
  "rgba(233, 150, 122, 0.7)", // Dark Salmon
  "rgba(255, 160, 122, 0.7)", // Light Salmon
  "rgba(255, 140, 0, 0.7)",   // Dark Orange
]

function Bubble({ x, y, size, color }: { x: number; y: number; size: number; color: string }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.8, 0.4, 0.8],
        scale: [1, 1.2, 1],
        x: x + Math.random() * 100 - 50,
        y: y + Math.random() * 100 - 50,
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  )
}

function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 30 + 10, // Slightly larger bubbles
      color: bubbleColors[i % bubbleColors.length],
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        <title>Floating Bubbles</title>
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </svg>
    </div>
  )
}

export default function FloatingBubblesBackground({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <FloatingBubbles />
      {children && <div className="relative z-10 w-full h-full">{children}</div>}
    </div>
  )
} 