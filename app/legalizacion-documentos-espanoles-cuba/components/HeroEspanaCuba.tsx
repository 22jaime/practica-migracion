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

// Icons matching Landing Hero exactly
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

function BoltIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    )
}

function GlobeIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    )
}


export function HeroEspanaCuba() {
    return (
        <Section className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--bg)]" spacing="none">

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* --- IZQUIERDA (Content) --- */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">

                        {/* Top Badge */}
                        <Reveal variant="fade-up" duration="slow" delay={0}>
                            <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-sm font-medium text-neutral-800 mb-6 hover:scale-[1.01] transition-transform duration-500 cursor-default">
                                <ScaleIcon className="w-5 h-5 text-[var(--brand)]" />
                                <div className="h-4 w-px bg-neutral-200" />
                                <span className="tracking-wide text-neutral-600">Trámites España-Cuba</span>
                            </div>
                        </Reveal>

                        {/* H1 */}
                        <Reveal variant="blur-up" duration="slower" delay={100} className="mb-6">
                            <h1 className="text-3xl md:text-5xl font-black tracking-[-0.02em] leading-[1.1] text-neutral-900 drop-shadow-sm text-left">
                                Legaliza tus Documentos Españoles para Uso en Cuba sin Salir de Casa
                            </h1>
                        </Reveal>

                        {/* Subtitle */}
                        <Reveal variant="blur-up" duration="slow" delay={200} className="mb-8">
                            <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl text-left">
                                Desde certificados de nacimiento hasta poderes notariales. Gestionamos todos los pasos (Justicia, MAEC y Consulado de Cuba) para que tengan plena validez legal.
                                <br className="block my-2" />
                                <span className="text-neutral-900 font-semibold">Tú no te preocupas de nada, nosotros lo hacemos por ti.</span>
                            </p>
                        </Reveal>

                        {/* CTAs */}
                        <Reveal variant="blur-up" duration="slow" delay={300} className="mb-10 w-full sm:w-auto">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me gustaría solicitar un presupuesto para legalizar documentos españoles para usar en Cuba.")}`}
                                    target="_blank"
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        fullWidth
                                        className="h-14 px-8 text-lg font-bold bg-[var(--neon-yellow)] text-neutral-900 hover:bg-[var(--brand-hover)] shadow-lg shadow-[var(--neon-yellow)]/20 border-transparent hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
                                    >
                                        Solicitar Presupuesto
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
                                        Ver proceso
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
                                        text: "Trámites 100% legales"
                                    },
                                    {
                                        icon: <BoltIcon className="w-6 h-6 text-neutral-900" />,
                                        title: "Comodidad",
                                        text: "Envíos directos a tu casa"
                                    },
                                    {
                                        icon: <GlobeIcon className="w-6 h-6 text-neutral-900" />,
                                        title: "Flexible",
                                        text: "Pago en plazos"
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

                    {/* --- DERECHA (Image) --- */}
                    <div className="lg:col-span-5 relative block h-[400px] lg:h-full lg:min-h-[500px] mt-12 lg:mt-0">
                        <Reveal variant="scale-in" duration="slower" delay={150} className="w-full h-full flex items-center justify-center relative">
                            {/* Aurora Effect Behind Image */}
                            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                                <div className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-transparent rounded-full blur-3xl opacity-70 animate-pulse" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--neon-yellow)]/10 rounded-full blur-[80px]" />
                            </div>

                            <div className="relative w-full h-[600px] flex items-center justify-center z-10">
                                <NextImage
                                    src="/images/legalizaciones-hero-minjus.png"
                                    alt="Documentos españoles legalizados para su uso en Cuba"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

