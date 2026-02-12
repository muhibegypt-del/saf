import { useState } from "react";
import { T, SERVICES } from "./tokens";
import { Reveal, Tag, H2, Arr } from "./ui";

function ServiceCard({
    s,
    i,
}: {
    s: (typeof SERVICES)[0];
    i: number;
}) {
    const [hov, setHov] = useState(false);
    return (
        <Reveal delay={i * 0.1}>
            <a
                href="#"
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    color: "inherit",
                    background: T.surface,
                    borderRadius: T.radius.sm,
                    padding: "48px 40px",
                    border: `1px solid ${hov ? T.text : T.border}`,
                    transition: `all 0.4s ${T.ease}`,
                    minHeight: 340,
                    cursor: "pointer",
                    position: "relative",
                }}
            >
                <div>
                    <span
                        style={{
                            fontFamily: T.font.display,
                            fontSize: 13,
                            fontWeight: 700,
                            color: T.textTertiary,
                            letterSpacing: "0.02em",
                            display: "block",
                            marginBottom: 20,
                        }}
                    >
                        0{i + 1}
                    </span>
                    <h3
                        style={{
                            fontFamily: T.font.display,
                            fontSize: 26,
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            color: T.text,
                            marginBottom: 14,
                            lineHeight: 1.15,
                        }}
                    >
                        {s.title}
                    </h3>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: 14.5,
                            lineHeight: 1.7,
                            color: T.textSecondary,
                            letterSpacing: "-0.005em",
                        }}
                    >
                        {s.desc}
                    </p>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: hov ? 10 : 6,
                        marginTop: 28,
                        transition: `gap 0.4s ${T.ease}`,
                    }}
                >
                    <span
                        style={{
                            fontFamily: T.font.body,
                            fontSize: 13,
                            fontWeight: 600,
                            color: T.accent,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {s.cta}
                    </span>
                    <Arr size={13} color={T.accent} />
                </div>
            </a>
        </Reveal>
    );
}

export function Services() {
    return (
        <section
            style={{
                padding: `${T.space.section}px ${T.space.page}px`,
                maxWidth: T.space.maxW,
                margin: "0 auto",
            }}
        >
            <Reveal>
                <Tag>How we work together</Tag>
                <H2 size={52} style={{ marginTop: 12, marginBottom: 60 }}>
                    Pick one.
                </H2>
            </Reveal>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: T.space.sm + 4,
                }}
            >
                {SERVICES.map((s, i) => (
                    <ServiceCard key={i} s={s} i={i} />
                ))}
            </div>
        </section>
    );
}
