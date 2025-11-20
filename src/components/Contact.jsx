import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!resp.ok) throw new Error('Request failed');
      setStatus('Thanks! I will get back to you shortly.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Could not send right now. Please email me directly.');
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s talk</h2>
          <p className="mt-2 text-slate-300">Tell me about your project. I usually reply within 24 hours.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input name="name" required className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input name="email" type="email" required className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-300 mb-1">Project details</label>
              <textarea name="message" rows="5" required className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me what you need..." />
            </div>
            <div className="sm:col-span-2 flex items-center gap-4">
              <button className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition" type="submit">Send Message</button>
              <span className="text-slate-300 text-sm">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
