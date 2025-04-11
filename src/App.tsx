import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
    <div className='bg-[#0C0C0C] text-white'>
      <Navbar />
      <Hero />
      {/* <svg className="w-full h-12" viewBox="0 0 1440 320">
        <path fill="#f3f4f6" fillOpacity="1" d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,133.3C672,128,768,160,864,186.7C960,213,1056,235,1152,208C1248,181,1344,107,1392,69.3L1440,32V320H0Z" />
      </svg> */}
      <About />
      <Skills />
      {/* <Services/> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
