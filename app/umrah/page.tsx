"use client";

import { useState, useEffect, useCallback } from "react";
import { Reveal, JourneyIcon } from "./umrah-components";
import { plans, journeyItems, faqs, navItems } from "./umrah-data";
import "./umrah.css";

export default function UmrahPage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 80);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className="u-page" style={{ minHeight: '100vh' }}>
        <a href="#experience" className="u-skip-link">Skip to content</a>

        <nav className={`u-nav ${navScrolled ? 'scrolled' : ''}`}>
          <a href="#" className="u-nav-logo">Mustafa Briggs</a>
          <ul className="u-nav-links">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#text">Text</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#scholar">Scholar</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <button className="u-nav-hamburger" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </nav>

        <div className={`u-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <button className="u-mobile-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>{item}</a>
          ))}
        </div>

        <HeroSection />
        <ExperienceSection />
        <QuoteBand />
        <TextOfStudySection />
        <JourneySection />
        <TestimonialSection />
        <ScholarSection />
        <PricingSection plans={plans} />
        <FaqSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <CtaSection />

        <footer className="u-footer">
          <p style={{ marginBottom: '0.5rem' }}>Umrah with Mustafa Briggs &middot; November 20-29, 2026</p>
          <p>&copy; 2026 All rights reserved</p>
        </footer>

        <button
          className={`u-btt ${showBackToTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
        </button>
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <section className="u-hero">
      <div className="u-hero-img" />
      <div className="u-hero-vignette" />
      <div className="u-hero-bg" />
      <div className="u-grain" style={{ zIndex: 3 }} />
      <div className="u-pattern-overlay" style={{ zIndex: 4 }} />
      <div className="u-hero-content">
        <p className="u-hero-eyebrow">November 20-29, 2026 &middot; Makkah &amp; Madinah</p>
        <h1 className="u-hero-title">
          <span className="u-hero-title-leading">Umrah with</span>
          <em>Shaykh Mustafa Briggs</em>
        </h1>
        <p className="u-hero-subtitle">An intimate, transformative journey through the sacred lands where deep Seerah scholarship meets profound spiritual awakening in the footsteps of the Prophet &#xFDFA;.</p>
        <a href="https://forms.gle/b1XpHeaeieKkj7rA7" target="_blank" rel="noopener noreferrer" className="u-hero-cta">
          Apply Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
      </div>
      <div className="u-hero-scroll">
        <span>Discover</span>
        <div className="u-scroll-line" />
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="u-section" id="experience">
      <div className="u-section-inner">
        <Reveal className="u-section-header">
          <p className="u-section-eyebrow">The Experience</p>
          <h2 className="u-section-title">What <em>Awaits</em> You</h2>
        </Reveal>
        <div className="u-exp-grid">
          <Reveal className="u-exp-card" delay={0}>
            <svg className="u-exp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <h3>Exquisite Accommodation</h3>
            <p>Luxurious stays at the prestigious Jumeirah Jabal Omar in Makkah (3 nights) and the distinguished Dar Al-Hijra Intercontinental in Madinah (5 nights), with gourmet daily breakfast to nourish body and soul.</p>
          </Reveal>
          <Reveal className="u-exp-card" delay={150}>
            <svg className="u-exp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            <h3>Transformative Daily Sessions</h3>
            <p>Deeply immersive learning experiences with renowned Shaykh Mustafa Briggs and distinguished guest scholars in private, curated venues, exploring the Seerah through sacred classical texts rarely accessible to modern pilgrims.</p>
          </Reveal>
          <Reveal className="u-exp-card" delay={300}>
            <svg className="u-exp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
            <h3>Seamless Luxury Transport</h3>
            <p>Effortless journey with premium ground transfers, business-class train service between holy cities, exclusive dedicated SUV access, and one-year multiple-entry Umrah visa, with every detail meticulously arranged for your comfort.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <div className="u-quote-band">
      <div className="u-pattern-overlay" />
      <div className="u-grain" style={{ opacity: 0.25 }} />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Reveal delay={0}>
          <div className="u-quote-mark">&ldquo;</div>
        </Reveal>
        <Reveal delay={200}>
          <p className="u-quote-text">
            This is more than an Umrah. It is a return to knowledge, to the footsteps of the beloved &#xFDFA;, and to the truest version of yourself.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <p className="u-quote-attr">&mdash; Shaykh Mustafa Briggs</p>
        </Reveal>
      </div>
    </div>
  );
}

