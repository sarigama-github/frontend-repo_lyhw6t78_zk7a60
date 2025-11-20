export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">A bit about me</h2>
          <p className="mt-4 text-slate-300">
            I’m a web developer and D365 Finance & Operations specialist with 4+ years of hands‑on experience. I’ve partnered with 20+ clients and companies, delivering over 30 projects with a 93% success rate. My focus: clean UX, measurable business outcomes, and maintainable ERP customizations.
          </p>
          <p className="mt-3 text-slate-400">
            I love bridging marketing websites and enterprise systems—whether it’s a high‑performing WordPress site or an X++ extension that streamlines complex processes.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-8">
          <ul className="grid gap-3 text-sm text-slate-300">
            <li>• Based: Available for remote, global engagements</li>
            <li>• Engagements: Fixed‑scope, retainer, or time & materials</li>
            <li>• Industries: Retail, Manufacturing, SaaS, Professional Services</li>
            <li>• Certifications: Microsoft ecosystem exposure, best‑practice dev</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
