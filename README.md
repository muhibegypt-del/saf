# Mustafa Briggs — Best-Selling Author & Historian

An elevated, production-ready Next.js website for [mustafabriggs.com](https://www.mustafabriggs.com).

## Design

- **Typography**: Satoshi (display) + Switzer (body) via Fontshare
- **Color**: Near-black `#141413` + warm off-white `#FDFBF7` + single accent `#CC6842`
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
│   ├── hooks.ts          # useReveal, useMagnetic, useParallax
│   ├── ui.tsx            # Reveal, Tag, Heading, Btn, Arrow
│   ├── Nav.tsx           # Frosted glass navigation
│   ├── Hero.tsx          # Hero with staggered entrance
│   ├── LogoBar.tsx       # University trust bar marquee
│   ├── Services.tsx      # Book showcase grid (4 books)
│   ├── Statement.tsx     # Full-bleed dark statement
│   ├── Testimonials.tsx  # Horizontal scroll reviews
│   ├── Press.tsx         # Media appearances grid
│   ├── Signup.tsx        # Bookings & contact form
│   └── Footer.tsx        # Footer
├── public/
│   └── logos/            # University SVG logos
├── tsconfig.json
└── package.json
```

## Content

- Author photo sourced from Sacred Footsteps
- Book covers from Amazon CDN
- 11 university trust logos (Harvard, Yale, Oxford, Cambridge, and more)
- 4 media appearances with external links
- 6 reader/audience testimonials
- Contact form with mailto: bookings@mustafabriggs.com
