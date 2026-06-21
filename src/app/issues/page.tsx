import Navbar from "@/components/Navbar"
import Issues from "@/components/Issues"
import Footer from "@/components/Footer"

export default function IssuesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Issues />
      </main>
      <Footer />
    </>
  )
}
