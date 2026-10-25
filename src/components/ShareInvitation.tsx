import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { wedding } from '../config/wedding';

export function ShareInvitation() {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const getShareUrl = () => {
    return typeof window !== 'undefined' ? window.location.href : 'https://khaleel-murshida.wedora.com';
  };

  const handleNativeShare = async () => {
    const url = getShareUrl();
    const shareData = {
      title: wedding.shareTitle,
      text: wedding.shareText,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fall back to clipboard if user dismissed or unsupported
      }
    }

    // Fallback: Copy link
    try {
      await navigator.clipboard.writeText(`${wedding.shareText}\n\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    } catch {
      // Manual fallback
      const el = document.createElement('textarea');
      el.value = `${wedding.shareText}\n\n${url}`;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    }
  };

  const handleWhatsAppShare = () => {
    const url = getShareUrl();
    const message = encodeURIComponent(`${wedding.shareText}\n\n${url}`);
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  return (
    <section id="share" className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#FAF6EE] via-[#F4EDE1] to-[#EFE7D8] relative overflow-hidden islamic-pattern-bg paper-grain">
      <motion.div
        ref={ref}
        className="max-w-xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[11px] uppercase tracking-[0.35em] text-champagne font-cinzel font-semibold block mb-2">
          Spread The Blessings
        </span>
        <h2 className="text-3xl sm:text-4xl font-bodoni font-normal text-sage-700 tracking-wide mb-4">
          Share This Invitation
        </h2>
        <p className="text-xs sm:text-sm font-jakarta text-sage-600 mb-10 max-w-md mx-auto leading-relaxed">
          Forward this blessed invitation to beloved family, relatives, and friends
        </p>

        {/* Share Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* WhatsApp 1-Click Share */}
          <motion.button
            onClick={handleWhatsAppShare}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] text-white font-cinzel text-xs uppercase tracking-wider font-semibold shadow-md hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Share on WhatsApp</span>
          </motion.button>

          {/* Copy Link / Native Share */}
          <motion.button
            onClick={handleNativeShare}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-sage-700 text-ivory-light font-cinzel text-xs uppercase tracking-wider font-semibold shadow-md hover:bg-sage-800 border border-champagne/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>Copy &amp; Share Link</span>
          </motion.button>
        </div>

        {/* Copied confirmation toast */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-champagne text-sage-900 font-jakarta text-xs font-semibold shadow-xl border border-white/50"
            >
              <span>✓ Invitation details copied to clipboard!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
