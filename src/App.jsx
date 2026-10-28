import { useState } from "react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about'
import Skills from './components/Skills'
import Projects from './components/Projects'
import TechTicker from './components/TechTicker'
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WelcomeScreen from "./components/WelcomeScreen"
import CustomCursor from "./components/CustomCursor"

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <>
      <CustomCursor />
      {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TechTicker />
      <Contact />
      <Footer />
    </>
  )
}

export default App
