"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap, Shield, Clock, AlertTriangle, FileText, Landmark, Stamp, FileCheck, Plane, FileOutput } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { cn } from "@/lib/cn";
import { WHATSAPP_URL_BASE } from "@/lib/constants";

type PlanType = {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    href: string;
    gradient: string;
    icon: any;
    highlight?: boolean;
    estimatedTime: string;
};

const getFeatureIcon = (feature: string) => {
    if (feature.includes("Obtención")) return FileText;
    if (feature.includes("MINJUS")) return Landmark;
    if (feature.includes("Consulado")) return Stamp;
    if (feature.includes("digital")) return FileCheck;
    if (feature.includes("fisico")) return FileOutput;
    if (feature.includes("Envío")) return Plane;
    return Check;
};

const pricingData: Record<"completo" | "consulado", PlanType[]> = {
    completo: [
        {
            name: "Estándar",
            price: "330€",
            period: "pago fraccionado en 2 cuotas",
            estimatedTime: "2-3 meses",
            description: "La opción recomendada para todo el trámite.",
            features: [
                "Obtención de documento nuevo",
                "Legalización en MINJUS",
                "Legalización en Consulado",
                "Documento en formato fisico",
                "Documento en formato digital (PDF)",
                "Envío Internacional"
            ],
            cta: "Solicitar Estándar",
            href: `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, necesito el plan Estándar Completo")}`,
            gradient: "from-[var(--brand-mid)]/20 via-[var(--brand-light)]/40 to-transparent",
            icon: Shield,
        },
        {
            name: "Urgente",
            price: "500€",
            period: "pago fraccionado en 2 cuotas",
            estimatedTime: "35 días hábiles",
            description: "Máxima velocidad y prioridad.",
            features: [
                "Obtención de documento nuevo",
                "Legalización en MINJUS",
                "Legalización en Consulado",
                "Documento en formato fisico",
                "Documento en formato digital (PDF)",
                "Envío Internacional"
            ],
            cta: "Solicitar Urgente",
            href: `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, necesito el plan Urgente Completo")}`,
            gradient: "from-orange-200 via-orange-100 to-transparent",
            icon: Zap,
            highlight: true,
        },
    ],
    consulado: [
        {
            name: "Estándar",
            price: "160€",
            period: "pago único",
            estimatedTime: "1-2 meses",
            description: "Solo gestión consular.",
            features: [
                "Legalización en Consulado",
                "Documento en formato fisico",
                "Documento en formato digital (PDF)",
                "Envío Internacional"
            ],
            cta: "Solicitar Consulado",
            href: `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, necesito el plan Estándar Consulado")}`,
            gradient: "from-blue-200 via-blue-100 to-transparent",
            icon: Shield,
        },
        {
            name: "Urgente",
            price: "400€",
            period: "pago en 2 cuotas",
            estimatedTime: "35 días hábiles",
            description: "Gestión consular urgente.",
            features: [
                "Legalización en Consulado",
                "Documento en formato fisico",
                "Documento en formato digital (PDF)",
                "Envío Internacional"
            ],
            cta: "Solicitar Urgente",
            href: `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, necesito el plan Urgente Consulado")}`,
            gradient: "from-purple-200 via-purple-100 to-transparent",
            icon: Zap,
            highlight: true,
        },
    ]
};

