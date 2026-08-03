"use client";

import Link from "next/link";
import { LEGALIZATION_FORM_URL } from "@/lib/constants";
import { documentsData } from "@/lib/document-data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Button } from "@/components/ui/button";

interface ServicesGridProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
}

export function ServicesGrid({
    title = <span className="block">¿Qué documento necesitas? <br className="hidden md:block" /></span>,
    subtitle = "Nos encargamos de todos"
}: ServicesGridProps) {
    const [isExpanded, setIsExpanded] = useState(false);

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

                <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8 sm:mb-16" staggerDelay={50}>
                    {documentsData.map((service, index) => {
                        // Highlight first item or specific items if needed
                        const highlight = index === 0;

                        return (
                            <Reveal
                                key={service.slug}
                                variant="fade-up"
                                duration="med"
                                className={cn(
                                    !isExpanded && index >= 4 ? "hidden sm:block" : "block"
                                )}
                            >
                                {service.isWhatsappAction ? (
                                    <a
                                        href={`https://wa.me/34642066283?text=${encodeURIComponent("Hola, tengo una consulta sobre otros documentos legalizados.")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block h-full"
                                    >
                                        <div className={`
                                    relative p-6 h-full rounded-2xl border transition-all duration-300 group cursor-pointer
                                    bg-white/60 backdrop-blur-md flex items-center gap-4
                                    ${highlight
                                                ? "border-[var(--brand-solid)] shadow-[0_8px_30px_-6px_rgba(var(--brand-rgb),0.15)]"
                                                : "border-white/40 hover:border-[var(--brand-mid)] hover:shadow-lg"
                                            }
                                `}>
                                            {/* Hover Glow Effect */}
                                            <div className={`
                                        absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none
                                        ${highlight ? "bg-[var(--brand-light)]/10 opacity-100" : "group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/40 to-transparent"}
                                    `} />

                                            <div className={`
                                        flex items-center justify-center w-12 h-12 rounded-xl shrink-0 transition-colors duration-300
                                        ${highlight ? "bg-[var(--brand-light)] text-[var(--brand-dark)]" : "bg-neutral-100/50 text-neutral-600 group-hover:bg-[var(--brand-light)] group-hover:text-[var(--brand-dark)]"}
                                    `}>
                                                <div className="group-hover:scale-110 transition-transform duration-300">
                                                    {/* Render Icon Component */}
                                                    <service.icon className="w-6 h-6" strokeWidth={1.5} />
                                                </div>
                                            </div>

                                            <h3 className={`font-bold leading-tight transition-colors duration-300 ${highlight ? "text-[var(--brand-dark)] text-lg" : "text-neutral-700 group-hover:text-neutral-900"}`}>
                                                {service.title}
                                            </h3>

                                            <div className={`ml-auto transition-transform duration-300 group-hover:translate-x-1 ${highlight ? "text-[var(--brand-dark)]" : "text-neutral-400 group-hover:text-[var(--brand-dark)]"}`}>
                                                <ChevronRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <Link href={`/${service.slug}`} className="block h-full">
                                        <div className={`
                                    relative p-6 h-full rounded-2xl border transition-all duration-300 group cursor-pointer
                                    bg-white/60 backdrop-blur-md flex items-center gap-4
                                    ${highlight
                                                ? "border-[var(--brand-solid)] shadow-[0_8px_30px_-6px_rgba(var(--brand-rgb),0.15)]"
                                                : "border-white/40 hover:border-[var(--brand-mid)] hover:shadow-lg"
                                            }
                                `}>
                                            {/* Hover Glow Effect */}
                                            <div className={`
                                        absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none
                                        ${highlight ? "bg-[var(--brand-light)]/10 opacity-100" : "group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/40 to-transparent"}
                                    `} />

                                            <div className={`
                                        flex items-center justify-center w-12 h-12 rounded-xl shrink-0 transition-colors duration-300
                                        ${highlight ? "bg-[var(--brand-light)] text-[var(--brand-dark)]" : "bg-neutral-100/50 text-neutral-600 group-hover:bg-[var(--brand-light)] group-hover:text-[var(--brand-dark)]"}
                                    `}>
                                                <div className="group-hover:scale-110 transition-transform duration-300">
                                                    {/* Render Icon Component */}
                                                    <service.icon className="w-6 h-6" strokeWidth={1.5} />
                                                </div>
                                            </div>

                                            <h3 className={`font-bold leading-tight transition-colors duration-300 ${highlight ? "text-[var(--brand-dark)] text-lg" : "text-neutral-700 group-hover:text-neutral-900"}`}>
                                                {service.title}
                                            </h3>

                                            <div className={`ml-auto transition-transform duration-300 group-hover:translate-x-1 ${highlight ? "text-[var(--brand-dark)]" : "text-neutral-400 group-hover:text-[var(--brand-dark)]"}`}>
                                                <ChevronRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </Reveal>
                        )
                    })}
                </Stagger>

                {/* Mobile Show More Button */}
                <div className="flex sm:hidden justify-center mb-12">
                    <Button
                        variant="outline"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="bg-white/50 border-neutral-200 text-neutral-700 font-bold px-6 py-5 rounded-xl flex items-center gap-2"
                    >
                        {isExpanded ? (
                            <>
                                Ver menos servicios
                                <ChevronUp className="w-5 h-5" />
                            </>
                        ) : (
                            <>
                                Ver todos los servicios ({documentsData.length})
                                <ChevronDown className="w-5 h-5" />
                            </>
                        )}
                    </Button>
                </div>

                {/* Reinforcement Copy & Buttons */}
                <Reveal variant="fade-up" duration="slow" delay={300}>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl p-8 md:p-10 shadow-sm inline-block w-full">
                            <p className="text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed mb-8">
                                No importa si necesitas uno nuevo o solo legalizarlo. Gestionamos la <span className="text-neutral-900 font-bold">obtención y legalización en MINJUS y Consulado</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href={LEGALIZATION_FORM_URL} target="_blank">
                                    <Button
                                        size="lg"
                                        className="bg-neutral-900 text-white hover:bg-neutral-800 text-lg px-8 py-6 rounded-xl w-full sm:w-auto shadow-lg shadow-neutral-900/20 group"
                                    >
                                        Solicitar documentos
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>

                                <Link href="#pricing">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="bg-white/50 hover:bg-white text-neutral-900 border-neutral-200 text-lg px-8 py-6 rounded-xl w-full sm:w-auto"
                                    >
                                        Ver tiempos y precios
                                        <Clock className="ml-2 w-5 h-5 text-neutral-500" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>

            </Container>
        </Section >
    );
}
