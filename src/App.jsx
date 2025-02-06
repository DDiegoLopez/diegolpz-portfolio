
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <SpeedInsights />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App