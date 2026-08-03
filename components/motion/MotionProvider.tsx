"use client";

import * as React from "react";

const MotionContext = React.createContext<{ reducedMotion: boolean }>({ reducedMotion: false });

export function MotionProvider({ children }: { children: React.ReactNode }) {
    const [reducedMotion, setReducedMotion] = React.useState(false);

    React.useEffect(() => {
        // DEV: Force animations ON by ignoring system preference
        setReducedMotion(false);

        /* 
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
        */
    }, []);

    // Apply data attribute for global CSS hooks
    React.useEffect(() => {
        if (reducedMotion) {
            document.documentElement.setAttribute("data-motion", "reduced");
        } else {
            document.documentElement.setAttribute("data-motion", "full");
        }
    }, [reducedMotion]);

    return (
        <MotionContext.Provider value={{ reducedMotion }}>
            {children}
        </MotionContext.Provider>
    );
}

export const useMotion = () => React.useContext(MotionContext);
