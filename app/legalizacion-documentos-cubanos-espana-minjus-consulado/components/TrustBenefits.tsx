"use client";

import { ShieldCheck, Clock, Award, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

const benefits = [
    {
        title: "Experiencia Comprobada",
        description: "Años gestionando trámites ante el MINJUS y el Consulado Español con miles de expedientes exitosos.",
        icon: Award,
    },
    {
        title: "Expertos en Migración",
        description: "Equipo especializado en legalización de documentos para Ley de Nietos, visados y nacionalidad española.",
        icon: Users,
    },
    {
        title: "Trámite 100% Online",
        description: "Sin colas, sin citas previas y sin molestar a sus familiares en Cuba. Gestionamos todo por usted.",
        icon: Clock,
    },
    {
        title: "Garantía Legal",
        description: "Documentos oficiales verificables y listos para surtir efecto en cualquier administración española.",
        icon: ShieldCheck,
    },
];

export function TrustBenefits() {
    return (
        <Section className="bg-[var(--bg)] py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* LEFT: Heading */}
                    <div>
                        <Reveal variant="fade-up" duration="slow">
                            <span className="text-sm font-black text-[var(--vibrant-green)] uppercase tracking-widest mb-4 block">
                                Por qué elegir Gestoría HOL
                            </span>
                            <h2 className="text-3xl md:text-[44px] font-black tracking-tight text-neutral-900 leading-[1.1] mb-8">
                                Su trámite en manos <br /> de <span className="text-[var(--vibrant-green)]">profesionales</span>
                            </h2>
                            <p className="text-lg text-neutral-500 font-medium leading-relaxed max-w-xl">
                                No arriesgue su futuro con gestiones inseguras. Le ofrecemos rapidez, transparencia y garantía total en cada paso del proceso.
                            </p>
                        </Reveal>
                    </div>

                    {/* RIGHT: Benefits List */}
                    <div className="relative space-y-10">
                        {/* Decorative Line */}
                        <div className="absolute left-[2rem] top-4 bottom-12 w-px bg-gradient-to-b from-neutral-200 via-neutral-200 to-transparent hidden md:block" />

                        <Stagger className="space-y-8" staggerDelay={0.1}>
                            {benefits.map((benefit, index) => (
                                <Reveal key={benefit.title} variant="fade-up" className="relative group flex gap-6 md:gap-8 items-start">
                                    {/* Icon Bubble */}
                                    <div className="relative flex-shrink-0 z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center shadow-sm group-hover:border-[var(--vibrant-green)] group-hover:shadow-md transition-all duration-300">
                                            <benefit.icon className="w-7 h-7 text-neutral-900 stroke-[1.5]" />
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-tight">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-base text-neutral-500 font-medium leading-relaxed max-w-sm">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </Stagger>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
