import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { InvitationIntro } from './components/InvitationIntro';
import { WeddingHero } from './components/WeddingHero';
import { InvitationMessage } from './components/InvitationMessage';
import { WeddingCountdown } from './components/WeddingCountdown';
import { EventDetails } from './components/EventDetails';
import { ShareInvitation } from './components/ShareInvitation';
import { WeddingFooter } from './components/WeddingFooter';
import { FloatingParticles } from './components/FloatingParticles';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);

  // Check reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleOpen = () => {
    setShowInvitation(true);
    // Smooth scroll to top after opening
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ivory text-sage-900 selection:bg-champagne/30 selection:text-sage-900 relative">
      {/* Floating Gold & Sage Petals / Stardust */}
      <FloatingParticles reducedMotion={prefersReducedMotion} />

      {/* Full-screen Opening Experience */}
      <AnimatePresence mode="wait">
        {!showInvitation && (
          <InvitationIntro
            key="intro"
            onOpen={handleOpen}
            reducedMotion={prefersReducedMotion}
          />
        )}
      </AnimatePresence>

      {/* Main Wedding Experience */}
      {showInvitation && (
        <main className="relative">
          {/* Full-screen Bismillah, Quranic verse & Couple Names */}
          <WeddingHero reducedMotion={prefersReducedMotion} />

          {/* Stationery Deckle Card with Full Invitation Wording & Prophetic Dua */}
          <InvitationMessage />

          {/* Live Countdown to 05 Nov 2026 11:30 AM IST with Flip Clock & iCal */}
          <WeddingCountdown />

          {/* Date, Time, Venue with Google Maps Integration */}
          <EventDetails />

          {/* 1-Click WhatsApp Share & Web Share API */}
          <ShareInvitation />

          {/* Closing Dua, Royal Monogram & Return-to-top */}
          <WeddingFooter />
        </main>
      )}
    </div>
  );
}

export default App;
