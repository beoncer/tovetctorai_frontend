import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import HowItWorks from "@/components/how-it-works"
import Reviews from "@/components/reviews"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Reviews />
      <Pricing />
      <Footer />
    </main>
  )
}
