/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS
   Single source of truth for colors, typography, spacing, and motion.
   ═══════════════════════════════════════════════════════════════ */

export const T = {
  // ── Colors ──────────────────────────────────────────
  bg: "#FDFBF7",
  surface: "#FFFFFF",
  dark: "#141413",
  darkSoft: "#1F1E1D",
  text: "#1C1B1A",
  textSecondary: "#6F6D66",
  textTertiary: "#A3A098",
  border: "#E6E2DD",
  borderHover: "#D1CDC7",
  borderStrong: "#C2BEB7",
  accent: "#CC6842",
  accentSoft: "#F2E8E3",

  // ── Radii ───────────────────────────────────────────
  radius: { sm: 12, md: 16, lg: 24, xl: 32, full: 9999 },

  // ── Typography ──────────────────────────────────────
  font: {
    display: "'Satoshi', 'SF Pro Display', -apple-system, sans-serif",
    body: "'Switzer', 'SF Pro Text', -apple-system, sans-serif",
  },
  type: {
    h1:      { size: "clamp(46px, 5vw, 72px)", weight: 800, leading: 1.04, tracking: "-0.045em" },
    h2:      { size: "clamp(32px, 3.7vw, 52px)", weight: 700, leading: 1.08, tracking: "-0.035em" },
    h3:      { size: 20, weight: 700, leading: 1.2, tracking: "-0.03em" },
    quote:   { size: "clamp(28px, 3.2vw, 44px)", weight: 700, leading: 1.3, tracking: "-0.03em" },
    body:    { size: 16, weight: 400, leading: 1.75, tracking: "-0.01em" },
    bodySmall: { size: 14, weight: 400, leading: 1.65, tracking: "-0.005em" },
    caption: { size: 13, weight: 600, leading: 1.4, tracking: "-0.01em" },
    label:   { size: 11.5, weight: 600, leading: 1.2, tracking: "0.12em" },
    small:   { size: 12.5, weight: 500, leading: 1.4, tracking: "-0.005em" },
  },

  // ── Spacing (semantic) ──────────────────────────────
  space: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 48,
    xl: 80,
    section: 120,       // vertical padding for full sections
    sectionSm: 80,      // vertical padding for compact sections
    page: 48,            // horizontal page gutter
    pageMobile: 20,      // horizontal gutter on mobile
    pageXs: 16,          // horizontal gutter on small mobile
    maxW: 1360,          // content max-width
    cardPad: 24,         // card content padding
    cardGap: 20,         // gap between card grid items
    tagGap: 12,          // gap between tag and heading
    headingGap: 48,      // gap between section heading and content
    prose: 640,          // max-width for body text paragraphs
    proseWide: 900,      // max-width for wide text blocks
  },

  // ── Breakpoints ─────────────────────────────────────
  bp: {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280,
  },

  // ── Easing ──────────────────────────────────────────
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

/* ═══════════════════════════════════════════════════════════════
   ASSET MANIFEST
   Image URLs and asset references for mustafabriggs.com
   ═══════════════════════════════════════════════════════════════ */

export const ASSETS = {
  heroPhoto: "/WhatsApp_Image_2026-02-10_at_10.31.15_PM_(1).jpeg",
  logos: [
    { name: "Harvard University", url: "/logos/harvard.svg" },
    { name: "Yale University", url: "/logos/yale.svg" },
    { name: "University of Oxford", url: "/logos/oxford.svg" },
    { name: "University of Cambridge", url: "/logos/cambridge.svg" },
    { name: "King's College London", url: "/logos/kings-college.svg" },
    { name: "University of Edinburgh", url: "/logos/edinburgh.svg" },
    { name: "University of Michigan", url: "/logos/michigan.svg" },
    { name: "University of Toronto", url: "/logos/toronto.svg" },
    { name: "UCL", url: "/logos/ucl.svg" },
    { name: "SOAS University of London", url: "/logos/soas.svg" },
    { name: "Al-Azhar University", url: "/logos/al-azhar.svg" },
  ],
  press: [
    { img: "https://img.youtube.com/vi/uE3pf7P2O_Q/hqdefault.jpg", label: "OnePath Network", type: "Podcast", url: "https://www.youtube.com/watch?v=uE3pf7P2O_Q" },
    { img: "https://img.youtube.com/vi/fAcHJPxGZG8/hqdefault.jpg", label: "The Ansari Podcast", type: "Interview", url: "https://www.youtube.com/watch?v=fAcHJPxGZG8" },
    { img: "https://img.youtube.com/vi/wvFZIz9t0jw/hqdefault.jpg", label: "IlmFeed Podcast", type: "Lecture", url: "https://www.youtube.com/watch?v=wvFZIz9t0jw" },
    { img: "https://img.youtube.com/vi/1VZBKwvqHgM/hqdefault.jpg", label: "Mustafa Briggs", type: "Lecture", url: "https://www.youtube.com/watch?v=1VZBKwvqHgM" },
  ],
};

