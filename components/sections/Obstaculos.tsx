"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { ChevronDown, ShieldAlert, HelpCircle, Hourglass } from "lucide-react";
import { useScroll } from "@/components/motion/SmoothScroll";



// --- MAIN COMPONENT ---

export function Obstaculos() {
    const lenis = useScroll();

    const handleScrollBelow = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = document.querySelector("#solucion");
        if (target) {
            if (lenis) {
                lenis.scrollTo(target as HTMLElement);
            } else {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <Section className="py-12 md:py-24 relative overflow-hidden bg-[var(--bg)]">
            <Container className="relative z-10">
                {/* HEADER */}
                <div className="max-w-6xl mx-auto text-center mb-12 md:mb-32 px-4 md:px-0">
                    <Reveal>
                        <h2 className="text-3xl md:text-[44px] font-black text-neutral-900 tracking-tight mb-4 leading-[1.1]">
                            Sabemos a qué te enfrentas al migrar
                        </h2>
                    </Reveal>
                    <Reveal delay={200}>
                        <p className="text-lg md:text-xl text-neutral-500 font-medium max-w-2xl mx-auto leading-relaxed">
                            Estos son los problemas más habituales que vemos cada día
                        </p>
                    </Reveal>
                </div>

                {/* CARDS GRID */}
                <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* CARD 1: Estafas */}
                    <Reveal variant="fade-up" className="h-full">
                        <Card className="h-full flex flex-col justify-start px-6 py-10 min-h-[320px] border border-neutral-100 rounded-[2rem] shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(166,61,64,0.15)] transition-all duration-500 bg-white group relative overflow-hidden hover:-translate-y-2 hover:rotate-[0.5deg] cursor-default">
                            {/* Subtle Ambient Glow on Hover (Solid Red Tint) */}
                            <div className="absolute inset-0 bg-[var(--vibrant-red)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex flex-col relative z-10 h-full">
                                <div className="flex items-start gap-4 mb-8">
                                    {/* 1. Icon (Sober & Professional) */}
                                    {/* ShieldAlert requires import but I need to make sure imports are there. 
                                        Wait, I need to make sure I have the imports. 
                                        They were removed in previous steps or I need to check line 1-13.
                                    */}
                                    <ShieldAlert className="w-8 h-8 text-neutral-300 group-hover:text-[var(--vibrant-red)] transition-colors duration-500 stroke-[1.5]" />

                                    {/* 2. Category Label */}
                                    <div className="flex flex-col gap-2 pt-1 w-full">
                                        <span className="text-sm font-black uppercase tracking-widest text-neutral-900 group-hover:text-[var(--vibrant-red)] transition-colors duration-300">
                                            Estafas
                                        </span>
                                        <div className="h-0.5 w-12 bg-neutral-200 group-hover:bg-[var(--vibrant-red)] group-hover:w-24 transition-all duration-500 ease-out rounded-full" />
                                    </div>
                                </div>

                                {/* 3. Question */}
                                <h4 className="text-2xl md:text-[32px] font-extrabold text-neutral-900 mb-6 leading-[1.1] tracking-tight group-hover:scale-[1.01] origin-left transition-transform duration-500">
                                    Y si me engañan?
                                </h4>

                                <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-medium max-w-[95%] opacity-80">
                                    Personas que ofrecen ayuda sin contrato, sin condiciones claras y que dejan de responder cuando el trámite ya ha comenzado.
                                </p>
                            </div>
                        </Card>
                    </Reveal>

                    {/* CARD 2: Desinformación */}
                    <Reveal variant="fade-up" delay={100} className="h-full">
                        <Card className="h-full flex flex-col justify-start px-6 py-10 min-h-[320px] border border-neutral-100 rounded-[2rem] shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(166,61,64,0.15)] transition-all duration-500 bg-white group relative overflow-hidden hover:-translate-y-2 hover:rotate-[0.5deg] cursor-default">
                            <div className="absolute inset-0 bg-[var(--vibrant-red)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex flex-col relative z-10 h-full">
                                <div className="flex items-start gap-4 mb-8">
                                    <HelpCircle className="w-8 h-8 text-neutral-300 group-hover:text-[var(--vibrant-red)] transition-colors duration-500 stroke-[1.5]" />
                                    <div className="flex flex-col gap-2 pt-1 w-full">
                                        <span className="text-sm font-black uppercase tracking-widest text-neutral-900 group-hover:text-[var(--vibrant-red)] transition-colors duration-300">
                                            Desinformación
                                        </span>
                                        <div className="h-0.5 w-12 bg-neutral-200 group-hover:bg-[var(--vibrant-red)] group-hover:w-24 transition-all duration-500 ease-out rounded-full" />
                                    </div>
                                </div>

                                <h4 className="text-2xl md:text-[32px] font-extrabold text-neutral-900 mb-6 leading-[1.1] tracking-tight group-hover:scale-[1.01] origin-left transition-transform duration-500">
                                    Qué me falta ahora?
                                </h4>

                                <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-medium max-w-[95%] opacity-80">
                                    Normativas que cambian, requisitos distintos según cada caso y explicaciones generales que no aplican a tu situación concreta.
                                </p>
                            </div>
                        </Card>
                    </Reveal>

                    {/* CARD 3: Retrasos */}
                    <Reveal variant="fade-up" delay={200} className="h-full">
                        <Card className="h-full flex flex-col justify-start px-6 py-10 min-h-[320px] border border-neutral-100 rounded-[2rem] shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(166,61,64,0.15)] transition-all duration-500 bg-white group relative overflow-hidden hover:-translate-y-2 hover:rotate-[0.5deg] cursor-default">
                            <div className="absolute inset-0 bg-[var(--vibrant-red)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex flex-col relative z-10 h-full">
                                <div className="flex items-start gap-4 mb-8">
                                    <Hourglass className="w-8 h-8 text-neutral-300 group-hover:text-[var(--vibrant-red)] transition-colors duration-500 stroke-[1.5]" />
                                    <div className="flex flex-col gap-2 pt-1 w-full">
                                        <span className="text-sm font-black uppercase tracking-widest text-neutral-900 group-hover:text-[var(--vibrant-red)] transition-colors duration-300">
                                            Retrasos
                                        </span>
                                        <div className="h-0.5 w-12 bg-neutral-200 group-hover:bg-[var(--vibrant-red)] group-hover:w-24 transition-all duration-500 ease-out rounded-full" />
                                    </div>
                                </div>

                                <h4 className="text-2xl md:text-[32px] font-extrabold text-neutral-900 mb-6 leading-[1.1] tracking-tight group-hover:scale-[1.01] origin-left transition-transform duration-500">
                                    Por qué no avanza?
                                </h4>

                                <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-medium max-w-[95%] opacity-80">
                                    Trámites que se alargan durante meses, falta de seguimiento y la sensación constante de no saber en qué punto está tu expediente.
                                </p>
                            </div>
                        </Card>
                    </Reveal>
                </Stagger>

                {/* BOTTOM NOTE replaced with logic */}
                <Reveal variant="fade-up" delay={400} className="mt-16 md:mt-32">
                    <div className="flex flex-col items-center justify-center">
                        <Link
                            href="#solucion"
                            className="group flex flex-col items-center gap-3"
                            onClick={handleScrollBelow}
                        >
                            <span className="text-neutral-500 text-sm font-bold tracking-wider uppercase text-center group-hover:text-neutral-900 transition-colors">
                                Cómo lo resolvemos
                            </span>
                            <div className="w-12 h-12 flex items-center justify-center group-hover:translate-y-1 transition-transform duration-300">
                                <ChevronDown className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                            </div>
                        </Link>
                    </div>
                </Reveal>
            </Container >
        </Section >
    );
}
