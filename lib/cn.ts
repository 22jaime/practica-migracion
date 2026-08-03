import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for composing Tailwind CSS classes
 * 
 * Combines `clsx` for conditional classes with `tailwind-merge`
 * to intelligently merge conflicting Tailwind utilities.
 * 
 * @example
 * ```tsx
 * cn("px-4 py-2", isActive && "bg-brand", className)
 * // Result: "px-4 py-2 bg-brand custom-class"
 * 
 * cn("p-4", "p-8") 
 * // Result: "p-8" (tailwind-merge deduplicates)
 * ```
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
