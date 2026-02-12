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
