import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'

function App() {

  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Footer />
    </div>
  )
}

export default App
