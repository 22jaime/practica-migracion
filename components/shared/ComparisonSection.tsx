"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Check, X, AlertCircle, ShieldCheck } from "lucide-react";

interface ComparisonSectionProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
}

export function ComparisonSection({
    title = "¿Por qué elegirnos?",
    subtitle = "Tu tranquilidad y tiempo valen más que el riesgo de hacerlo solo."
}: ComparisonSectionProps) {
    return (
        <Section className="py-24 bg-[var(--bg)] relative overflow-hidden">


            <Container className="relative z-10">
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-6">
                        {title}
                    </h2>
                    <p className="text-xl text-neutral-500 font-medium leading-relaxed">
                        {subtitle}
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md md:max-w-5xl mx-auto items-stretch">
                    {/* Option A: "The Hard Way" (Improved Visibility) */}
                    <Reveal variant="fade-up" duration="med" className="h-full">
                        <div className="h-full p-8 md:p-10 rounded-[2.5rem] bg-neutral-100/90 backdrop-blur-xl border border-neutral-200 shadow-sm relative overflow-hidden group transition-all duration-300 hover:bg-white hover:shadow-md">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4 opacity-90">
                                    <div className="p-2 rounded-xl bg-neutral-200/70 text-neutral-600 backdrop-blur-sm">
                                        <AlertCircle className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-neutral-500 uppercase tracking-wider text-sm">Riesgoso y Lento</span>
                                </div>
                                <h3 className="text-3xl font-bold text-neutral-600 mb-2">Hacerlo por tu cuenta</h3>
                                <p className="text-neutral-500 font-medium">O pedir favores a amigos</p>
                            </div>

                            <ul className="space-y-5">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <X className="w-3.5 h-3.5 text-red-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-neutral-700 font-medium">Estafas e informalidad</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <X className="w-3.5 h-3.5 text-red-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-neutral-700 font-medium">Riesgo de sellos o documentos falsos</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <X className="w-3.5 h-3.5 text-red-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-neutral-700 font-medium">Meses de incertidumbre</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <X className="w-3.5 h-3.5 text-red-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-neutral-700 font-medium">Sin soporte si algo sale mal</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* Option B: "The Best Way" (Primary Card) */}
                    <Reveal variant="fade-up" duration="med" delay={150} className="h-full">
                        <div className="h-full p-8 md:p-10 rounded-[2.5rem] bg-white border border-[var(--brand-light)] shadow-xl shadow-[var(--brand-mid)]/10 relative overflow-hidden z-10 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--brand-mid)]/20">
                            {/* Decorative Gradient Blob */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[var(--brand-light)]/20 blur-[60px] pointer-events-none" />

                            <div className="mb-8 relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-light)]/80 backdrop-blur-md text-[var(--brand-dark)] text-xs font-bold uppercase tracking-wide mb-4 shadow-sm border border-white/20">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    Recomendado
                                </div>
                                <h3 className="text-4xl font-black text-neutral-900 mb-2">Gestoría HOL</h3>
                                <p className="text-[var(--brand-dark)] font-medium">La vía segura, rápida y legal</p>
                            </div>

                            <ul className="space-y-5 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[var(--brand-mid)] flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-[var(--brand-mid)]/30">
                                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                                    </div>
                                    <span className="text-neutral-900 font-bold">Equipo profesional contratado</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[var(--brand-mid)] flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-[var(--brand-mid)]/30">
                                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                                    </div>
                                    <span className="text-neutral-900 font-bold">Factura legal y garantía de validez</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[var(--brand-mid)] flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-[var(--brand-mid)]/30">
                                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                                    </div>
                                    <span className="text-neutral-900 font-bold">Plazos definidos</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[var(--brand-mid)] flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-[var(--brand-mid)]/30">
                                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                                    </div>
                                    <span className="text-neutral-900 font-bold">Atencion al cliente 24/7</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>
    );
}
