"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { AlertTriangle, MapPin } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CubaEspanaProcess() {
    return (
        <Section id="proceso" className="py-24 md:py-40 bg-white relative overflow-hidden">
            <Container>
                {/* Intro */}
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-24 md:mb-40">
                    <span className="text-emerald-600 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-4 block">
                        Nuestra Vía de Trabajo
                    </span>
                    <h2 className="text-4xl md:text-[64px] font-black text-neutral-900 tracking-tighter leading-[1.05] mb-8">
                        La ruta directa desde Cuba hasta tus manos
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Al evitar el Consulado de Cuba en España, procesamos tus documentos directamente en origen mediante un trámite en <span className="text-neutral-900 font-bold">2 pasos clave en la isla</span>.
                    </p>
                </Reveal>

                {/* Vertical Process Steps */}
                <div className="flex flex-col gap-16 md:gap-48 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-100 to-transparent hidden lg:block" />

                    {/* Step 1: MINJUS - Cuba */}
                    <ProcessStep
                        number="01"
                        badge="Obtención y Legalidad"
                        badgeLabel="Cuba"
                        title="MINJUS y MINREX (Cuba)"
                        subtitle="Manejamos la solicitud directamente en los Ministerios Cubanos."
                        description="Solicitamos tu partida de nacimiento, antecedentes penales o el certificado que necesites directamente en los registros civiles de Cuba. Luego, este documento es legalizado internamente por el Ministerio de Justicia (MINJUS) y el Ministerio de Relaciones Exteriores (MINREX)."
                        imageSrc="/images/Imagen MINJUS.jpg"
                        imageAlt="Sello Oficial del MINJUS en Cuba"
                        align="left"
                        zoomOrigin="origin-bottom"
                        belowImageContent={
                            <div className="text-center mt-6 w-full">
                                <p className="text-base text-neutral-900 font-semibold mb-2">
                                    Legalización en Origen
                                </p>
                                <p className="text-base text-neutral-600 font-medium leading-relaxed">
                                    Esta es la autenticación nacional imprescindible para que un documento emitido en Cuba pueda ser validado en el extranjero.
                                </p>
                            </div>
                        }
                    />

                    {/* Step 2: Consulado de España */}
                    <ProcessStep
                        number="02"
                        badge="Validez en España"
                        badgeLabel="Consular"
                        title="Consulado de España en La Habana"
                        subtitle="La legalización definitiva que equivale a la Apostilla."
                        description="Una vez legalizado por las autoridades cubanas, lo presentamos ante el Consulado de España en La Habana. El Consulado confirma la legalidad y estampa su sello. Al ser un territorio español, el documento ya adquiere plena validez para usarlo en toda España."
                        imageSrc="/images/Imagen consulado.png"
                        imageAlt="Sello Legalización Consulado de España"
                        align="right"
                        zoomOrigin="origin-bottom-right"
                        belowImageContent={
                            <div className="text-center mt-6 w-full">
                                <p className="text-base text-neutral-900 font-semibold mb-2">
                                    Sello del Consulado de España
                                </p>
                                <p className="text-base text-neutral-600 font-medium leading-relaxed">
                                    A partir de este momento, enviamos el documento completamente habilitado directamente a tu domicilio.
                                </p>
                            </div>
                        }
                    />
                </div>

                {/* Direct Delivery Notice */}
                <Reveal variant="fade-up" duration="slow" className="mt-40 md:mt-56 max-w-4xl mx-auto">
                    <div className="bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl shadow-emerald-900/5 relative overflow-hidden">
                        <MapPin className="absolute -top-6 -right-6 w-32 h-32 text-emerald-100/50 rotate-12" />

                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 text-emerald-700 font-bold text-sm tracking-wide uppercase">
                                <AlertTriangle className="w-4 h-4" />
                                Mensajería Segura DHL
                            </span>

                            <h3 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tighter">
                                Del Consulado Español, a tu casa
                            </h3>

                            <div className="space-y-6 max-w-2xl mx-auto">
                                <p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
                                    A diferencia del lento proceso de pedirlo en el Consulado en Europa, nuestra vía termina cuando retiramos el documento de La Habana. 
                                </p>
                                <p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
                                    Enviamos tu documentación legalizada a través de <strong className="text-neutral-900 font-bold">DHL u Olva</strong> directamente a tu dirección en España (o donde la necesites), ahorrando meses de tiempo.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
}

// Process Step Subcomponent
function ProcessStep({
    number,
    badge,
    badgeLabel,
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt,
    align = "left",
    zoomOrigin = "origin-bottom",
    belowImageContent,
}: {
    number: string;
    badge: string;
    badgeLabel: string;
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    align?: "left" | "right";
    zoomOrigin?: string;
    belowImageContent?: React.ReactNode;
}) {
    const isRight = align === "right";

    return (
        <Reveal variant="fade-up" duration="med" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Image Section */}
                <div className={cn(
                    "w-full flex flex-col items-center gap-6 order-2",
                    isRight ? "lg:order-2" : "lg:order-1"
                )}>
                    <div className="relative w-full max-w-[384px] mx-auto group border-[8px] border-neutral-200 rounded-[2.5rem] shadow-2xl shadow-neutral-900/10">
                        <div className="relative w-full rounded-[2rem] overflow-hidden bg-neutral-100 flex items-center justify-center min-h-[300px]">
                            {/* Fallback pattern in case image is missing */}
                            <div className="absolute inset-0 bg-neutral-100 opacity-50"></div>
                            {imageSrc && (
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    width={800}
                                    height={1100}
                                    quality={100}
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={cn(
                                        "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.75]",
                                        zoomOrigin
                                    )}
                                />
                            )}
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
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wide">
                                    {badgeLabel}
                                </span>
                                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-bold tracking-wide">
                                    {badge}
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-black text-neutral-900 tracking-tighter leading-none">
                                {title}
                            </h3>
                            <p className="text-base md:text-lg text-emerald-600 font-semibold leading-relaxed">
                                {subtitle}
                            </p>
                        </div>

                        <div className="pt-4 w-full max-w-lg lg:mr-auto">
                            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-medium">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
