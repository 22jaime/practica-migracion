"use client";

import { documentsData } from "@/lib/document-data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

interface EspanaServicesListProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
}

export function EspanaServicesList({
    title = <span className="block">¿Qué documento necesitas? <br className="hidden md:block" /></span>,
    subtitle = "Nos encargamos de todos"
}: EspanaServicesListProps) {
    // Filter out "documentos-academicos"
    const documentsToShow = documentsData.filter(doc => doc.id !== "documentos-academicos");

    return (
        <Section id="services" className="bg-[var(--bg)] py-20 relative overflow-hidden">
            <Container className="relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <Reveal variant="fade-up" duration="slow">
                        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-6">
                            {title}
                            {subtitle && <span className="text-neutral-500 block mt-2">{subtitle}</span>}
                        </h2>
                    </Reveal>
                </div>

                <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8" staggerDelay={50}>
                    {documentsToShow.map((service, index) => {
                        return (
                            <Reveal
                                key={service.slug}
                                variant="fade-up"
                                duration="med"
                            >
                                <div className="relative p-6 h-full rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md flex items-center gap-4 shadow-sm">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 bg-neutral-100/50 text-neutral-600">
                                        <service.icon className="w-6 h-6" strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold leading-tight text-neutral-700">
                                            {service.title}
                                        </h3>
                                        {/* Optional: if you want to show the description as well uncomment below 
                                        <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                                            {service.shortDescription}
                                        </p>
                                        */}
                                    </div>
                                </div>
                            </Reveal>
                        )
                    })}
                </Stagger>
            </Container>
        </Section >
    );
}
