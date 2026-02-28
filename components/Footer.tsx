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
                fontSize: T.type.small.size,
                fontWeight: T.type.small.weight,
                color: hov ? T.text : T.textTertiary,
                textDecoration: "none",
                transition: "color 0.25s",
                letterSpacing: T.type.small.tracking,
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
                padding: `${T.space.md + 4}px ${T.space.page}px`,
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
                    fontSize: T.type.caption.size,
                    fontWeight: 700,
                    color: T.textSecondary,
                    letterSpacing: "-0.02em",
                }}
            >
                mustafa briggs. &copy; {new Date().getFullYear()}
            </span>
            <div className="footer-links" style={{ display: "flex", gap: T.space.md + 8 }}>
                {[
                    { label: "About", href: "#about" },
                    { label: "Books", href: "#books" },
                    { label: "Speaking", href: "#speaking" },
                    { label: "Media", href: "#media" },
                ].map((l) => (
                    <FooterLink key={l.label} label={l.label} href={l.href} />
                ))}
            </div>
        </footer>
    );
}
