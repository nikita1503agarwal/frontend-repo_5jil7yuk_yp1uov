import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Map, Clock, IndianRupee } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-center gap-8">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm text-white rounded-full px-4 py-2 w-fit">
          <Rocket size={16} className="text-orange-400" />
          <span className="text-xs tracking-wide uppercase">TripMind — Your Autonomous Travel Agent</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Plan smarter. Travel faster. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600">Book automatically.</span>
        </h1>

        <p className="max-w-2xl text-neutral-300 text-lg">
          Describe your trip once. TripMind figures out routes across cabs, metro, and buses, compares fares from Uber, Ola, Rapido and more, then books what’s best — automatically.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
          <Stat icon={<Map size={16} />} label="Multi-modal" value="Routes" />
          <Stat icon={<IndianRupee size={16} />} label="Lowest" value="Fares" />
          <Stat icon={<Clock size={16} />} label="On-time" value="Arrivals" />
          <Stat icon={<Rocket size={16} />} label="Auto" value="Bookings" />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
          <a href="#cta" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-lg shadow-orange-600/30 hover:from-orange-400 hover:to-orange-600 transition-colors">
            Get started free
          </a>
          <a href="#how" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10 transition-colors">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
      <div className="text-orange-400">{icon}</div>
      <div className="leading-tight">
        <div className="text-xs text-neutral-400">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}
