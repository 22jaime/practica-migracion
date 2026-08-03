import * as React from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    bg?: "default" | "surface" | "muted";
    spacing?: "none" | "sm" | "md" | "lg" | "xl";
    title?: string;
    description?: string;
    reveal?: boolean;
    revealVariant?: "fade-up" | "fade-in" | "scale-in";
    stagger?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({
        className,
        bg = "default",
        spacing = "lg",
        title,
        description,
        children,
        reveal = true,
        revealVariant = "fade-up",
        stagger = false,
        ...props
    }, ref) => {
        const ContentWrapper = stagger ? Stagger : React.Fragment;
        const staggerProps = stagger ? { staggerDelay: 100 } : {};

        // Helper to wrap content in reveal if enabled
        const MaybeReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
            if (!reveal) return <>{children}</>;
            return (
                <Reveal variant={revealVariant} delay={delay} className="w-full">
                    {children}
                </Reveal>
            );
        };

        // If staggering, the Section should NOT wrap everything in one Reveal,
        // but let Stagger handle the children (which must be Reveals themselves for Stagger to work best?)
        // Actually Stagger injects `delay` into its children.
        // If content is just one block, Stagger is useless.
        // If content is a grid of cards, Stagger wraps them.

        return (
            <section
                ref={ref}
                className={cn(
                    "w-full",
                    // Background variants
                    bg === "default" && "bg-background",
                    bg === "surface" && "bg-card",
                    bg === "muted" && "bg-muted",
                    // Spacing variants
                    spacing === "none" && "py-0",
                    spacing === "sm" && "py-8",
                    spacing === "md" && "py-12",
                    spacing === "lg" && "py-16 md:py-20",
                    spacing === "xl" && "py-20 md:py-28",
                    className
                )}
                {...props}
            >
                {(title || description) && (
                    <div className="mb-8 space-y-2">
                        <Reveal variant="fade-up" duration="slow">
                            {title && (
                                <h2 className="text-3xl font-bold tracking-tight">
                                    {title}
                                </h2>
                            )}
                            {description && (
                                <p className="text-lg text-muted-foreground">
                                    {description}
                                </p>
                            )}
                        </Reveal>
                    </div>
                )}

                {reveal && !stagger ? (
                    <Reveal variant={revealVariant} duration="med" className="w-full">
                        {children}
                    </Reveal>
                ) : stagger ? (
                    <Stagger {...staggerProps} className="w-full">
                        {children}
                    </Stagger>
                ) : (
                    children
                )}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
