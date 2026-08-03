"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Info, FileText, Globe, Stamp, Search, ShieldCheck, AlertTriangle, Lightbulb, CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProcessExplanation() {
    return (
        <Section className="py-24 md:py-40 bg-white relative overflow-hidden">
            <Container>
                {/* Intro / Transition */}
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-24 md:mb-40">
                    <span className="text-emerald-600 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-4 block">
                        Guía de Trámites
                    </span>
                    <h2 className="text-4xl md:text-[64px] font-black text-neutral-900 tracking-tighter leading-[1.05] mb-8">
                        Lo que debes saber antes de legalizar
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Para que tu documento cubano sea aceptado en España, debe cumplir con estas <span className="text-neutral-900 font-bold">3 verificaciones</span>.
                    </p>
                </Reveal>

                {/* Vertical Process Steps */}
                <div className="flex flex-col gap-16 md:gap-48 relative">
                    {/* Connecting Line (Optional, subtle visual guide) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-100 to-transparent hidden lg:block" />

                    {/* Step 1: Vigencia */}
                    <ProcessStep
                        number="01"
                        title="La Vigencia: No dejes que tu documento caduque"
                        description="Antes de iniciar cualquier trámite, lo primero es mirar el calendario."
                        imageSrc="/images/ejemplo-vigencia.png"
                        imageAlt="Ejemplo de fecha de emisión en documento cubano"
                        align="left"
                        zoomOrigin="origin-bottom"
                        belowImageContent={
                            <div className="text-center mt-6 w-full">
                                <p className="text-base text-neutral-900 font-semibold mb-2">
                                    Fecha de Expedición
                                </p>
                                <p className="text-base text-neutral-600 font-medium leading-relaxed">
                                    La fecha de emisión aparece al final de la página frontal. Esta es la que marca el inicio de su validez, independientemente de cuándo lo legalices.
                                </p>
                            </div>
                        }
                    >
                        <div className="space-y-12">
                            {/* Duration Block (Custom Style to match alerts) */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                                    <h4 className="text-lg md:text-xl font-bold tracking-tight text-blue-500">
                                        ¿Cuánto tiempo dura?
                                    </h4>
                                </div>
                                <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-medium">
                                    En España, los documentos para extranjería suelen tener una validez de <strong className="text-neutral-900 font-bold">6 meses a 1 año</strong>, dependiendo del trámite y la Comunidad Autónoma.
                                </p>
                            </div>

                            <AlertBox
                                type="warning"
                                title="Ojo con la caducidad"
                                text="Si tu documento original es antiguo, podría ser rechazado aunque los sellos sean recientes."
                            />

                            <AlertBox
                                type="tip"
                                title="Consejo"
                                text="Confirma la vigencia exacta con nosotros o con tu abogado antes de invertir en legalizaciones."
                            />
                        </div>
                    </ProcessStep>

                    {/* Step 2: MINJUS */}
                    <ProcessStep
                        number="02"
                        title="Validación Nacional: El Sello del MINJUS"
                        description="Este es el primer filtro oficial dentro de la isla."
                        imageSrc="/images/Imagen MINJUS.jpg"
                        imageAlt="Sello MINJUS"
                        align="right"
                        zoomOrigin="origin-bottom-right"
                        belowImageContent={
                            <div className="text-center mt-6 w-full">
                                <p className="text-base text-neutral-900 font-semibold mb-2">
                                    Sello del MINJUS
                                </p>
                                <p className="text-base text-neutral-600 font-medium leading-relaxed">
                                    Este sello suele estamparse en el reverso (parte trasera) del documento. Es una certificación que ocupa gran parte de la página y confirma que la firma frontal es auténtica.
                                </p>
                            </div>
                        }
                    >
                        <div className="space-y-8">
                            <div className="flex flex-col gap-3">
                                <h4 className="flex items-center gap-3 text-emerald-500 font-bold tracking-tight text-lg md:text-xl md:text-2xl mb-2">
                                    <Stamp className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                                    Paso Obligatorio
                                </h4>
                                <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-medium">
                                    El Ministerio de Justicia (MINJUS) debe validar el documento para que este pueda ser reconocido por autoridades extranjeras. Es el &quot;permiso&quot; necesario para que el documento pueda entrar al Consulado de España.
                                </p>
                            </div>
                        </div>
                    </ProcessStep>

                    {/* Step 3: Consulado */}
                    <ProcessStep
                        number="03"
                        title="Validez Internacional: El Sello del Consulado"
                        description="Esta etiqueta transforma un papel cubano en un documento con plenos efectos legales en España."
                        imageSrc="/images/Imagen consulado.png"
                        imageAlt="Sello Consulado"
                        align="left"
                        zoomOrigin="origin-top"
                        scale="scale-110"
                        belowImageContent={
                            <div className="text-center mt-6 w-full">
                                <p className="text-base text-neutral-900 font-semibold mb-2">
                                    Sello del Consulado de España
                                </p>
                                <p className="text-base text-neutral-600 font-medium leading-relaxed">
                                    Se coloca también en el reverso (parte trasera) del documento, generalmente debajo o al lado de la legalización del MINJUS. Suele ser una etiqueta adhesiva con un código de barras o un sello en tinta muy específico.
                                </p>
                            </div>
                        }
                    >
                        <div className="space-y-8">
                            <AlertBox
                                type="success"
                                title="Legalizacion completa"
                                text="Con este sello, tu documento ya es válido para Extranjería, Registro Civil, Seguridad Social o cualquier otro organismo oficial en España."
                            />
                        </div>
                    </ProcessStep>
                </div>

                {/* Myth vs Reality Section (Simplified) */}
                {/* Myth vs Reality Section (Redesigned as Yellow Alert Card) */}
                <Reveal variant="fade-up" duration="slow" className="mt-40 md:mt-56 max-w-4xl mx-auto">
                    <div className="bg-amber-50 border border-amber-100 rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl shadow-amber-900/5 relative overflow-hidden">
                        {/* Decorative background icon */}
                        <AlertTriangle className="absolute -top-6 -right-6 w-32 h-32 text-amber-100/50 rotate-12" />

                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/50 text-amber-700 font-bold text-sm tracking-wide uppercase">
                                <AlertTriangle className="w-4 h-4" />
                                Aclaración Importante
                            </span>

                            <h3 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tighter">
                                ¿Existe la Apostilla en Cuba?
                            </h3>

                            <div className="space-y-6 max-w-2xl mx-auto">
                                <p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
                                    No. Aunque es habitual escuchar hablar de la &quot;Apostilla de La Haya&quot; para trámites internacionales,
                                    <strong className="text-neutral-900 font-bold"> en el caso de Cuba no aplica</strong> porque el país no pertenece a ese convenio.
                                </p>

                                <p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
                                    Su equivalente legal es la <strong className="text-neutral-900 font-bold">Legalización Consular</strong>.
                                    Es el único proceso válido para que tus documentos sean reconocidos en España.
                                </p>
                            </div>

                            <div className="pt-8">
                                <a
                                    href="https://www.exteriores.gob.es/Consulados/lahabana/es/ServiciosConsulares/Paginas/index.aspx?scca=Legalizaci%C3%B3n+o+Apostilla.+Compulsa+y+Registro&scco=Cuba&scd=166&scs=Legalizaci%C3%B3n+y+apostilla+de+la+Haya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-white border border-amber-200 hover:border-amber-300 text-amber-900 px-8 py-4 rounded-xl font-bold shadow-sm hover:shadow-md transition-all group text-lg"
                                >
                                    <Globe className="w-5 h-5 text-amber-600" />
                                    <span>Ver información oficial del Consulado</span>
                                </a>
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
                {/* Image Section */}
                {/* Image Section Wrapper */}
                <div className={cn(
                    "w-full flex flex-col items-center gap-6 order-2", /* Wrapper for column layout */
                    isRight ? "lg:order-2" : "lg:order-1"
                )}>

                    {/* Image Container (Visual Frame) */}
                    <div className="relative w-full max-w-[384px] mx-auto group border-[8px] border-neutral-200 rounded-[2.5rem] shadow-2xl shadow-neutral-900/10">
                        <div className="relative w-full rounded-[2rem] overflow-hidden bg-neutral-100">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={800}
                                height={1100}
                                quality={100}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={cn(
                                    "w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.75]",
                                    zoomOrigin,
                                    scale
                                )}
                            />
                        </div>
                    </div>

                    {/* Below Image Content (Wider Layout) */}
                    {belowImageContent && (
                        <div className="relative z-10 w-full px-4">
                            {belowImageContent}
                        </div>
                    )}
                </div>

                {/* Text Section */}
                <div className={cn(
                    "flex flex-col justify-center order-1", /* Added order-1 for mobile */
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

