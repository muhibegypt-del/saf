import { T } from "./tokens";
import { Reveal, Arr } from "./ui";

export function Statement() {
    return (
        <section
            className="statement"
            style={{
                padding: `${T.space.section}px ${T.space.page}px`,
                background: T.dark,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: T.space.proseWide,
                    margin: "0 auto",
                    textAlign: "center",
                    position: "relative",
                }}
            >
                <Reveal>
                    <p
                        style={{
                            fontFamily: T.font.display,
                            fontSize: T.type.quote.size,
                            fontWeight: T.type.quote.weight,
                            lineHeight: T.type.quote.leading,
                            letterSpacing: T.type.quote.tracking,
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
                    <div style={{ marginTop: T.space.lg - 4 }}>
                        <a
                            href="#books"
                            style={{
                                fontFamily: T.font.body,
                                fontSize: T.type.bodySmall.size,
                                fontWeight: 600,
                                color: "rgba(255,255,255,0.5)",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: T.space.xs,
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
