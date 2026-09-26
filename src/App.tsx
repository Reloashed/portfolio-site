import Header from "@/components/header.tsx"
import { Route, Routes } from "react-router-dom"
import Home from "@/pages/home.tsx"
import Projects from "@/pages/projects.tsx"
import Services from "@/pages/services.tsx"
import About from "@/pages/about.tsx"
import Contact from "@/pages/contact.tsx"
import Footer from "@/components/footer.tsx"
import PrivacyNotice from "@/pages/privacy-notice.tsx"
import LegalNotice from "@/pages/legal-notice.tsx"

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyNotice />} />
          <Route path="/legal" element={<LegalNotice />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