function TextOfStudySection() {
  return (
    <section className="u-study" id="text">
      <div className="u-study-inner">
        <Reveal className="u-section-header" style={{ marginBottom: '3rem' }}>
          <p className="u-section-eyebrow">Text of Study</p>
          <h2 className="u-section-title">The <em>Poem</em> We Will Study</h2>
        </Reveal>

        <Reveal>
          <div className="u-study-hero">
            <div className="u-study-book-col">
              <div className="u-study-book-wrapper">
                <div className="u-study-book">
                  <img
                    src="https://images.arabicbookshop.net/318-057_4_3.jpg"
                    alt="Al-Arjuzah al-Mi'iyyah"
                    loading="lazy"
                  />
                  <div className="u-study-book-pages" />
                </div>
              </div>
            </div>
            <div className="u-study-title-block">
              <p className="u-study-arabic">&#x627;&#x644;&#x623;&#x631;&#x62C;&#x648;&#x632;&#x629; &#x627;&#x644;&#x645;&#x64A;&#x626;&#x64A;&#x629; &#x641;&#x64A; &#x630;&#x643;&#x631; &#x62D;&#x627;&#x644; &#x623;&#x634;&#x631;&#x641; &#x627;&#x644;&#x628;&#x631;&#x64A;&#x629;</p>
              <p className="u-study-transliteration">Al-Arjuzah al-Mi&rsquo;iyyah fi Dhikr Hal Ashraf al-Bariyyah</p>
              <p className="u-study-english">A Hundred-Line Poem on the Life of the Noblest of Creation</p>
              <p className="u-study-intro">
                A rare and exquisite classical text composed in approximately one hundred lines of rajaz poetry, masterfully tracing the most pivotal moments of the Prophet&rsquo;s &#xFDFA; blessed life from his noble lineage and miraculous birth to divine revelation, the transformative Hijrah, the glorious Madinan period, and his passing, while illuminating his unparalleled character and timeless virtues.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="u-study-cards">
          <Reveal className="u-study-card" delay={0}>
            <svg className="u-study-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            <h4>The Esteemed Author</h4>
            <p>Imam Ibn Abi al-Izz al-Hanafi (d. 792 AH), a revered and distinguished jurist of Damascus, celebrated for his profound commentary on al-Aqidah al-Tahawiyyah. This remarkable work reflects the treasured classical tradition of distilling the Seerah into an elegant, structured, and deeply memorable form.</p>
          </Reveal>
          <Reveal className="u-study-card" delay={150}>
            <svg className="u-study-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            <h4>Immersive Daily Method</h4>
            <p>This sacred poem serves as the spiritual and intellectual foundation of our exclusive daily sessions. Each transformative lesson includes:</p>
            <ul>
              <li>Beautiful recitation of carefully selected lines</li>
              <li>Expert translation &amp; insightful commentary</li>
              <li>Rich historical context &amp; profound reflections</li>
            </ul>
          </Reveal>
          <Reveal className="u-study-card" delay={300}>
            <svg className="u-study-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <h4>Deeply Enriched Learning</h4>
            <p>We masterfully enrich the text through illuminating Qur&rsquo;anic verses, authentic Prophetic hadith, and timeless wisdom from the classical scholars, while drawing on the sacred Shama&rsquo;il to profoundly deepen our understanding of the noble character and blessed presence of the Prophet &#xFDFA;.</p>
          </Reveal>
        </div>

        <Reveal>
          <div className="u-study-banner">
            <h4>Studied in the blessed city of Madinah, this sacred text transcends theory: the Seerah is vividly experienced, not merely learned.</h4>
            <p>As we reverently visit key historical sites and walk the very sacred spaces where these momentous events unfolded, this becomes an unprecedented opportunity to harmoniously combine profound knowledge, hallowed place, and spiritual presence, and to connect to the luminous life of the Prophet &#xFDFA; with exceptional clarity, remarkable depth, and boundless love.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="u-section" id="journey">
      <div className="u-section-inner">
        <Reveal className="u-section-header">
          <p className="u-section-eyebrow">The Journey</p>
          <h2 className="u-section-title">More Than <em>Umrah</em></h2>
        </Reveal>
        <div className="u-journey-grid">
          {journeyItems.map((item, i) => (
            <Reveal key={i} className="u-journey-card" delay={i * 150}>
              <span className="u-journey-num">{item.num}</span>
              <JourneyIcon type={item.icon} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="u-section">
      <div className="u-section-inner">
        <Reveal className="u-testimonial">
          <p className="u-testimonial-text">&ldquo;Traveling with Shaykh Mustafa transformed the way I understand the places I visited. Every site became a lesson, every prayer became deeper. It wasn&rsquo;t tourism &mdash; it was transformation.&rdquo;</p>
          <p className="u-testimonial-name">Past Traveler</p>
          <p className="u-testimonial-trip">Previous Umrah Journey</p>
        </Reveal>
      </div>
    </section>
  );
}

function ScholarSection() {
  return (
    <section className="u-section" id="scholar" style={{ background: 'var(--ivory-light)' }}>
      <div className="u-section-inner">
        <Reveal className="u-section-header">
          <p className="u-section-eyebrow">Your Guides</p>
          <h2 className="u-section-title">Led by <em>Scholars</em> of Tradition</h2>
        </Reveal>

        <div className="u-scholar">
          <Reveal delay={0}>
            <div className="u-scholar-image">
              <img src="/WhatsApp_Image_2026-02-10_at_10.31.15_PM_(1).jpeg" alt="Shaykh Mustafa Briggs" />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="u-scholar-info">
              <h3>Shaykh Mustafa Briggs</h3>
              <p className="u-scholar-role">Distinguished Scholar &middot; Author &middot; Lead Guide</p>
              <p>Shaykh Mustafa Briggs is a highly acclaimed scholar of Islamic history and the celebrated author of <em>Beyond Bilal: Black History in Islam</em>. He has devoted many years to meticulously studying the Seerah and the magnificently rich tapestry of Islamic civilization across continents.</p>
              <p>His uniquely powerful approach masterfully weaves together deep historical knowledge with vibrant, living spiritual practice, transforming the sacred places you visit from mere landmarks into profoundly moving encounters with the timeless legacy of the Prophet &#xFDFA; and the luminous scholars who faithfully followed.</p>
            </div>
          </Reveal>
        </div>

        <Reveal style={{ padding: '3rem 0' }}>
          <div className="u-guest-divider">
            <div className="u-guest-divider-line" />
            <span className="u-guest-divider-label">Guest Lecturer</span>
            <div className="u-guest-divider-line" />
          </div>
        </Reveal>

        <div className="u-guest">
          <Reveal delay={0}>
            <div className="u-guest-image">
              <img src="https://static.wixstatic.com/media/7831ee_6ab6a9c2ba3641f0a68fdc93403781cd~mv2.jpg/v1/fill/w_1302,h_1688,al_t,q_90,enc_avif,quality_auto/7831ee_6ab6a9c2ba3641f0a68fdc93403781cd~mv2.jpg" alt="Shaykh Zakariya Abdul Aziz" />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="u-guest-info">
              <h3>Shaykh Zakariya Abdul Aziz</h3>
              <p className="u-guest-role">Distinguished Guest Lecturer</p>
              <p>Shaykh Zakaria is a distinguished graduate with honours from the esteemed Alimiyyah program at Dar al-Mustafa in Tarim, Yemen. This was preceded by seven intensive years of classical training in both the transmitted and rational sciences of the Islamic tradition.</p>
              <p style={{ marginTop: '1rem' }}>He holds authorizations in Qur&rsquo;anic recitations, hadith transmission and methodology, and Shafi&rsquo;i jurisprudence. Shaykh Zakaria is also qualified to teach a wide range of Islamic and linguistic sciences. These include Qur&rsquo;anic exegesis, ethics, legal theory, scholastic theology, logic, dialectics, Arabic morphology, grammar, rhetoric, and literature.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ plans: planData }: { plans: typeof plans }) {
  return (
    <section className="u-section u-pricing-section" id="pricing">
      <div className="u-section-inner">
        <Reveal className="u-section-header">
          <p className="u-section-eyebrow">Investment</p>
          <h2 className="u-section-title">An Extraordinary <em>Offering</em></h2>
        </Reveal>

        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--charcoal-light)', marginBottom: '2.5rem' }}>
              This is more than an Umrah trip; it&rsquo;s a once-in-a-lifetime scholarly pilgrimage. Intimate class sizes, world-renowned guidance, premium accommodations steps from the Haram, and transformative lessons woven into every sacred site.
            </p>
            <p className="u-price-amount"><span>$</span>4,500</p>
            <p className="u-price-note">Complete all-inclusive package per person</p>
            <div className="u-price-deposit">Reserve your place with just a deposit today</div>
          </div>
        </Reveal>

        <Reveal>
          <p style={{ textAlign: 'center', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--charcoal-muted)', marginBottom: '2rem', fontWeight: 500 }}>
            Flexible Payment Plans
          </p>
        </Reveal>

        <div className="u-plans-grid">
          {planData.map((plan, i) => (
            <Reveal key={i} className={`u-plan ${plan.featured ? 'featured' : ''}`} delay={i * 120}>
              {plan.badge && <div className="u-plan-badge">{plan.badge}</div>}
              <p className="u-plan-name" style={plan.featured ? { color: 'var(--ivory)' } : undefined}>{plan.name}</p>
              <p className="u-plan-price">{plan.price}</p>
              <p className="u-plan-period">{plan.period}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection({ faqs: faqData, openFaq, setOpenFaq }: {
  faqs: typeof faqs;
  openFaq: number | null;
  setOpenFaq: (v: number | null) => void;
}) {
  return (
    <section className="u-section" id="faq">
      <div className="u-section-inner">
        <Reveal className="u-section-header">
          <p className="u-section-eyebrow">Questions</p>
          <h2 className="u-section-title">Frequently <em>Asked</em></h2>
        </Reveal>
        <Reveal className="u-faq-list">
          {faqData.map((item, i) => (
            <div key={i} className={`u-faq-item ${openFaq === i ? 'open' : ''}`}>
              <button className="u-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {item.q}
                <svg className="u-faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
              </button>
              <div className="u-faq-a"><p>{item.a}</p></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="u-cta">
      <div className="u-pattern-overlay" />
      <div className="u-grain" style={{ opacity: 0.25 }} />
      <div className="u-cta-content">
        <Reveal>
          <p className="u-cta-bismillah">&#x628;&#x633;&#x645; &#x627;&#x644;&#x644;&#x647;</p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="u-cta-title">Begin Your <em>Sacred Journey</em></h2>
        </Reveal>
        <Reveal delay={300}>
          <p className="u-cta-desc">This Thanksgiving, November 20-29, 2026, step away from the ordinary and into an extraordinary, soul-stirring journey that will profoundly reshape how you see the world, understand your faith, and discover your truest self.</p>
        </Reveal>
        <Reveal delay={450}>
          <div className="u-cta-action">
            <a href="https://forms.gle/b1XpHeaeieKkj7rA7" target="_blank" rel="noopener noreferrer" className="u-cta-button">
              Apply Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <div className="u-cta-spots">
              <span className="u-cta-dot" />
              Limited spaces remaining
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
