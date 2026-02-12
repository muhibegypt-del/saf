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
            }}
        >
            {label}
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
    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", h, { passive: true });
        return () => window.removeEventListener("scroll", h);
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
                background: scrolled ? "rgba(250,250,248,0.97)" : "transparent",
                borderBottom: scrolled
                    ? `1px solid ${T.borderStrong}`
                    : "1px solid transparent",
                transition: `all 0.4s ${T.ease}`,
            }}
        >
            <a
                href="/"
                style={{
                    fontFamily: T.font.display,
                    fontSize: 17,
                    fontWeight: 700,
                    color: T.text,
                    textDecoration: "none",
                    letterSpacing: "-0.04em",
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
