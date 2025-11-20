import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-900 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-300/80 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1">Open to international contracts • 4+ years</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Web Developer & D365 FinOps X++ Specialist
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            Delivered 30+ projects with a 93% success rate for 20+ clients worldwide. I build conversion-focused websites and robust ERP customizations that scale.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition">Book a Discovery Call</a>
            <a href="#work" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition">View Selected Work</a>
          </div>
        </motion.div>
        <motion.ul className="grid grid-cols-2 gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
          {[
            { k: 'Projects', v: '30+' },
            { k: 'Success Rate', v: '93%' },
            { k: 'Clients & Companies', v: '20+' },
            { k: 'Experience', v: '4+ yrs' },
          ].map((item) => (
            <li key={item.k} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
              <div className="text-3xl font-semibold text-white">{item.v}</div>
              <div className="text-slate-400 text-sm mt-1">{item.k}</div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
