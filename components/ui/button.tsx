import * as React from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
    | "default"
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "success"
    | "warning"
    | "link";
    size?: "sm" | "md" | "lg" | "icon";
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

export const buttonVariants = ({
    variant = "default",
    size = "md",
    fullWidth = false,
    className = ""
}: {
    variant?: ButtonProps["variant"],
    size?: ButtonProps["size"],
    fullWidth?: boolean,
    className?: string
}) => {
    return cn(
        // Base styles
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius)]",
        "font-medium focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        // Motion
        "transition-all duration-fluid ease-fluid will-change-transform",
        "hover:-translate-y-px active:translate-y-[1px] active:scale-[0.99]",
        fullWidth && "w-full",

        // Variant styles
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        variant === "primary" && "bg-brand text-brand-foreground hover:bg-brand/90 shadow-md",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        variant === "outline" && "border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        variant === "success" && "bg-success text-success-foreground hover:bg-success/90 shadow-sm",
        variant === "warning" && "bg-warning text-warning-foreground hover:bg-warning/90 shadow-sm",
        variant === "link" && "text-primary underline-offset-4 hover:underline px-0 h-auto",

        // Size styles (ignored for link variant sometimes, but good to have)
        size === "sm" && "h-9 px-3 text-sm",
        size === "md" && "h-10 px-4 py-2",
        size === "lg" && "h-11 px-8 text-lg",
        size === "icon" && "h-10 w-10 p-2",

        className
    );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "md", loading, leftIcon, rightIcon, fullWidth, children, disabled, ...props }, ref) => {
        return (
            <button
                className={buttonVariants({ variant, size, fullWidth, className })}
                ref={ref}
                disabled={disabled || loading}
                aria-busy={loading}
                {...props}
            >
                {loading && (
                    <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                {!loading && leftIcon}
                {children}
                {!loading && rightIcon}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
