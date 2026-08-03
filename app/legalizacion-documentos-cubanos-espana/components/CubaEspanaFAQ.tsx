"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle, FileText, Globe, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL_BASE } from "@/lib/constants";

const faqCategories = [
    {
        title: "Sobre los Documentos",
        icon: FileText,
        questions: [
            {
                question: "¿Qué documentos cubanos puedo legalizar desde España?",
                answer: "Todos los documentos del Registro Civil cubano: certificados de nacimiento, matrimonio, divorcio, soltería, defunción, estado conyugal, vigencia de matrimonio y antecedentes penales, entre otros.",
            },
            {
                question: "¿Necesito tener el documento original en mis manos?",
                answer: "Depende del caso. Si ya lo tienes, podemos legalizarlo directamente con el plan Solo Consulado Cubano (175€). Si no lo tienes, podemos solicitarlo nuevo y legalizarlo con el plan Documento Completo (310€).",
            },
            {
                question: "¿Un documento legalizado por esta vía tiene la misma validez que uno legalizado en Cuba?",
                answer: "Sí. El resultado jurídico es idéntico. Un documento con sello del Consulado de Cuba en España y legalización del MAEC tiene exactamente la misma validez legal que uno legalizado vía MINREX en Cuba.",
            },
            {
                question: "¿Cuál es la diferencia entre Documento Completo y Solo Consulado Cubano?",
                answer: "Documento Completo (310€) incluye solicitar el documento nuevo en el Consulado de Cuba y legalizarlo. Solo Consulado Cubano (175€) es para cuando ya tienes el documento y solo necesitas el sello del Consulado de Cuba en España. La legalización en el MAEC no está incluida en el plan Solo Consulado.",
            },
        ],
    },
    {
        title: "El Trámite y Envíos",
        icon: Globe,
        questions: [
            {
                question: "¿Cuánto tarda el proceso completo?",
                answer: "El plazo varía según el tipo de documento y la carga de trabajo del Consulado. Te damos un estimado concreto cuando evaluemos tu caso, y te mantenemos informado por WhatsApp durante todo el proceso.",
            },
            {
                question: "¿Necesito ir personalmente a alguna oficina?",
                answer: "No. Nosotros nos encargamos de todas las gestiones presenciales ante el Consulado de Cuba y el MAEC. Tú solo nos envías la documentación necesaria y recibes el resultado.",
            },
            {
                question: "¿Cómo me entregan los documentos?",
                answer: "Te enviamos copia digital (PDF) del documento legalizado y el original físico por correo certificado a tu domicilio en España o en el extranjero.",
            },
        ],
    },
    {
        title: "Pagos",
        icon: ShieldCheck,
        questions: [
            {
                question: "¿Puedo fraccionar el pago?",
                answer: "Sí. El pago se divide en dos cuotas: 50% al inicio del trámite y 50% a la finalización, cuando recibes el documento.",
            },
            {
                question: "¿Hay descuentos si necesito varios documentos?",
                answer: "Sí. 10% de descuento para 4 o más documentos del mismo núcleo familiar, y 15% para 7 o más.",
            },
            {
                question: "¿Recibo factura?",
                answer: "Sí. Emitimos factura por cada pago realizado.",
            },
        ],
    },
];

export function CubaEspanaFAQ() {
    return (
        <Section className="bg-white py-24 md:py-32">
            <Container>
                {/* Header */}
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <span className="text-sm font-black text-neutral-900 uppercase tracking-widest mb-4 block">
                        Dudas Frecuentes
                    </span>
                    <h2 className="text-3xl md:text-[44px] font-black tracking-tight text-neutral-900 leading-[1.1] mb-6">
                        Aclarando tus dudas
                    </h2>
                    <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                        Despejamos las preguntas habituales sobre legalizar documentos cubanos para usarlos en España.
                    </p>
                </Reveal>

                {/* FAQ Stack */}
                <div className="flex flex-col gap-16 md:gap-24 mb-20 max-w-4xl mx-auto">
                    {faqCategories.map((category, idx) => (
                        <div key={idx} className="space-y-8">
                            {/* Category Header */}
                            <Reveal variant="fade-up" duration="slow" className="flex items-center gap-4 border-b border-neutral-100 pb-4">
                                <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center shadow-sm">
                                    <category.icon className="w-6 h-6 text-neutral-900" />
                                </div>
                                <h3 className="text-2xl font-black text-neutral-900 tracking-tight">{category.title}</h3>
                            </Reveal>

                            {/* Questions */}
                            <Reveal variant="fade-up" delay={100} duration="slow">
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {category.questions.map((faq, qIdx) => (
                                        <AccordionItem
                                            key={qIdx}
                                            value={`item-${idx}-${qIdx}`}
                                            className="border border-neutral-200 bg-white rounded-[1.5rem] px-2 shadow-sm transition-all hover:shadow-md hover:border-emerald-200"
                                        >
                                            <AccordionTrigger className="text-left font-bold text-lg md:text-xl text-neutral-900 py-5 px-6 hover:no-underline hover:text-emerald-600 transition-colors">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-neutral-600 text-base md:text-lg pb-6 px-6 leading-relaxed font-medium">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </Reveal>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <Reveal variant="fade-up" duration="slow" className="max-w-2xl mx-auto text-center">
                    <div className="p-8 md:p-12 rounded-[2.5rem] bg-neutral-50 border border-neutral-100">
                        <div className="w-16 h-16 rounded-full bg-[var(--neon-yellow)] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/20">
                            <MessageCircle className="w-8 h-8 text-neutral-900" />
                        </div>
                        <h4 className="text-2xl font-black text-neutral-900 mb-4 tracking-tight">¿Alguna otra pregunta?</h4>
                        <p className="text-lg text-neutral-500 font-medium mb-8">
                            Mándanos un WhatsApp con tu duda, y un especialista te responderá sin compromiso.
                        </p>
                        <Link
                            href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, tengo una duda sobre la legalización de documentos cubanos para España.")}`}
                            target="_blank"
                        >
                            <Button size="lg" className="font-bold bg-neutral-900 text-white hover:bg-neutral-800 shadow-xl hover:shadow-2xl transition-all h-14 px-8 text-lg rounded-xl">
                                Contactar por WhatsApp
                            </Button>
                        </Link>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
}
