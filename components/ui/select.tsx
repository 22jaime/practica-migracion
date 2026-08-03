import * as React from "react";
import { cn } from "@/lib/cn";

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    helperText?: string;
    state?: "default" | "error" | "success";
    options: Array<{ value: string; label: string }>;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, helperText, state = "default", options, id, ...props }, ref) => {
        const generatedId = React.useId();
        const selectId = id || `select-${generatedId}`;

        return (
            <div className="w-full space-y-2">
                {label && (
                    <label
                        htmlFor={selectId}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {label}
                    </label>
                )}
                <div className="relative">
                    <select
                        id={selectId}
                        className={cn(
                            "flex h-10 w-full appearance-none rounded-[var(--radius)] border border-border bg-background px-3 py-2 pr-8 text-sm",
                            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                            "disabled:cursor-not-allowed disabled:opacity-50",
                            state === "error" && "border-danger focus-visible:ring-danger",
                            state === "success" && "border-success focus-visible:ring-success",
                            className
                        )}
                        ref={ref}
                        {...props}
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                        <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                {helperText && (
                    <p
                        className={cn("text-sm font-semibold text-muted-foreground",
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
Select.displayName = "Select";

export { Select };
