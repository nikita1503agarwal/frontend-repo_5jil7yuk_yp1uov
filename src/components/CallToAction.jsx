import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  const [intent, setIntent] = useState('Home to office every weekday at 9 AM');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simply show an alert previewing the intent.
    alert(`Intent captured:\n${intent}\n\nIn a full version, TripMind would analyze routes, compare fares, and propose an itinerary.`);
  };

  return (
    <section id="cta" className="relative py-20 bg-neutral-950">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Describe your trip</h3>
          <p className="text-neutral-300 mb-6">Write your travel intent in plain language. TripMind will do the rest.</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              className="flex-1 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              placeholder="e.g., Weekend trip to Delhi and back"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-lg shadow-orange-600/30 hover:from-orange-400 hover:to-orange-600 transition-colors"
            >
              Generate plan
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-xs text-neutral-400 mt-4">
            Coming soon: account sync, calendar-based auto-bookings, provider integrations and live fare tracking.
          </p>
        </div>
      </div>
    </section>
  );
}
