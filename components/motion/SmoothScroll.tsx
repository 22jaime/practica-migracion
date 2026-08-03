"use client";

import * as React from "react";
import Lenis from "lenis";
import { useMotion } from "./MotionProvider";

const SmoothScrollContext = React.createContext<Lenis | null>(null);

export const useScroll = () => React.useContext(SmoothScrollContext);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    const { reducedMotion } = useMotion();
    const [lenis, setLenis] = React.useState<Lenis | null>(null);

    React.useEffect(() => {
        // Disable if reduced motion is preferred
        if (reducedMotion) return;

        // Initialize Lenis
        const lenisInstance = new Lenis({
            duration: 1.0,
            // Quartic ease-out: terminates exactly at 1 (no asymptote) → no trembling at end of scroll
            easing: (t) => 1 - Math.pow(1 - t, 4),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        setLenis(lenisInstance);

        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
            setLenis(null);
        };
    }, [reducedMotion]);

    return (
        <SmoothScrollContext.Provider value={lenis}>
            {children}
        </SmoothScrollContext.Provider>
    );
}

