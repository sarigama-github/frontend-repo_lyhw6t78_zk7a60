import { Menu, Globe2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20 grid place-items-center">
            <Globe2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">Your Name</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#work" className="text-slate-300 hover:text-white transition">Work</a>
          <a href="#skills" className="text-slate-300 hover:text-white transition">Skills</a>
          <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
          <a href="#contact" className="text-white bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-lg">Hire Me</a>
        </nav>
        <button className="md:hidden text-slate-200" aria-label="Open menu">
          <Menu />
        </button>
      </div>
    </header>
  );
}
