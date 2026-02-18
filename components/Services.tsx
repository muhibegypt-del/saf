import { useState } from "react";
import { T, BOOKS } from "./tokens";
import { Reveal, Tag, H2, Arr } from "./ui";

function BookCard({
    b,
    i,
}: {
    b: (typeof BOOKS)[0];
    i: number;
}) {
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
                }}
            >
                {/* Book cover image */}
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
                                top: 12,
                                right: 12,
                                fontFamily: T.font.body,
                                fontSize: 11,
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
                {/* Book details */}
                <div style={{ padding: "24px 24px 28px" }}>
                    <h3
                        style={{
                            fontFamily: T.font.display,
                            fontSize: 20,
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            color: T.text,
                            marginBottom: 10,
                            lineHeight: 1.2,
                        }}
                    >
                        {b.title}
                    </h3>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: 13.5,
                            lineHeight: 1.65,
                            color: T.textSecondary,
                            letterSpacing: "-0.005em",
                            marginBottom: 20,
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
                                fontSize: 13,
                                fontWeight: 600,
                                color: T.accent,
                                letterSpacing: "-0.01em",
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
        <section
            id="books"
            style={{
                padding: `${T.space.section}px ${T.space.page}px`,
                maxWidth: T.space.maxW,
                margin: "0 auto",
            }}
        >
            <Reveal>
                <Tag>Published Works</Tag>
                <H2 size={52} style={{ marginTop: 12, marginBottom: 60 }}>
                    Books + Publications.
                </H2>
            </Reveal>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: T.space.sm + 4,
                }}
            >
                {BOOKS.map((b, i) => (
                    <BookCard key={i} b={b} i={i} />
                ))}
            </div>
        </section>
    );
}
