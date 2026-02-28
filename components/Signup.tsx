import { T } from "./tokens";
import { Reveal, Tag } from "./ui";

export function Signup() {
    return (
        <section
            id="contact"
            className="contact"
            style={{
                padding: `${T.space.sectionSm}px ${T.space.page}px`,
                background: T.accentSoft,
                borderTop: `1px solid ${T.borderStrong}`,
            }}
        >
            <div style={{ maxWidth: T.space.prose - 80, margin: "0 auto", textAlign: "center" }}>
                <Reveal>
                    <Tag>Get in Touch</Tag>
                    <p
                        style={{
                            fontFamily: T.font.display,
                            fontSize: "clamp(24px, 3vw, 34px)",
                            fontWeight: 700,
                            letterSpacing: T.type.quote.tracking,
                            lineHeight: T.type.h3.leading,
                            color: T.text,
                            marginTop: T.space.tagGap,
                            marginBottom: 18,
                        }}
                    >
                        Inquiries + Correspondence.
                    </p>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: T.type.body.size - 0.5,
                            lineHeight: T.type.body.leading - 0.05,
                            color: T.textSecondary,
                            letterSpacing: T.type.body.tracking,
                            marginBottom: T.space.md + 4,
                        }}
                    >
                        For speaking engagements, media inquiries, collaborations,
                        or general correspondence.
                    </p>
                    <a
                        href="mailto:bookings@mustafabriggs.com"
                        style={{
                            fontFamily: T.font.body,
                            fontSize: T.type.body.size,
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
