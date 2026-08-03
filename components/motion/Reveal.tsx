"use client";

import * as React from "react";
import { useInView } from "./useInView";
import { cn } from "@/lib/cn";
import { useMotion } from "./MotionProvider";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    variant?: "fade-up" | "fade-in" | "scale-in" | "blur-up";
    delay?: number; // ms
    duration?: "fast" | "med" | "slow" | "slower";
    as?: React.ElementType;
}

export function Reveal({
    children,
    className,
    variant = "fade-up",
    delay = 0,
    duration = "med",
    as: Component = "div",
}: RevealProps) {
    const { ref, isInView } = useInView({ threshold: 0.1 });
    const { reducedMotion } = useMotion();

    // --- GLOBAL ANIMATION CONFIGURATION ---
    // Change this single object to update the effect across the entire site.
    // blur-sm removed: animating blur causes expensive GPU repaints → jank
    const SLEEK_FADE = {
        hidden: "opacity-0 translate-y-4 scale-[0.98]",
        visible: "opacity-100 translate-y-0 scale-100",
    };

    const variants = {
        "fade-up": SLEEK_FADE.hidden,
        "fade-in": SLEEK_FADE.hidden,
        "scale-in": SLEEK_FADE.hidden,
        "blur-up": SLEEK_FADE.hidden,
    };

    const activeVariants = {
        "fade-up": SLEEK_FADE.visible,
        "fade-in": SLEEK_FADE.visible,
        "scale-in": SLEEK_FADE.visible,
        "blur-up": SLEEK_FADE.visible,
    };

    // If reduced motion, always show
    if (reducedMotion) {
        return <Component className={cn(className)}>{children}</Component>;
    }

    return (
        <Component
            ref={ref}
            className={cn(
                "transition-all duration-700 ease-out",
                isInView ? activeVariants[variant] : variants[variant],
                className
            )}
            style={{ transitionDelay: `${delay}ms`, willChange: "transform, opacity" }}
        >
            {children}
        </Component>
    );
}
