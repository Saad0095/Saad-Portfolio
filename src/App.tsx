import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilityStrip from './components/CapabilityStrip';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#09090b] text-zinc-100 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-300 font-sans antialiased overflow-x-hidden relative">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <CapabilityStrip />
        <About />
        <Projects />
        <Skills />
        <Philosophy />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;


