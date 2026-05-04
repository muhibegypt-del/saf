import { useRef, useState } from "react";
import { T } from "./tokens";
import { useReveal, useMagnetic, useScrollProgress } from "./hooks";

/* ═══ REVEAL — scroll-triggered entrance ═══ */

export const Reveal = ({
    children,
    delay = 0,
    y = 32,
    style = {},
}: {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    style?: React.CSSProperties;
}) => {
    const [ref, vis] = useReveal();
    return (
        <div
            ref={ref}
            style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
                transition: `opacity 0.7s ${T.ease} ${delay}s, transform 0.7s ${T.ease} ${delay}s`,
                willChange: "opacity, transform",
                ...style,
            }}
        >
            {children}
        </div>
    );
};

/* ═══ TAG — uppercase accent label ═══ */

export const Tag = ({
    children,
    style = {},
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
}) => (
    <span
        style={{
            fontFamily: T.font.body,
            fontSize: T.type.label.size,
            fontWeight: T.type.label.weight,
            letterSpacing: T.type.label.tracking,
            lineHeight: T.type.label.leading,
            textTransform: "uppercase",
            color: T.accent,
            ...style,
        }}
    >
        {children}
    </span>
);

/* ═══ H2 — section heading ═══ */

export const H2 = ({
    children,
    style = {},
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
}) => (
    <h2
        style={{
            fontFamily: T.font.display,
            fontSize: T.type.h2.size,
            fontWeight: T.type.h2.weight,
            letterSpacing: T.type.h2.tracking,
            lineHeight: T.type.h2.leading,
            color: T.text,
            ...style,
        }}
    >
        {children}
    </h2>
);

/* ═══ SECTION HEAD — Tag + H2 with consistent spacing ═══ */

export const SectionHead = ({
    tag,
    heading,
    style = {},
}: {
    tag: string;
    heading: string;
    style?: React.CSSProperties;
}) => (
    <Reveal>
        <div style={style}>
            <Tag>{tag}</Tag>
            <H2 style={{ marginTop: T.space.tagGap, marginBottom: T.space.headingGap }}>
                {heading}
            </H2>
        </div>
    </Reveal>
);

/* ═══ SECTION — consistent section wrapper ═══ */

export const Section = ({
    children,
    id,
    bg,
    compact = false,
    fullWidth = false,
    className,
    style = {},
}: {
    children: React.ReactNode;
    id?: string;
    bg?: string;
    compact?: boolean;
    fullWidth?: boolean;
    className?: string;
    style?: React.CSSProperties;
}) => (
    <section
        id={id}
        className={className}
        style={{
            padding: `${compact ? T.space.sectionSm : T.space.section}px ${T.space.page}px`,
            background: bg,
            ...(fullWidth ? {} : { maxWidth: T.space.maxW, margin: "0 auto" }),
            ...style,
        }}
    >
        {children}
    </section>
);

/* ═══ PROSE — body text with max-width ═══ */

export const Prose = ({
    children,
    style = {},
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
}) => (
    <p
        style={{
            fontFamily: T.font.body,
            fontSize: T.type.body.size,
            lineHeight: T.type.body.leading,
            letterSpacing: T.type.body.tracking,
            color: T.textSecondary,
            maxWidth: T.space.prose,
            marginBottom: T.space.cardGap,
            ...style,
        }}
    >
        {children}
    </p>
);

/* ═══ GRID — consistent grid layout ═══ */

export const Grid = ({
    children,
    cols = 3,
    gap,
    className,
    style = {},
}: {
    children: React.ReactNode;
    cols?: number;
    gap?: number;
    className?: string;
    style?: React.CSSProperties;
}) => (
    <div
        className={className}
        style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: gap ?? T.space.cardGap,
            ...style,
        }}
    >
        {children}
    </div>
);

/* ═══ ARR — arrow icon ═══ */

export const Arr = ({
    size = 15,
    color = "currentColor",
}: {
    size?: number;
    color?: string;
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
);

/* ═══ BTN — magnetic button ═══ */

export function Btn({
    children,
    href,
    dark = true,
    style = {},
}: {
    children: React.ReactNode;
    href?: string;
    dark?: boolean;
    style?: React.CSSProperties;
}) {
    const [bRef, pos, onMove, onLeave] = useMagnetic();
    return (
        <a
            ref={bRef}
            href={href || "#"}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: T.space.xs,
                padding: `${T.type.bodySmall.size}px ${T.space.md + 4}px`,
                borderRadius: T.radius.full,
                textDecoration: "none",
                fontFamily: T.font.body,
                fontSize: T.type.bodySmall.size,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                background: dark ? T.dark : "transparent",
                color: dark ? "#fff" : T.text,
                border: dark ? "none" : `1.5px solid ${T.border}`,
                transform: `translate3d(${pos.x}px,${pos.y}px,0)`,
                transition: `transform 0.5s ${T.easeOut}`,
                cursor: "pointer",
                ...style,
            }}
        >
            {children}
        </a>
    );
}

/* ═══ SCROLL PROGRESS ═══ */

export function ScrollProgress() {
    const progress = useScrollProgress();
    return (
        <div
            className="scroll-progress"
            style={{ transform: `scaleX(${progress})` }}
        />
    );
}
