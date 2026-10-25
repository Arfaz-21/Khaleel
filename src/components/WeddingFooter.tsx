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
        <div className="pt-6 border-t border-white/5 flex flex-col items-center justify-center gap-2.5">
          <p className="text-[11px] text-ivory/30 font-jakarta tracking-wider">
            Crafted with barakah &amp; love for Khaleel &amp; Murshida
          </p>
          <a
            href="https://www.instagram.com/wedora_invites"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-champagne/25 text-champagne/80 hover:text-champagne transition-all duration-300 text-[11px] font-jakarta tracking-wide cursor-pointer group"
          >
            <svg className="w-3.5 h-3.5 fill-current opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Designed by <strong className="font-semibold text-champagne">@wedora_invites</strong></span>
            <span className="text-[10px] opacity-60">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
