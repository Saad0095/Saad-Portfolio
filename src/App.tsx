import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Services from './components/Services'

// Inspirations:
// https://github.com/Okashanadeem/Html-Tailwind-Portfolio/
// https://hasanraza-portfolio.vercel.app/
// https://www.behance.net/gallery/178013497/Personal-Portfolio-Web-Design-UI-UX-Design
// https://youtu.be/dImgZ_AH7uA?si=lvp0YxyohcYmbjrK
function App() {

  return (
    <div className='bg-[#0C0C0C] text-white'>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Services/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
