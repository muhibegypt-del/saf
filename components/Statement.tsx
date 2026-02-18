import { useState } from "react";
import { T } from "./tokens";
import { Reveal, Arr } from "./ui";

export function Statement() {
    const [ctaHov, setCtaHov] = useState(false);

    return (
        <section
            style={{
                padding: `${T.space.section}px ${T.space.page}px`,
                background: T.dark,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: 900,
                    margin: "0 auto",
                    textAlign: "center",
                    position: "relative",
                }}
            >
                <Reveal>
                    <p
                        style={{
                            fontFamily: T.font.display,
                            fontSize: "clamp(28px, 3.2vw, 44px)",
                            fontWeight: 700,
                            lineHeight: 1.3,
                            letterSpacing: "-0.03em",
                            color: "rgba(255,255,255,0.6)",
                        }}
                    >
                        A best-selling author, historian, and lecturer who has presented at{" "}
                        <span style={{ color: "rgba(255,255,255,1)" }}>
                            over 50 universities across 3 continents
                        </span>{" "}
                        &mdash; uncovering the untold legacy of Islam and Black civilisation.
                    </p>
                </Reveal>
                <Reveal delay={0.15}>
                    <div style={{ marginTop: 44 }}>
                        <a
                            href="#contact"
                            onMouseEnter={() => setCtaHov(true)}
                            onMouseLeave={() => setCtaHov(false)}
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 14,
                                fontWeight: 600,
                                color: "#fff",
                                padding: "14px 28px",
                                borderRadius: T.radius.full,
                                border: `1.5px solid ${ctaHov ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)"}`,
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                textDecoration: "none",
                                transition: `all 0.3s ${T.ease}`,
                            }}
                        >
                            Book a speaking event <Arr size={14} color="#fff" />
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
