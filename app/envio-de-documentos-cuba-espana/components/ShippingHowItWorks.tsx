"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Package, MapPin, Phone, ArrowRight, Home, Building2 } from "lucide-react";
import { cn } from "@/lib/cn";
import Image from "next/image";

type Direction = {
    id: string;
    from: string;
    fromCode: string;
    fromCity: string;
    to: string;
    toCode: string;
    toCity: string;
    steps: { icon: React.ElementType; title: string; description: string }[];
    delivery: { type: string; color: string; text: string };
    requirements: string[];
};

const directions: Direction[] = [
    {
        id: "cuba-espana",
        from: "Cuba",
        fromCode: "cu",
        fromCity: "La Habana",
        to: "España",
        toCode: "es",
        toCity: "Tu domicilio",
        steps: [
            {
                icon: MapPin,
                title: "1. Nos lo haces llegar",
                description: "Entregas los documentos en nuestras oficinas de La Habana o te coordinamos la recogida.",
            },
            {
                icon: Package,
                title: "2. Preparamos el envío",
                description: "Empaquetamos y documentamos todo con máxima seguridad para el vuelo.",
            },
            {
                icon: ArrowRight,
                title: "3. Vuela de cabina en el avión",
                description: "Tu documentación viaja de forma segura en cabina. 3-4 salidas al mes.",
            },
            {
                icon: Home,
                title: "4. Carta certificada a tu puerta",
                description: "Recibes los documentos en tu domicilio mediante carta certificada. Seguimiento incluido.",
            },
        ],
        delivery: {
            type: "Carta certificada a domicilio",
            color: "text-emerald-600 bg-emerald-50 border-emerald-100",
            text: "✅ El envío llega directamente a tu domicilio en España.",
        },
        requirements: [],
    },
    {
        id: "espana-cuba",
        from: "España",
        fromCode: "es",
        fromCity: "Tu ciudad",
        to: "Cuba",
        toCode: "cu",
        toCity: "Oficinas en La Habana",
        steps: [
            {
                icon: Building2,
                title: "1. Envíalos a nuestra oficina en Valencia",
                description: "Primero debes enviarnos los documentos a nuestra dirección en Valencia (o traerlos en persona si estás en Valencia).",
            },
            {
                icon: Package,
                title: "2. Preparamos el envío",
                description: "Empaquetamos y documentamos todo con máxima seguridad para el vuelo.",
            },
            {
                icon: ArrowRight,
                title: "3. Vuelan de cabina en el avión",
                description: "Tus documentos viajan seguros de cabina. 3-4 salidas mensuales.",
            },
            {
                icon: Building2,
                title: "4. Se recogen en La Habana",
                description: "Tu destinatario recoge los documentos en nuestras oficinas en La Habana.",
            },
        ],
        delivery: {
            type: "Recogida en oficina en La Habana",
            color: "text-amber-700 bg-amber-50 border-amber-100",
            text: "⚠️ El envío a Cuba llega hasta nuestras oficinas en La Habana. El destinatario debe recogerlo en persona.",
        },
        requirements: ["Primero envía los documentos a nuestra oficina en Valencia"],
    },
];

export function ShippingHowItWorks() {
    return (
        <Section className="bg-white py-16 md:py-24">
            <Container>
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <span className="text-sm font-black text-neutral-900 uppercase tracking-widest mb-4 block">
                        Cómo Funciona
                    </span>
                    <h2 className="text-3xl md:text-[44px] font-black tracking-tight text-neutral-900 leading-[1.1] mb-6">
                        Proceso según la dirección del envío
                    </h2>
                    <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                        El proceso varía según si envías de Cuba a España o al revés. Aquí te lo explicamos en detalle.
                    </p>
                </Reveal>

                <div className="flex flex-col gap-16 md:gap-20 max-w-5xl mx-auto">
                    {directions.map((direction, idx) => (
                        <Reveal key={direction.id} variant="fade-up" duration="slow" delay={idx * 100}>
                            <div className="border border-neutral-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-neutral-200/40">
                                {/* Header */}
                                <div className={cn(
                                    "p-4 sm:p-6 md:p-8",
                                    idx === 0 ? "bg-gradient-to-r from-blue-50 to-transparent" : "bg-gradient-to-r from-amber-50 to-transparent"
                                )}>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://flagcdn.com/w80/${direction.fromCode}.png`}
                                                alt={direction.from}
                                                width={40}
                                                height={28}
                                                className="rounded-md shadow-sm object-cover"
                                            />
                                            <div>
                                                <p className="font-bold text-neutral-900 text-lg">{direction.from}</p>
                                                <p className="text-sm text-neutral-500">{direction.fromCity}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 flex-1 min-w-[80px]">
                                            <div className="flex-1 h-0.5 bg-neutral-200 rounded-full" />
                                            <ArrowRight className="w-5 h-5 text-neutral-400 shrink-0" />
                                            <div className="flex-1 h-0.5 bg-neutral-200 rounded-full" />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://flagcdn.com/w80/${direction.toCode}.png`}
                                                alt={direction.to}
                                                width={40}
                                                height={28}
                                                className="rounded-md shadow-sm object-cover"
                                            />
                                            <div>
                                                <p className="font-bold text-neutral-900 text-lg">{direction.to}</p>
                                                <p className="text-sm text-neutral-500">{direction.toCity}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Steps */}
                                <div className="p-4 sm:p-6 md:p-8 bg-white">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {direction.steps.map((step, sIdx) => {
                                            const Icon = step.icon;
                                            return (
                                                <div key={sIdx} className="flex flex-col gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                                                        <Icon className="w-5 h-5 text-neutral-700" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-neutral-900 text-sm leading-tight mb-1">{step.title}</p>
                                                        <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Delivery info */}
                                    <div className={cn(
                                        "mt-6 p-4 rounded-2xl border text-sm font-medium",
                                        direction.delivery.color
                                    )}>
                                        {direction.delivery.text}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Contact info */}
                <Reveal variant="fade-up" duration="slow" delay={200} className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 text-neutral-700 font-medium">
                        <Phone className="w-5 h-5 text-neutral-500" />
                        <span>Para envíos a Cuba, primero escríbenos por WhatsApp para coordinar la dirección de entrega en Valencia.</span>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
}
