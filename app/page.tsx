import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import HowItWorks from "@/components/how-it-works"
import Reviews from "@/components/reviews"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"
import BackgroundPaths from "@/components/background-paths"
import SharedBackground from "@/components/shared-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <SharedBackground />
      <BackgroundPaths />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Reviews />
        <Pricing />
        <Footer />
      </div>
    </main>
  )
}
