import React from 'react';
import { Brain, Route, Clock, IndianRupee, Shield, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Brain className="text-orange-400" size={20} />,
    title: 'Understands intent',
    desc: 'Type "Home to office every weekday" or "Weekend to Delhi" — TripMind translates it into an actionable plan.'
  },
  {
    icon: <Route className="text-orange-400" size={20} />,
    title: 'Multi-modal routing',
    desc: 'Combines cab, metro, auto, and bus for the fastest, most reliable itinerary.'
  },
  {
    icon: <IndianRupee className="text-orange-400" size={20} />,
    title: 'Fare comparison',
    desc: 'Compares prices across Uber, Ola, Rapido and local transit to keep costs low.'
  },
  {
    icon: <Clock className="text-orange-400" size={20} />,
    title: 'On-time by design',
    desc: 'Optimizes for arrival windows, traffic patterns, and live delays.'
  },
  {
    icon: <Calendar className="text-orange-400" size={20} />,
    title: 'Auto bookings & returns',
    desc: 'Schedules rides and return trips that match your calendar.'
  },
  {
    icon: <Shield className="text-orange-400" size={20} />,
    title: 'Learns your preferences',
    desc: 'Gets smarter about budget, modes, and comfort over time.'
  }
];

export default function FeatureGrid() {
  return (
    <section className="relative py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why TripMind</h2>
        <p className="text-neutral-300 max-w-2xl mb-10">
          Your autonomous travel agent that turns plain language into optimized, booked journeys — across providers and modes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.05] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                {f.icon}
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="text-sm text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
