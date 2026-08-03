"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { FAQItem } from "@/components/ui/faq-item";

const faqs = [
    { q: "¿Qué trámites puedo hacer con Gestoría HOL?", a: "Gestionamos legalización de documentos, residencia, visados, nacionalidad española, envíos de documentos Cuba-España y asesoría migratoria para cubanos en España. Te indicamos exactamente qué trámite aplica a tu caso antes de empezar." },
    { q: "¿Tengo que ir a alguna oficina o hacer gestiones presenciales?", a: "No. Nos encargamos de todo el proceso por ti. La mayoría de los trámites pueden gestionarse a distancia, sin que tengas que desplazarte ni acudir a oficinas, pero siempre eres bienvenido a conocernos en persona." },
    { q: "¿Cómo sé que no se trata de una estafa?", a: "Somos una gestoría con oficina, contratos claros y atención directa. Puedes hablar con nosotros antes de iniciar cualquier trámite y comprobar nuestra experiencia a través de reseñas reales de otros clientes." },
    { q: "¿La consulta inicial tiene algún coste?", a: "No. La consulta inicial es gratuita. Revisamos tu caso, resolvemos tus dudas y te explicamos las opciones disponibles antes de que decidas si continuar." },
    { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos Bizum, transferencia bancaria o efectivo en nuestra oficina de Valencia o La Habana. Te indicamos el método más cómodo según tu situación." },
    { q: "¿Me mantendrán informado durante el proceso?", a: "Sí. Te informamos del estado real de tu trámite y te explicamos cada paso, para que siempre sepas en qué punto se encuentra tu expediente." },
    { q: "¿Son seguros los envíos de documentos?", a: "Sí, totalmente. Todos los documentos se envían a través de Correos mediante carta certificada, el servicio postal oficial de España con mayor garantía de seguridad. Con cada envío recibirás un número de seguimiento con el que podrás consultar en todo momento dónde se encuentra tu documentación. La carta certificada garantiza que solo el destinatario puede recoger el envío, con acuse de recibo y firma obligatoria. En caso de extravío, Correos asume la responsabilidad y activa los mecanismos de localización. Tus documentos originales están siempre en buenas manos." },
];

export function FAQ() {
    return (
        <Section className="bg-[var(--bg)] overflow-hidden py-12 md:py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    {/* Header Column */}
                    <div className="md:col-span-4">
                        <div className="sticky top-24 px-4 md:px-0">
                            <Reveal variant="fade-up" duration="slow">
                                <h2 className="text-3xl md:text-[44px] font-black text-neutral-900 tracking-tight mb-4 leading-[1.1]">
                                    Preguntas Frecuentes
                                </h2>
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                                    Resolvemos tus dudas antes de empezar. Si no encuentras lo que buscas, contáctanos directamente.
                                </p>
                            </Reveal>
                        </div>
                    </div>

                    {/* Questions Column */}
                    <div className="md:col-span-8 space-y-4">
                        {faqs.map((faq, i) => (
                            <Reveal key={i} delay={i * 50} variant="fade-up">
                                <FAQItem question={faq.q} answer={faq.a} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
