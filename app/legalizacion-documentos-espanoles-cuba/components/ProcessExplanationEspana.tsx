"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { AlertTriangle, Lightbulb, CheckCircle2, Stamp, MapPin } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProcessExplanationEspana() {
    return (
        <Section className="py-24 md:py-40 bg-white relative overflow-hidden" id="proceso">
            <Container>
                {/* Intro / Transition */}
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-24 md:mb-40">
                    <span className="text-emerald-600 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-4 block">
                        Guía de Trámites
                    </span>
                    <h2 className="text-4xl md:text-[64px] font-black text-neutral-900 tracking-tighter leading-[1.05] mb-8">
                        La ruta de tus documentos españoles
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Dado que Cuba no admite la Apostilla de La Haya, el proceso de legalización para documentos extranjeros se realiza "en cadena". Consta de <span className="text-neutral-900 font-bold">3 pasos imprescindibles</span>.
                    </p>
                </Reveal>

                {/* Vertical Process Steps */}
                <div className="flex flex-col gap-16 md:gap-48 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-100 to-transparent hidden lg:block" />

                    {/* Step 1: MINJUS España */}
                    <ProcessStep
                        number="01"
                        title="Ministerio de Justicia (España)"
                        description="El primer eslabón de la cadena de confianza internacional."
                        imageSrc="/images/ministerio-justicia-sello.png" // using placeholder since specific img might not exist
                        imageAlt="Sello del Ministerio de Justicia"
                        align="left"
                        zoomOrigin="origin-bottom"
                        belowImageContent={
                            <div className="text-center mt-6 w-full">
                                <p className="text-base text-neutral-900 font-semibold mb-2">
                                    Legalización de Origen
                                </p>
                                <p className="text-base text-neutral-600 font-medium leading-relaxed">
                                    Certifica que el documento original fue emitido por una autoridad española competente (Juez, Notario o Registro Civil).
                                </p>
                            </div>
                        }
                    >
                        <div className="space-y-12">
                            <div className="flex flex-col gap-3">
                                <h4 className="flex items-center gap-3 text-blue-500 font-bold tracking-tight text-lg md:text-xl md:text-2xl mb-2">
                                    <Stamp className="w-5 h-5 md:w-6 md:h-6" />
                                    El primer sello necesario
                                </h4>
                                <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-medium">
                                    Sin esta validación del Ministerio de Justicia español, los documentos (certificados de nacimiento, matrimonio, poderes notariales, sentencias) no pueden continuar su ruta legal.
                                </p>
                            </div>
                        </div>
                    </ProcessStep>

                    {/* Step 2: MAEC */}
                    <ProcessStep
                        number="02"
                        title="Ministerio de Asuntos Exteriores (MAEC)"
                        description="Exteriores, Unión Europea y Cooperación valida internacionalmente el documento."
                        imageSrc="/images/maec-sello.png" // placeholder
                        imageAlt="Sello del MAEC"
                        align="right"
                        zoomOrigin="origin-bottom-right"
                        belowImageContent={
                            <div className="text-center mt-6 w-full">
                                <p className="text-base text-neutral-900 font-semibold mb-2">
                                    Validación de la Firma de Justicia
                                </p>
                                <p className="text-base text-neutral-600 font-medium leading-relaxed">
                                    El MAEC se encarga de reconocer y dar el visto bueno a la firma del funcionario del Ministerio de Justicia del paso anterior.
                                </p>
                            </div>
                        }
                    >
                        <div className="space-y-8">
                            <AlertBox
                                type="tip"
                                title="Legalización en Cascada"
                                text="Así funciona: una entidad va legalizando la firma de la entidad anterior. El MAEC confía en Justicia, pero necesita certificarlo oficialmente."
                            />
                        </div>
                    </ProcessStep>

                    {/* Step 3: Consulado Cuba */}
                    <ProcessStep
                        number="03"
                        title="Consulado de Cuba en España"
                        description="El permiso final para poder aterrizar en territorio cubano con seguridad."
                        imageSrc="/images/consulado-cuba-sello.png" // placeholder
                        imageAlt="Sello Consulado de Cuba"
                        align="left"
                        zoomOrigin="origin-top"
                        scale="scale-110"
                        belowImageContent={
                            <div className="text-center mt-6 w-full">
                                <p className="text-base text-neutral-900 font-semibold mb-2">
                                    Tasas Consulares y Reconocimiento
                                </p>
                                <p className="text-base text-neutral-600 font-medium leading-relaxed">
                                    Es imprescindible pagar el arancel o tasa consular. El Cónsul cubano estampa su sello verificando el sello previo del MAEC.
                                </p>
                            </div>
                        }
                    >
                        <div className="space-y-8">
                            <AlertBox
                                type="success"
                                title="Documento 100% Válido en Cuba"
                                text="Una vez obtenido el sello consular de Cuba, tu documento español tiene plena validez legal en la isla. Ya lo puedes presentar en organismos cubanos o usar para tu matrimonio."
                            />
                        </div>
                    </ProcessStep>
                </div>

                {/* Clarification Section */}
                <Reveal variant="fade-up" duration="slow" className="mt-40 md:mt-56 max-w-4xl mx-auto">
                    <div className="bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl shadow-emerald-900/5 relative overflow-hidden">
                        <MapPin className="absolute -top-6 -right-6 w-32 h-32 text-emerald-100/50 rotate-12" />

                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 text-emerald-700 font-bold text-sm tracking-wide uppercase">
                                <AlertTriangle className="w-4 h-4" />
                                Detalle Fundamental
                            </span>

                            <h3 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tighter">
                                Documentos Consulado Español
                            </h3>

                            <div className="space-y-6 max-w-2xl mx-auto">
                                <p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
                                    Los documentos emitidos en España cuyo fin sea <strong className="text-neutral-900 text-bold">presentarse en el Consulado de España en La Habana</strong> (o cualquier otro de la isla) <strong className="text-neutral-900 font-bold text-xl uppercase underline">NO necesitan ser legalizados</strong>.
                                </p>

                                <p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
                                    El consulado de España se considera territorio español, por lo que asume como directamente válidos sus propios documentos nacionales. Este proceso solo aplica para <strong className="text-emerald-700">entregar documentos a las autoridades cubanas</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
}

