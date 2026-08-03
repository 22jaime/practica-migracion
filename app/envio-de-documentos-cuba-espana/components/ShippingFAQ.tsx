"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { FAQItem } from "@/components/ui/faq-item";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { WHATSAPP_URL_BASE } from "@/lib/constants";

const WHATSAPP_ENVIOS = `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me interesa el servicio de envío de documentos Cuba-España.")}`;

const faqs = [
    {
        q: "¿Qué tipo de documentos puedo enviar?",
        a: "Puedes enviar cualquier tipo de documento oficial: partidas de nacimiento, antecedentes penales, certificados médicos, contratos, títulos universitarios, documentos notariales, etc. Si tienes dudas sobre si tu documento puede incluirse, escríbenos y te confirmamos.",
    },
    {
        q: "¿Con qué frecuencia hay salidas de vuelo?",
        a: "Tenemos entre 3 y 4 salidas al mes, garantizando una frecuencia muy alta para que tu documentación llegue lo antes posible. Te informamos de la próxima fecha de salida cuando contrates el servicio.",
    },
    {
        q: "¿Cuánto tarda en llegar?",
        a: "El tiempo estimado es de 7 a 15 días desde la fecha de envío. Este plazo puede variar en función de la dirección del envío y las condiciones de los vuelos.",
    },
    {
        q: "¿Cómo viajan los documentos?",
        a: "Los documentos viajan de forma segura de cabina, en el avión, correctamente empaquetados y protegidos. Al ir en cabina, garantizamos mayor control y seguridad durante todo el trayecto.",
    },
    {
        q: "¿Cuál es el precio de los envíos?",
        a: "Ofrecemos un paquete de hasta 10 documentos por 50€ fijos. A partir del documento número 11, se cobran solo 5€ adicionales por documento. A este recuento se le añade el coste de envío final hasta el domicilio donde te encuentres.",
    },
    {
        q: "¿Qué precio tiene enviar títulos universitarios o planes temáticos?",
        a: "El envío de títulos universitarios y planes temáticos tiene un precio fijo de 50€ por unidad, dada su manipulación especial. Puedes combinarlos con otros documentos en el mismo paquete.",
    },
    {
        q: "¿Cuánto cuesta el envío hasta mi domicilio?",
        a: "Si el destino final es dentro de España, se añaden 20€ extra al total en concepto de envío a domicilio. Si te encuentras fuera de España, el coste será calculado al momento de la solicitud consultando a la agencia de transporte según tu país de destino.",
    },
    {
        q: "¿Qué diferencia hay entre enviar de Cuba a España y al revés?",
        a: "El envío de Cuba a España incluye entrega a domicilio por carta certificada. El envío de España a Cuba llega hasta nuestras oficinas en La Habana, donde el destinatario deberá recogerlo en persona.",
    },
    {
        q: "¿Cómo envío documentos desde España hacia Cuba?",
        a: "Primero debes enviarnos los documentos a nuestra oficina en Valencia (por correo ordinario o en persona). Una vez que los tengamos, los incluimos en la próxima salida hacia Cuba. Escríbenos para que te proporcionemos la dirección exacta.",
    },
    {
        q: "¿Qué pasa si el envío se retrasa o se pierde?",
        a: "Todos los envíos a España se realizan mediante carta certificada, con trazabilidad y responsabilidad postal. En caso de extravío, activamos los mecanismos de reclamación pertinentes y te mantenemos informado en todo momento.",
    },
    {
        q: "¿Cómo se paga el servicio?",
        a: "Aceptamos Bizum, transferencia bancaria o efectivo en nuestras oficinas de Valencia o La Habana. Te indicamos el método más cómodo según tu situación.",
    },
];

export function ShippingFAQ() {
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
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed mb-8">
                                    Resolvemos tus dudas sobre el servicio de envíos. Si no encuentras tu pregunta, contáctanos directamente.
                                </p>
                                <Link href={WHATSAPP_ENVIOS} target="_blank">
                                    <Button size="lg" className="font-bold bg-neutral-900 text-white hover:bg-neutral-800 shadow-xl hover:shadow-2xl transition-all h-12 px-6 rounded-xl">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Hablar por WhatsApp
                                    </Button>
                                </Link>
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
