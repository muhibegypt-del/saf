import { useState } from "react";
import { T, BOOKS } from "./tokens";
import { Reveal, Arr, Section, SectionHead, Grid } from "./ui";

function BookCard({ b, i }: { b: (typeof BOOKS)[0]; i: number }) {
    const [hov, setHov] = useState(false);
    return (
        <Reveal delay={i * 0.1}>
            <a
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    color: "inherit",
                    background: T.surface,
                    borderRadius: T.radius.sm,
                    padding: 0,
                    border: `1px solid ${hov ? T.text : T.border}`,
                    transition: `all 0.4s ${T.ease}`,
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        aspectRatio: "3/4",
                        overflow: "hidden",
                        background: "#e8e8e4",
                        position: "relative",
                    }}
                >
                    <img
                        src={b.cover}
                        alt={b.title}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transform: hov ? "scale(1.03)" : "scale(1)",
                            transition: `transform 0.7s ${T.ease}`,
                        }}
                    />
                    {b.badge && (
                        <span
                            style={{
                                position: "absolute",
                                top: T.space.tagGap,
                                right: T.space.tagGap,
                                fontFamily: T.font.body,
                                fontSize: T.type.label.size - 0.5,
                                fontWeight: 700,
                                letterSpacing: "0.04em",
                                textTransform: "uppercase",
                                background: T.accent,
                                color: "#fff",
                                padding: "5px 10px",
                                borderRadius: T.radius.full,
                            }}
                        >
                            {b.badge}
                        </span>
                    )}
                </div>
                <div style={{ padding: T.space.cardPad, paddingBottom: T.space.cardPad + 4 }}>
                    <h3
                        style={{
                            fontFamily: T.font.display,
                            fontSize: T.type.h3.size,
                            fontWeight: T.type.h3.weight,
                            letterSpacing: T.type.h3.tracking,
                            lineHeight: T.type.h3.leading,
                            color: T.text,
                            marginBottom: 10,
                        }}
                    >
                        {b.title}
                    </h3>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: T.type.bodySmall.size - 0.5,
                            lineHeight: T.type.bodySmall.leading,
                            color: T.textSecondary,
                            letterSpacing: T.type.bodySmall.tracking,
                            marginBottom: T.space.cardGap,
                        }}
                    >
                        {b.desc}
                    </p>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: hov ? 10 : 6,
                            transition: `gap 0.4s ${T.ease}`,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: T.font.body,
                                fontSize: T.type.caption.size,
                                fontWeight: T.type.caption.weight,
                                color: T.accent,
                                letterSpacing: T.type.caption.tracking,
                            }}
                        >
                            {b.cta}
                        </span>
                        <Arr size={13} color={T.accent} />
                    </div>
                </div>
            </a>
        </Reveal>
    );
}

export function Services() {
    return (
        <Section id="books" className="books">
            <SectionHead tag="Published Works" heading="Books + Publications." />
            <Grid cols={3} className="books-grid">
                {BOOKS.map((b, i) => (
                    <BookCard key={i} b={b} i={i} />
                ))}
            </Grid>
        </Section>
    );
}
