import { useState, useRef, useCallback } from "react";
import { T, TESTIMONIALS } from "./tokens";
import { Reveal, Tag, H2 } from "./ui";

/* ─── Arrow Button (extracted outside render) ─────── */
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
                width: 44,
                height: 44,
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

/* ─── Testimonial Card (extracted for clarity) ────── */
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
                        fontSize: 48,
                        lineHeight: 1,
                        color: T.textTertiary,
                        display: "block",
                        marginBottom: 12,
                        userSelect: "none",
                    }}
                >
                    &ldquo;
                </span>
                <blockquote
                    style={{
                        fontFamily: T.font.body,
                        fontSize: 15.5,
                        lineHeight: 1.65,
                        color: T.text,
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
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
                        fontSize: 13.5,
                        fontWeight: 600,
                        color: T.text,
                        display: "block",
                        letterSpacing: "-0.01em",
                    }}
                >
                    {t.name}
                </span>
                <span
                    style={{
                        fontFamily: T.font.body,
                        fontSize: 12.5,
                        color: T.textTertiary,
                        letterSpacing: "-0.005em",
                    }}
                >
                    {t.org}
                </span>
            </div>
        </div>
    );
}

/* ─── Testimonials Section ────────────────────────── */
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
        <section style={{ padding: `${T.space.section}px 0` }}>
            {/* Header — aligned to content column */}
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
                    <Tag>Testimonials</Tag>
                    <H2 size={52} style={{ marginTop: 12 }}>
                        Kind words.
                    </H2>
                </Reveal>
                <div style={{ display: "flex", gap: T.space.xs }}>
                    <ArrowBtn dir={-1} ok={canL} onClick={() => scroll(-1)} />
                    <ArrowBtn dir={1} ok={canR} onClick={() => scroll(1)} />
                </div>
            </div>

            {/* Scroll container — with proper snap alignment */}
            <div
                ref={scrollRef}
                onScroll={check}
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
