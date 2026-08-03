"use strict";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    ArrowRight,
    FileCheck,
    Globe,
    Plane,
    Users,
    HeartHandshake,
    GraduationCap,
    Scale
} from "lucide-react";

export function Servicios() {
    const services = [
        {
            title: "Nacionalidad Española",
            desc: "Expertos en Ley de Nietos (LMD) y Nacionalidad por Residencia. Recupera tus raíces.",
            icon: <Scale className="w-6 h-6" />
        },
        {
            title: "Legalización de Documentos",
            desc: "Gestión completa en el MINREX y Consulado de España. Sin que tengas que viajar.",
            icon: <FileCheck className="w-6 h-6" />
        },
        {
            title: "Visados y Estancias",
            desc: "Turismo, estudios, y reagrupación familiar. Preparamos tu expediente al detalle.",
            icon: <Plane className="w-6 h-6" />
        },
        {
            title: "Arraigo Familiar",
            desc: "Regularización por vínculos familiares. Te guiamos para obtener tu residencia.",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Matrimonio y Pareja",
            desc: "Inscripción de matrimonio y constitución de pareja de hecho. Formaliza tu relación.",
            icon: <HeartHandshake className="w-6 h-6" />
        },
        {
            title: "Homologación Títulos",
            desc: "Reconocimiento académico de tus estudios para que puedas ejercer en España.",
            icon: <GraduationCap className="w-6 h-6" />
        },
    ];

    return (
        <Section id="servicios" className="py-24 bg-white relative">
            <Container>
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Reveal duration="slow">
                        <h2 className="text-[34px] md:text-[40px] font-black text-neutral-900 tracking-tight mb-4 leading-[1.1]">
                            Soluciones integrales para tus trámites
                        </h2>
                        <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                            Desde la nacionalidad hasta la homologación de títulos. Un servicio 360º para tu nueva vida en España.
                        </p>
                    </Reveal>
                </div>

                {/* Services Grid */}
                <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Reveal key={index} variant="fade-up" className="h-full">
                            <div className="group h-full p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start relative overflow-hidden">
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Icon */}
                                <div className="relative z-10 w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-[var(--brand-solid)] group-hover:text-neutral-900 group-hover:border-[var(--brand-solid)] transition-all duration-300 mb-6">
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex-1 space-y-3">
                                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[var(--brand-dark)] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-neutral-500 text-sm font-medium leading-relaxed group-hover:text-neutral-600 transition-colors">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Link / Arrow */}
                                <div className="relative z-10 mt-6 pt-6 border-t border-neutral-100 w-full flex items-center justify-between">
                                    <span className="text-sm font-bold text-neutral-900 group-hover:text-[var(--brand-solid-dark)] transition-colors">
                                        Ver detalles
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </Stagger>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <Reveal variant="fade-up" delay={200}>
                        <Link href="/servicios">
                            <Button
                                size="lg"
                                className="h-14 px-8 rounded-full bg-neutral-900 text-white hover:bg-black font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                Ver todos los servicios
                            </Button>
                        </Link>
                    </Reveal>
                </div>
            </Container>
        </Section>
    );
}
