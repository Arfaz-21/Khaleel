import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="min-h-screen bg-ivory text-sage-900 selection:bg-champagne/30 selection:text-sage-900 relative overflow-x-hidden">
      {/* Floating Gold & Sage Petals / Stardust */}
      <FloatingParticles reducedMotion={prefersReducedMotion} />

      {/* Full-screen Opening Experience */}
      <AnimatePresence mode="wait">
        {!showInvitation ? (
          <InvitationIntro
            key="intro"
            onOpen={handleOpen}
            reducedMotion={prefersReducedMotion}
          />
        ) : (
          <motion.div
            key="invitation-main"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Golden light burst flash upon unsealing */}
            {!prefersReducedMotion && (
              <motion.div
                initial={{ opacity: 0.8, scale: 0.8 }}
                animate={{ opacity: 0, scale: 1.6 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className="pointer-events-none fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-champagne/30 via-champagne/15 to-transparent blur-3xl z-30"
              />
            )}

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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
