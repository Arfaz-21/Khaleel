import { useState } from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../config/wedding';

export function EventDetails() {
  const [addressCopied, setAddressCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${wedding.venue}, ${wedding.venueAddress}`);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2400);
    } catch {
      // fallback
    }
  };

  return (
    <section id="details" className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#F2EAE0] via-[#F8F2E6] to-[#EFE7D8] islamic-pattern-bg paper-grain relative overflow-hidden">
      {/* Ambient center lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-champagne/6 blur-[120px] pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.35em] text-champagne font-cinzel font-semibold block mb-2">
            The Celebration
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bodoni font-normal text-sage-700 tracking-wide">
            Event &amp; Venue Details
          </h2>
          <div className="w-16 h-0.5 bg-champagne/40 mx-auto mt-4" />
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Date */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-[#FFFDF9] border border-champagne/35 p-8 text-center shadow-lg relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-champagne/20 via-champagne to-champagne/20" />
            <div>
              <div className="w-14 h-14 rounded-full bg-sage-50 border border-champagne/30 flex items-center justify-center mx-auto mb-6 text-champagne">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.4" />
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.4" strokeLinecap="round" />
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.4" strokeLinecap="round" />
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-cinzel text-champagne font-semibold block mb-2">
                Date
              </span>
              <h3 className="text-2xl font-bodoni font-normal text-sage-800 mb-1">
                {wedding.dayOfWeek}
              </h3>
              <p className="text-xl font-cormorant text-sage-600 font-light mb-4">
                {wedding.dateFormatted}
              </p>
            </div>
            <a
              href={wedding.googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider font-cinzel text-champagne hover:text-sage-700 py-2 border-t border-champagne/20 transition-colors font-medium"
            >
              <span>Add To Calendar</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

          {/* Card 2: Time */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-[#FFFDF9] border border-champagne/35 p-8 text-center shadow-lg relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-champagne/20 via-champagne to-champagne/20" />
            <div>
              <div className="w-14 h-14 rounded-full bg-sage-50 border border-champagne/30 flex items-center justify-center mx-auto mb-6 text-champagne">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="9" strokeWidth="1.4" />
                  <polyline points="12,7 12,12 15,14" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-cinzel text-champagne font-semibold block mb-2">
                Ceremony Time
              </span>
              <h3 className="text-2xl font-bodoni font-normal text-sage-800 mb-1">
                {wedding.ceremony} Ceremony
              </h3>
              <p className="text-xl font-bodoni text-champagne font-semibold mb-2">
                {wedding.time}
              </p>
              <p className="text-xs text-sage-500 font-jakarta">
                Kindly be seated by 11:15 AM
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-champagne/20">
              <span className="text-[11px] font-cinzel tracking-wider text-sage-400 uppercase">
                Lunch will be served
              </span>
            </div>
          </motion.div>

          {/* Card 3: Venue */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-[#FFFDF9] border border-champagne/35 p-8 text-center shadow-lg relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-champagne/20 via-champagne to-champagne/20" />
            <div>
              <div className="w-14 h-14 rounded-full bg-sage-50 border border-champagne/30 flex items-center justify-center mx-auto mb-6 text-champagne">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-cinzel text-champagne font-semibold block mb-2">
                Location
              </span>
              <h3 className="text-2xl font-bodoni font-normal text-sage-800 mb-1">
                {wedding.venue}
              </h3>
              <p className="text-sm font-jakarta text-sage-600 mb-4">
                {wedding.venueAddress}
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-champagne/20 flex items-center justify-center gap-2">
              <button
                onClick={copyAddress}
                className="text-xs uppercase tracking-wider font-cinzel text-sage-500 hover:text-champagne transition-colors cursor-pointer"
              >
                {addressCopied ? '✓ Copied Address' : 'Copy Address'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Action Button: Get Directions */}
        <div className="text-center mt-12">
          <motion.a
            href={wedding.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-sage-700 text-ivory-light font-jakarta text-xs uppercase tracking-[0.2em] font-medium shadow-md hover:bg-sage-800 border border-champagne/40 transition-colors"
          >
            <svg className="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span>Open in Google Maps Directions</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
