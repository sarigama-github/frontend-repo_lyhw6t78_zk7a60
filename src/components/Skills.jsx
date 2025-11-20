import { Code, Layers, ShieldCheck, Server, Wrench } from 'lucide-react';

const skills = [
  { icon: Code, label: 'WordPress, React, Tailwind' },
  { icon: Server, label: 'Headless WP, REST APIs' },
  { icon: Layers, label: 'D365 FinOps, X++' },
  { icon: ShieldCheck, label: 'Integrations & Security' },
  { icon: Wrench, label: 'CI/CD & Performance' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Capabilities</h2>
        <p className="mt-2 text-slate-300">What I bring to every engagement.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center">
                <Icon className="w-5 h-5 text-blue-300" />
              </div>
              <div className="text-slate-200">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
