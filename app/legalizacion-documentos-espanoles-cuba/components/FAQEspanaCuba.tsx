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

// Categorized FAQs
const faqCategories = [
    {
        title: "Sobre los Documentos",
        icon: FileText,
        questions: [
            {
                question: "¿Qué documentos españoles deben legalizarse para Cuba?",
                answer: "Cualquier documento español que vaya a surtir efecto en Cuba ante las autoridades de la isla. Ejemplos: Certificados de Matrimonio, Nacimiento (para casarse allá o subsanar), Defunción, Poderes Notariales (para obtener pasaportes de menores) y Sentencias.",
            },
            {
                question: "¿Debe legalizarse un documento español destinado al Consulado de España en La Habana?",
                answer: "NO. Los documentos españoles que se entregan al Consulado de España en Cuba NO requieren legalización, ya que el Consulado actúa como territorio legal español.",
            },
            {
                question: "¿Podemos hacer un solo pago por varios documentos?",
                answer: "Sí, puedes agruparlos y de hecho si pides 4+ te hacemos el 10% de descuento; si pides 7+, el 15%. Siempre que se demuestre la afinidad familiar.",
            },
        ]
    },
    {
        title: "El Trámite y Envíos",
        icon: Globe,
        questions: [
            {
                question: "¿Cómo envían mis documentos físicos oficializados?",
                answer: "Enviamos sin coste extra a través del correo postal predeterminado en nuestros presupuestos directamente a toda España, Europa, e incluso directo a Cuba si lo solicitas (podrían aplicar cargos según empresa Courier preferida como DHL o MRW). Tendrás la versión PDF igual en tu correo al instante que esté lista.",
            },
            {
                question: "¿Necesito llevar algo físico presencialmente a alguna oficina?",
                answer: "En la inmensa mayoría de los casos no es necesario, puedes hacernos llegar el documento físico original por mensajería en un sobre, y nosotros nos encargamos del papeleo en Madrid y regreso a domicilio.",
            },
            {
                question: "¿Puedo fraccionar los pagos de este servicio?",
                answer: "Sí, todos los procesos de este tipo permiten la modalidad de pago en dos plazos: Abonas un 50% al arrancar para asegurar los sellos físicos de MAEC y Consulado, y el 50% final cuando te enviemos los resultados escaneados y listos para enviar.",
            },
        ]
    }
];

export function FAQEspanaCuba() {
    return (
        <Section className="bg-white py-24 md:py-32">
            <Container>
                {/* Centered Header */}
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <span className="text-sm font-black text-neutral-900 uppercase tracking-widest mb-4 block">
                        Dudas Frecuentes
                    </span>
                    <h2 className="text-3xl md:text-[44px] font-black tracking-tight text-neutral-900 leading-[1.1] mb-6">
                        Aclarando tus dudas
                    </h2>
                    <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                        Despejamos las preguntas habituales sobre enviar documentos legalizados de España a Cuba.
                    </p>
                </Reveal>

                {/* FAQ Stack (Full Width, Centered, Card Style) */}
                <div className="flex flex-col gap-16 md:gap-24 mb-20 max-w-4xl mx-auto">
                    {faqCategories.map((category, idx) => (
                        <div key={idx} className="space-y-8">
                            {/* Category Header */}
                            <Reveal variant="fade-up" duration="slow" className="flex items-center gap-4 border-b border-neutral-100 pb-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shadow-sm">
                                    <category.icon className="w-6 h-6 text-emerald-800" />
                                </div>
                                <h3 className="text-2xl font-black text-neutral-900 tracking-tight">{category.title}</h3>
                            </Reveal>

                            {/* Questions as Cards */}
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

                {/* Final CTA Centered */}
                <Reveal variant="fade-up" duration="slow" className="max-w-2xl mx-auto text-center">
                    <div className="p-8 md:p-12 rounded-[2.5rem] bg-neutral-50 border border-neutral-100">
                        <div className="w-16 h-16 rounded-full bg-[var(--neon-yellow)] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/20">
                            <MessageCircle className="w-8 h-8 text-neutral-900" />
                        </div>
                        <h4 className="text-2xl font-black text-neutral-900 mb-4 tracking-tight">¿Alguna otra pregunta?</h4>
                        <p className="text-lg text-neutral-500 font-medium mb-8">
                            Mándanos un WhatsApp con tu duda, y un especialista te responderá sin compromiso.
                        </p>
                        <Link href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, tengo dudas sobre cómo legalizar documentos de España para llevarlos a Cuba. ¿Podéis ayudarme?")}`} target="_blank">
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
