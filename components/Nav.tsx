import { useState, useEffect } from "react";
import { T, NAV_LINKS } from "./tokens";

function NavLink({ label, href }: { label: string; href: string }) {
    const [hov, setHov] = useState(false);
    return (
        <a
            href={href}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                fontFamily: T.font.body,
                fontSize: 13,
                fontWeight: 500,
                color: hov ? T.text : T.textSecondary,
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "color 0.25s",
                position: "relative",
                paddingBottom: 2,
            }}
        >
            {label}
            {/* Underline draw on hover */}
            <span
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 1,
                    background: T.text,
                    transform: hov ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: `transform 0.35s ${T.ease}`,
                }}
            />
        </a>
    );
}

function NavCta() {
    const [hov, setHov] = useState(false);
    return (
        <a
            href="/contact"
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                fontFamily: T.font.body,
                fontSize: 13,
                fontWeight: 600,
                color: T.text,
                background: "transparent",
                padding: "9px 20px",
                borderRadius: T.radius.full,
                border: `1.5px solid ${hov ? T.text : T.borderHover}`,
                textDecoration: "none",
                transition: `all 0.3s ${T.ease}`,
            }}
        >
            Collaborate
        </a>
    );
}

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 100);
        const h = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", h, { passive: true });
        return () => {
            clearTimeout(t);
            window.removeEventListener("scroll", h);
        };
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: scrolled
                    ? `14px ${T.space.page}px`
                    : `20px ${T.space.page}px`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: scrolled ? "rgba(253, 251, 247, 0.85)" : "transparent",
                backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
                borderBottom: scrolled
                    ? `1px solid ${T.borderStrong}`
                    : "1px solid transparent",
                transition: `all 0.4s ${T.ease}`,
                /* Entrance animation */
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-20px)",
            }}
        >
            <a
                href="/"
                style={{
                    fontFamily: T.font.display,
                    fontSize: 22,
                    fontWeight: 800,
                    color: T.text,
                    textDecoration: "none",
                    letterSpacing: "-0.045em",
                }}
            >
                saffana.
            </a>
            <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
                {NAV_LINKS.map((l) => (
                    <NavLink key={l.label} label={l.label} href={l.href} />
                ))}
                <NavCta />
            </div>
        </nav>
    );
}
