import { T } from "./tokens";
import { Reveal, Arr } from "./ui";

export function Statement() {
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
                        A classically trained Islamic scholar bringing{" "}
                        <span style={{ color: "rgba(255,255,255,1)" }}>
                            overlooked histories back to light
                        </span>{" "}
                        &mdash; combining traditional scholarship with academic rigour
                        across over 50 universities on 3 continents.
                    </p>
                </Reveal>
                <Reveal delay={0.15}>
                    <div style={{ marginTop: 44 }}>
                        <a
                            href="#books"
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 14,
                                fontWeight: 600,
                                color: "rgba(255,255,255,0.5)",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                textDecoration: "none",
                                transition: `color 0.3s ${T.ease}`,
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                        >
                            Explore his works <Arr size={14} color="currentColor" />
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
