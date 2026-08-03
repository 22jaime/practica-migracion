"use client";

import Link from "next/link";
import { Check, X, ArrowRight, Percent } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { WHATSAPP_URL_BASE } from "@/lib/constants";

interface PricingFeature {
    text: string;
    included: boolean;
}

interface PricingPlan {
    name: string;
    price: string;
    subtitle: string;
    note?: string;
    features: PricingFeature[];
    cta: string;
    whatsappText: string;
    highlight?: boolean;
}

const plans: PricingPlan[] = [
    {
        name: "Documento Completo",
        price: "350€",
        subtitle: "pago fraccionado en 2 cuotas",
        features: [
            { text: "Solicitud del documento en el Consulado de Cuba en España", included: true },
            { text: "Legalización en el Consulado de Cuba", included: true },
            { text: "Legalización en el MAEC", included: true },
            { text: "Documento en formato digital (PDF)", included: true },
            { text: "Envío del original a tu domicilio", included: true },
        ],
        cta: "Solicitar Documento Completo",
        whatsappText: "Hola, me interesa el servicio de Documento Completo para legalización de documento cubano en España (350€).",
        highlight: true,
    },
    {
        name: "Solo Consulado Cubano",
        price: "175€",
        subtitle: "pago fraccionado en 2 cuotas",
        note: "Para documentos que ya tienes en tu poder y solo necesitan el sello del Consulado de Cuba en España.",
        features: [
            { text: "Legalización en el Consulado de Cuba en España", included: true },
            { text: "No incluye legalización en el MAEC", included: false },
            { text: "Documento en formato digital (PDF)", included: true },
            { text: "Envío del original a tu domicilio", included: true },
        ],
        cta: "Solicitar Solo Consulado",
        whatsappText: "Hola, me interesa el servicio de Solo Consulado Cubano para legalización de documento cubano (175€).",
    },
];

export function CubaEspanaPricing() {
    return (
        <Section id="pricing" className="bg-[var(--bg)] py-24">
            <Container>
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-6">
                        Precios claros, sin sorpresas
                    </h2>
                    <p className="text-xl text-neutral-500 font-medium leading-relaxed">
                        Lo que ves es lo que pagas. Incluye gestión completa y envío del documento.
                    </p>
                </Reveal>

                <Stagger
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start"
                    staggerDelay={100}
                >
                    {plans.map((plan) => (
                        <Reveal key={plan.name} variant="scale-in" duration="slow" className="h-full">
                            <div
                                className={`group relative h-full flex flex-col p-8 rounded-[2rem] bg-white border shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${
                                    plan.highlight
                                        ? "border-[var(--brand-light)] ring-2 ring-[var(--brand-mid)]/20 shadow-[var(--brand-mid)]/10"
                                        : "border-neutral-100 shadow-neutral-200/40"
                                }`}
                            >
                                {/* Gradient Blob */}
                                <div
                                    className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br blur-[60px] opacity-60 pointer-events-none group-hover:scale-125 transition-transform duration-700 ${
                                        plan.highlight
                                            ? "from-[var(--brand-mid)]/20 via-[var(--brand-light)]/40 to-transparent"
                                            : "from-blue-200 via-blue-100 to-transparent"
                                    }`}
                                />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Header */}
                                    <div className="mb-2">
                                        <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                                            {plan.name}
                                            {plan.highlight && (
                                                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold shadow-sm">
                                                    Recomendado
                                                </span>
                                            )}
                                        </h3>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-5xl font-black text-neutral-900 tracking-tighter">
                                                {plan.price}
                                            </span>
                                        </div>
                                        <p className="text-sm text-neutral-500 font-medium mt-1">
                                            {plan.subtitle}
                                        </p>
                                    </div>

                                    {/* Note */}
                                    {plan.note && (
                                        <div className="mb-6 px-4 py-3 rounded-xl bg-amber-50 border border-amber-100 text-sm text-amber-800 font-medium leading-relaxed">
                                            {plan.note}
                                        </div>
                                    )}

                                    {/* Features List */}
                                    <div className="space-y-4 mb-8 flex-1">
                                        {plan.features.map((feature) => (
                                            <div key={feature.text} className="flex items-start gap-3">
                                                {feature.included ? (
                                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                                                        <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                                                    </div>
                                                ) : (
                                                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                                        <X className="w-3 h-3 text-red-500" strokeWidth={3} />
                                                    </div>
                                                )}
                                                <span className={`text-[15px] leading-snug font-medium ${feature.included ? "text-neutral-600" : "text-neutral-400"}`}>
                                                    {feature.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent(plan.whatsappText)}`}
                                        target="_blank"
                                        className="w-full mt-auto block"
                                    >
                                        <Button
                                            className={`w-full h-12 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg ${
                                                plan.highlight
                                                    ? "bg-neutral-900 hover:bg-black text-white shadow-neutral-900/20 hover:shadow-neutral-900/30"
                                                    : "bg-white hover:bg-neutral-50 text-neutral-900 border-2 border-neutral-100 shadow-neutral-200/20 hover:border-neutral-200"
                                            }`}
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

                {/* Discount Block */}
                <Reveal variant="fade-up" duration="slow" delay={200} className="mt-12 max-w-4xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-900 text-sm font-medium shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                <Percent className="w-4 h-4 text-emerald-600" />
                            </div>
                            <span><strong>10% de descuento</strong> para 4+ documentos del mismo núcleo familiar</span>
                        </div>
                        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-900 text-sm font-medium shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                <Percent className="w-4 h-4 text-emerald-600" />
                            </div>
                            <span><strong>15% de descuento</strong> para 7+ documentos del mismo núcleo familiar</span>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
}
