import { T } from "./tokens";
import { Reveal, Tag, H2, Section, Prose } from "./ui";

export function About() {
    return (
        <Section id="about" className="about">
            <div
                className="about-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: T.space.xl + 20,
                    alignItems: "start",
                }}
            >
                {/* Left column */}
                <div>
                    <Reveal>
                        <Tag>Biography</Tag>
                        <H2 style={{ marginTop: T.space.tagGap, marginBottom: T.space.md + 4 }}>
                            About Shaykh Mustafa.
                        </H2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <Prose>
                            Shaykh Mustafa Briggs is a British Islamic scholar, historian,
                            author, and international public speaker whose work bridges
                            traditional Islamic scholarship, global history, and spiritual
                            education. Born and raised in London with West African roots,
                            he holds a BA in Arabic and International Relations from the
                            University of Westminster.
                        </Prose>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <Prose>
                            He later pursued postgraduate study in Arabic and Islamic
                            translation at SOAS, University of London, and continued
                            advanced studies in Islamic sciences at Al-Azhar University
                            in Cairo. Alongside formal study, he has trained with scholars
                            across Africa and the Middle East, receiving multiple ij&#257;z&#257;t
                            in classical Islamic disciplines.
                        </Prose>
                    </Reveal>
                </div>

                {/* Right column */}
                <div>
                    <Reveal delay={0.1}>
                        <Prose>
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
                        </Prose>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <Prose>
                            Mustafa is widely recognised for his lectures, writings, and
                            educational initiatives that highlight overlooked histories,
                            particularly those of African scholars and civilisations within
                            the Muslim world. He continues to teach, write, and speak
                            internationally, combining academic insight with traditional
                            scholarship to make Islamic knowledge accessible to contemporary
                            audiences.
                        </Prose>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div
                            className="stats-grid"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: T.space.sm,
                                marginTop: T.space.tagGap,
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
                                        padding: `${T.space.cardGap}px 0`,
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
                                            fontSize: T.type.small.size,
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
        </Section>
    );
}
