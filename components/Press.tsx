import { useState } from "react";
import { T, ASSETS } from "./tokens";
import { Reveal, Arr, Section, SectionHead, Grid } from "./ui";

function PressCard({ p, i }: { p: (typeof ASSETS.press)[0]; i: number }) {
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
                        marginTop: T.type.bodySmall.size,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <span
                            style={{
                                fontFamily: T.font.body,
                                fontSize: T.type.caption.size + 0.5,
                                fontWeight: T.type.caption.weight,
                                color: T.text,
                                display: "block",
                                letterSpacing: T.type.caption.tracking,
                            }}
                        >
                            {p.label}
                        </span>
                        <span
                            style={{
                                fontFamily: T.font.body,
                                fontSize: T.type.label.size,
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
        <Section id="media" compact className="press">
            <SectionHead tag="In the media" heading="Media + Features." />
            <Grid cols={4} className="press-grid">
                {ASSETS.press.map((p, i) => (
                    <PressCard key={i} p={p} i={i} />
                ))}
            </Grid>
        </Section>
    );
}
