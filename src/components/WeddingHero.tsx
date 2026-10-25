import { motion } from 'framer-motion';
import { wedding } from '../config/wedding';

interface WeddingHeroProps {
  reducedMotion: boolean;
}

/* ─── Islamic Mihrab Arch Frame SVG ────────────────────────────────────────── */
const IslamicArchFrame = () => (
  <svg
    viewBox="0 0 600 800"
    className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer arch line */}
    <path
      d="M50 780 L50 320 C50 180 180 60 300 20 C420 60 550 180 550 320 L550 780"
      stroke="#C5A46D"
      strokeWidth="1.2"
    />
    {/* Inner decorative arch line */}
    <path
      d="M70 780 L70 330 C70 200 190 85 300 48 C410 85 530 200 530 330 L530 780"
      stroke="#C5A46D"
      strokeWidth="0.6"
      strokeDasharray="4 4"
    />
    {/* Peak ornament */}
    <circle cx="300" cy="20" r="4" fill="#C5A46D" />
    <circle cx="300" cy="35" r="2.5" fill="#C5A46D" />
    <circle cx="300" cy="48" r="1.5" fill="#C5A46D" />
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
      opacity="0.3"
      fill="none"
    />
    <path
      d="M10 155 C35 120 70 90 115 65"
      stroke="#C5A46D"
      strokeWidth="0.75"
      opacity="0.25"
      fill="none"
    />
    {/* Olive / Eucalyptus leaves */}
    <ellipse cx="60" cy="95" rx="14" ry="5" transform="rotate(-45 60 95)" fill="#465444" opacity="0.12" />
    <ellipse cx="90" cy="65" rx="13" ry="4.5" transform="rotate(-35 90 65)" fill="#465444" opacity="0.10" />
    <ellipse cx="120" cy="40" rx="11" ry="4" transform="rotate(-25 120 40)" fill="#C5A46D" opacity="0.15" />
    <ellipse cx="140" cy="22" rx="9" ry="3" transform="rotate(-15 140 22)" fill="#C5A46D" opacity="0.18" />
  </svg>
);

export function WeddingHero({ reducedMotion }: WeddingHeroProps) {
  const fadeUp = (delay: number) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: 'easeOut' as const },
        };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FBF8F1] via-[#F7F1E6] to-[#F1EAE0] px-4 py-24 overflow-hidden paper-grain">
      {/* Islamic Arch Backdrop */}
      <div className="absolute inset-0 max-w-4xl mx-auto flex items-center justify-center">
        <IslamicArchFrame />
      </div>

      {/* Foliage corner accents */}
      <BotanicalCornerFoliage className="absolute top-2 left-2 animate-float-slow" />
      <BotanicalCornerFoliage className="absolute top-2 right-2 -scale-x-100 animate-float" />
      <BotanicalCornerFoliage className="absolute bottom-2 left-2 -scale-y-100" />
      <BotanicalCornerFoliage className="absolute bottom-2 right-2 -scale-x-100 -scale-y-100" />

      {/* Center Hero Card */}
      <div className="relative z-10 text-center max-w-3xl mx-auto w-full pt-4">
        {/* Bismillah Calligraphy */}
        <motion.div {...fadeUp(0.2)} className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full border border-champagne/30 text-[10px] md:text-xs font-cinzel tracking-[0.3em] uppercase text-champagne bg-champagne/5 mb-3">
            In The Name Of Allah
          </span>
          <p className="arabic-text text-3xl md:text-5xl text-sage-700 leading-loose tracking-wide drop-shadow-sm font-arabic">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
        </motion.div>

        {/* Quranic Ayah of Marriage */}
        <motion.div {...fadeUp(0.4)} className="mb-8 max-w-xl mx-auto px-4">
          <p className="arabic-text text-lg md:text-2xl text-sage-600 mb-2 leading-relaxed font-arabic">
            {wedding.quranArabic}
          </p>
          <p className="font-cormorant italic text-sm md:text-base text-sage-500 leading-relaxed">
            “{wedding.quranEnglish}”
          </p>
          <span className="text-[11px] font-cinzel tracking-widest text-champagne uppercase block mt-1">
            — {wedding.quranRef}
          </span>
        </motion.div>

        {/* Small royal divider */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="w-12 h-px bg-champagne/40" />
          <span className="text-champagne text-xs">✦</span>
          <div className="w-12 h-px bg-champagne/40" />
        </div>

        {/* Couple Names Section */}
        <motion.div {...fadeUp(0.6)} className="my-6">
          <p className="text-xs md:text-sm font-cinzel tracking-[0.35em] uppercase text-sage-500 mb-4">
            Together with our families, we invite you to celebrate
          </p>

          <div className="py-2">
            <h1 className="font-bodoni font-light text-5xl sm:text-7xl md:text-8xl text-sage-700 tracking-wide leading-none">
              <span className="block hover:scale-[1.01] transition-transform font-normal">
                {wedding.groom.toUpperCase()}
              </span>
              <span className="font-pinyon text-champagne text-4xl sm:text-6xl md:text-7xl my-1 block font-normal leading-tight">
                &amp;
              </span>
              <span className="block hover:scale-[1.01] transition-transform font-normal">
                {wedding.bride.toUpperCase()}
              </span>
            </h1>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-champagne/50" />
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-cinzel text-champagne font-medium">
              Nikah Ceremony
            </span>
            <span className="h-px w-8 bg-champagne/50" />
          </div>
        </motion.div>

        {/* Date and Venue Pill Badge */}
        <motion.div {...fadeUp(0.8)} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="px-5 py-2.5 rounded-full bg-sage-700 text-ivory-light shadow-md border border-champagne/40 flex items-center gap-2">
            <svg className="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-jakarta tracking-wider uppercase">
              {wedding.dayOfWeek}, {wedding.dateFormatted} · {wedding.time}
            </span>
          </div>

          <a
            href={wedding.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white/80 hover:bg-white text-sage-700 shadow-sm border border-champagne/40 flex items-center gap-2 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-jakarta tracking-wider uppercase font-medium">
              {wedding.venue}, {wedding.venueAddress}
            </span>
          </a>
        </motion.div>

        {/* Scroll down prompt */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-14 inline-block text-sage-400"
        >
          <a
            href="#message"
            className="flex flex-col items-center gap-1.5 text-[11px] font-jakarta tracking-widest uppercase hover:text-champagne transition-colors"
          >
            <span>Read Invitation</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