// Subcomponents for cleaner code
function ProcessStep({
    number,
    title,
    description,
    imageSrc,
    imageAlt,
    align = "left",
    zoomOrigin = "origin-bottom",
    scale,
    belowImageContent,
    children
}: {
    number: string;
    title: string;
    description: string | React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    align?: "left" | "right";
    zoomOrigin?: "origin-center" | "origin-top" | "origin-top-right" | "origin-right" | "origin-bottom-right" | "origin-bottom" | "origin-bottom-left" | "origin-left" | "origin-top-left";
    scale?: string;
    belowImageContent?: React.ReactNode;
    children: React.ReactNode;
}) {
    const isRight = align === "right";

    return (
        <Reveal variant="fade-up" duration="med" className="relative z-10">
            <div className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
                isRight ? "" : ""
            )}>
                {/* Image Section Wrapper */}
                <div className={cn(
                    "w-full flex flex-col items-center gap-6 order-2",
                    isRight ? "lg:order-2" : "lg:order-1"
                )}>

                    <div className="relative w-full max-w-[384px] mx-auto group border-[8px] border-neutral-200 rounded-[2.5rem] shadow-2xl shadow-neutral-900/10 flex items-center justify-center min-h-[400px] bg-neutral-100">
                        {/* Fallback styling for images that might not exist yet but keeps the aesthetic */}
                        <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden bg-neutral-100 flex items-center justify-center p-8">
                            <div className="text-neutral-300 text-center flex flex-col items-center gap-4 group-hover:scale-110 transition-transform duration-500">
                                <Stamp className="w-16 h-16" />
                                <span className="font-bold text-lg">PASO {number} Oficial</span>
                            </div>
                        </div>
                    </div>

                    {belowImageContent && (
                        <div className="relative z-10 w-full px-4">
                            {belowImageContent}
                        </div>
                    )}
                </div>

                {/* Text Section */}
                <div className={cn(
                    "flex flex-col justify-center order-1",
                    isRight ? "lg:order-1 lg:text-left" : "lg:order-2 lg:text-left"
                )}>
                    <div className="flex flex-col gap-6 lg:items-start">
                        <span className="text-[100px] leading-none font-black text-neutral-200 select-none -mb-10 md:-mb-14 z-0">
                            {number}
                        </span>

                        <div className="relative z-10 space-y-4">
                            <h3 className="text-2xl md:text-4xl font-black text-neutral-900 tracking-tighter leading-none">
                                {title}
                            </h3>
                            <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-lg">
                                {description}
                            </p>
                        </div>

                        <div className="pt-8 w-full max-w-lg lg:mr-auto">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

function AlertBox({ type, title, text }: { type: "warning" | "tip" | "success"; title: string; text: string }) {
    const styles = {
        warning: { icon: AlertTriangle, color: "text-amber-500" },
        tip: { icon: Lightbulb, color: "text-emerald-500" },
        success: { icon: CheckCircle2, color: "text-blue-500" }
    };

    const style = styles[type];
    const Icon = style.icon;

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
                <Icon className={cn("w-5 h-5 md:w-6 md:h-6", style.color)} />
                <h4 className={cn("text-lg md:text-xl font-bold tracking-tight", style.color)}>
                    {title}
                </h4>
            </div>
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-medium">
                {text}
            </p>
        </div>
    );
}

