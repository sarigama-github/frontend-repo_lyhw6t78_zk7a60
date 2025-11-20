import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Global Retail Implementation',
    tag: 'D365 FinOps',
    desc: 'Customized X++ workflows for inventory, procurement, and financial reporting across 5 regions.',
  },
  {
    title: 'High-Conversion SaaS Site',
    tag: 'Web Development',
    desc: 'WordPress and custom React components with a lightning-fast landing funnel that lifted signups 38%.',
  },
  {
    title: 'Finance Automation Suite',
    tag: 'D365 FinOps',
    desc: 'Automated invoice matching and settlement with secure integrations to third‑party services.',
  },
  {
    title: 'B2B Marketplace Revamp',
    tag: 'Web Development',
    desc: 'Headless WordPress + API-driven UI, improved Core Web Vitals and SEO, +52% organic traffic.',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="mt-2 text-slate-300">Results from web projects and enterprise D365 customizations.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition">Let’s Work Together</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article key={p.title} whileHover={{ y: -4 }} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-6">
              <div className="text-xs inline-flex items-center gap-2 px-2 py-1 rounded-full border border-white/10 text-slate-300/90">{p.tag}</div>
              <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-blue-300 transition">{p.title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
