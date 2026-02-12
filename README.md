# Saffana — Comms Strategy + Writing Workshops

An elevated, production-ready Next.js website for [saffana.co.uk](https://www.saffana.co.uk).

## Design

- **Typography**: Satoshi (display) + General Sans (body) via Fontshare
- **Color**: Near-black `#111110` + warm off-white `#fafaf8` + single accent `#e8580c`
- **Motion**: Scroll-triggered reveals, magnetic buttons, horizontal scroll testimonials
- **Principles**: Apple-level clarity, generous negative space, purposeful animation

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Click Deploy

That's it. Live in ~60 seconds.

## Project Structure

```
├── app/
│   ├── globals.css       # Reset + global styles + keyframes
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   └── page.tsx          # Homepage — composes all sections
├── components/
│   ├── tokens.ts         # Design tokens, asset URLs, data
│   ├── hooks.ts          # useReveal, useMouse
│   ├── ui.tsx            # Reveal, Tag, Heading, Btn, Arrow
│   ├── Nav.tsx           # Frosted glass navigation
│   ├── Hero.tsx          # Hero with staggered entrance
│   ├── LogoBar.tsx       # Infinite marquee of trust logos
│   ├── Services.tsx      # 3-card service grid
│   ├── Statement.tsx     # Full-bleed dark statement
│   ├── Testimonials.tsx  # Horizontal scroll + star ratings
│   ├── Press.tsx         # Press cards with hover overlays
│   ├── Signup.tsx        # Email capture with pill input
│   └── Footer.tsx        # Footer
├── next.config.js        # Image domains config
├── tsconfig.json
└── package.json
```

## Notes

- All images are served from the existing Squarespace CDN
- All 11 trust/logo markers from the live site are included
- All 4 press items with correct external links
- All 6 testimonials with attribution
- Copy is identical to the current live site
