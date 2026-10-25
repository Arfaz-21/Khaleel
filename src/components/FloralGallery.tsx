import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  src: string;
  title: string;
  subtitle: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: '/images/floral-1.jpg',
    title: 'Botanical Symphony',
    subtitle: 'Sage greenery, white garden roses & gold foils',
  },
  {
    src: '/images/floral-2.jpg',
    title: 'Deckled Stationery',
    subtitle: 'Bespoke hand-crafted envelope & invitation suite',
  },
  {
    src: '/images/floral-3.jpg',
    title: 'Serene Watercolor',
    subtitle: 'Delicate sage brushstrokes and gold dust',
  },
  {
    src: '/images/floral-4.jpg',
    title: 'Nocturne Florals',
    subtitle: 'Lush white blooms amidst deep emerald shadows',
  },
  {
    src: '/images/floral-5.jpg',
    title: 'Golden Arabesque',
    subtitle: 'Intricate Islamic flourishes & geometric motifs',
  },
];

export function FloralGallery() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#243328] via-[#1f2b22] to-[#1a241d] text-ivory-light relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-champagne/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.4em] text-champagne font-jakarta font-semibold block mb-2">
            Aesthetic Harmony
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-light text-ivory-light tracking-wide">
            Floral &amp; Stationery Gallery
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-jakarta text-ivory/60 max-w-md mx-auto tracking-wide">
            Every detail woven in the palette of sage green, champagne gold, and ivory
          </p>
          <div className="w-16 h-0.5 bg-champagne/40 mx-auto mt-5" />
        </div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              onClick={() => setActiveImage(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-champagne/30 shadow-xl bg-black/20 ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <div className="w-full h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>

              {/* Gradient overlay & caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.3em] font-jakarta text-champagne font-semibold mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-cormorant font-light text-white tracking-wide flex items-center justify-between">
                  <span>{item.title}</span>
                  <span className="text-xs text-champagne opacity-0 group-hover:opacity-100 transition-opacity">
                    View ↗
                  </span>
                </h3>
              </div>

              {/* Gold foil border highlight on hover */}
              <div className="absolute inset-0 border border-champagne/0 group-hover:border-champagne/60 transition-colors pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#1e2a21] rounded-2xl overflow-hidden border border-champagne/50 shadow-2xl cursor-default"
            >
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full max-h-[75vh] object-contain bg-black/40"
              />
              <div className="p-6 bg-gradient-to-b from-[#1e2a21] to-[#162018] flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-cormorant text-champagne">{activeImage.title}</h4>
                  <p className="text-xs text-ivory/70 font-jakarta mt-1 tracking-wide">
                    {activeImage.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setActiveImage(null)}
                  className="px-4 py-2 rounded-full border border-champagne/40 text-xs font-jakarta uppercase tracking-wider text-champagne hover:bg-champagne/20 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
