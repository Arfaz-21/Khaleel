import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { wedding } from '../config/wedding';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type CeremonyStatus = 'upcoming' | 'today' | 'started';

function calculateTimeLeft(): { timeLeft: TimeLeft; status: CeremonyStatus } {
  const target = new Date(wedding.dateISO).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return {
      timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      status: 'started',
    };
  }

  const nowDate = new Date();
  const targetDate = new Date(wedding.dateISO);
  const isToday =
    nowDate.getFullYear() === targetDate.getFullYear() &&
    nowDate.getMonth() === targetDate.getMonth() &&
    nowDate.getDate() === targetDate.getDate();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    timeLeft: { days, hours, minutes, seconds },
    status: isToday ? 'today' : 'upcoming',
  };
}

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative group">
        {/* Glow halo */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-champagne/20 to-champagne/5 rounded-xl blur-sm group-hover:opacity-100 transition-opacity" />

        <div className="relative w-20 h-22 sm:w-24 sm:h-26 md:w-28 md:h-30 rounded-xl bg-gradient-to-b from-[#2a382e] to-[#1e2921] border border-champagne/40 shadow-xl flex flex-col items-center justify-center overflow-hidden">
          {/* Subtle horizontal split line simulating flip clock */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-black/40 pointer-events-none" />

          {/* Number */}
          <span className="text-3xl sm:text-4xl md:text-5xl font-bodoni font-normal text-champagne drop-shadow-sm tracking-tight z-10">
            {String(value).padStart(2, '0')}
          </span>

          {/* Shimmer top reflection */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/[0.03] pointer-events-none" />
        </div>
      </div>

      <span className="mt-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-champagne/80 font-cinzel font-medium">
        {label}
      </span>
    </div>
  );
}

export function WeddingCountdown() {
  const [{ timeLeft, status }, setTimerData] = useState(calculateTimeLeft);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerData(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#202d24] via-[#243328] to-[#1b251e] text-ivory-light relative overflow-hidden">
      {/* Decorative background Islamic geometry watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-[600px] h-[600px] animate-spin-slow">
          <circle cx="200" cy="200" r="180" stroke="#C5A46D" strokeWidth="2" fill="none" />
          <polygon points="200,20 380,200 200,380 20,200" stroke="#C5A46D" strokeWidth="1" fill="none" />
          <polygon points="200,20 380,200 200,380 20,200" transform="rotate(45 200 200)" stroke="#C5A46D" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[11px] uppercase tracking-[0.4em] text-champagne font-cinzel font-semibold block mb-2">
          Counting Down With Joy
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bodoni font-normal text-ivory-light mb-10 tracking-wide">
          Until The Auspicious Moment
        </h2>

        {status === 'started' ? (
          <div className="p-8 rounded-2xl bg-white/5 border border-champagne/40 backdrop-blur-sm max-w-md mx-auto">
            <span className="text-3xl mb-3 block">🤍</span>
            <p className="text-xl md:text-2xl font-cormorant text-champagne italic">
              The Nikah celebration has begun, Alhamdulillah!
            </p>
          </div>
        ) : status === 'today' ? (
          <div className="flex flex-col items-center">
            <p className="text-lg md:text-xl font-cormorant text-champagne italic mb-6">
              ✨ Today is the blessed day of Nikah! ✨
            </p>
            <div className="flex justify-center gap-3 sm:gap-6">
              <CountdownBlock value={timeLeft.hours} label="Hours" />
              <CountdownBlock value={timeLeft.minutes} label="Minutes" />
              <CountdownBlock value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        ) : (
          <div className="flex justify-center gap-3 sm:gap-5 md:gap-7">
            <CountdownBlock value={timeLeft.days} label="Days" />
            <CountdownBlock value={timeLeft.hours} label="Hours" />
            <CountdownBlock value={timeLeft.minutes} label="Minutes" />
            <CountdownBlock value={timeLeft.seconds} label="Seconds" />
          </div>
        )}

        {/* Date and Calendar Link */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs uppercase tracking-[0.25em] text-ivory/60 font-jakarta">
            {wedding.dayOfWeek} · 05 November 2026 · 11:30 AM IST
          </p>
          <span className="hidden sm:inline text-champagne/40">•</span>
          <a
            href={wedding.googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-champagne hover:text-white uppercase tracking-wider font-jakarta font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
            </svg>
            Add to Google Calendar
          </a>
        </div>
      </motion.div>
    </section>
  );
}
