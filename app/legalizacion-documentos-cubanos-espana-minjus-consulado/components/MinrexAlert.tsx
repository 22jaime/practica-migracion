"use client";

import { ShieldAlert, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/Reveal";

export function MinrexAlert() {
    return (
        <section className="py-12 md:py-20 bg-[var(--bg)] border-b border-neutral-100">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: The Story (Pain Point) & CTA */}
                    <div className="flex flex-col items-start text-left space-y-8 order-2 lg:order-2">
                        <Reveal variant="fade-up" duration="slow">
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight leading-tight">
                                Sabemos que el proceso burocrático puede ser abrumador.
                            </h2>
                        </Reveal>

                        <Reveal variant="fade-up" duration="slow" delay={100} className="space-y-6 text-lg text-neutral-600 leading-relaxed font-medium">
                            <p>
                                Entre el cambio de competencias al MINJUS, las nuevas tarifas en divisas (Resolución 486/2025) y la confusión sobre los documentos digitales, un pequeño error puede costarle meses de retraso.
                            </p>
                            <div className="pl-4 border-l-4 border-neutral-900">
                                <p className="text-neutral-900 font-semibold italic">
                                    En esta página, desglosamos la única ruta válida en 2026 para que sus documentos sean aceptados sin problemas en España.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal variant="fade-up" duration="slow" delay={200} className="pt-2 w-full sm:w-auto">
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-neutral-900 rounded-xl hover:bg-neutral-800 hover:scale-105 shadow-lg shadow-neutral-900/20 group"
                            >
                                Gestionar con expertos
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Reveal>
                    </div>

                    {/* RIGHT COLUMN: The Evidence (Alert Card) */}
                    <div className="order-1 lg:order-1">
                        <Reveal variant="scale-in" duration="slow" delay={300}>
                            <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-neutral-200 p-6 md:p-10 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] group max-w-lg mx-auto lg:mx-0">
                                {/* Ambient Glow (Red/Warning) - Subtle */}
                                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 flex flex-col gap-6">
                                    {/* Header */}
                                    <div className="flex items-center gap-4">
                                        <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-neutral-100/80 text-neutral-500 border border-neutral-200 group-hover:bg-red-500 group-hover:text-white group-hover:shadow-[0_4px_20px_-4px_rgba(239,68,68,0.5)] transition-all duration-500">
                                            <ShieldAlert className="w-6 h-6" strokeWidth={2} />
                                        </div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900">
                                            Aviso Importante 2026
                                        </h3>
                                    </div>

                                    <hr className="border-neutral-100" />

                                    {/* Text */}
                                    <div className="space-y-4">
                                        <p className="text-neutral-600 font-medium leading-relaxed text-base">
                                            Desde febrero de 2025, el <strong className="text-neutral-900">MINREX YA NO legaliza documentos</strong> para el exterior.
                                        </p>
                                        <p className="text-neutral-600 font-medium leading-relaxed text-base">
                                            Esta función ha sido transferida exclusivamente al <strong className="text-neutral-900">Ministerio de Justicia (MINJUS)</strong>.
                                        </p>
                                        <div className="bg-red-50 rounded-xl p-4 border border-red-100 text-red-800 text-sm font-semibold">
                                            Si su gestor le habla de "citas MINREX", su información está obsoleta.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </Container>
        </section>
    );
}
