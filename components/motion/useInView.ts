"use client";

import { useState, useEffect, useRef } from "react";

interface Options {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useInView(options: Options = {}) {
    const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isInView };
}
