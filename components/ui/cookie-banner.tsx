"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");

        if (consent === null) {
            // If no choice, wait 10 seconds before showing
            const timer = setTimeout(() => {
                setShouldRender(true);
                // Small delay to allow render before animation
                setTimeout(() => setIsVisible(true), 100);
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "true");
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 500);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "false");
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 500);
    };

    if (!shouldRender) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 z-50 pointer-events-none"
                >
                    <div className="bg-white/90 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-5 pointer-events-auto flex flex-col gap-4">
                        <div className="flex justify-between items-start gap-4">
                            <div className="space-y-2">
                                <h3 className="font-bold text-neutral-900 text-sm">🍪 Cookies</h3>
                                <p className="text-xs text-neutral-500 leading-relaxed">
                                    Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra{" "}
                                    <Link href="/politica-de-privacidad" className="text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900 transition-all">
                                        política de cookies
                                    </Link>.
                                </p>
                            </div>
                            <button
                                onClick={handleDecline}
                                className="text-neutral-400 hover:text-neutral-900 transition-colors"
                                aria-label="Cerrar"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-neutral-900 text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
                            >
                                Aceptar
                            </button>
                            <button
                                onClick={handleDecline}
                                className="flex-1 bg-transparent border border-neutral-200 text-neutral-600 text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-neutral-50 hover:border-neutral-300 transition-all active:scale-95"
                            >
                                Rechazar
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
