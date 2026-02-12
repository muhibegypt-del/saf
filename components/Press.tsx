import { useState } from "react";
import { T, ASSETS } from "./tokens";
import { Reveal, Tag, H2, Arr } from "./ui";

function PressCard({
    p,
    i,
}: {
    p: (typeof ASSETS.press)[0];
    i: number;
}) {
    const [hov, setHov] = useState(false);
    return (
        <Reveal delay={i * 0.08}>
            <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                style={{
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        borderRadius: T.radius.sm,
                        overflow: "hidden",
                        aspectRatio: "16/11",
                        background: "#e8e8e4",
                    }}
                >
                    <img
                        src={p.img}
                        alt={p.label}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transform: hov ? "scale(1.03)" : "scale(1)",
                            transition: `transform 0.7s ${T.ease}`,
                        }}
                    />
                </div>
                <div
                    style={{
                        marginTop: 14,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <span
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 13.5,
                                fontWeight: 600,
                                color: T.text,
                                display: "block",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {p.label}
                        </span>
                        <span
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 11.5,
                                color: T.textTertiary,
                                letterSpacing: "0.02em",
                                textTransform: "uppercase",
                            }}
                        >
                            {p.type}
                        </span>
                    </div>
                    <Arr size={13} color={T.textTertiary} />
                </div>
            </a>
        </Reveal>
    );
}

export function Press() {
    return (
        <section
            style={{
                padding: `80px ${T.space.page}px ${T.space.section}px`,
                maxWidth: T.space.maxW,
                margin: "0 auto",
            }}
        >
            <Reveal>
                <Tag>In the press</Tag>
                <H2 size={52} style={{ marginTop: 12, marginBottom: 48 }}>
                    Press + Features.
                </H2>
            </Reveal>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: T.space.sm + 4,
                }}
            >
                {ASSETS.press.map((p, i) => (
                    <PressCard key={i} p={p} i={i} />
                ))}
            </div>
        </section>
    );
}
