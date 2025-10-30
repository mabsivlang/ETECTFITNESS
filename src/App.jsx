import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Feactures";
import Classes from "./components/Classes";
import Footer from "./components/Footer"
import Pricing from "./components/Pricing";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact"
import CookieConsent from "./components/CookieConsent";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero/>
        <Features/>
        <About/>
        <Classes/>
        <Pricing/>
        <Trainers/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </main>
      <CookieConsent/>
    </div>
  );
}

export default App; 
// npm install cors json-server@1.17.4
