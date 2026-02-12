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
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: `140px ${T.space.page}px 100px`,
                maxWidth: T.space.maxW,
                margin: "0 auto",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1.15fr 0.85fr",
                    gap: T.space.xl,
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <div>
                    <div style={{ ...fu(0.15), marginBottom: 28 }}>
                        <Tag>Comms Strategy + Writing Workshops</Tag>
                    </div>
                    <h1
                        style={{
                            fontFamily: T.font.display,
                            fontSize: "clamp(46px, 5vw, 72px)",
                            fontWeight: 800,
                            lineHeight: 1.04,
                            letterSpacing: "-0.045em",
                            color: T.text,
                            marginBottom: 28,
                            ...fu(0.3),
                        }}
                    >
                        I help you perfect your comms. So you&apos;re honest, clear +
                        unmistakable.
                    </h1>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: 17,
                            lineHeight: 1.7,
                            color: T.textSecondary,
                            maxWidth: 500,
                            marginBottom: 40,
                            letterSpacing: "-0.01em",
                            ...fu(0.45),
                        }}
                    >
                        An award-winning Comms specialist and copywriter who helps
                        Marketing Leaders squeeze more talent out of their marketing team
                        with world-class communications workshops.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: 14,
                            alignItems: "center",
                            ...fu(0.55),
                        }}
                    >
                        <Btn dark href="/contact">
                            Work with me <Arr size={14} color="#fff" />
                        </Btn>
                        <a
                            href="/workshops"
                            onMouseEnter={() => setLinkHov(true)}
                            onMouseLeave={() => setLinkHov(false)}
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 14,
                                fontWeight: 500,
                                color: linkHov ? T.text : T.textSecondary,
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                                transition: "color 0.25s",
                            }}
                        >
                            View workshops <Arr size={12} />
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
                            alt="Saffana Monajed"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
