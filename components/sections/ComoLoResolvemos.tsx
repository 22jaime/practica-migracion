"use client";

import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessagesSquare, Zap, ClipboardList, Building2, MessageCircle, Users, ClipboardCheck, ChevronDown } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
import { FileCheck } from "lucide-react";
import { useScroll } from "@/components/motion/SmoothScroll";

const steps = [
    {
        id: "01",
        title: "Gestoría Real",
        description: "Atención presencial en oficina y online, con contratos y procesos transparentes",
        microBenefit: "Seguridad total.",
        icon: <Building2 className="w-7 h-7" />,
    },
    {
        id: "02",
        title: "Comunicación Directa",
        description: "Hablamos contigo cuando lo necesites y resolvemos tus dudas antes de empezar",
        microBenefit: "Claridad absoluta.",
        icon: <MessagesSquare className="w-7 h-7" />,
    },
    {
        id: "03",
        title: "Trámites Rápidos",
        description: "Procesamos tus documentos y expedientes de forma ágil y segura, evitando retrasos o errores",
        microBenefit: "Agilidad real.",
        icon: <Zap className="w-7 h-7" />,
    },
    {
        id: "04",
        title: "Gestión Completa",
        description: "Gestionamos tu trámite de principio a fin, en un único servicio",
        microBenefit: "Despreocúpate.",
        icon: <ClipboardList className="w-7 h-7" />,
    },
];

export function ComoLoResolvemos() {
    const lenis = useScroll();

    return (
        <Section id="solucion" className="py-12 md:py-24 bg-[var(--bg)] relative overflow-hidden">
            <Container>
                {/* SPLIT LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* LEFT: HEADER + BENEFITS GRID (Swapped) */}
                    <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                        {/* Header Content */}
                        <div className="text-left px-4 md:px-0">
                            <Reveal duration="slow">
                                <h2 className="text-3xl md:text-[44px] font-black text-neutral-900 tracking-tight mb-4 leading-[1.1]">
                                    Especializados en trámites migratorios para cubanos
                                </h2>
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed max-w-xl">
                                    Conocemos de primera mano lo difícil que es emigrar, por eso hemos creado la solución perfecta para ti
                                </p>
                            </Reveal>
                        </div>

                        {/* BENEFITS GRID (2x2) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Stagger className="contents" staggerDelay={100}>
                                {steps.map((step) => (
                                    <Reveal key={step.id} variant="fade-up">
                                        <div className="group h-full flex flex-col items-start gap-4 p-6 rounded-2xl bg-white border border-transparent hover:border-neutral-100 transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-900/10 hover:-translate-y-2">
                                            {/* Icon Box */}
                                            <div className="shrink-0 w-14 h-14 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-900 group-hover:bg-[var(--brand)] group-hover:text-[var(--brand-dark)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm group-hover:shadow-md">
                                                {step.icon}
                                            </div>

                                            {/* Text Content */}
                                            <div className="space-y-2">
                                                <h3 className="text-base md:text-lg font-bold text-neutral-900 group-hover:text-[var(--brand-dark)] transition-colors leading-tight">
                                                    {step.title}
                                                </h3>
                                                <p className="text-base text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-600 transition-colors">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </Stagger>
                        </div>
                    </div>

                    {/* RIGHT: VISUAL / IMAGE (Swapped) */}
                    <div className="flex flex-col justify-center order-1 lg:order-2">

                        {/* Visual / Image Placeholder */}
                        <Reveal variant="fade-in" delay={200} className="relative group flex-grow h-full min-h-[300px] max-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-neutral-900/10 border border-neutral-100 bg-white p-2 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
                            {/* Team Image */}
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors duration-500 isolate">
                                <Image
                                    src="/images/team-hol.jpeg"
                                    alt="Equipo de Gestoría HOL"
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Badge - Glassmorphic */}
                            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:left-6 bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/50 animate-float backdrop-saturate-150">
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col">
                                        <p className="text-xs font-bold text-[var(--brand-solid)] uppercase tracking-wider mb-1">Gestoría HOL</p>
                                        <p className="text-lg font-black text-neutral-900 leading-none">
                                            De cubano a cubano
                                        </p>
                                        <p className="text-sm text-neutral-500 font-medium mt-1">
                                            Expertos en tus trámites
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* BOTTOM NOTE Link to Testimonials */}
                <Reveal variant="fade-up" delay={400} className="mt-16 md:mt-32">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <Link
                            href="#testimonios"
                            className="group flex flex-col items-center gap-3"
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.querySelector("#testimonios");
                                if (target) {
                                    if (lenis) {
                                        lenis.scrollTo(target as HTMLElement);
                                    } else {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }
                            }}
                        >
                            <span className="text-neutral-500 text-sm font-bold tracking-wider uppercase text-center group-hover:text-neutral-900 transition-colors">
                                Lo que dicen nuestros clientes
                            </span>
                            <div className="w-12 h-12 flex items-center justify-center group-hover:translate-y-1 transition-transform duration-300">
                                <ChevronDown className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                            </div>
                        </Link>
                    </div>
                </Reveal>

            </Container>
        </Section>
    );
}
