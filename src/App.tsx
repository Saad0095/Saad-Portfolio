import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {

  return (
    <div className='bg-[#0C0C0C] text-white overflow-x-hidden font-primary'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Services/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
