import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 Configuration
 * 
 * NOTE: In Tailwind CSS v4, most theme configuration is handled
 * via the @theme inline directive in globals.css. This config
 * file is minimal and only contains v4-compatible options.
 * 
 * Design tokens are defined in:
 * - app/styles/tokens.css (CSS variables)
 * - app/globals.css (@theme inline mappings)
 */
const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./content/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            transitionDuration: {
                fast: "var(--dur-1)",
                med: "var(--dur-2)",
                slow: "var(--dur-3)",
                slower: "var(--dur-4)",
                fluid: "var(--dur-fluid)",
            },
            transitionTimingFunction: {
                "premium-out": "var(--ease-out)",
                "premium-in-out": "var(--ease-in-out)",
                "spring": "var(--ease-spring)",
                "premium": "var(--ease-premium)",
                "fluid": "var(--ease-fluid)",
            },
            keyframes: {
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "scale-in": {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "scroll-left": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "scroll-right": {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },
                "scroll-up": {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(-50%)" },
                },
                "scroll-down": {
                    "0%": { transform: "translateY(-50%)" },
                    "100%": { transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-up": "fade-up var(--dur-3) var(--ease-out) forwards",
                "fade-in": "fade-in var(--dur-3) var(--ease-out) forwards",
                "scale-in": "scale-in var(--dur-3) var(--ease-spring) forwards",
                "float": "float 6s ease-in-out infinite",
                "scroll-left": "scroll-left 40s linear infinite",
                "scroll-right": "scroll-right 40s linear infinite",
                "scroll-up": "scroll-up 40s linear infinite",
                "scroll-down": "scroll-down 40s linear infinite",
            },
        },
    },
};

export default config;
