import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    state?: "default" | "error" | "success";
    label?: string;
    helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, state = "default", label, helperText, id, ...props }, ref) => {
        const generatedId = React.useId();
        const inputId = id || `input-${generatedId}`;

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium mb-2 text-foreground"
                    >
                        {label}
                    </label>
                )}
                <input
                    id={inputId}
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-[var(--radius)] border bg-background px-3 py-2",
                        "text-sm ring-offset-background file:border-0 file:bg-transparent",
                        "file:text-sm file:font-medium placeholder:text-muted-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                        "disabled:cursor-not-allowed disabled:opacity-50",

                        // State styles
                        state === "default" &&
                        "border-input focus-visible:ring-ring",
                        state === "error" &&
                        "border-danger focus-visible:ring-danger",
                        state === "success" &&
                        "border-success focus-visible:ring-success",

                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {helperText && (
                    <p
                        className={cn(
                            "mt-2 text-sm",
                            state === "error" && "text-danger",
                            state === "success" && "text-success",
                            state === "default" && "text-muted-foreground"
                        )}
                    >
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
