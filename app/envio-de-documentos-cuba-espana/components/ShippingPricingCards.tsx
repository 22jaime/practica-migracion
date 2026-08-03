"use client";

import Link from "next/link";
import { ArrowRight, Check, Clock, Package, GraduationCap, Shield, Plane } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { cn } from "@/lib/cn";
import { WHATSAPP_URL_BASE } from "@/lib/constants";

const FORM_ENVIOS = "https://formularios.gestoriahol.com/gestorahol/form/EnviosdeDocumentos/formperma/I5Rd0kM8BEna-UOn1nRLi0GcUl7i0sFdGFhasqNlnRA";

type PlanType = {
    name: string;
    price: string;
    priceNote: string;
    description: string;
    features: { icon: React.ElementType; text: string }[];
    cta: string;
    href: string;
    gradient: string;
    icon: React.ElementType;
    highlight?: boolean;
    estimatedTime: string;
    badge?: string;
};

const plans: PlanType[] = [
    {
        name: "Paquete Básico",
        price: "50€",
        priceNote: "por un paquete de hasta 10 documentos",
        description: "Envía actas, antecedentes, certificaciones y otros documentos oficiales en un solo paquete.",
        estimatedTime: "7 – 15 días",
        features: [
            { icon: Package, text: "Incluye hasta 10 documentos" },
            { icon: Plane, text: "Los documentos viajan de cabina, en el avión" },
            { icon: Shield, text: "Entrega a convenir (+ envío final a domicilio)" },
            { icon: Check, text: "3-4 salidas mensuales garantizadas" },
            { icon: Check, text: "Recogida en tu domicilio en Valencia (opcional)" },
        ],
        cta: "Solicitar Envío",
        href: FORM_ENVIOS,
        gradient: "from-blue-200/50 via-blue-100/30 to-transparent",
        icon: Package,
        highlight: false,
    },
    {
        name: "Títulos y Temáticos",
        price: "50€",
        priceNote: "por título o plan",
        description: "Si tu envío incluye títulos universitarios o planes temáticos.",
        estimatedTime: "7 – 15 días",
        features: [
            { icon: GraduationCap, text: "Precio por cada título y plan temático" },
            { icon: Package, text: "Puedes combinarlos con otros documentos" },
            { icon: Plane, text: "Los documentos viajan de cabina, en el avión" },
            { icon: Shield, text: "Entrega a convenir (+ envío final a domicilio)" },
            { icon: Check, text: "3-4 salidas mensuales garantizadas" },
        ],
        cta: "Solicitar Envío Especial",
        href: FORM_ENVIOS,
        gradient: "from-amber-200/60 via-yellow-100/30 to-transparent",
        icon: GraduationCap,
        highlight: true,
        badge: "Especial",
    },
];

