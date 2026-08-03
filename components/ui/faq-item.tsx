"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

interface FAQItemProps {
    question: string;
    answer: string;
    className?: string;
}

export function FAQItem({ question, answer, className }: FAQItemProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div
            className={cn(
                "group bg-card border border-border/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-fluid ease-fluid",
                className
            )}
        >
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-6 cursor-pointer font-semibold text-lg text-foreground text-left hover:bg-[var(--brand-light)]/40 transition-colors duration-fluid ease-fluid select-none"
                aria-expanded={isOpen}
            >
                {question}
                <span
                    className={cn(
                        "text-primary transition-transform duration-fluid ease-fluid",
                        isOpen && "rotate-180"
                    )}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m6 9 6 6 6-6" /></svg>
                </span>
            </button>
            <div
                className={cn(
                    "grid transition-all duration-fluid ease-fluid will-change-[grid-template-rows]",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 text-muted-foreground text-base leading-relaxed animate-fade-in">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}
