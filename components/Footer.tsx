import { useState } from "react";
import { T } from "./tokens";

function FooterLink({ label, href }: { label: string; href: string }) {
    const [hov, setHov] = useState(false);
    return (
        <a
            href={href}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                fontFamily: T.font.body,
                fontSize: 12.5,
                fontWeight: 500,
                color: hov ? T.text : T.textTertiary,
                textDecoration: "none",
                transition: "color 0.25s",
                letterSpacing: "-0.01em",
            }}
        >
            {label}
        </a>
    );
}

export function Footer() {
    return (
        <footer
            style={{
                padding: `28px ${T.space.page}px`,
                borderTop: `1px solid ${T.borderStrong}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: T.space.maxW,
                margin: "0 auto",
            }}
        >
            <span
                style={{
                    fontFamily: T.font.display,
                    fontSize: 13,
                    fontWeight: 700,
                    color: T.textSecondary,
                    letterSpacing: "-0.02em",
                }}
            >
                mustafa briggs. &copy; {new Date().getFullYear()}
            </span>
            <div style={{ display: "flex", gap: 32 }}>
                {[
                    { label: "Books", href: "#books" },
                    { label: "Speaking", href: "#speaking" },
                    { label: "Media", href: "#media" },
                    { label: "Contact", href: "#contact" },
                ].map((l) => (
                    <FooterLink key={l.label} label={l.label} href={l.href} />
                ))}
            </div>
        </footer>
    );
}
