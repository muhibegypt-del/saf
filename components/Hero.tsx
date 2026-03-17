import { useState, useEffect } from "react";
import { T, ASSETS } from "./tokens";
import { Tag, Btn, Arr } from "./ui";
import { useParallax } from "./hooks";

export function Hero() {
    const [loaded, setLoaded] = useState(false);
    const [linkHov, setLinkHov] = useState(false);
    const [pRef, pOffset] = useParallax(0.08);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 200);
        return () => clearTimeout(t);
    }, []);

    const fu = (d: number) => ({
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translate3d(0,0,0)" : "translate3d(0,36px,0)",
        transition: `opacity 0.8s ${T.ease} ${d}s, transform 0.8s ${T.ease} ${d}s`,
    });

    return (
        <section
            className="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: `${T.space.section + 20}px ${T.space.page}px ${T.space.sectionSm + 20}px`,
                maxWidth: T.space.maxW,
                margin: "0 auto",
            }}
        >
            <div
                className="hero-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1.15fr 0.85fr",
                    gap: T.space.xl,
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <div>
                    <div style={{ ...fu(0.15), marginBottom: T.space.md + 4 }}>
                        <Tag>Classically Trained Islamic Scholar + Author</Tag>
                    </div>
                    <h1
                        style={{
                            fontFamily: T.font.display,
                            fontSize: T.type.h1.size,
                            fontWeight: T.type.h1.weight,
                            lineHeight: T.type.h1.leading,
                            letterSpacing: T.type.h1.tracking,
                            color: T.text,
                            marginBottom: T.space.md + 4,
                            ...fu(0.3),
                        }}
                    >
                        Uncovering the hidden history of{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #CC6842 0%, #E8845C 40%, #F4A574 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Islam.
                        </span>
                    </h1>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: T.type.body.size + 1,
                            lineHeight: T.type.body.leading - 0.05,
                            color: T.textSecondary,
                            maxWidth: T.space.prose - 140,
                            marginBottom: T.space.lg - 8,
                            letterSpacing: T.type.body.tracking,
                            ...fu(0.45),
                        }}
                    >
                        Shaykh Mustafa Briggs is a classically trained Islamic scholar,
                        best-selling author, and international lecturer who has presented
                        at over 50 universities across 3 continents &mdash; including
                        Oxford, Cambridge, Harvard, and Yale.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: T.type.bodySmall.size,
                            alignItems: "center",
                            ...fu(0.55),
                        }}
                    >
                        <Btn dark href="#books">
                            Explore books <Arr size={14} color="#fff" />
                        </Btn>
                        <a
                            href="#about"
                            onMouseEnter={() => setLinkHov(true)}
                            onMouseLeave={() => setLinkHov(false)}
                            style={{
                                fontFamily: T.font.body,
                                fontSize: T.type.bodySmall.size,
                                fontWeight: 500,
                                color: linkHov ? T.text : T.textSecondary,
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                                transition: "color 0.25s",
                            }}
                        >
                            Learn more <Arr size={12} />
                        </a>
                    </div>
                </div>

                <div ref={pRef} style={{ position: "relative", ...fu(0.4) }}>
                    <div
                        style={{
                            width: "100%",
                            maxWidth: 460,
                            aspectRatio: "3/3.8",
                            borderRadius: T.radius.xl,
                            overflow: "hidden",
                            border: `1px solid ${T.border}`,
                            marginLeft: "auto",
                            transform: `translate3d(0, ${pOffset}px, 0)`,
                            transition: "transform 0.1s linear",
                            willChange: "transform",
                        }}
                    >
                        <img
                            src={ASSETS.heroPhoto}
                            alt="Shaykh Mustafa Briggs"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center 15%",
                                display: "block",
                                transform: "scale(1.35)",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
