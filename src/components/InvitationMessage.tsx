import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { wedding } from '../config/wedding';

/* ─── Floral Corner Motif ─────────────────────────────────────────────────── */
const FloralCornerMotif = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-14 h-14 md:w-20 md:h-20 ${className ?? ''}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 96 C16 72 32 50 60 30 C76 18 90 10 96 4"
      stroke="#C5A46D"
      strokeWidth="1.2"
      opacity="0.5"
      fill="none"
    />
    <path
      d="M8 96 C24 66 48 46 80 24"
      stroke="#465444"
      strokeWidth="0.8"
      opacity="0.3"
      fill="none"
    />
    <circle cx="60" cy="30" r="2.5" fill="#C5A46D" opacity="0.4" />
    <circle cx="80" cy="24" r="2" fill="#C5A46D" opacity="0.4" />
    <circle cx="40" cy="48" r="2" fill="#465444" opacity="0.25" />
  </svg>
);

/* ─── Islamic Geometric Star Divider ───────────────────────────────────────── */
const StarDivider = () => (
  <div className="flex items-center justify-center gap-3 my-8">
    <div className="w-16 md:w-28 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
    <svg className="w-6 h-6 text-champagne" viewBox="0 0 24 24" fill="none">
      {/* 8-pointed star */}
      <polygon
        points="12,2 15,8 21,8 16,13 18,19 12,15 6,19 8,13 3,8 9,8"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="currentColor"
        fillOpacity="0.18"
      />
    </svg>
    <div className="w-16 md:w-28 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
  </div>
);

export function InvitationMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="message" className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#EFE7D8] via-[#FAF6EE] to-[#F2EAE0] relative overflow-hidden islamic-pattern-bg paper-grain">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-champagne/8 blur-[130px] pointer-events-none" />

      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Luxury Deckle-Edge Stationery Card with Physical Shadow & Foil Insets */}
        <div className="bg-[#FFFDF9] rounded-2xl border-2 border-champagne/45 p-8 sm:p-14 md:p-18 relative paper-grain card-unfold-shadow">
          {/* Subtle Watermark Islamic Monogram Seal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.035] select-none">
            <svg viewBox="0 0 400 400" className="w-[480px] h-[480px]">
              <circle cx="200" cy="200" r="180" stroke="#C5A46D" strokeWidth="4" fill="none" />
              <polygon points="200,20 380,200 200,380 20,200" stroke="#C5A46D" strokeWidth="2" fill="none" />
              <polygon points="200,20 380,200 200,380 20,200" transform="rotate(45 200 200)" stroke="#C5A46D" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Inner Inset Gold Foil Border */}
          <div className="absolute inset-3 sm:inset-4 border border-champagne/40 rounded-xl pointer-events-none" />
          <div className="absolute inset-5 sm:inset-6 border border-champagne/20 rounded-lg pointer-events-none" />

          {/* Floral Corner Motifs */}
          <FloralCornerMotif className="absolute top-2 left-2" />
          <FloralCornerMotif className="absolute top-2 right-2 -scale-x-100" />
          <FloralCornerMotif className="absolute bottom-2 left-2 -scale-y-100" />
          <FloralCornerMotif className="absolute bottom-2 right-2 -scale-x-100 -scale-y-100" />

          <div className="relative z-10 text-center max-w-xl mx-auto">
            {/* Crown Calligraphy Header */}
            <span className="text-[11px] uppercase tracking-[0.35em] text-champagne font-cinzel font-semibold block mb-2">
              The Sacred Union
            </span>
            <h2 className="text-3xl md:text-5xl font-bodoni font-normal text-sage-800 tracking-wide mb-6">
              Bismihi Ta’ala
            </h2>

            {/* Prophetic Dua */}
            <div className="my-6 py-5 px-6 rounded-2xl bg-sage-50/70 border border-champagne/35 shadow-sm">
              <p className="arabic-text text-xl md:text-3xl text-sage-800 mb-2 leading-relaxed font-arabic">
                {wedding.propheticDuaArabic}
              </p>
              <p className="font-cormorant italic text-xs md:text-sm text-sage-600">
                “{wedding.propheticDuaEnglish}”
              </p>
            </div>

            <StarDivider />

            {/* Paragraph 1 */}
            <p className="font-cormorant text-lg sm:text-xl md:text-2xl leading-relaxed text-sage-800 mb-6 font-light">
              {wedding.invitationParagraph1}
            </p>

            {/* Paragraph 2 */}
            <p className="font-cormorant text-lg sm:text-xl md:text-2xl leading-relaxed text-sage-800 mb-8 font-light">
              {wedding.invitationParagraph2}
            </p>

            {/* InshaAllah calligraphic sign-off */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <span className="font-pinyon text-4xl sm:text-6xl text-champagne font-normal">
                InshaAllah
              </span>
              <p className="text-[11px] uppercase tracking-[0.25em] font-cinzel text-sage-500 mt-1 font-medium">
                Your presence &amp; prayers are our greatest honor
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
