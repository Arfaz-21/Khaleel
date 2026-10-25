import { useState } from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../config/wedding';
import { audio } from '../utils/audio';

interface InvitationIntroProps {
  onOpen: () => void;
  reducedMotion: boolean;
}

export function InvitationIntro({ onOpen, reducedMotion }: InvitationIntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleStartOpening = () => {
    if (isOpening) return;
    setIsOpening(true);
    audio.playEnvelopeChime();

    // Trigger open invitation transition
    const delay = reducedMotion ? 50 : 950;
    setTimeout(() => {
      onOpen();
    }, delay);
  };

  if (reducedMotion) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-sage-700 text-ivory-light px-6 text-center">
        <div className="w-24 h-24 rounded-full border border-champagne/40 flex items-center justify-center mb-6">
          <span className="font-cormorant text-2xl text-champagne">M &amp; K</span>
        </div>
        <p className="text-xs uppercase tracking-[0.35em] text-champagne/80 font-jakarta mb-2">
          Royal Nikah Invitation
        </p>
        <h1 className="text-4xl font-cormorant font-light text-ivory-light mb-6">
          {wedding.groom} &amp; {wedding.bride}
        </h1>
        <button
          onClick={handleStartOpening}
          className="px-8 py-3 bg-champagne text-sage-700 font-jakarta text-xs uppercase tracking-[0.25em] font-semibold rounded-sm"
        >
          Open Invitation
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#1b261e] via-[#243328] to-[#1a231d] px-4 py-8 overflow-hidden select-none"
      exit={{ opacity: 0, scale: 1.08, y: -30 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background ambient glow circles */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-champagne/5 blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sage-400/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-champagne/10 blur-[100px] pointer-events-none" />

      {/* Outer Envelope Container with Perspective */}
      <div className="relative w-full max-w-[440px] perspective-[1200px] flex flex-col items-center">
        {/* Subtle greeting header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-6"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-champagne/80 font-cinzel block mb-1">
            A Royal Nikah Invitation
          </span>
          <span className="font-bodoni italic text-sm text-ivory/60">
            Bismihi Ta’ala
          </span>
        </motion.div>

        {/* The Luxury Envelope */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full aspect-[16/11] bg-[#222f25] rounded-xl shadow-2xl border border-champagne/30 overflow-hidden flex flex-col justify-end p-6 cursor-pointer group"
          onClick={handleStartOpening}
        >
          {/* Envelope Paper Grain & Sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-champagne/10 pointer-events-none" />

          {/* Gold Foil Border Frame */}
          <div className="absolute inset-3 border border-champagne/30 rounded-lg pointer-events-none" />
          <div className="absolute inset-4 border border-champagne/15 rounded-md pointer-events-none" />

          {/* Top Flap (Animated with CSS 3D rotateX) */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 origin-top z-20 pointer-events-none"
            animate={isOpening ? { rotateX: 180, opacity: 0.3 } : { rotateX: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <svg
              viewBox="0 0 440 160"
              className="w-full h-full drop-shadow-md"
              preserveAspectRatio="none"
              fill="none"
            >
              <polygon
                points="0,0 440,0 220,150"
                fill="#27372b"
                stroke="#C5A46D"
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />
              <line x1="0" y1="0" x2="220" y2="150" stroke="#C5A46D" strokeWidth="0.5" strokeOpacity="0.3" />
              <line x1="440" y1="0" x2="220" y2="150" stroke="#C5A46D" strokeWidth="0.5" strokeOpacity="0.3" />
            </svg>
          </motion.div>

          {/* Letter Peeking / Rising from inside */}
          <motion.div
            className="absolute inset-x-5 top-5 bottom-3 bg-[#FAF6EE] rounded-t-lg shadow-inner z-10 flex flex-col items-center justify-center p-6 border border-champagne/40"
            animate={
              isOpening
                ? { y: -120, scale: 1.04, opacity: 1 }
                : { y: 0, scale: 0.98, opacity: 0.92 }
            }
            transition={{ duration: 0.85, ease: 'easeInOut' }}
          >
            <div className="w-full h-full border border-champagne/30 p-4 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] tracking-[0.35em] text-champagne font-cinzel uppercase mb-1">
                The Wedding Of
              </span>
              <h2 className="text-2xl md:text-3xl font-bodoni font-semibold text-sage-900 tracking-wide">
                {wedding.groom} <span className="font-pinyon text-[#9c783c] text-3xl font-semibold">&amp;</span> {wedding.bride}
              </h2>
              <div className="w-16 h-px bg-champagne/40 my-2" />
              <p className="text-[11px] font-cinzel tracking-widest text-sage-500 uppercase">
                {wedding.dateFormatted}
              </p>
            </div>
          </motion.div>

          {/* Lower Triangles of Envelope Front */}
          <div className="absolute inset-0 pointer-events-none z-15">
            <svg
              viewBox="0 0 440 280"
              className="w-full h-full"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Left flap fold */}
              <polygon points="0,0 0,280 220,150" fill="#202c23" opacity="0.65" />
              {/* Right flap fold */}
              <polygon points="440,0 440,280 220,150" fill="#1c281f" opacity="0.65" />
              {/* Bottom flap fold */}
              <polygon
                points="0,280 440,280 220,150"
                fill="#243328"
                stroke="#C5A46D"
                strokeWidth="0.6"
                strokeOpacity="0.3"
              />
            </svg>
          </div>

          {/* Centered Golden Wax Seal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={
                isOpening
                  ? { scale: [1, 1.3, 0], opacity: [1, 0.8, 0], rotate: 20 }
                  : { scale: [1, 1.03, 1] }
              }
              transition={
                isOpening
                  ? { duration: 0.6 }
                  : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }
              className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#9b783e] via-[#C5A46D] to-[#fae2a6] shadow-[0_4px_25px_rgba(197,164,109,0.5)] border-2 border-[#fff3cc]/60 flex items-center justify-center"
            >
              {/* Wax Seal Outer scalloped / organic ring */}
              <div className="absolute inset-1 rounded-full border border-black/20" />
              <div className="absolute inset-2 rounded-full border border-white/30" />

              {/* Seal Monogram */}
              <div className="flex flex-col items-center justify-center text-center">
                <span className="font-cinzel font-semibold text-lg md:text-xl text-[#3b2b10] drop-shadow-sm tracking-widest leading-none">
                  M &amp; K
                </span>
                <span className="text-[7px] uppercase tracking-tighter text-[#4a3614] font-cinzel mt-0.5 font-bold">
                  NIKAH
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button below envelope */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <motion.button
            onClick={handleStartOpening}
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(197,164,109,0.35)' }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-champagne via-[#ebd5a7] to-champagne text-sage-900 font-cinzel text-xs font-semibold uppercase tracking-[0.25em] shadow-lg flex items-center gap-2 cursor-pointer transition-all"
          >
            <span>Break Seal &amp; Open</span>
            <svg className="w-3.5 h-3.5 text-sage-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>

          {/* Quick Skip Button */}
          <button
            onClick={handleStartOpening}
            className="text-xs text-ivory/40 font-cinzel tracking-widest uppercase hover:text-champagne transition-colors cursor-pointer py-1"
          >
            Direct View →
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
