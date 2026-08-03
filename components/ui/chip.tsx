import * as React from "react";
import { cn } from "@/lib/cn";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "solid" | "soft" | "outline";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "error" | "info";
    size?: "sm" | "md" | "lg";
    onClose?: () => void;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
    ({ className, variant = "soft", color = "default", size = "md", onClose, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center gap-1.5 rounded-full font-medium border transition-colors",

                    // Visual Variants & Colors
                    // 1. Solid
                    variant === "solid" && color === "default" && "bg-secondary text-secondary-foreground border-transparent",
                    variant === "solid" && color === "primary" && "bg-primary text-primary-foreground border-transparent",
                    variant === "solid" && color === "secondary" && "bg-muted text-muted-foreground border-transparent",
                    variant === "solid" && color === "success" && "bg-success text-success-foreground border-transparent",
                    variant === "solid" && color === "warning" && "bg-warning text-warning-foreground border-transparent",
                    variant === "solid" && color === "error" && "bg-destructive text-destructive-foreground border-transparent",
                    variant === "solid" && color === "info" && "bg-info text-info-foreground border-transparent",

                    // 2. Soft (default)
                    variant === "soft" && color === "default" && "bg-secondary/50 text-secondary-foreground border-transparent",
                    variant === "soft" && color === "primary" && "bg-primary/10 text-primary border-transparent",
                    variant === "soft" && color === "secondary" && "bg-muted/50 text-muted-foreground border-transparent",
                    variant === "soft" && color === "success" && "bg-success/10 text-success border-transparent",
                    variant === "soft" && color === "warning" && "bg-warning/10 text-warning border-transparent",
                    variant === "soft" && color === "error" && "bg-destructive/10 text-destructive border-transparent",
                    variant === "soft" && color === "info" && "bg-info/10 text-info border-transparent",

                    // 3. Outline
                    variant === "outline" && "bg-transparent border",
                    variant === "outline" && color === "default" && "border-border text-foreground",
                    variant === "outline" && color === "primary" && "border-primary text-primary",
                    variant === "outline" && color === "secondary" && "border-muted-foreground text-muted-foreground",
                    variant === "outline" && color === "success" && "border-success text-success",
                    variant === "outline" && color === "warning" && "border-warning text-warning",
                    variant === "outline" && color === "error" && "border-destructive text-destructive",
                    variant === "outline" && color === "info" && "border-info text-info",

                    // Size styles
                    size === "sm" && "px-2.5 py-0.5 text-xs",
                    size === "md" && "px-3 py-1 text-sm",
                    size === "lg" && "px-4 py-1.5 text-base",

                    className
                )}
                {...props}
            >
                {children}
                {onClose && (
                    <button
                        onClick={onClose}
                        className={cn(
                            "ml-1 inline-flex items-center justify-center rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-colors",
                            size === "sm" && "h-3.5 w-3.5",
                            size === "md" && "h-4 w-4",
                            size === "lg" && "h-5 w-5"
                        )}
                        aria-label="Remove"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3/4 h-3/4"
                        >
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                )}
            </div>
        );
    }
);
Chip.displayName = "Chip";

export { Chip };
