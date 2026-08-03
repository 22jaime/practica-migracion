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

// Categorized FAQs
const faqCategories = [
    {
        title: "Sobre el Trámite",
        icon: FileText,
        questions: [
            {
                question: "¿Cómo comienzo el trámite?",
                answer: (
                    <div className="space-y-4">
                        <p>Debe llenar nuestro formulario de solicitud con sus datos básicos.</p>
                        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                            <p className="text-emerald-800 font-bold text-sm text-center">
                                [Aquí irá el botón al formulario]
                            </p>
                        </div>
                    </div>
                ),
            },
            {
                question: "¿Necesito estar en Cuba para hacer el trámite?",
                answer: "No. Gestionamos todo de forma remota. Usted puede estar en cualquier parte del mundo. Nosotros nos encargamos de todas las gestiones presenciales en La Habana.",
            },
            {
                question: "¿Cuánto demora el proceso?",
                answer: "Los tiempos varían según la situación actual en los organismos. Intentamos mantenerlos actualizados en el sitio web, pero para una respuesta más precisa, escríbanos directamente.",
            },
        ]
    },
    {
        title: "Documentación y Envíos",
        icon: Globe,
        questions: [
            {
                question: "¿Qué documentos necesito enviarles?",
                answer: "Solo necesitamos una foto o escaneo claro de su carnet de identidad cubano (solo la parte frontal). En caso de no tenerlo, puede usar el pasaporte cubano o una copia antigua del documento si la tuviese.",
            },
            {
                question: "¿Qué pasa si ya tengo el documento legalizado por el MINJUS?",
                answer: "En ese caso, deberá llevarnos la copia física a nuestra oficina de La Habana. Si el documento está en España, puede gestionar con nosotros su envío a Cuba para completar el trámite.",
            },
            {
                question: "¿El envío viene incluido?",
                answer: "Sí. El envío está incluido en el precio del servicio y se realiza a través de Correos, mediante carta certificada con número de seguimiento. Si desea que el envío se gestione con otra empresa de mensajería privada, esto conllevará un coste adicional. Consulte con nosotros antes de solicitar el servicio para conocer las opciones disponibles y sus precios.",
            },
        ]
    },
    {
        title: "Pagos y Seguridad",
        icon: ShieldCheck,
        questions: [
            {
                question: "¿Cómo se realiza el pago de los servicios?",
                answer: "Realiza un primer pago al iniciar el trámite para comenzar la gestión, y un segundo pago cuando su documento esté listo para ser enviado.",
            },
            {
                question: "¿Qué métodos de pago aceptan?",
                answer: "Aceptamos BIZUM, transferencia bancaria, pago en efectivo en La Habana o directamente en nuestras oficinas de Valencia.",
            },
            {
                question: "¿Recibo algún comprobante de pago?",
                answer: "Sí, emitimos comprobantes de pago y facturas oficiales por cada transacción, garantizando total transparencia y seguridad en su proceso.",
            },
        ]
    }
];

export function LegalizationsFAQ() {
    return (
        <Section className="bg-white py-24 md:py-32">
            <Container>
                {/* Centered Header */}
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <span className="text-sm font-black text-neutral-900 uppercase tracking-widest mb-4 block">
                        Dudas Frecuentes
                    </span>
                    <h2 className="text-3xl md:text-[44px] font-black tracking-tight text-neutral-900 leading-[1.1] mb-6">
                        Resolvemos sus preguntas
                    </h2>
                    <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                        Todo lo que necesita saber sobre el proceso de legalización, explicado de forma clara y sencilla.
                    </p>
                </Reveal>

                {/* FAQ Stack (Full Width, Centered, Card Style) */}
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
                        <h4 className="text-2xl font-black text-neutral-900 mb-4 tracking-tight">¿No encuentra su respuesta?</h4>
                        <p className="text-lg text-neutral-500 font-medium mb-8">
                            Hable directamente con nuestro equipo. Estamos disponibles en WhatsApp para resolver cualquier duda específica.
                        </p>
                        <Link href="https://wa.me/34123456789" target="_blank">
                            <Button size="lg" className="font-bold bg-neutral-900 text-white hover:bg-neutral-800 shadow-xl hover:shadow-2xl transition-all h-14 px-8 text-lg rounded-xl">
                                Contactar Soporte por WhatsApp
                            </Button>
                        </Link>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
}
