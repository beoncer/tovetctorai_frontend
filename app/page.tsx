import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
    </main>
  )
}
