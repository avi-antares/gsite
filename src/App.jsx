import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyUs from "./components/sections/WhyUs";
import Process from "./components/sections/Process";
import CaseHighlights from "./components/sections/CaseHighlights";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <CaseHighlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
