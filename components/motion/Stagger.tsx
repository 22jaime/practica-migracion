"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

interface StaggerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number; // ms per item
    initialDelay?: number; // ms
}

export function Stagger({
    children,
    className,
    staggerDelay = 100,
    initialDelay = 0,
}: StaggerProps) {
    return (
        <div className={cn(className)}>
            {React.Children.map(children, (child, index) => {
                if (!React.isValidElement(child)) return child;

                return React.cloneElement(child, {
                    // @ts-expect-error - injecting props into Reveal or compatible components
                    delay: initialDelay + (index * staggerDelay),
                });
            })}
        </div>
    );
}
