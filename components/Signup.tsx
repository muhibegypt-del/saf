import { useState } from "react";
import { T } from "./tokens";
import { Reveal, Tag, H2, Arr } from "./ui";

export function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [focusedField, setFocusedField] = useState("");
    const [btnHov, setBtnHov] = useState(false);

    return (
        <section
            id="contact"
            style={{
                padding: `100px ${T.space.page}px`,
                background: T.accentSoft,
                borderTop: `1px solid ${T.borderStrong}`,
            }}
        >
            <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
                <Reveal>
                    <Tag>Speaking Engagements + Inquiries</Tag>
                    <H2 size={40} style={{ marginTop: 12, marginBottom: 14 }}>
                        Book Mustafa for your next event.
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
                        Available for university lectures, conferences, book readings,
                        panel discussions, and community events worldwide.
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                            maxWidth: 460,
                            margin: "0 auto",
                        }}
                    >
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField("")}
                            placeholder="Your name"
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 14,
                                fontWeight: 500,
                                padding: "14px 18px",
                                border: `1.5px solid ${focusedField === "name" ? T.text : T.border}`,
                                borderRadius: T.radius.sm,
                                background: T.bg,
                                color: T.text,
                                outline: "none",
                                letterSpacing: "-0.01em",
                                transition: `border-color 0.3s ${T.ease}`,
                            }}
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField("")}
                            placeholder="Your email address"
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 14,
                                fontWeight: 500,
                                padding: "14px 18px",
                                border: `1.5px solid ${focusedField === "email" ? T.text : T.border}`,
                                borderRadius: T.radius.sm,
                                background: T.bg,
                                color: T.text,
                                outline: "none",
                                letterSpacing: "-0.01em",
                                transition: `border-color 0.3s ${T.ease}`,
                            }}
                        />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField("")}
                            placeholder="Tell us about your event (date, location, audience...)"
                            rows={4}
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 14,
                                fontWeight: 500,
                                padding: "14px 18px",
                                border: `1.5px solid ${focusedField === "message" ? T.text : T.border}`,
                                borderRadius: T.radius.sm,
                                background: T.bg,
                                color: T.text,
                                outline: "none",
                                letterSpacing: "-0.01em",
                                resize: "vertical",
                                transition: `border-color 0.3s ${T.ease}`,
                            }}
                        />
                        <a
                            href={`mailto:bookings@mustafabriggs.com?subject=Speaking%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`}
                            onMouseEnter={() => setBtnHov(true)}
                            onMouseLeave={() => setBtnHov(false)}
                            style={{
                                fontFamily: T.font.body,
                                fontSize: 14,
                                fontWeight: 600,
                                padding: "14px 24px",
                                background: btnHov ? T.darkSoft : T.dark,
                                color: "#fff",
                                border: "none",
                                borderRadius: T.radius.sm,
                                cursor: "pointer",
                                transition: `all 0.3s ${T.ease}`,
                                whiteSpace: "nowrap",
                                letterSpacing: "-0.01em",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                            }}
                        >
                            Send Inquiry <Arr size={14} color="#fff" />
                        </a>
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
                        Or email directly at bookings@mustafabriggs.com
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