export const BOOKS = [
  {
    title: "Beyond Bilal",
    desc: "The pioneering Amazon #1 bestseller adapted from the internationally acclaimed lecture series delivered at over 50 universities worldwide. A groundbreaking exploration of overlooked Islamic history \u2014 from the earliest generations to the legacy of traditional African Islamic scholarship. Now part of the curriculum at Edinburgh University.",
    cover: "https://m.media-amazon.com/images/I/51Uu7EAHoSL._SL500_.jpg",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com/Beyond-Bilal-Black-History-Islam/dp/B09RVDYCXL",
    badge: "#1 Bestseller",
  },
  {
    title: "Islam & The Making of the Modern World",
    desc: "A collection of essays illuminating pivotal moments where Muslim civilisations significantly influenced science, culture, trade, and politics \u2014 challenging dominant narratives and revealing Islam\u2019s transformative role in shaping the modern world. #1 Amazon bestseller within 48 hours of release.",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1746914585i/225517659.jpg",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com/Islam-Making-Modern-Mustafa-Briggs/dp/B0DVQSS18M",
    badge: "#1 Bestseller",
  },
  {
    title: "Taqwa: The Art of Living in Allah\u2019s Presence",
    desc: "Adapted from his acclaimed Ramadan 2023 video series, this guide explores questions about taqwa with warmth, depth, and scholarly rigor \u2014 drawing upon Quranic verses and Prophetic narrations to offer a practical and spiritual guide to living with God-consciousness.",
    cover: "https://images-na.ssl-images-amazon.com/images/P/B0GNMY7ZKD.01.LZZZZZZZ.jpg",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com/Taqwa-Art-Living-Allahs-Prescence/dp/B0GNMY7ZKD",
  },
];

export const TESTIMONIALS = [
  { quote: "Beyond Bilal is essential reading for anyone who wants to understand the full breadth of Islamic history. Shaykh Mustafa uncovers what centuries of neglect have buried.", name: "Amazon Reader", org: "Verified Purchase" },
  { quote: "Shaykh Mustafa has a rare gift for making rigorous, classically grounded scholarship accessible and deeply moving. His lectures at our university were transformative for students and faculty alike.", name: "University Lecturer", org: "Islamic Studies Department" },
  { quote: "I have attended lectures at over a dozen universities and none have captivated an audience quite like Mustafa. His storytelling brings history to life in the most extraordinary way.", name: "Event Organiser", org: "University Islamic Society" },
  { quote: "Islam & The Making of the Modern World is a masterclass in reclaiming narratives. Briggs writes with evidence, clarity, and an unmistakable passion for historical truth.", name: "Goodreads Reader", org: "5-Star Review" },
  { quote: "Taqwa changed the way I approach my daily life. It is equal parts scholarly and spiritual \u2014 the kind of book you keep on your bedside table and return to again and again.", name: "Amazon Reader", org: "Verified Purchase" },
  { quote: "From Oxford to Harvard, the Beyond Bilal lecture series has become a must-attend event. Shaykh Mustafa\u2019s ability to connect centuries of history to our present moment is unmatched.", name: "Student Attendee", org: "Beyond Bilal World Tour" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Books", href: "#books" },
  { label: "Speaking", href: "#speaking" },
  { label: "Media", href: "#media" },
  { label: "Umrah", href: "/umrah" },
];
