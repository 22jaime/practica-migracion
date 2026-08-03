import * as React from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "success" | "warning" | "danger" | "info" | "outline";
    size?: "sm" | "md" | "lg";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = "default", size = "md", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-[var(--radius)] border font-semibold transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",

                    // Variant styles
                    variant === "default" && "border-transparent bg-muted text-foreground",
                    variant === "success" && "border-transparent bg-success/10 text-success",
                    variant === "warning" && "border-transparent bg-warning/10 text-warning",
                    variant === "danger" && "border-transparent bg-danger/10 text-danger",
                    variant === "info" && "border-transparent bg-info/10 text-info",
                    variant === "outline" && "border-border bg-transparent text-foreground",

                    // Size styles
                    size === "sm" && "px-2 py-0.5 text-xs",
                    size === "md" && "px-2.5 py-0.5 text-sm",
                    size === "lg" && "px-3 py-1 text-base",

                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = "Badge";

export { Badge };
