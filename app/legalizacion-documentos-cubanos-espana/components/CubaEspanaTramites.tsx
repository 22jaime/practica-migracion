"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL_BASE } from "@/lib/constants";
import {
    Flag, Users, Heart, FileText, Gem, Landmark, MessageCircle, ArrowRight
} from "lucide-react";

const tramites = [
    {
        icon: Flag,
        title: "Solicitud de nacionalidad española",
        description: "Certificado de nacimiento, antecedentes penales y en algunos casos certificado de matrimonio, todos legalizados.",
    },
    {
        icon: Users,
        title: "Arraigo social o arraigo familiar",
        description: "Certificado de nacimiento legalizado para acreditar vínculos familiares.",
    },
    {
        icon: Heart,
        title: "Reagrupación familiar",
        description: "Certificados de nacimiento, matrimonio o estado conyugal legalizados, según el familiar que reagrupas.",
    },
    {
        icon: FileText,
        title: "Inscripción de nacimiento o matrimonio en el Registro Civil español",
        description: "Documento original legalizado como requisito obligatorio.",
    },
    {
        icon: Gem,
        title: "Matrimonio en España",
        description: "Certificado de nacimiento y de soltería o estado conyugal legalizados.",
    },
    {
        icon: Landmark,
        title: "Herencias, pensiones y trámites de Seguridad Social",
        description: "Certificado de defunción, matrimonio o nacimiento legalizado según el caso.",
    },
];

export function CubaEspanaTramites() {
    return (
        <Section className="py-24 md:py-32 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <Container className="relative z-10">
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-4 block">
                        ¿Para qué trámites lo necesitas?
                    </span>
                    <h2 className="text-3xl md:text-[44px] font-black tracking-tight text-neutral-900 leading-[1.1] mb-6">
                        Situaciones donde te van a pedir un documento cubano legalizado
                    </h2>
                    <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                        Si estás en alguna de estas situaciones, vas a necesitar al menos un documento cubano con legalización consular completa (Consulado de Cuba + MAEC):
                    </p>
                </Reveal>

                <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16" staggerDelay={80}>
                    {tramites.map((item) => (
                        <Reveal key={item.title} variant="fade-up" duration="med">
                            <div className="h-full p-6 md:p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors duration-300">
                                        <item.icon className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-bold text-neutral-900 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </Stagger>

                {/* CTA */}
                <Reveal variant="fade-up" duration="slow" className="text-center">
                    <div className="inline-flex flex-col items-center gap-4 p-8 md:p-10 rounded-[2rem] bg-neutral-50 border border-neutral-100">
                        <div className="w-14 h-14 rounded-full bg-[var(--neon-yellow)] flex items-center justify-center shadow-lg shadow-yellow-400/20">
                            <MessageCircle className="w-7 h-7 text-neutral-900" />
                        </div>
                        <p className="text-lg text-neutral-700 font-bold">
                            ¿No estás seguro de qué documentos necesitas?
                        </p>
                        <Link
                            href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, no estoy seguro de qué documentos cubanos necesito legalizar. ¿Podrían orientarme?")}`}
                            target="_blank"
                        >
                            <Button
                                size="lg"
                                className="h-14 px-8 text-lg font-bold bg-neutral-900 text-white hover:bg-neutral-800 shadow-xl hover:shadow-2xl transition-all rounded-xl"
                            >
                                Consultar por WhatsApp
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
}
