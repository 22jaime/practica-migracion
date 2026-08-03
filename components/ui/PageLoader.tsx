"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function PageLoader() {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setFadeOut(true), 1800);
        const t2 = setTimeout(() => setVisible(false), 2350);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            style={{
                opacity: fadeOut ? 0 : 1,
                transition: "opacity 0.55s cubic-bezier(0.4,0,0.2,1)",
                pointerEvents: fadeOut ? "none" : "all",
            }}
        >
            {/* Plane + air lines container */}
            <div className="relative flex items-center justify-center" style={{ width: 160, height: 160 }}>

                {/* SVG air currents behind the plane */}
                <svg
                    className="absolute inset-0"
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ animation: "airFade 1.6s ease-in-out infinite" }}
                >
                    {/* Curved wind lines */}
                    <path d="M20 75 Q50 60 80 75 Q110 90 140 75" stroke="#d1fae5" strokeWidth="2" strokeLinecap="round" fill="none" style={{ animation: "windDrift 1.6s ease-in-out infinite", animationDelay: "0s" }} />
                    <path d="M10 85 Q45 68 80 85 Q115 102 150 85" stroke="#a7f3d0" strokeWidth="1.5" strokeLinecap="round" fill="none" style={{ animation: "windDrift 1.6s ease-in-out infinite", animationDelay: "0.2s" }} />
                    <path d="M30 65 Q60 52 90 65 Q118 78 145 65" stroke="#d1fae5" strokeWidth="1" strokeLinecap="round" fill="none" style={{ animation: "windDrift 1.6s ease-in-out infinite", animationDelay: "0.4s" }} />
                </svg>

                {/* The actual logo, floating and tilting */}
                <div style={{ animation: "planeFly 1.6s ease-in-out infinite", position: "relative", zIndex: 10 }}>
                    <img
                        src="/images/logo-hol.png"
                        alt="Gestoría HOL"
                        width="72"
                        height="72"
                        className="object-contain"
                        style={{ filter: "drop-shadow(0 8px 20px rgba(22,163,74,0.25))" }}
                    />
                </div>
            </div>

            <style>{`
                @keyframes planeFly {
                    0%   { transform: translateY(0px) rotate(-4deg); }
                    30%  { transform: translateY(-12px) rotate(2deg); }
                    60%  { transform: translateY(-8px) rotate(-1deg); }
                    100% { transform: translateY(0px) rotate(-4deg); }
                }
                @keyframes windDrift {
                    0%, 100% { opacity: 0.3; transform: translateX(0px); }
                    50%       { opacity: 0.9; transform: translateX(-6px); }
                }
                @keyframes airFade {
                    0%, 100% { opacity: 0.5; }
                    50%       { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
