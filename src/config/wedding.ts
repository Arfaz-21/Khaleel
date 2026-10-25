// ─── Central Config: Single source of truth ───────────────────────────────────
export const wedding = {
  // ── Couple ──────────────────────────────────────────────────────────────────
  groom: 'Khaleel',
  bride: 'Murshida',
  coupleShort: 'K & M',

  // ── Ceremony ────────────────────────────────────────────────────────────────
  ceremony: 'Nikah',
  dateISO: '2026-11-05T11:30:00+05:30', // IST
  dayOfWeek: 'Thursday',
  dateFormatted: '05 November 2026',
  time: '11:30 AM IST',

  // ── Venue ───────────────────────────────────────────────────────────────────
  venue: 'Indian Auditorium',
  venueAddress: 'Neralakatte, Mani, Karnataka',
  mapsUrl: 'https://maps.app.goo.gl/98kznvkP2K17jiHT6',

  // ── Quranic Verse ───────────────────────────────────────────────────────────
  quranArabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
  quranEnglish: 'And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.',
  quranRef: 'Surah Ar-Rum · 30:21',

  // ── Sunnah Blessing Dua ─────────────────────────────────────────────────────
  propheticDuaArabic: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
  propheticDuaEnglish: 'May Allah bless you and bestow His blessings upon you and unite you both in goodness.',

  // ── Share ───────────────────────────────────────────────────────────────────
  shareTitle: 'Khaleel & Murshida — Luxury Nikah Digital Invitation',
  shareText:
    'Assalamu Alaikum! You are warmly invited to the Nikah ceremony of Khaleel & Murshida on Thursday, 05 November 2026 at 11:30 AM at Indian Auditorium, Neralakatte, Mani. Join us with your heartfelt prayers and blessings. InshaAllah 🤍',

  // ── Invitation Wording ──────────────────────────────────────────────────────
  invitationParagraph1:
    'With the blessings of Almighty Allah, we cordially invite you and your family to celebrate the blessed union of Khaleel and Murshida as they embark on this sacred journey of Nikah.',
  invitationParagraph2:
    'Your presence and heartfelt duas will illuminate this auspicious milestone. We humbly request the honor of your company as two souls unite under Allah’s divine guidance and mercy.',

  // ── Blessings ───────────────────────────────────────────────────────────────
  closingDua:
    'May Allah bless this union with everlasting affection, peace, and barakah. May He grant happiness in this life and an eternity together in Jannah.',
  closingNote: 'Jazakallahu Khairan for blessing our special day with your presence & prayers',

  // ── Calendar Helpers ────────────────────────────────────────────────────────
  googleCalendarUrl:
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nikah+Ceremony+of+Khaleel+%26+Murshida&dates=20261105T060000Z/20261105T093000Z&details=Assalamu+Alaikum!+Warmly+invited+to+the+Nikah+Ceremony+of+Khaleel+%26+Murshida+at+Indian+Auditorium,+Neralakatte,+Mani.+InshaAllah.&location=Indian+Auditorium,+Neralakatte,+Mani',
} as const;

export type WeddingConfig = typeof wedding;
