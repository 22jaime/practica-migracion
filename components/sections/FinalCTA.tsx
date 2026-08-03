"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { MessageCircle, ArrowRight } from "lucide-react";

import { WHATSAPP_URL_BASE } from "@/lib/constants";

export function FinalCTA() {
    return (
        <Section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-neutral-100">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <Container>
                <div className="relative max-w-4xl mx-auto text-center z-10">
                    <Reveal variant="fade-up" duration="slow">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--neon-yellow)]/20 text-neutral-800 text-sm font-bold tracking-wide uppercase mb-8 border border-[var(--neon-yellow)]/30">
                            Gestoría HOL
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-neutral-900 mb-8 tracking-tight leading-[1.1] break-words">
                            Tu nueva vida en España <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600">
                                empieza hoy.
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-neutral-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            Sin complicaciones, sin esperas innecesarias. <br className="hidden md:block" />
                            Déjanos la burocracia a nosotros y enfócate en tu futuro.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, quiero empezar mi trámite hoy.")}`}
                                target="_blank"
                                className="w-full sm:w-auto"
                            >
                                <Button size="lg" className="w-full sm:w-auto px-6 md:px-10 h-14 md:h-16 rounded-[2rem] bg-neutral-900 text-white font-bold text-base md:text-xl hover:bg-neutral-800 hover:scale-105 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
                                    <MessageCircle className="w-6 h-6 shrink-0" />
                                    Contactar por WhatsApp
                                </Button>
                            </Link>
                            <Link href="/proximamente" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 md:px-10 h-14 md:h-16 rounded-[2rem] border-neutral-200 text-neutral-900 font-bold text-base md:text-xl hover:bg-neutral-50 hover:border-neutral-300 transition-all flex items-center justify-center gap-3">
                                    Ver todos los Servicios
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-16 pt-16 border-t border-neutral-100 flex flex-wrap justify-center gap-8 md:gap-16 text-neutral-400 font-bold text-sm tracking-widest uppercase">
                            <span>Más de 10 Años de Experiencia</span>
                            <span>Trámites 100% Online</span>
                            <span>Soporte Personalizado</span>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>
    );
}
