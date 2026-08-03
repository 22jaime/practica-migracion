import * as React from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
    state?: "default" | "error" | "success";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, helperText, state = "default", ...props }, ref) => {
        const id = props.id || label?.toLowerCase().replace(/\s+/g, "-");

        return (
            <div className="w-full space-y-2">
                {label && (
                    <label
                        htmlFor={id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    id={id}
                    className={cn(
                        "flex min-h-[80px] w-full rounded-[var(--radius)] border border-border",
                        "bg-card px-3 py-2 text-sm ring-offset-background",
                        "placeholder:text-muted-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        "resize-y",
                        state === "error" && "border-danger focus-visible:ring-danger",
                        state === "success" && "border-success focus-visible:ring-success",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {helperText && (
                    <p
                        className={cn("text-sm font-semibold text-muted-foreground",
                            state === "error" && "text-danger",
                            state === "success" && "text-success"
                        )}
                    >
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
