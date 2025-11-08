import React from 'react';
import { MessageSquare, Sparkles, ListChecks, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare size={18} className="text-orange-400" />,
    title: 'Tell TripMind your intent',
    desc: 'e.g., "Book my commute from home to office every weekday" or "Plan weekend trip to Delhi and back".'
  },
  {
    icon: <Sparkles size={18} className="text-orange-400" />,
    title: 'AI analyzes and compares',
    desc: 'Explores routes and modes, compares fares and ETAs across Uber, Ola, Rapido, metro, and buses.'
  },
  {
    icon: <ListChecks size={18} className="text-orange-400" />,
    title: 'Presents optimal plan',
    desc: 'Balanced for time, cost, and convenience — with transparent trade-offs you can tweak.'
  },
  {
    icon: <CheckCircle2 size={18} className="text-orange-400" />,
    title: 'Auto-book & learn',
    desc: 'Confirms and books your trips, learns your preferences over time.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-center gap-3 mb-2">
                {s.icon}
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <p className="text-sm text-neutral-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
