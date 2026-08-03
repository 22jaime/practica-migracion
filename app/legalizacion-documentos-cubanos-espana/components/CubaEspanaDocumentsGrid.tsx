"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { WHATSAPP_URL_BASE } from "@/lib/constants";
import {
    FileText, Heart, Scale, ScrollText, Skull,
    Users, Gem, ShieldAlert, HelpCircle, MessageCircle
} from "lucide-react";

const documents = [
    {
        icon: FileText,
        title: "Certificado de Nacimiento",
        description: "El más solicitado. Imprescindible para nacionalidad, arraigo y reagrupación familiar.",
    },
    {
        icon: Heart,
        title: "Certificado de Matrimonio",
        description: "Necesario para reagrupación de cónyuge, inscripción en Registro Civil español y residencia.",
    },
    {
        icon: Scale,
        title: "Certificado de Divorcio",
        description: "Exigido para contraer nuevo matrimonio en España o acreditar estado civil en extranjería.",
    },
    {
        icon: Gem,
        title: "Certificado de Soltería",
        description: "Requerido para matrimonios en España cuando no existe inscripción previa en Cuba.",
    },
    {
        icon: Skull,
        title: "Certificado de Defunción",
        description: "Necesario para herencias, pensiones y cancelación de inscripciones en España.",
    },
    {
        icon: ScrollText,
        title: "Certificado de Estado Conyugal",
        description: "Acredita tu situación civil actual de forma oficial ante organismos españoles.",
    },
    {
        icon: Users,
        title: "Vigencia de Matrimonio",
        description: "Confirma que tu matrimonio sigue vigente. Utilizado en reagrupación familiar.",
    },
    {
        icon: ShieldAlert,
        title: "Antecedentes Penales",
        description: "Obligatorio para residencia, nacionalidad y determinados trámites laborales.",
    },
    {
        icon: HelpCircle,
        title: "Otros Documentos",
        description: "¿Tu documento no aparece aquí? Consúltanos y te decimos si podemos gestionarlo.",
        isWhatsapp: true,
    },
];

export function CubaEspanaDocumentsGrid() {
    return (
        <Section id="services" className="bg-[var(--bg)] py-20 relative overflow-hidden">
            <Container className="relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <Reveal variant="fade-up" duration="slow">
                        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-6">
                            <span className="block">¿Qué documento necesitas?</span>
                            <span className="text-neutral-500 block mt-2">Nos encargamos de todos</span>
                        </h2>
                    </Reveal>
                </div>

                <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8" staggerDelay={50}>
                    {documents.map((doc) => {
                        const content = (
                            <div className="relative p-6 h-full rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300 group">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 bg-neutral-100/50 text-neutral-600 group-hover:bg-[var(--brand-light)] group-hover:text-[var(--brand-dark)] transition-colors duration-300">
                                        <doc.icon className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-bold leading-tight text-neutral-700">
                                        {doc.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed pl-16">
                                    {doc.description}
                                </p>
                                {doc.isWhatsapp && (
                                    <div className="pl-16 mt-1">
                                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                                            <MessageCircle className="w-4 h-4" />
                                            Consultar por WhatsApp
                                        </span>
                                    </div>
                                )}
                            </div>
                        );

                        if (doc.isWhatsapp) {
                            return (
                                <Reveal key={doc.title} variant="fade-up" duration="med">
                                    <a
                                        href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, tengo un documento cubano que no aparece en su listado. ¿Podrían ayudarme con la legalización?")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block h-full"
                                    >
                                        {content}
                                    </a>
                                </Reveal>
                            );
                        }

                        return (
                            <Reveal key={doc.title} variant="fade-up" duration="med">
                                {content}
                            </Reveal>
                        );
                    })}
                </Stagger>
            </Container>
        </Section>
    );
}
