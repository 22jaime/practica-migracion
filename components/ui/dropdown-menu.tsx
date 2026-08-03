import * as React from "react";
import { cn } from "@/lib/cn";

export interface DropdownMenuProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: "start" | "center" | "end";
    className?: string;
}

export interface DropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    destructive?: boolean;
}

export function DropdownMenu({ trigger, children, align = "start", className }: DropdownMenuProps) {
    return (
        <details className={cn("relative inline-block group", className)}>
            <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden outline-none">
                {trigger}
            </summary>
            <div
                className={cn(
                    "absolute z-50 mt-2 min-w-[12rem] overflow-hidden rounded-[var(--radius)]",
                    "border border-border bg-card p-1 shadow-lg",
                    "animate-in fade-in-80 slide-in-from-top-2",
                    // Use align prop
                    align === "start" && "left-0",
                    align === "center" && "left-1/2 -translate-x-1/2",
                    align === "end" && "right-0",
                    "min-w-[200px]"
                )}
            >
                {children}
            </div>
            {/* Overlay to close on click outside - optional but "sin JS" usually precludes this.
                However, for better UX without JS state, we rely on nature.
            */}
        </details>
    );
}

export const DropdownMenuItem = React.forwardRef<HTMLButtonElement, DropdownMenuItemProps>(
    ({ className, destructive, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative flex w-full cursor-pointer select-none items-center rounded-sm",
                    "px-2 py-1.5 text-sm outline-none transition-colors",
                    "focus:bg-accent focus:text-accent-foreground",
                    "hover:bg-accent hover:text-accent-foreground",
                    "disabled:pointer-events-none disabled:opacity-50",
                    destructive && "text-danger focus:bg-danger/10 focus:text-danger hover:bg-danger/10 hover:text-danger",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);
DropdownMenuItem.displayName = "DropdownMenuItem";

export const DropdownMenuSeparator = ({ className }: { className?: string }) => (
    <div className={cn("-mx-1 my-1 h-px bg-border", className)} />
);
