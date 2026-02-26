import { T } from "./tokens";
import { Reveal, Tag, H2 } from "./ui";

export function About() {
    return (
        <section
            id="about"
            style={{
                padding: `${T.space.section}px ${T.space.page}px`,
                maxWidth: T.space.maxW,
                margin: "0 auto",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: T.space.xl + 20,
                    alignItems: "start",
                }}
            >
                {/* Left column — header + intro */}
                <div>
                    <Reveal>
                        <Tag>Biography</Tag>
                        <H2 size={52} style={{ marginTop: 12, marginBottom: 28 }}>
                            About Shaykh Mustafa.
                        </H2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 16,
                                lineHeight: 1.75,
                                color: T.textSecondary,
                                letterSpacing: "-0.01em",
                                marginBottom: 20,
                            }}
                        >
                            Shaykh Mustafa Briggs is a British Islamic scholar, historian,
                            author, and international public speaker whose work bridges
                            traditional Islamic scholarship, global history, and spiritual
                            education. Born and raised in London with West African roots,
                            he holds a BA in Arabic and International Relations from the
                            University of Westminster.
                        </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 16,
                                lineHeight: 1.75,
                                color: T.textSecondary,
                                letterSpacing: "-0.01em",
                                marginBottom: 20,
                            }}
                        >
                            He later pursued postgraduate study in Arabic and Islamic
                            translation at SOAS, University of London, and continued
                            advanced studies in Islamic sciences at Al-Azhar University
                            in Cairo. Alongside formal study, he has trained with scholars
                            across Africa and the Middle East, receiving multiple ij&#257;z&#257;t
                            in classical Islamic disciplines.
                        </p>
                    </Reveal>
                </div>

                {/* Right column — achievements + continued bio */}
                <div>
                    <Reveal delay={0.1}>
                        <p
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 16,
                                lineHeight: 1.75,
                                color: T.textSecondary,
                                letterSpacing: "-0.01em",
                                marginBottom: 20,
                            }}
                        >
                            He is a three-time author, with two books reaching #1
                            bestseller status on Amazon. His works include{" "}
                            <em style={{ color: T.text, fontWeight: 500 }}>Beyond Bilal</em>
                            {" "}&mdash; adapted from his internationally acclaimed lecture
                            series delivered at over 50 universities worldwide, including
                            Oxford, Cambridge, Harvard, and Yale;{" "}
                            <em style={{ color: T.text, fontWeight: 500 }}>
                                Islam &amp; The Making of the Modern World
                            </em>
                            {" "}&mdash; a historical exploration of Islam&rsquo;s role in
                            shaping global civilisation; and{" "}
                            <em style={{ color: T.text, fontWeight: 500 }}>
                                Taqwa: The Art of Living in Allah&rsquo;s Presence
                            </em>
                            {" "}&mdash; a practical and spiritual guide to living with
                            God-consciousness, adapted from his 2023 Ramadan series.
                        </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 16,
                                lineHeight: 1.75,
                                color: T.textSecondary,
                                letterSpacing: "-0.01em",
                                marginBottom: 20,
                            }}
                        >
                            Mustafa is widely recognised for his lectures, writings, and
                            educational initiatives that highlight overlooked histories,
                            particularly those of African scholars and civilisations within
                            the Muslim world. He continues to teach, write, and speak
                            internationally, combining academic insight with traditional
                            scholarship to make Islamic knowledge accessible to contemporary
                            audiences.
                        </p>
                    </Reveal>
                    {/* Credentials highlight */}
                    <Reveal delay={0.2}>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 16,
                                marginTop: 12,
                            }}
                        >
                            {[
                                { num: "50+", label: "Universities" },
                                { num: "3", label: "Continents" },
                                { num: "3", label: "Published Books" },
                                { num: "2x", label: "#1 Bestseller" },
                            ].map((s) => (
                                <div
                                    key={s.label}
                                    style={{
                                        padding: "20px 0",
                                        borderTop: `1px solid ${T.border}`,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: T.font.display,
                                            fontSize: 28,
                                            fontWeight: 800,
                                            letterSpacing: "-0.04em",
                                            color: T.text,
                                            display: "block",
                                        }}
                                    >
                                        {s.num}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: T.font.body,
                                            fontSize: 12.5,
                                            fontWeight: 500,
                                            color: T.textTertiary,
                                            letterSpacing: "0.02em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
