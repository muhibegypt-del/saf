import { useState } from "react";
import { T } from "./tokens";

function FooterLink({ label }: { label: string }) {
    const [hov, setHov] = useState(false);
    return (
        <a
            href="#"
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
                saffana. © {new Date().getFullYear()}
            </span>
            <div style={{ display: "flex", gap: 32 }}>
                {["Workshops", "On-Demand", "Collaborate", "Subscribe"].map((l) => (
                    <FooterLink key={l} label={l} />
                ))}
            </div>
        </footer>
    );
}
