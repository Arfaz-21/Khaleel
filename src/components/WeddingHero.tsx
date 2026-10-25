import { motion } from 'framer-motion';
import { wedding } from '../config/wedding';

interface WeddingHeroProps {
  reducedMotion: boolean;
}

/* ─── Grand Royal Islamic Arch Frame SVG ──────────────────────────────────── */
const GrandIslamicArch = () => (
  <svg
    viewBox="0 0 680 880"
    className="absolute inset-0 w-full h-full pointer-events-none opacity-30 mx-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer gilded arch */}
    <path
      d="M40 860 L40 340 C40 180 190 40 340 10 C490 40 640 180 640 340 L640 860"
      stroke="#C5A46D"
      strokeWidth="1.5"
    />
    {/* Inner beaded arch */}
    <path
      d="M60 860 L60 350 C60 200 200 70 340 38 C480 70 620 200 620 350 L620 860"
      stroke="#C5A46D"
      strokeWidth="0.8"
      strokeDasharray="4 6"
    />
    {/* Third hairline arch */}
    <path
      d="M80 860 L80 360 C80 220 215 95 340 68 C465 95 600 220 600 360 L600 860"
      stroke="#465444"
      strokeWidth="0.6"
      opacity="0.5"
    />
    {/* Royal Finial Peak Ornament */}
    <circle cx="340" cy="10" r="5" fill="#C5A46D" />
    <circle cx="340" cy="24" r="3.5" fill="#C5A46D" />
    <circle cx="340" cy="38" r="2.5" fill="#C5A46D" />
    <circle cx="340" cy="52" r="1.5" fill="#C5A46D" />

    {/* Symmetrical Left/Right Mihrab Cusps */}
    <path d="M40 340 Q90 320 120 280" stroke="#C5A46D" strokeWidth="0.8" />
    <path d="M640 340 Q590 320 560 280" stroke="#C5A46D" strokeWidth="0.8" />
  </svg>
);

