"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("system");
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    // Initialize theme from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored && ["light", "dark", "system"].includes(stored)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setThemeState(stored);
        }
        setMounted(true);
    }, []);

    // Resolve actual theme (light/dark) from theme setting
    useEffect(() => {
        const resolveTheme = (): "light" | "dark" => {
            if (theme === "system") {
                return window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
            }
            return theme;
        };

        const updateTheme = () => {
            const resolved = resolveTheme();
            setResolvedTheme(resolved);

            // Apply to document
            const root = document.documentElement;
            root.setAttribute("data-theme", resolved);
        };

        updateTheme();

        // Listen for system theme changes when in system mode
        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const listener = () => updateTheme();
            mediaQuery.addEventListener("change", listener);
            return () => mediaQuery.removeEventListener("change", listener);
        }
    }, [theme]);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    // Prevent flash of incorrect theme
    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
