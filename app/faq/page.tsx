"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";

import { FAQItem } from "@/components/ui/faq-item";
import { ArrowRight, Search, FileText, Building, Scale, MessageCircle } from "lucide-react";

// Categorized Data
const faqCategories = [
    {
        id: "tramites",
        title: "Sobre los Trámites",
        icon: FileText,
        description: "Dudas sobre legalizaciones, visados y residencia",
        questions: [
            { q: "¿Gestionan trámites de nacionalidad española?", a: "Sí. Nos especializamos en expedientes de Nacionalidad Española por Residencia y por la Ley de Memoria Democrática. Analizamos tu caso para ver si cumples los requisitos." },
            { q: "¿Qué documentos necesito para legalizar mi título?", a: "Generalmente necesitas el título original y la certificación de notas. Nosotros nos encargamos de las legalizaciones en el MINJUS y el Consulado de España en La Habana." },
            { q: "¿Cuánto tardan en salir las legalizaciones?", a: "Los tiempos varían según la carga de trabajo de los organismos oficiales (MINJUS y Consulado). Te mantendremos informado de cada avance en tiempo real." },
            { q: "¿Hacen visados de turismo?", a: "Sí, asesoramos y gestionamos la solicitud de visados de corta duración (turismo/estancia) para familiares de ciudadanos UE y otros supuestos." },
        ]
    },
    {
        id: "empresa",
        title: "Nuestra Empresa",
        icon: Building,
        description: "Quiénes somos y cómo trabajamos",
        questions: [
            { q: "¿Tienen oficina física?", a: "Sí, tenemos oficina en Valencia, España, y representación en La Habana. Puedes venir a conocernos con cita previa o gestionar todo online." },
            { q: "¿Cómo sé que son de confianza?", a: "Operamos con total transparencia, firmamos contrato de servicios y emitimos factura. Además, contamos con cientos de reseñas positivas de clientes satisfechos." },
            { q: "¿Quién se encarga de mi expediente?", a: "Tendrás un gestor asignado que conoce los detalles de tu caso y con quien podrás comunicarte directamente para cualquier consulta." },
        ]
    },
    {
        id: "condiciones",
        title: "Condiciones y Pagos",
        icon: Scale,
        description: "Formas de pago, garantías y devoluciones",
        questions: [
            { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos transferencias bancarias en euros, Bizum y pagos en efectivo en nuestras oficinas. Ofrecemos facilidades de pago fraccionado en ciertos trámites." },
            { q: "¿La consulta inicial es gratuita?", a: "Sí. La primera evaluación de tu caso es totalmente gratuita y sin compromiso. Solo cobramos cuando decides contratar nuestros servicios de gestión." },
            { q: "¿Qué pasa si deniegan mi trámite?", a: "En el improbable caso de una denegación, analizamos las causas. Si es por error nuestro, asumimos la responsabilidad. Si es por causas ajenas o documentación falsa del cliente, no podemos garantizar el resultado, pero gestionamos los recursos posibles." },
        ]
    }
];

export default function FAQPage() {
    return (
        <div className="bg-[var(--bg)] min-h-screen">
            {/* Hero Section */}
            <Section className="pt-48 pb-20 bg-white border-b border-neutral-100">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <Reveal variant="fade-up">
                            <h1 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 tracking-tight">
                                Centro de Ayuda
                            </h1>
                            <p className="text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Encuentra respuestas rápidas a tus dudas sobre nuestros servicios, trámites migratorios y condiciones.
                            </p>

                            {/* Decorative Search Bar (Visual Only) */}
                            <div className="relative max-w-lg mx-auto group">
                                <div className="absolute inset-0 bg-brand-solid/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative flex items-center bg-white border border-neutral-200 rounded-full shadow-sm px-6 py-4 transition-all focus-within:ring-2 focus-within:ring-brand-solid/20 focus-within:border-brand-solid group-hover:shadow-md">
                                    <Search className="w-5 h-5 text-neutral-400 mr-4" />
                                    <input
                                        type="text"
                                        placeholder="Buscar una pregunta..."
                                        className="w-full bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400 font-medium"
                                    />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* Categories & Questions */}
            <Section className="py-24">
                <Container>
                    <div className="space-y-32">
                        {faqCategories.map((category, idx) => (
                            <div key={category.id} id={category.id} className="scroll-mt-32">
                                <Reveal variant="fade-up" delay={idx * 100}>
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                                        {/* Category Header */}
                                        <div className="lg:col-span-4">
                                            <div className="sticky top-32">
                                                <div className="w-12 h-12 rounded-2xl bg-brand-solid/10 text-brand-solid flex items-center justify-center mb-6">
                                                    <category.icon className="w-6 h-6" />
                                                </div>
                                                <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight">
                                                    {category.title}
                                                </h2>
                                                <p className="text-lg text-neutral-500 leading-relaxed">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Questions List */}
                                        <div className="lg:col-span-8 space-y-4">
                                            {category.questions.map((faq, i) => (
                                                <FAQItem
                                                    key={i}
                                                    question={faq.q}
                                                    answer={faq.a}
                                                    className="bg-white"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                                {idx !== faqCategories.length - 1 && (
                                    <div className="w-full h-px bg-neutral-200 mt-24" /> // Divider between sections
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Still have questions CTA */}
            <Section className="bg-neutral-900 py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-solid/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
                <Container className="relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <Reveal variant="scale-in">
                            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 text-white mb-8 backdrop-blur-sm border border-white/10">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                                ¿No encuentras lo que buscas?
                            </h2>
                            <p className="text-xl text-neutral-400 mb-10 leading-relaxed font-medium">
                                Si tienes una duda específica o un caso complejo, contáctanos directamente. Nuestro equipo te responderá en menos de 24 horas.
                            </p>
                            <Link href="/contacto">
                                <button className="inline-flex items-center justify-center px-8 py-4 bg-brand-solid text-neutral-900 text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(32,199,94,0.3)]">
                                    Contactar ahora
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                            </Link>
                        </Reveal>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
