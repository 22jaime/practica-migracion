"use client";

import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
    FileCheck,
    Home,
    Plane,
    Flag,
    MessageSquare,
    ArrowRight,
    Check,
    ShieldCheck,
    FileScan,
    Truck,
    Scale,
    FolderCheck,
    MessageCircle,
    FileSearch,
    ClipboardCheck,
    Package
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { LEGALIZATION_FORM_URL, WHATSAPP_URL_BASE } from "@/lib/constants";

interface ServiceItem {
    id: string;
    title: string;
    benefit?: string;
    features: (string | { text: string; icon: React.ReactNode })[];
    cta: string;
    link: string;
    primaryLink?: string; // URL for the primary CTA button
    primaryLinkExternal?: boolean;
    icon: React.ReactNode;
    imageSrc?: string; // Standard/Desktop image
    mobileImageSrc?: string; // Optional Mobile-specific image
    tag?: string;
    colorClass?: string;
    primaryCta?: string;
}

const services: ServiceItem[] = [
    {
        id: "legalizacion",
        title: "Legalización de Documentos Cubanos",
        benefit: "Proceso completo de obtención y legalización por el Ministerio de Justicia cubano y el Consulado Español de La Habana.",
        features: [
            { text: "Todos los sellos necesarios para trámites españoles", icon: <ShieldCheck className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> },
            { text: "Copia digital (PDF) lista para presentar Online", icon: <FileScan className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> },
            { text: "Copia Física entregada en la puerta de su casa", icon: <Truck className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> }
        ],
        cta: "Ver detalles",
        primaryCta: "Solicitar Documentos",
        link: "/legalizacion-documentos-cubanos-espana-minjus-consulado",
        primaryLink: `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me interesa información sobre la Legalización de documentos.")}`,
        primaryLinkExternal: true,
        icon: <FileCheck className="w-6 h-6" />,
        imageSrc: "/images/Gemini_Generated_Image_c3t89vc3t89vc3t8.jpeg", // Desktop checking (1x1)
        mobileImageSrc: "/images/Gemini_Generated_Image_c3t89vc3t89vc3t8.jpeg", // Mobile checking (landscape)
        tag: "Más solicitado",
        colorClass: "from-blue-500/20 to-blue-600/5 text-blue-700 border-blue-200"
    },
    {
        id: "residencia",
        title: "Residencia Española",
        benefit: "Te ayudamos a regularizar tu situación en España. Servicio completo para tramitar tu residencia correctamente.",
        features: [
            { text: "Consulta inicial gratuita", icon: <MessageCircle className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> },
            { text: "Documentos cubanos legalizados", icon: <FileCheck className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> },
            { text: "Preparación y presentación completa del expediente", icon: <FolderCheck className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> }
        ],
        cta: "Ver opciones",
        link: "/residencia",
        primaryLink: `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me interesa información sobre trámites de Residencia en España.")}`,
        primaryLinkExternal: true,
        icon: <Home className="w-6 h-6" />,
        imageSrc: "/images/Gemini_Generated_Image_df7hmrdf7hmrdf7h.jpeg",
        colorClass: "from-emerald-500/20 to-emerald-600/5 text-emerald-700 border-emerald-200"
    },
    {
        id: "nacionalidad",
        title: "Nacionalidad Española",
        benefit: "Gestionamos tu nacionalidad bajo la Ley de Nietos o por residencia. Recupera tus raíces.",
        features: [
            { text: "Análisis de viabilidad para Ley de Nietos", icon: <FileSearch className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> },
            { text: "Búsqueda de certificaciones en España", icon: <FileSearch className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> },
            { text: "Armado y presentación de expediente consular", icon: <FolderCheck className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> }
        ],
        cta: "Ver requisitos",
        link: "/nacionalidad",
        primaryLink: `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me interesa información sobre trámites de Nacionalidad Española.")}`,
        primaryLinkExternal: true,
        icon: <Flag className="w-6 h-6" />,
        imageSrc: "/images/Gemini_Generated_Image_y1dhnny1dhnny1dh.jpeg",
        colorClass: "from-rose-500/20 to-rose-600/5 text-rose-700 border-rose-200"
    },
    {
        id: "visados",
        title: "Visados a España",
        benefit: "Te ayudamos a solicitar el visado correcto para ti o tus familiares, con requisitos claros desde el inicio.",
        features: [
            { text: "Análisis de tu caso y del tipo de visado adecuado", icon: <FileSearch className="w-5 h-5 text-indigo-600" /> },
            { text: "Revisión y preparación completa de la documentación", icon: <ClipboardCheck className="w-5 h-5 text-indigo-600" /> },
            { text: "Presentación correcta del expediente, evitando errores y rechazos", icon: <ShieldCheck className="w-5 h-5 text-indigo-600" /> }
        ],
        cta: "Más información",
        primaryCta: "Consulta",
        link: "/visados",
        primaryLink: `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me interesa información sobre Visados para España.")}`,
        primaryLinkExternal: true,
        icon: <Plane className="w-6 h-6" />,
        imageSrc: "/images/Gemini_Generated_Image_5dsss5dsss5dsss5.jpeg",
        tag: "Rápido",
        colorClass: "from-amber-500/20 to-amber-600/5 text-amber-700 border-amber-200"
    },
    {
        id: "envios",
        title: "Envíos de Documentos Cuba-España",
        benefit: "Enviamos tus documentos de forma segura entre Cuba y España. Precio único por envío, da igual si mandas 1 o 10 documentos.",
        features: [
            { text: "40€ por envío (50€ con títulos universitarios)", icon: <Package className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> },
            { text: "Entrega a domicilio en España por carta certificada", icon: <Truck className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> },
            { text: "3-4 salidas al mes · 7-15 días de entrega", icon: <Plane className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" /> },
        ],
        cta: "Más información",
        primaryCta: "Solicitar Envío",
        link: "/envio-de-documentos-cuba-espana",
        primaryLink: "https://formularios.gestoriahol.com/gestorahol/form/EnviosdeDocumentos/formperma/I5Rd0kM8BEna-UOn1nRLi0GcUl7i0sFdGFhasqNlnRA",
        primaryLinkExternal: true,
        icon: <Truck className="w-6 h-6" />,
        imageSrc: "/images/envio-documentos.jpg",
        colorClass: "from-teal-500/20 to-teal-600/5 text-teal-700 border-teal-200"
    },
    {
        id: "cta-final",
        title: "¿Tienes dudas? Habla con nosotros",
        benefit: "Resolvemos tus preguntas y revisamos tu caso. La consulta inicial es gratuita.",
        features: [],
        cta: "",
        primaryCta: "Consulta",
        link: "/contacto",
        primaryLink: `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, tengo una consulta general.")}`,
        primaryLinkExternal: true,
        icon: <MessageCircle className="w-6 h-6" />,
        imageSrc: "/images/726f7c23-7a74-4a7b-b824-fe25c5a1ef04.jpeg",
        colorClass: "bg-neutral-900 text-white"
    }
];

export function ServiciosSticky() {
    const getFeatureText = (f: string | { text: string; icon: React.ReactNode }) => typeof f === 'string' ? f : f.text;
    const getFeatureIcon = (f: string | { text: string; icon: React.ReactNode }, isHighlight = false) => {
        if (typeof f !== 'string' && f.icon) return f.icon;
        if (isHighlight) return <Check className="w-5 h-5 text-neutral-900 stroke-[3px]" />;
        return <Check className="w-3.5 h-3.5 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" />;
    };

    return (
        <Section
            id="servicios"
            className="py-12 md:py-24 relative bg-surface overflow-hidden"
        >
            {/* Unified Background Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-40 dark:opacity-20">
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full mix-blend-multiply animate-float" />
                    <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-emerald-400/20 blur-[120px] rounded-full mix-blend-multiply animate-float" style={{ animationDelay: '2s' }} />
                    <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-rose-400/20 blur-[120px] rounded-full mix-blend-multiply animate-float" style={{ animationDelay: '4s' }} />
                    <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-amber-400/20 blur-[120px] rounded-full mix-blend-multiply animate-float" style={{ animationDelay: '6s' }} />
                </div>
            </div>

            <Container className="relative z-10">

                {/* Header Section */}
                <div className="max-w-6xl mx-auto text-center mb-16 md:mb-24 px-4 md:px-0">
                    <Reveal>
                        <h2 className="text-3xl md:text-[44px] font-black text-neutral-900 tracking-tight mb-4 leading-[1.1]">
                            Nuestros Servicios
                        </h2>
                    </Reveal>
                    <Reveal delay={200}>
                        <p className="text-lg md:text-xl text-neutral-500 font-medium max-w-2xl mx-auto leading-relaxed">
                            Todo tu proceso migratorio, gestionado en un solo lugar.
                        </p>
                    </Reveal>
                </div>

                {/* Cards Column (Vertical Stack) */}
                <div className="flex flex-col gap-8 md:gap-16 w-full max-w-5xl mx-auto">
                    {services.map((service, index) => {
                        const isFinalCta = service.id === "cta-final";

                        return (
                            <Reveal key={service.id} delay={index * 100}>
                                <div className="group relative">
                                    <div
                                        className={cn(
                                            "relative bg-white/95 backdrop-blur-sm rounded-[2.5rem] shadow-xl transition-all duration-500",
                                            isFinalCta
                                                ? "p-3 md:p-4 hover:shadow-2xl hover:scale-[1.01] border-2 border-neutral-100"
                                                : "p-3 md:p-4 hover:shadow-2xl hover:scale-[1.01]"
                                        )}
                                    >
                                        {/* STANDARD CARD LAYOUT FOR ALL */}
                                        <div className="h-full bg-white rounded-[2rem] border border-neutral-100 overflow-hidden relative">
                                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center h-full">

                                                {/* LEFT: Visual / Icon Area */}
                                                <div className={cn(
                                                    "md:col-span-4 h-full min-h-[240px] aspect-video md:aspect-auto md:min-h-full border-neutral-100 flex items-center justify-center relative overflow-hidden group/icon",
                                                    "rounded-[2rem]"
                                                )}>

                                                    {service.imageSrc ? (
                                                        <div className="relative w-full h-full p-0 flex items-center justify-center">

                                                            <div className={cn(
                                                                "relative w-full h-full",
                                                                service.mobileImageSrc ? "hidden md:block" : "block"
                                                            )}>
                                                                <Image
                                                                    src={service.imageSrc}
                                                                    alt={service.title}
                                                                    fill
                                                                    className="object-cover transition-transform duration-700 group-hover/icon:scale-110 group-hover/icon:rotate-2"
                                                                />
                                                            </div>

                                                            {/* Mobile Image (If specific one exists) */}
                                                            {service.mobileImageSrc && (
                                                                <div className="relative w-full h-full block md:hidden">
                                                                    <Image
                                                                        src={service.mobileImageSrc}
                                                                        alt={service.title}
                                                                        fill
                                                                        className="object-cover transition-transform duration-700 group-hover/icon:scale-110 group-hover/icon:rotate-2"
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        // STANDARD ICON BOX
                                                        <div className={cn(
                                                            "relative z-10 w-32 h-32 rounded-3xl flex items-center justify-center shadow-sm transition-all duration-700 group-hover/icon:scale-110 group-hover/icon:rotate-3 bg-white border border-neutral-100",
                                                            "text-neutral-900"
                                                        )}>
                                                            <div className={cn(service.colorClass?.split(' ').pop()?.replace('border', 'text') || "text-neutral-600")}>
                                                                {React.isValidElement(service.icon) && React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-20 h-20 stroke-[1.5px]" })}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* RIGHT: Content Area */}
                                                <div className="md:col-span-8 p-6 md:p-8 md:pl-0 flex flex-col justify-center">

                                                    <div className="mb-6">
                                                        <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight leading-none mb-3">
                                                            {service.title}
                                                        </h3>
                                                        {service.benefit && (
                                                            <p className="text-sm md:text-base text-neutral-600 font-medium leading-relaxed">
                                                                {service.benefit}
                                                            </p>
                                                        )}
                                                    </div>

                                                    {/* Features Stack (Vertical) */}
                                                    {service.features.length > 0 && (
                                                        <div className="mb-8">
                                                            <span className="block text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">
                                                                Incluye:
                                                            </span>
                                                            <div className="flex flex-col gap-4">
                                                                {service.features.map((feature, i) => (
                                                                    <div key={i} className="flex items-center gap-4 text-neutral-600 font-medium group/feature">
                                                                        <div className="flex items-center justify-center shrink-0 transition-colors duration-300">
                                                                            {React.isValidElement(getFeatureIcon(feature)) && React.cloneElement(getFeatureIcon(feature) as React.ReactElement<any>, { className: "w-6 h-6 text-neutral-400 group-hover/feature:text-[var(--brand-dark)] transition-colors duration-300" })}
                                                                        </div>
                                                                        <span className="text-sm leading-tight">{getFeatureText(feature)}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                                        {service.cta && (
                                                            <Link href={service.link} className="w-full sm:w-auto">
                                                                <Button
                                                                    variant="outline"
                                                                    size="lg"
                                                                    className="h-12 md:h-14 w-full sm:w-auto px-6 md:px-8 rounded-full font-bold border-2 border-neutral-200 text-neutral-900 hover:border-neutral-900 hover:bg-transparent transition-all duration-300"
                                                                >
                                                                    {service.cta}
                                                                </Button>
                                                            </Link>
                                                        )}
                                                        <Link href={service.primaryLink ?? (isFinalCta ? service.link : `${WHATSAPP_URL_BASE}?text=Hola%2C%20necesito%20información.`)} target={service.primaryLinkExternal ? "_blank" : "_self"} className="w-full sm:w-auto">
                                                            <Button
                                                                variant="primary"
                                                                size="lg"
                                                                className="h-12 md:h-14 w-full sm:w-auto px-6 md:px-8 rounded-full font-bold bg-brand-solid text-neutral-900 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg border-transparent transition-all duration-300"
                                                            >
                                                                {service.primaryCta || "Consulta"}
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
