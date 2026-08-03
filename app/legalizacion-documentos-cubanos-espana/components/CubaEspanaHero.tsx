"use client";

import Link from "next/link";
import NextImage from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { WHATSAPP_URL_BASE } from "@/lib/constants";

function ScaleIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
    )
}

function ShieldCheckIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}

function AlertOctagonIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    )
}

function SlidersIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="4" x2="4" y1="21" y2="14" />
            <line x1="4" x2="4" y1="10" y2="3" />
            <line x1="12" x2="12" y1="21" y2="12" />
            <line x1="12" x2="12" y1="8" y2="3" />
            <line x1="20" x2="20" y1="21" y2="16" />
            <line x1="20" x2="20" y1="12" y2="3" />
            <line x1="2" x2="6" y1="14" y2="14" />
            <line x1="10" x2="14" y1="8" y2="8" />
            <line x1="18" x2="22" y1="16" y2="16" />
        </svg>
    )
}

const WHATSAPP_PRESUPUESTO = `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me gustaría información sobre la nueva vía para conseguir mis documentos cubanos, ya que el consulado no da citas.")}`;

export function CubaEspanaHero() {
    return (
        <Section className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--bg)]" spacing="none">

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* --- IZQUIERDA (Content) --- */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">

                        {/* Top Badge */}
                        <Reveal variant="fade-up" duration="slow" delay={0}>
                            <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-red-50 border border-red-200 shadow-sm text-sm font-medium text-red-900 mb-6 hover:scale-[1.01] transition-transform duration-500 cursor-default">
                                <AlertOctagonIcon className="w-4 h-4 text-red-600" />
                                <div className="h-4 w-px bg-red-200" />
                                <span className="tracking-wide text-red-800">Evita los cuellos de botella</span>
                            </div>
                        </Reveal>

                        {/* H1 */}
                        <Reveal variant="blur-up" duration="slower" delay={100} className="mb-6">
                            <h1 className="text-3xl md:text-5xl font-black tracking-[-0.02em] leading-[1.1] text-neutral-900 drop-shadow-sm text-left">
                                Consigue tus Documentos Cubanos sin pelear por una cita en el Consulado
                            </h1>
                        </Reveal>

                        {/* Subtitle */}
                        <Reveal variant="blur-up" duration="slow" delay={200} className="mb-8">
                            <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl text-left">
                                Sabemos que el Consulado Cubano está completamente saturado. No paralices tus trámites: gestionamos tu certificado de nacimiento o antecedentes directamente desde Cuba para ti. Rápido, 100% legal y entregado en tu domicilio en España.
                                <br className="block my-2" />
                                <span className="text-neutral-900 font-semibold">Tomamos el control por esta vía alternativa directa.</span>
                            </p>
                        </Reveal>

                        {/* CTAs */}
                        <Reveal variant="blur-up" duration="slow" delay={300} className="mb-10 w-full sm:w-auto">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={WHATSAPP_PRESUPUESTO} target="_blank" className="w-full sm:w-auto">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        fullWidth
                                        className="h-14 px-8 text-lg font-bold bg-[var(--neon-yellow)] text-neutral-900 hover:bg-[var(--brand-hover)] shadow-lg shadow-[var(--neon-yellow)]/20 border-transparent hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
                                    >
                                        Quiero solicitar mis documentos
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="#proceso" className="w-full sm:w-auto">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        fullWidth
                                        className="h-14 px-8 text-lg font-medium border-2 border-neutral-300 hover:border-neutral-900 hover:bg-transparent text-neutral-900 rounded-xl"
                                    >
                                        Ver cómo funciona esta vía
                                    </Button>
                                </Link>
                            </div>
                        </Reveal>

                        {/* Badges (Left Aligned) */}
                        <Reveal delay={400} duration="slow" className="w-full">
                            <Stagger className="flex flex-col sm:flex-row gap-8 w-full border-t border-neutral-200 pt-8" staggerDelay={100}>
                                {[
                                    {
                                        icon: <ShieldCheckIcon className="w-6 h-6 text-neutral-900" />,
                                        title: "Seguridad",
                                        text: "Trámite legal directo MINJUS"
                                    },
                                    {
                                        icon: <ScaleIcon className="w-6 h-6 text-neutral-900" />,
                                        title: "100% Válido",
                                        text: "Entrega total legalizada"
                                    },
                                    {
                                        icon: <SlidersIcon className="w-6 h-6 text-neutral-900" />,
                                        title: "Flexible",
                                        text: "Pago en plazos sin estrés"
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-row items-center gap-3 group cursor-default">
                                        <div className="p-3 rounded-xl bg-neutral-100/80 text-neutral-900 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="font-bold text-base text-neutral-900 leading-none mb-1.5">{item.title}</span>
                                            <span className="text-sm text-neutral-500 leading-none font-medium">{item.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </Stagger>
                        </Reveal>
                    </div>

                    {/* --- DERECHA (Documento) --- */}
                    <div className="lg:col-span-5 relative flex items-center justify-center mt-12 lg:mt-0">
                        <Reveal variant="scale-in" duration="slower" delay={150} className="w-full flex items-center justify-center relative">
                            {/* Aurora Behind */}
                            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                                <div className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-transparent rounded-full blur-3xl opacity-70 animate-pulse" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--neon-yellow)]/10 rounded-full blur-[80px]" />
                            </div>

                            {/* Document card */}
                            <div className="relative z-10 w-full max-w-[400px] rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
                                {/* Paper shadow layers */}
                                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-neutral-300/60 rounded-lg" />
                                <div className="absolute inset-0 translate-x-1 translate-y-1 bg-neutral-200/80 rounded-lg" />
                                {/* Main document */}
                                <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden border border-neutral-200/50">
                                    {/* Legalizado badge */}
                                    <div className="absolute top-3 right-3 z-20 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md tracking-widest uppercase">
                                        ✓ Legalizado
                                    </div>
                                    <NextImage
                                        src="/images/legalizacion-consulado-hero.jpg"
                                        alt="Documento cubano legalizado por el Consulado General de Cuba en Madrid"
                                        width={400}
                                        height={566}
                                        className="w-full h-auto object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
