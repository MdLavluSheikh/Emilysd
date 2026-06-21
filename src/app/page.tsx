import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import RecentPosts from "@/components/RecentPosts"
import Testimonials from "@/components/Testimonials"
import Subscribe from "@/components/Subscribe"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RecentPosts />
        <Testimonials />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
