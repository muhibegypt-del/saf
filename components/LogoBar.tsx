import { useState } from "react";
import { T, ASSETS } from "./tokens";
import { useReveal } from "./hooks";

function Logo({ logo }: { logo: { name: string; url: string } }) {
    const [hov, setHov] = useState(false);
    return (
        <img
            src={logo.url}
            alt={logo.name}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                height: 26,
                opacity: hov ? 0.5 : 0.3,
                filter: "grayscale(100%)",
                transition: "opacity 0.4s ease",
                flexShrink: 0,
            }}
        />
    );
}

export function LogoBar() {
    const [ref, vis] = useReveal(0.15);
    const logos = [...ASSETS.logos, ...ASSETS.logos];
    return (
        <section
            ref={ref}
            style={{
                padding: "44px 0",
                borderTop: `1px solid ${T.borderStrong}`,
                borderBottom: `1px solid ${T.borderStrong}`,
                background: T.surface,
                overflow: "hidden",
                opacity: vis ? 1 : 0,
                transition: `opacity 0.8s ${T.ease} 0.2s`,
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 56,
                    animation: "marquee 40s linear infinite",
                    width: "max-content",
                }}
            >
                {logos.map((l, i) => (
                    <Logo key={`${l.name}-${i}`} logo={l} />
                ))}
            </div>
        </section>
    );
}
