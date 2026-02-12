import { useState } from "react";
import { T } from "./tokens";
import { Reveal, Tag, H2 } from "./ui";

export function Signup() {
    const [email, setEmail] = useState("");
    const [focused, setFocused] = useState(false);
    const [btnHov, setBtnHov] = useState(false);

    return (
        <section
            style={{
                padding: `100px ${T.space.page}px`,
                background: T.surface,
                borderTop: `1px solid ${T.borderStrong}`,
            }}
        >
            <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
                <Reveal>
                    <Tag>Free resource</Tag>
                    <H2 size={40} style={{ marginTop: 12, marginBottom: 14 }}>
                        Get 5 tips to improve your writing now.
                    </H2>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: 15.5,
                            lineHeight: 1.7,
                            color: T.textSecondary,
                            marginBottom: 36,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        I recorded 5 mini podcasts for you for free. They explain the top
                        takeaways from my favourite books about writing.
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <div
                        style={{
                            display: "flex",
                            gap: 10,
                            maxWidth: 460,
                            margin: "0 auto",
                            background: T.bg,
                            borderRadius: T.radius.sm,
                            padding: 5,
                            border: `1.5px solid ${focused ? T.text : T.border}`,
                            transition: `border-color 0.3s ${T.ease}`,
                        }}
                    >
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            placeholder="Your email address"
                            style={{
                                flex: 1,
                                fontFamily: T.font.body,
                                fontSize: 14,
                                fontWeight: 500,
                                padding: "12px 18px",
                                border: "none",
                                background: "transparent",
                                color: T.text,
                                outline: "none",
                                letterSpacing: "-0.01em",
                            }}
                        />
                        <button
                            onMouseEnter={() => setBtnHov(true)}
                            onMouseLeave={() => setBtnHov(false)}
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 13,
                                fontWeight: 600,
                                padding: "12px 24px",
                                background: btnHov ? T.darkSoft : T.dark,
                                color: "#fff",
                                border: "none",
                                borderRadius: T.radius.sm,
                                cursor: "pointer",
                                transition: `all 0.3s ${T.ease}`,
                                whiteSpace: "nowrap",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Gimme the Voicenotes
                        </button>
                    </div>
                    <p
                        style={{
                            fontFamily: T.font.body,
                            fontSize: 12,
                            color: T.textTertiary,
                            marginTop: 14,
                            letterSpacing: "-0.005em",
                        }}
                    >
                        If it ends up in spam, mark it as safe + move it to inbox for more
                        fun freebies!
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
