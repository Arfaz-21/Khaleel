import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { audio } from '../utils/audio';

interface FloatingNavProps {
  onShareClick: () => void;
}

export function FloatingNav({ onShareClick }: FloatingNavProps) {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const newState = audio.toggleAmbient();
    setIsPlayingMusic(newState);
  };

  const downloadICS = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Khaleel & Murshida Nikah Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:Nikah Ceremony — Khaleel & Murshida',
      'DESCRIPTION:Assalamu Alaikum! You are cordially invited to the blessed Nikah ceremony of Khaleel & Murshida. InshaAllah.',
      'LOCATION:Indian Auditorium, Neralakatte, Mani',
      'DTSTART:20261105T060000Z',
      'DTEND:20261105T093000Z',
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'BEGIN:VALARM',
      'TRIGGER:-PT24H',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder: Khaleel & Murshida Nikah Ceremony Tomorrow',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Khaleel-Murshida-Nikah.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Top gold scroll progress line */}
      <div
        className="scroll-progress transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating control dock */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-700/85 backdrop-blur-md border border-champagne/30 shadow-lg text-ivory-light"
      >
        {/* Monogram stamp */}
        <span className="font-cormorant text-xs tracking-widest text-champagne px-2 border-r border-champagne/20">
          K &amp; M
        </span>

        {/* Ambient Sound Button */}
        <button
          onClick={handleToggleSound}
          title={isPlayingMusic ? 'Mute serene music' : 'Play serene ambient melody'}
          className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-jakarta tracking-wider uppercase rounded-full hover:bg-champagne/15 transition-colors cursor-pointer"
        >
          {isPlayingMusic ? (
            <>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-champagne"></span>
              </span>
              <span className="text-champagne">Music On</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5 text-champagne/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
              <span className="text-ivory/80">Music</span>
            </>
          )}
        </button>

        {/* Calendar Add */}
        <button
          onClick={downloadICS}
          title="Download calendar event file (.ics)"
          className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-jakarta tracking-wider uppercase rounded-full hover:bg-champagne/15 transition-colors cursor-pointer text-ivory/80 hover:text-champagne"
        >
          <svg className="w-3.5 h-3.5 text-champagne/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="hidden sm:inline">Save Date</span>
        </button>

        {/* Share Button */}
        <button
          onClick={onShareClick}
          title="Share invitation"
          className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-jakarta tracking-wider uppercase rounded-full hover:bg-champagne/15 transition-colors cursor-pointer text-ivory/80 hover:text-champagne"
        >
          <svg className="w-3.5 h-3.5 text-champagne/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span className="hidden sm:inline">Share</span>
        </button>
      </motion.nav>
    </>
  );
}
