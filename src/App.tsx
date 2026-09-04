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
    <div>
      <Header />
      <div className="m-3 flex-1 flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyNotice />} />
          <Route path="/legal" element={<LegalNotice />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
