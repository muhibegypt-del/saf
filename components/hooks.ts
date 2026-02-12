import { useState, useEffect, useRef, useCallback } from "react";

export function useReveal(threshold = 0.12) {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setVis(true);
                    obs.disconnect();
                }
            },
            { threshold, rootMargin: "0px 0px -80px 0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, vis] as const;
}

export function useMagnetic(strength = 0.15) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const onMove = useCallback(
        (e: React.MouseEvent) => {
            if (!ref.current) return;
            const r = ref.current.getBoundingClientRect();
            setPos({
                x: (e.clientX - r.left - r.width / 2) * strength,
                y: (e.clientY - r.top - r.height / 2) * strength,
            });
        },
        [strength]
    );
    const onLeave = useCallback(() => setPos({ x: 0, y: 0 }), []);
    return [ref, pos, onMove, onLeave] as const;
}

export function useParallax(speed = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const h = () => {
            if (!ref.current) return;
            const r = ref.current.getBoundingClientRect();
            const center = r.top + r.height / 2;
            const vh = window.innerHeight;
            const delta = (center - vh / 2) * speed;
            setOffset(delta);
        };
        window.addEventListener("scroll", h, { passive: true });
        h();
        return () => window.removeEventListener("scroll", h);
    }, [speed]);
    return [ref, offset] as const;
}

export function useScrollProgress() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const h = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            setProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
        };
        window.addEventListener("scroll", h, { passive: true });
        h();
        return () => window.removeEventListener("scroll", h);
    }, []);
    return progress;
}
