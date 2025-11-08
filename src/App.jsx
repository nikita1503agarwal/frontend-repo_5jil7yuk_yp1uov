import React from 'react';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CallToAction from './components/CallToAction.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <CallToAction />
      <div className="py-10 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} TripMind — Plan smarter. Travel faster. Book automatically.
      </div>
    </div>
  );
}
