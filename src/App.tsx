import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

// Ideas From:
// https://github.com/Okashanadeem/Html-Tailwind-Portfolio/
// https://hasanraza-portfolio.vercel.app/
// https://www.behance.net/gallery/178013497/Personal-Portfolio-Web-Design-UI-UX-Design

function App() {

  return (
    <div className='bg-[#0C0C0C] text-white'>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
