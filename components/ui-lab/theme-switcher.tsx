"use client";

import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center gap-2 p-4 rounded-[var(--radius)] border bg-card">
            <span className="text-sm font-medium mr-2">Theme:</span>
            <div className="flex gap-1">
                <Button
                    size="sm"
                    variant={theme === "light" ? "primary" : "outline"}
                    onClick={() => setTheme("light")}
                >
                    ☀️ Light
                </Button>
                <Button
                    size="sm"
                    variant={theme === "dark" ? "primary" : "outline"}
                    onClick={() => setTheme("dark")}
                >
                    🌙 Dark
                </Button>
                <Button
                    size="sm"
                    variant={theme === "system" ? "primary" : "outline"}
                    onClick={() => setTheme("system")}
                >
                    💻 System
                </Button>
            </div>
        </div>
    );
}
