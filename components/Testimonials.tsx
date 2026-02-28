import { useState, useRef, useCallback } from "react";
import { T, TESTIMONIALS } from "./tokens";
import { Reveal, Tag, H2 } from "./ui";

function ArrowBtn({
    dir,
    ok,
    onClick,
}: {
    dir: number;
    ok: boolean;
    onClick: () => void;
}) {
    const [hov, setHov] = useState(false);
    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                width: T.space.lg - 4,
                height: T.space.lg - 4,
                borderRadius: "50%",
                cursor: ok ? "pointer" : "default",
                background: "transparent",
                border: `1.5px solid ${hov && ok ? T.text : ok ? T.borderHover : T.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: ok ? 1 : 0.35,
                transition: `all 0.3s ${T.ease}`,
                color: T.text,
            }}
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transform: dir === -1 ? "rotate(180deg)" : "none" }}
            >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </svg>
        </button>
    );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
    const [hov, setHov] = useState(false);
    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                background: T.surface,
                borderRadius: T.radius.sm,
                padding: `${T.space.lg - 12}px ${T.space.md + 8}px`,
                border: `1px solid ${hov ? T.text : T.border}`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 260,
                transition: `border-color 0.3s ${T.ease}`,
            }}
        >
            <div>
                <span
                    style={{
                        fontFamily: T.font.display,
                        fontSize: T.space.lg,
                        lineHeight: 1,
                        color: T.textTertiary,
                        display: "block",
                        marginBottom: T.space.tagGap,
                        userSelect: "none",
                    }}
                >
                    &ldquo;
                </span>
                <blockquote
                    style={{
                        fontFamily: T.font.body,
                        fontSize: T.type.body.size - 0.5,
                        lineHeight: T.type.bodySmall.leading,
                        color: T.text,
                        fontWeight: 400,
                        letterSpacing: T.type.body.tracking,
                        margin: 0,
                    }}
                >
                    {t.quote}
                </blockquote>
            </div>
            <div
                style={{
                    marginTop: T.space.md,
                    paddingTop: 18,
                    borderTop: `1px solid ${T.border}`,
                }}
            >
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
                    {t.name}
                </span>
                <span
                    style={{
                        fontFamily: T.font.body,
                        fontSize: T.type.small.size,
                        color: T.textTertiary,
                        letterSpacing: T.type.small.tracking,
                    }}
                >
                    {t.org}
                </span>
            </div>
        </div>
    );
}

export function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canL, setCanL] = useState(false);
    const [canR, setCanR] = useState(true);

    const check = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        setCanL(el.scrollLeft > 10);
        setCanR(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }, []);

    const scroll = (dir: number) =>
        scrollRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });

    return (
        <section className="testimonials" style={{ padding: `${T.space.section}px 0` }}>
            <div
                style={{
                    padding: `0 ${T.space.page}px`,
                    maxWidth: T.space.maxW,
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginBottom: T.space.lg,
                }}
            >
                <Reveal>
                    <Tag>What readers are saying</Tag>
                    <H2 style={{ marginTop: T.space.tagGap }}>
                        Praise + Reviews.
                    </H2>
                </Reveal>
                <div style={{ display: "flex", gap: T.space.xs }}>
                    <ArrowBtn dir={-1} ok={canL} onClick={() => scroll(-1)} />
                    <ArrowBtn dir={1} ok={canR} onClick={() => scroll(1)} />
                </div>
            </div>

            <div
                ref={scrollRef}
                onScroll={check}
                className="testimonials-track"
                style={{
                    display: "flex",
                    gap: T.space.sm,
                    paddingLeft: T.space.page,
                    paddingRight: T.space.page,
                    overflowX: "auto",
                    scrollSnapType: "x proximity",
                    scrollPaddingLeft: T.space.page,
                    scrollbarWidth: "none",
                    WebkitOverflowScrolling: "touch",
                    maxWidth: T.space.maxW,
                    margin: "0 auto",
                }}
            >
                {TESTIMONIALS.map((t, i) => (
                    <Reveal
                        key={`${t.name}-${t.org}`}
                        delay={i * 0.07}
                        style={{
                            flex: "0 0 380px",
                            minWidth: 340,
                            scrollSnapAlign: "start",
                        }}
                    >
                        <TestimonialCard t={t} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
