"use client";

import { useEffect, useRef, useState } from "react";

function getScrollProgress() {
    const scrollTop = window.scrollY;
    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    if (scrollHeight <= 0) {
        return 0;
    }

    return Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
}

export function ScrollProgress() {
    const [progress, setProgress] = useState(0);
    const roundedProgress = Math.round(progress);
    const currentProgress = useRef(0);
    const targetProgress = useRef(0);
    const frameId = useRef<number | null>(null);

    useEffect(() => {
        const animate = () => {
            const nextProgress =
                currentProgress.current +
                (targetProgress.current - currentProgress.current) * 0.18;

            currentProgress.current = nextProgress;
            setProgress(nextProgress);

            if (Math.abs(targetProgress.current - nextProgress) > 0.05) {
                frameId.current = requestAnimationFrame(animate);
                return;
            }

            currentProgress.current = targetProgress.current;
            setProgress(targetProgress.current);
            frameId.current = null;
        };

        const updateProgress = () => {
            targetProgress.current = getScrollProgress();

            if (frameId.current === null) {
                frameId.current = requestAnimationFrame(animate);
            }
        };

        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);

            if (frameId.current !== null) {
                cancelAnimationFrame(frameId.current);
            }
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-2 bg-background/70"
            role="progressbar"
            aria-label="Scroll progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={roundedProgress}
        >
            <div
                className="h-full origin-left border-b border-primary/30 bg-primary"
                style={{
                    boxShadow: "0 0 14px oklch(var(--primary) / 0.55)",
                    transform: `scaleX(${progress / 100})`,
                }}
            >
                <div className="h-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.42)_0_2px,transparent_2px_8px)] opacity-80 [image-rendering:pixelated]" />
            </div>
            <div
                className="absolute top-2 -translate-x-1/2 border border-primary/50 bg-background/85 px-2 py-0.5 font-mono text-[10px] font-semibold leading-none text-primary shadow-[3px_3px_0_rgba(0,0,0,0.35)] backdrop-blur-sm [image-rendering:pixelated]"
                style={{
                    left: `clamp(1.5rem, ${progress}%, calc(100% - 1.5rem))`,
                }}
            >
                {roundedProgress}%
            </div>
        </div>
    );
}
