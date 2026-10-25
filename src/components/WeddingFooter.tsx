import { wedding } from '../config/wedding';

/* ─── Grand Royal Monogram Crest ─────────────────────────────────────────── */
const RoyalFooterMonogram = () => (
  <svg
    viewBox="0 0 160 160"
    className="w-24 h-24 mx-auto mb-6 text-champagne"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="80" cy="80" r="74" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    <circle cx="80" cy="80" r="68" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.3" />

    {/* K */}
    <text
      x="50"
      y="94"
      fontFamily="Cinzel, serif"
      fontSize="44"
      fontWeight="400"
      fill="currentColor"
      textAnchor="middle"
      opacity="0.9"
    >
      K
    </text>

    {/* & */}
    <text
      x="80"
      y="102"
      fontFamily="Pinyon Script, cursive"
      fontSize="28"
      fill="currentColor"
      textAnchor="middle"
      opacity="0.85"
    >
      &amp;
    </text>

    {/* M */}
    <text
      x="110"
      y="94"
      fontFamily="Cinzel, serif"
      fontSize="44"
      fontWeight="400"
      fill="currentColor"
      textAnchor="middle"
      opacity="0.9"
    >
      M
    </text>

    {/* Crown dot */}
    <circle cx="80" cy="42" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="80" cy="118" r="2" fill="currentColor" opacity="0.6" />
  </svg>
);

/* ─── Footer Arabesque Ornament ───────────────────────────────────────────── */
const FooterArabesque = () => (
  <div className="flex items-center justify-center gap-3 my-8 opacity-40">
    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
    <svg className="w-5 h-5 text-champagne" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
  </div>
);

export function WeddingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-[#1b251e] via-[#162018] to-[#101712] text-ivory-light overflow-hidden">
      {/* Gold hairline frame */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-champagne/20 rounded-2xl pointer-events-none" />
      <div className="absolute inset-5 sm:inset-7 md:inset-9 border border-champagne/10 rounded-xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        {/* Royal Crest */}
        <RoyalFooterMonogram />

        {/* Closing Quranic / Du'a Blessing */}
        <p className="font-cormorant text-xl sm:text-2xl md:text-3xl leading-relaxed text-ivory/90 mb-6 font-light italic">
          “{wedding.closingDua}”
        </p>

        {/* InshaAllah flourish */}
        <div className="my-4">
          <span className="font-pinyon text-4xl sm:text-5xl text-champagne font-normal">
            InshaAllah
          </span>
        </div>

        {/* Couple & Date */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-champagne/80 font-cinzel mt-6 mb-2">
          {wedding.groom.toUpperCase()} &amp; {wedding.bride.toUpperCase()}
        </p>
        <p className="text-xs uppercase tracking-[0.25em] text-ivory/50 font-cinzel mb-6">
          {wedding.dayOfWeek} · {wedding.dateFormatted} · {wedding.venue}
        </p>

        <FooterArabesque />

        {/* Closing Thanks */}
        <p className="text-xs sm:text-sm text-ivory/60 font-jakarta tracking-wide max-w-md mx-auto mb-10 leading-relaxed">
          {wedding.closingNote}
        </p>

        {/* Return to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-champagne/30 text-champagne hover:bg-champagne/15 text-[11px] uppercase tracking-widest font-jakarta transition-colors cursor-pointer mb-10"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
          <span>Return To Top</span>
        </button>

        {/* Watermark & Copyright */}
        <div className="pt-6 border-t border-white/5">
          <p className="text-[11px] text-ivory/30 font-jakarta tracking-wider">
            Crafted with barakah &amp; love by <span className="text-champagne/70 font-medium">Wedora</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