export function PricingCards() {
    const [activeTab, setActiveTab] = useState<"completo" | "consulado">("completo");

    return (
        <Section id="pricing" className="bg-[var(--bg)] py-24">
            <Container>
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-6">
                        Precios y tiempos reales
                    </h2>
                    <p className="text-xl text-neutral-500 font-medium leading-relaxed">
                        Lo que ves es lo que pagas. Incluye tasas, legalizaciones y envío a tu domicilio.
                    </p>
                </Reveal>

                {/* Tab Switcher */}
                <div className="flex flex-col items-center justify-center mb-16 gap-4">
                    <span className="text-sm font-bold text-neutral-500/80 uppercase tracking-widest">
                        Selecciona qué necesitas:
                    </span>
                    <div className="bg-neutral-200/50 p-1.5 rounded-full inline-flex relative shadow-inner w-full max-w-[460px]">
                        <div
                            className={cn(
                                "absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-sm transition-all duration-300 ease-out w-[calc(50%-3px)]",
                                activeTab === "completo" ? "left-1.5" : "left-[calc(50%+1.5px)]"
                            )}
                        />
                        <button
                            onClick={() => setActiveTab("completo")}
                            className={cn(
                                "relative z-10 px-4 py-3 rounded-full text-sm font-bold transition-colors duration-300 flex-1 text-center",
                                activeTab === "completo" ? "text-neutral-900" : "text-neutral-600 hover:text-neutral-800"
                            )}
                        >
                            Documento Nuevo
                        </button>
                        <button
                            onClick={() => setActiveTab("consulado")}
                            className={cn(
                                "relative z-10 px-4 py-3 rounded-full text-sm font-bold transition-colors duration-300 flex-1 text-center",
                                activeTab === "consulado" ? "text-neutral-900" : "text-neutral-600 hover:text-neutral-800"
                            )}
                        >
                            Solo Consulado
                        </button>
                    </div>
                </div>

                <Stagger
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start"
                    staggerDelay={100}
                    key={activeTab} // Force re-render on tab change for animation
                >
                    {pricingData[activeTab].map((plan) => (
                        <Reveal key={plan.name} variant="scale-in" duration="slow" className="h-full">
                            <div
                                className={`group relative h-full flex flex-col p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-xl shadow-neutral-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${plan.highlight ? "ring-2 ring-[var(--brand-mid)]/20" : ""
                                    }`}
                            >
                                {/* Gradient Blob Header */}
                                <div
                                    className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${plan.gradient} blur-[60px] opacity-60 pointer-events-none group-hover:scale-125 transition-transform duration-700`}
                                />

                                {/* Content Container */}
                                <div className="relative z-10 flex flex-col h-full">
                                    <p className="text-xs text-neutral-500 mb-4">
                                        Todos los precios incluyen Copia digital del documento y envío internacional del original hasta tu domicilio.
                                    </p>

                                    {/* Header */}
                                    <div className="mb-2">
                                        <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                                            {plan.name}
                                            {plan.highlight && (
                                                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold shadow-sm">
                                                    ⚡
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
                                            {plan.period}
                                        </p>
                                    </div>

                                    {/* Estimated Time */}
                                    <div className={cn(
                                        "flex items-center justify-between gap-4 mb-8 px-5 py-4 rounded-xl border transition-all duration-300",
                                        plan.highlight
                                            ? "bg-emerald-50 border-emerald-100 shadow-sm"
                                            : "bg-neutral-50 border-neutral-200"
                                    )}>
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                "flex items-center justify-center shrink-0",
                                                plan.highlight ? "text-emerald-600" : "text-neutral-500"
                                            )}>
                                                <Clock className="w-5 h-5" strokeWidth={2.5} />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className={cn(
                                                    "text-xs md:text-sm font-bold leading-tight",
                                                    plan.highlight ? "text-emerald-900/80" : "text-neutral-600"
                                                )}>
                                                    Tiempo estimado
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cn(
                                            "text-lg font-black tracking-tight leading-none text-right",
                                            plan.highlight ? "text-emerald-950" : "text-neutral-900"
                                        )}>
                                            {plan.estimatedTime}
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-4 mb-8 flex-1">

                                        {plan.features.map((feature) => {
                                            const Icon = getFeatureIcon(feature);
                                            return (
                                                <div key={feature} className="flex items-start gap-3">
                                                    <Icon className="w-5 h-5 mt-0.5 shrink-0 text-neutral-500 transition-colors" strokeWidth={2} />
                                                    <span className="text-[15px] leading-snug font-medium text-neutral-600 transition-colors">
                                                        {feature}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* CTA Button */}
                                    <Link href={plan.href} target="_blank" className="w-full mt-auto block">
                                        <Button
                                            className={cn(
                                                "w-full h-12 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg",
                                                plan.highlight
                                                    ? "bg-neutral-900 hover:bg-black text-white shadow-neutral-900/20 hover:shadow-neutral-900/30"
                                                    : "bg-white hover:bg-neutral-50 text-neutral-900 border-2 border-neutral-100 shadow-neutral-200/20 hover:border-neutral-200"
                                            )}
                                        >
                                            {plan.cta}
                                        </Button>
                                    </Link>


                                </div>
                            </div>
                        </Reveal>
                    ))}
                </Stagger>

                {/* Energy Crisis Alert */}
                <Reveal variant="fade-up" duration="slow" delay={200} className="mt-12 flex justify-center">
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-900 text-base font-medium text-center shadow-md max-w-4xl backdrop-blur-sm">
                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                        <span>Debido a la situación actual en Cuba con los problemas energéticos, los plazos podrían alargarse.</span>
                    </div>
                </Reveal>
            </Container>
        </Section >
    );
}