/* ─── Botanical Corner Foliage ────────────────────────────────────────────── */
const BotanicalCornerFoliage = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 160 160"
    className={`w-28 h-28 md:w-44 md:h-44 ${className ?? ''}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 155 C25 110 55 75 95 45 C120 28 145 15 155 10"
      stroke="#465444"
      strokeWidth="1"
      opacity="0.35"
      fill="none"
    />
    <path
      d="M10 155 C35 120 70 90 115 65"
      stroke="#C5A46D"
      strokeWidth="0.75"
      opacity="0.3"
      fill="none"
    />
    {/* Olive / Eucalyptus leaves */}
    <ellipse cx="60" cy="95" rx="14" ry="5" transform="rotate(-45 60 95)" fill="#465444" opacity="0.14" />
    <ellipse cx="90" cy="65" rx="13" ry="4.5" transform="rotate(-35 90 65)" fill="#465444" opacity="0.12" />
    <ellipse cx="120" cy="40" rx="11" ry="4" transform="rotate(-25 120 40)" fill="#C5A46D" opacity="0.2" />
    <ellipse cx="140" cy="22" rx="9" ry="3" transform="rotate(-15 140 22)" fill="#C5A46D" opacity="0.22" />
  </svg>
);

export function WeddingHero({ reducedMotion }: WeddingHeroProps) {
  const fadeUp = (delay: number) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 26 } as const,
          animate: { opacity: 1, y: 0 } as const,
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF6EE] via-[#F5EEE0] to-[#EFE7D8] px-4 py-20 sm:py-24 overflow-hidden islamic-pattern-bg paper-grain">
      {/* Radiant Golden Glow Aura centered behind couple */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-gradient-to-tr from-champagne/20 via-champagne/10 to-transparent blur-[100px] pointer-events-none" />

      {/* Islamic Arch Backdrop */}
      <div className="absolute inset-0 max-w-4xl mx-auto flex items-center justify-center">
        <GrandIslamicArch />
      </div>

      {/* Foliage corner accents */}
      <BotanicalCornerFoliage className="absolute top-2 left-2 animate-float-slow" />
      <BotanicalCornerFoliage className="absolute top-2 right-2 -scale-x-100 animate-float" />
      <BotanicalCornerFoliage className="absolute bottom-2 left-2 -scale-y-100" />
      <BotanicalCornerFoliage className="absolute bottom-2 right-2 -scale-x-100 -scale-y-100" />

      {/* Center Hero Card */}
      <div className="relative z-10 text-center max-w-3xl mx-auto w-full pt-4">
        {/* Crown & Royal Seal Subtitle */}
        <motion.div {...fadeUp(0.15)} className="mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne/40 bg-white/60 backdrop-blur-sm shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <span className="text-[10px] md:text-xs font-cinzel tracking-[0.35em] uppercase text-sage-800 font-semibold">
              In The Name Of Allah · Most Gracious · Most Merciful
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
          </div>

          {/* Bismillah Calligraphy */}
          <p className="arabic-text text-3xl sm:text-4xl md:text-5xl text-sage-800 leading-loose tracking-wide drop-shadow-sm font-arabic font-normal">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
        </motion.div>

        {/* Quranic Ayah of Marriage in a Frosted Gilded Plaque */}
        <motion.div
          {...fadeUp(0.35)}
          className="my-6 max-w-2xl mx-auto px-6 py-5 rounded-2xl bg-white/55 backdrop-blur-md border border-champagne/35 shadow-sm relative overflow-hidden"
        >
          {/* Subtle gold line corners */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-champagne/60" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-champagne/60" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-champagne/60" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-champagne/60" />

          <p className="arabic-text text-lg sm:text-xl md:text-2xl text-sage-800 mb-2 leading-relaxed font-arabic">
            {wedding.quranArabic}
          </p>
          <p className="font-cormorant italic text-xs sm:text-sm md:text-base text-sage-600 leading-relaxed max-w-xl mx-auto">
            “{wedding.quranEnglish}”
          </p>
          <span className="text-[10px] sm:text-[11px] font-cinzel tracking-widest text-champagne uppercase block mt-2 font-medium">
            — {wedding.quranRef}
          </span>
        </motion.div>

        {/* Small royal divider */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
          <span className="text-champagne text-xs">✦</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
        </div>

        {/* Couple Names Section with Grand Typography */}
        <motion.div {...fadeUp(0.55)} className="my-6">
          <p className="text-xs md:text-sm font-cinzel tracking-[0.35em] uppercase text-sage-600 font-semibold mb-3">
            Together with their beloved families
          </p>

          <div className="py-2 relative">
            <h1 className="font-bodoni font-semibold text-5xl sm:text-7xl md:text-8xl text-[#1a251e] tracking-wide leading-none">
              <span className="block hover:scale-[1.01] transition-transform drop-shadow-[0_2px_4px_rgba(41,55,45,0.08)]">
                {wedding.groom.toUpperCase()}
              </span>
              <span className="font-pinyon text-[#9c783c] text-5xl sm:text-7xl md:text-8xl my-1 block font-semibold leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                &amp;
              </span>
              <span className="block hover:scale-[1.01] transition-transform drop-shadow-[0_2px_4px_rgba(41,55,45,0.08)]">
                {wedding.bride.toUpperCase()}
              </span>
            </h1>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-champagne/60" />
            <span className="text-xs md:text-sm uppercase tracking-[0.35em] font-cinzel text-sage-800 font-bold">
              Invite You To Their Nikah Ceremony
            </span>
            <span className="h-px w-10 bg-champagne/60" />
          </div>
        </motion.div>

        {/* Date and Venue Pill Badges */}
        <motion.div {...fadeUp(0.75)} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="px-6 py-3 rounded-full bg-sage-700 text-ivory-light shadow-lg border border-champagne/40 flex items-center gap-2.5">
            <svg className="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-cinzel tracking-wider uppercase font-medium">
              {wedding.dayOfWeek}, {wedding.dateFormatted} · {wedding.time}
            </span>
          </div>

          <a
            href={wedding.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white/90 hover:bg-white text-sage-800 shadow-md border border-champagne/40 flex items-center gap-2.5 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-cinzel tracking-wider uppercase font-semibold">
              {wedding.venue}, {wedding.venueAddress}
            </span>
          </a>
        </motion.div>

        {/* Scroll down prompt */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-14 inline-block text-sage-500"
        >
          <a
            href="#message"
            className="flex flex-col items-center gap-1.5 text-[11px] font-cinzel tracking-[0.25em] uppercase hover:text-champagne transition-colors"
          >
            <span>Read Invitation</span>
            <svg className="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
