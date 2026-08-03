import { cn } from "@/lib/cn";
import React from "react";

interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "orange";
}

export function TextHighlight({ children, className, variant = "default", ...props }: HighlightProps) {
    return (
        <span
            className={cn(
                "relative inline-block px-1 rounded-md font-medium mx-0.5",
                variant === "default" && "bg-[var(--neon-yellow)]/20 text-foreground",
                variant === "orange" && "bg-[var(--vibrant-orange)]/10 text-[var(--vibrant-orange)]",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
