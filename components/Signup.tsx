import { T } from "./tokens";
import { Reveal, Tag } from "./ui";

export function Signup() {
    return (
        <section
            id="contact"
            style={{
                padding: `80px ${T.space.page}px`,
                background: T.accentSoft,
                borderTop: `1px solid ${T.borderStrong}`,
            }}
        >
            <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
                <Reveal>
                    <Tag>Get in Touch</Tag>
                    <p
                        style={{
                            fontFamily: T.font.display,
                            fontSize: "clamp(24px, 3vw, 34px)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.2,
                            color: T.text,
                            marginTop: 12,
                            marginBottom: 18,
                        }}
                    >
                        Inquiries + Correspondence.
                    </p>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: 15.5,
                            lineHeight: 1.7,
                            color: T.textSecondary,
                            letterSpacing: "-0.01em",
                            marginBottom: 28,
                        }}
                    >
                        For speaking engagements, media inquiries, collaborations,
                        or general correspondence.
                    </p>
                    <a
                        href="mailto:bookings@mustafabriggs.com"
                        style={{
                            fontFamily: T.font.body,
                            fontSize: 16,
                            fontWeight: 600,
                            color: T.text,
                            textDecoration: "none",
                            borderBottom: `1.5px solid ${T.borderStrong}`,
                            paddingBottom: 2,
                            transition: `border-color 0.3s ${T.ease}`,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = T.text)}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.borderStrong)}
                    >
                        bookings@mustafabriggs.com
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
