"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL_BASE } from "@/lib/constants";

export function PricingRange() {
    return (
        <Section className="py-24 md:py-32 bg-neutral-50" id="precios">
            <Container>
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <span className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-4 block">
                        Presupuesto Transparente
                    </span>
                    <h2 className="text-3xl md:text-[44px] font-black tracking-tight text-neutral-900 leading-[1.1] mb-6">
                        Precios ajustados a tu caso
                    </h2>
                    <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                        El precio final puede variar según la cantidad de documentos que necesites legalizar y la vía de envío elegida.
                    </p>
                </Reveal>

                <Reveal variant="fade-up" duration="slow" delay={100} className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[2.5rem] border border-neutral-200 p-8 md:p-14 shadow-xl shadow-neutral-900/5 relative overflow-hidden flex flex-col items-center text-center">
                        {/* Decorative Top Accent */}
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-[var(--neon-yellow)]" />

                        <div className="mb-8">
                            <span className="text-neutral-500 font-semibold mb-2 block">Rango estimado</span>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter">€200</span>
                                <span className="text-2xl md:text-4xl font-bold text-neutral-400 mx-2">-</span>
                                <span className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter">€500</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full text-left mb-12 border-y border-neutral-100 py-10">
                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-neutral-900 flex items-center gap-2 mb-4">
                                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                                    Facilidades incluidas
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-neutral-600 font-medium">
                                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                                        Pago en dos plazos (50% al inicio, 50% al finalizar)
                                    </li>
                                    <li className="flex gap-3 text-neutral-600 font-medium">
                                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                                        Descuento del 10% para 4+ documentos unidos familiarmente
                                    </li>
                                    <li className="flex gap-3 text-neutral-600 font-medium">
                                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                                        Descuento del 15% para 7+ documentos unidos familiarmente
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-neutral-900 flex items-center gap-2 mb-4">
                                    <ShieldAlert className="text-amber-500 w-5 h-5" />
                                    El precio depende de:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-neutral-600 font-medium">
                                        <span className="text-amber-500 font-bold shrink-0">+</span>
                                        Cantidad de documentos a presentar.
                                    </li>
                                    <li className="flex gap-3 text-neutral-600 font-medium">
                                        <span className="text-amber-500 font-bold shrink-0">+</span>
                                        Tasas consulares de Cuba vigentes.
                                    </li>
                                    <li className="flex gap-3 text-neutral-600 font-medium">
                                        <span className="text-amber-500 font-bold shrink-0">+</span>
                                        Empresa de envíos elegida (DHL, MRW, Fedex, Correos).
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-lg text-neutral-500 font-medium mb-8 max-w-2xl mx-auto">
                            Cada caso es único. Cuéntanos qué necesitas y te daremos un presupuesto cerrado y transparente, sin sobrecostes inesperados.
                        </p>

                        <Link
                            href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me gustaría solicitar un presupuesto para legalizar documentos españoles para usar en Cuba. ¿Podrían informarme?")}`}
                            target="_blank"
                            className="w-full sm:w-auto"
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                className="h-16 px-10 text-xl font-bold bg-[#00E599] text-neutral-900 shadow-xl shadow-[#00E599]/20 hover:-translate-y-1 transition-all rounded-xl w-full sm:w-auto"
                            >
                                Contactar para Presupuesto
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
}

