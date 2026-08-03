// Example component demonstrating the project structure
// This file can be removed when you start building your actual components

import { cn } from "@/lib/utils";

interface ExampleComponentProps {
    className?: string;
    children: React.ReactNode;
}

export function ExampleComponent({
    className,
    children
}: ExampleComponentProps) {
    return (
        <div className={cn("p-4 rounded-lg border", className)}>
            {children}
        </div>
    );
}
