import { useRef, useState } from "react";
import { T } from "./tokens";
import { useReveal, useMagnetic } from "./hooks";

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
            fontSize: 11.5,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: T.accent,
            ...style,
        }}
    >
        {children}
    </span>
);

export const H2 = ({
    children,
    size = 48,
    style = {},
}: {
    children: React.ReactNode;
    size?: number;
    style?: React.CSSProperties;
}) => (
    <h2
        style={{
            fontFamily: T.font.display,
            fontSize: `clamp(${size * 0.65}px, ${size / 14}vw, ${size}px)`,
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
            color: T.text,
            ...style,
        }}
    >
        {children}
    </h2>
);

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
                gap: 8,
                padding: "14px 28px",
                borderRadius: T.radius.full,
                textDecoration: "none",
                fontFamily: T.font.body,
                fontSize: 14,
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
