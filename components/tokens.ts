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
   Every image URL pulled from saffana.co.uk
   ═══════════════════════════════════════════════════════════════ */

const SQ = "https://images.squarespace-cdn.com/content/v1/66890c8a107a771bc7c92f81";

export const ASSETS = {
  heroPhoto: `${SQ}/e57845ef-ac8e-4fd4-9348-06110754aab0/SAFFANA+MONAJED+COPYWRITER+PHOTO`,
  secondPhoto: `${SQ}/2224e1dc-2eec-468e-9f09-855595b44a97/SAF+%2B+JAM+%2B+FAM-18.jpg`,
  logos: [
    { name: "Sainsbury's", url: `${SQ}/5ea3723d-d7ac-4a36-888b-9306f14307e2/Sainsbury%27s_Logo.svg.png` },
    { name: "MSF", url: `${SQ}/e8e4cdb2-d617-4a77-861c-e78a92466cf6/Me%CC%81decins_Sans_Frontie%CC%80res+-+msf+logo+.png` },
    { name: "Omnicom", url: `${SQ}/ffc77d95-c835-46dc-9b76-ec90a6e1d379/omnicom-media-group-logo-png_seeklogo-458339.png` },
    { name: "Football Beyond Borders", url: `${SQ}/e6d6db3e-1e76-4258-a68a-5cff7e187a8e/FBB_LogoSecondary_Black.png` },
    { name: "LYRA", url: `${SQ}/89715493-8d8c-4ff1-a75b-bbc31910a136/LOGOWORD++LYRA+BLACK.png` },
    { name: "Sona", url: `${SQ}/c22eaa97-58cb-4526-880f-a1d35a6c4ea7/Sona+logo.webp` },
    { name: "Reaching Higher", url: `${SQ}/0236aa0d-78fb-4107-98de-db3e19c066c3/reaching+higher+logo.png` },
    { name: "Yrs Truly", url: `${SQ}/5828183c-1619-48a3-b4ad-339385bc88c8/yrs+truly+logo.png` },
    { name: "RTP", url: `${SQ}/6924736a-454f-462c-99a5-355c0249361a/RTP-Logo-1-300x170.png` },
    { name: "Creative Ed", url: `${SQ}/14736e01-f021-4f5c-afaa-257c96e3faab/Blue+and+Orange++Creative+Education+Platform+Logo+%288%29.png` },
    { name: "Creative Ed 2", url: `${SQ}/1de78a98-f530-42cb-9446-92264dfd4390/Blue+and+Orange++Creative+Education+Platform+Logo+%287%29.png` },
  ],
  press: [
    { img: `${SQ}/870f2117-3908-4c8b-9c6f-e9d21c3c0f60/tazzy+phe.png`, label: "Tazzy Phe", type: "Video", url: "https://www.youtube.com/watch?v=8fTr_Ck76_U" },
    { img: `${SQ}/2aa9d08f-df3e-4c87-b2e3-8ac1a182c5a3/breaking+binaries.png`, label: "Breaking Binaries", type: "Podcast", url: "https://podcasts.apple.com/us/podcast/black-white-with-saffana-monajed/id1474798867?i=1000455172811" },
    { img: `${SQ}/3e1afe76-c29a-4276-be54-3766559db442/trt+1.jpg`, label: "TRT Roundtable", type: "Video", url: "https://www.youtube.com/watch?v=Zz7icc-FPuI" },
    { img: `${SQ}/a53f4114-ea6f-485a-9068-b802c7035f6f/vice.jpg`, label: "Vice", type: "Article", url: "https://www.vice.com/en/article/pkav5y/pro-palestine-tiktok-gen-z-digital-activism" },
  ],
};

export const TESTIMONIALS = [
  { quote: "I learnt more in these 2 hours than any other all day workshop I've ever attended.", name: "Karina S.", org: "MSF — Doctors Without Borders" },
  { quote: "We are going to rip up our approach to speaking to schools and start again, all because of this short workshop.", name: "Football Beyond Borders", org: "Director of Programmes" },
  { quote: "The new unofficial internal mantra has become \"what would Saffana say\" and I can't imagine it any other way.", name: "Hashim Z.", org: "CoFounder, LYRA Modest" },
  { quote: "I've never had a copywriter immerse themselves into my work the way you have and it made all the difference.", name: "Carmen S.", org: "Founder, Numinous Network" },
  { quote: "We are still talking about your training, which is mostly me shouting 'sell the benefits.'", name: "Caroline M.", org: "MD, Indigo Pearl" },
  { quote: "Saffana is without a doubt the most talented, entertaining and well read copywriter I know.", name: "Football Beyond Borders", org: "Snr Marketing + Comms Manager" },
];

export const SERVICES = [
  { title: "Book Workshops", desc: "Up-skill yourself or your team. Invite your marketing team and experience a VERY tailored workshop. Never out of the box.", cta: "Explore workshops", href: "/workshops" },
  { title: "Learn On-Demand", desc: "Get real good at writing. Write to be understood, communicate so the reader feels heard. Make more sales, and create impact with your words.", cta: "Start learning", href: "/learn" },
  { title: "Get Writing Done", desc: "Just hire me to write your words for you! I can write the great words for you, but most importantly, I can write the words that move the needle. The money needle.", cta: "Let's collaborate", href: "/contact" },
];

export const NAV_LINKS = [
  { label: "Workshops", href: "/workshops" },
  { label: "On-Demand", href: "/learn" },
  { label: "Knowledge Vault", href: "/personal-learning-library" },
  { label: "Subscribe", href: "https://saffanasvoicenotes.substack.com/" },
];
