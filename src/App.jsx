import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Glow background */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-blue-500/20 blur-[130px]" />
      </div>

      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <About />
      <Contact />

      <footer className="border-t border-white/5 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Your Name — Available for international contracts</p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
