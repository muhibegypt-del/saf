/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS
   Single source of truth for colors, typography, spacing, and motion.
   ═══════════════════════════════════════════════════════════════ */

export const T = {
  // Colors
  bg: "#FDFBF7",         // Warm Cream / Off-White
  surface: "#FFFFFF",    // White (Cards)
  dark: "#141413",       // Near-Black (Warm)
  darkSoft: "#1F1E1D",   // Soft Black
  text: "#1C1B1A",       // Body Text
  textSecondary: "#6F6D66", // Warm Grey
  textTertiary: "#A3A098", // Stone Grey
  border: "#E6E2DD",     // Tan / Beige
  borderHover: "#D1CDC7", // Darker Tan
  borderStrong: "#C2BEB7", // Strong Structure
  accent: "#CC6842",     // Deep Terracotta (Warm/Earthy)
  accentSoft: "#F2E8E3", // Soft Blush / Peachy-Pink (Backgrounds)

  // Radii
  radius: {
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    full: 9999,
  },

  // Typography
  font: {
    display: "'Satoshi', 'SF Pro Display', -apple-system, sans-serif",
    body: "'Switzer', 'SF Pro Text', -apple-system, sans-serif",
  },

  // Spacing
  space: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 48,
    xl: 80,
    section: 120,
    page: 48,      // horizontal page gutter
    maxW: 1360,    // content max-width
  },

  // Easing
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

/* ═══════════════════════════════════════════════════════════════
   ASSET MANIFEST
   Image URLs and asset references for mustafabriggs.com
   ═══════════════════════════════════════════════════════════════ */

export const ASSETS = {
  heroPhoto: "https://i0.wp.com/sacredfootsteps.com/wp-content/uploads/2024/08/IMG_0942-scaled.jpeg?fit=1920%2C2560&ssl=1",
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
    { img: "https://m.media-amazon.com/images/I/51Uu7EAHoSL._SL500_.jpg", label: "OnePath Network", type: "Podcast", url: "https://onepathnetwork.com/history/how-my-african-ancestors-lost-islam-and-came-back-ustadh-mustafa-briggs/" },
    { img: "https://m.media-amazon.com/images/I/51f-CeoLTTL._SL500_.jpg", label: "The Malcolm Effect", type: "Podcast", url: "https://podcasts.apple.com/podcast/the-malcolm-effect/id1553030343" },
    { img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1746914585i/225517659.jpg", label: "The Michigan Daily", type: "Feature", url: "https://www.michigandaily.com/news/campus-life/dr-mustafa-briggs-talks-islam-black-history-and-malcolm-xs-legacy/" },
    { img: "https://images-na.ssl-images-amazon.com/images/P/B0GNMY7ZKD.01.LZZZZZZZ.jpg", label: "Sacred Footsteps", type: "Interview", url: "https://sacredfootsteps.com/author/mustafabriggs/" },
  ],
};

export const BOOKS = [
  {
    title: "Beyond Bilal: Black History in Islam",
    desc: "The pioneering Amazon #1 bestseller exploring the profound and often-overlooked connection between Islam and Black history \u2014 from the Black Prophets of the Quran to the legacy of contemporary African Islamic scholarship. Now part of the curriculum at Edinburgh University.",
    cover: "https://m.media-amazon.com/images/I/51Uu7EAHoSL._SL500_.jpg",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com/Beyond-Bilal-Black-History-Islam/dp/B09RVDYCXL",
    badge: "#1 Bestseller",
  },
  {
    title: "Beyond Bilal: Black Muslims in the East",
    desc: "The second volume moves eastward to explore the little-discussed relationship between Africa, Asia, and the Middle East \u2014 covering Black History in the Arabian Peninsula, legendary Black heroes of pre-Islamic Arabia, and brilliant Black intellectuals of the Islamic Empires.",
    cover: "https://m.media-amazon.com/images/I/51f-CeoLTTL._SL500_.jpg",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com/Beyond-Bilal-Black-Muslims-East/dp/B0CLYLXB1N",
  },
  {
    title: "Islam & The Making of the Modern World",
    desc: "A collection of essays challenging dominant Eurocentric narratives, illuminating pivotal moments where Muslim civilisations significantly influenced science, culture, trade, and politics. #1 Amazon bestseller in History of Islam within 48 hours of release.",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1746914585i/225517659.jpg",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com/Islam-Making-Modern-Mustafa-Briggs/dp/B0DVQSS18M",
    badge: "#1 Bestseller",
  },
  {
    title: "Taqwa: The Art of Living in Allah\u2019s Presence",
    desc: "Adapted from his acclaimed Ramadan 2023 video series, this guide explores questions about taqwa with warmth, depth, and scholarly rigor, drawing upon Quranic verses and Prophetic narrations. A guide to reflection, comfort, and purpose.",
    cover: "https://images-na.ssl-images-amazon.com/images/P/B0GNMY7ZKD.01.LZZZZZZZ.jpg",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com/Taqwa-Art-Living-Allahs-Prescence/dp/B0GNMY7ZKD",
  },
];

export const TESTIMONIALS = [
  { quote: "Beyond Bilal opened my eyes to an entire world of Black Islamic history that I never knew existed. This is essential reading for anyone seeking a fuller picture of civilisation.", name: "Amazon Reader", org: "Verified Purchase" },
  { quote: "Mustafa Briggs has a rare gift for making rigorous scholarship accessible and deeply moving. His lectures at our university were transformative for students and faculty alike.", name: "University Lecturer", org: "Islamic Studies Department" },
  { quote: "I have attended lectures at over a dozen universities and none have captivated an audience quite like Mustafa. His storytelling brings history to life in the most extraordinary way.", name: "Event Organiser", org: "University Islamic Society" },
  { quote: "Islam & The Making of the Modern World is a masterclass in reclaiming narratives. Briggs challenges Eurocentrism with evidence, clarity, and an unmistakable passion for truth.", name: "Goodreads Reader", org: "5-Star Review" },
  { quote: "Taqwa changed the way I approach my daily life. It is equal parts scholarly and spiritual \u2014 the kind of book you keep on your bedside table and return to again and again.", name: "Amazon Reader", org: "Verified Purchase" },
  { quote: "From Oxford to Harvard, Mustafa\u2019s Beyond Bilal lecture series has become a must-attend event. His ability to connect centuries of history to our present moment is unmatched.", name: "Student Attendee", org: "Beyond Bilal World Tour" },
];

export const NAV_LINKS = [
  { label: "Books", href: "#books" },
  { label: "Speaking", href: "#speaking" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];