export function ShippingPricingCards() {
    return (
        <Section id="pricing" className="bg-[var(--bg)] py-16 md:py-24">
            <Container>
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-6">
                        Tarifas flexibles y adaptadas
                    </h2>
                    <p className="text-xl text-neutral-500 font-medium leading-relaxed">
                        Elige el paquete que mejor se adapte a tu necesidad. Desde pequeños envíos hasta grandes volumenes.
                    </p>
                </Reveal>

                <Stagger
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start"
                    staggerDelay={100}
                >
                    {plans.map((plan) => (
                        <Reveal key={plan.name} variant="scale-in" duration="slow" className="h-full">
                            <div
                                className={`group relative h-full flex flex-col p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-xl shadow-neutral-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${plan.highlight ? "ring-2 ring-[var(--brand-mid)]/20" : ""}`}
                            >
                                {/* Gradient Blob */}
                                <div
                                    className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${plan.gradient} blur-[60px] opacity-60 pointer-events-none group-hover:scale-125 transition-transform duration-700`}
                                />

                                <div className="relative z-10 flex flex-col h-full">

                                    {/* Header */}
                                    <div className="mb-2">
                                        <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                                            {plan.name}
                                            {plan.badge && (
                                                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold shadow-sm">
                                                    {plan.badge}
                                                </span>
                                            )}
                                        </h3>
                                        <p className="text-sm text-neutral-500 font-medium mt-1 leading-relaxed">{plan.description}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6 mt-4">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-5xl font-black text-neutral-900 tracking-tighter">
                                                {plan.price}
                                            </span>
                                        </div>
                                        <p className="text-sm text-neutral-500 font-medium mt-1">
                                            {plan.priceNote}
                                        </p>
                                    </div>

                                    {/* Estimated Time */}
                                    <div className={cn(
                                        "flex items-center justify-between gap-4 mb-8 px-5 py-4 rounded-xl border transition-all duration-300",
                                        plan.highlight
                                            ? "bg-amber-50 border-amber-100 shadow-sm"
                                            : "bg-neutral-50 border-neutral-200"
                                    )}>
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                "flex items-center justify-center shrink-0",
                                                plan.highlight ? "text-amber-600" : "text-neutral-500"
                                            )}>
                                                <Clock className="w-5 h-5" strokeWidth={2.5} />
                                            </div>
                                            <span className={cn(
                                                "text-xs md:text-sm font-bold leading-tight",
                                                plan.highlight ? "text-amber-900/80" : "text-neutral-600"
                                            )}>
                                                Tiempo estimado
                                            </span>
                                        </div>
                                        <div className={cn(
                                            "text-lg font-black tracking-tight leading-none text-right",
                                            plan.highlight ? "text-amber-950" : "text-neutral-900"
                                        )}>
                                            {plan.estimatedTime}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8 flex-1">
                                        {plan.features.map((feature, i) => {
                                            const Icon = feature.icon;
                                            return (
                                                <div key={i} className="flex items-start gap-3">
                                                    <Icon className="w-5 h-5 mt-0.5 shrink-0 text-neutral-500" strokeWidth={2} />
                                                    <span className="text-[15px] leading-snug font-medium text-neutral-600">
                                                        {feature.text}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* CTA */}
                                    <Link href={plan.href} target="_blank" className="w-full mt-auto block">
                                        <Button
                                            className={cn(
                                                "w-full h-12 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg",
                                                plan.highlight
                                                    ? "bg-neutral-900 hover:bg-black text-white shadow-neutral-900/20"
                                                    : "bg-white hover:bg-neutral-50 text-neutral-900 border-2 border-neutral-100 shadow-neutral-200/20 hover:border-neutral-200"
                                            )}
                                        >
                                            {plan.cta}
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </Stagger>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-12">
                    {/* Extra docs note */}
                    <Reveal variant="fade-up" duration="slow" delay={150}>
                        <div className="h-full flex items-start gap-4 p-5 rounded-2xl bg-[var(--neon-yellow)]/20 border border-[var(--neon-yellow)]/30 text-neutral-800 font-medium text-sm shadow-sm">
                            <Package className="w-6 h-6 text-neutral-800 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-base mb-1">¿Tienes más de 10 documentos?</h4>
                                <p className="leading-relaxed text-neutral-700">A partir de 10 documentos generales, el coste es de solo <strong>5€ por cada documento adicional</strong>.</p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Delivery note */}
                    <Reveal variant="fade-up" duration="slow" delay={200}>
                        <div className="h-full flex items-start gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-900 font-medium text-sm shadow-sm">
                            <Plane className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-base mb-1">Costes de Envío Final</h4>
                                <p className="leading-relaxed text-blue-800/80">Al precio total de los documentos se le suma el envío a domicilio: <strong>+20€ para envíos a España</strong>. Para el resto del mundo, consultar precio exacto garantizado por agencia.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Bottom note */}
                <Reveal variant="fade-up" duration="slow" delay={250} className="mt-8 flex justify-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 text-neutral-600 text-sm font-medium text-center shadow-sm max-w-2xl">
                        <Shield className="w-5 h-5 text-neutral-500 shrink-0" />
                        <span>Para contratar el servicio, llámanos o escríbenos por WhatsApp. Nuestro equipo te guiará en todo el proceso.</span>
                    </div>
                </Reveal>

            </Container>
        </Section>
    );
}
