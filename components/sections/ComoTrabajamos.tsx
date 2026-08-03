import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import Link from "next/link";
import { MessageCircle, FileText, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";

import { WHATSAPP_URL_BASE } from "@/lib/constants";

export function ComoTrabajamos() {
    const features = [
        {
            id: "01",
            title: "Consulta inicial",
            text: "Cuéntanos tu caso. Analizamos tu situación y te indicamos la vía correcta antes de iniciar cualquier trámite.",
            icon: MessageCircle,
        },
        {
            id: "02",
            title: "Nosotros nos encargamos",
            text: "Preparamos el expediente, gestionamos las citas y presentamos el trámite siguiendo el procedimiento correcto.",
            icon: FileText,
        },
        {
            id: "03",
            title: "Tú recibes",
            text: "Te entregamos la resolución lista, con seguimiento claro y sin que tengas que desplazarte.",
            icon: CheckCircle2,
        },
    ];

    return (
        <Section className="relative overflow-hidden pt-12 lg:pt-32 pb-12 lg:pb-32 bg-neutral-50/50">

            {/* Minimal Ambient Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--neon-yellow)]/5 blur-[120px] rounded-full pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">

                    {/* LEFT: Branding & Promise */}
                    <div className="flex flex-col justify-center h-full lg:sticky lg:top-32 px-4 md:px-0 text-center lg:text-left">
                        <Reveal variant="fade-up">

                            {/* Standard H2 Style */}
                            <h2 className="text-3xl md:text-[44px] font-black text-neutral-900 tracking-tight mb-6 leading-[1.1]">
                                Así trabajamos <br />
                                <span className="text-primary">contigo</span>
                            </h2>

                            <p className="text-lg text-neutral-500 font-medium leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0">
                                Simplificamos todo el proceso para que no tengas que preocuparte por trámites ni desplazamientos. Te atendemos directamente y presentamos el expediente por ti.
                            </p>

                            <Link
                                href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, quiero una consulta inicial.")}`}
                                target="_blank"
                                className="inline-block"
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="h-14 px-8 font-bold bg-brand-solid text-neutral-900 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg border-transparent transition-all duration-300 rounded-lg shadow-md hover:shadow-xl"
                                >
                                    Empezar con una consulta <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </Reveal>
                    </div>

                    {/* RIGHT: Minimal List */}
                    <div className="relative space-y-8 md:pl-0">
                        {/* Vertical Line Gradient - Perfectly Centered on Icons */}
                        <div className="absolute left-[2rem] md:left-[2.5rem] top-10 bottom-10 w-px bg-gradient-to-b from-neutral-200 via-neutral-200 to-transparent hidden md:block" />

                        <Stagger className="space-y-6" staggerDelay={0.1}>
                            {features.map((feature, i) => (
                                <Reveal key={feature.id} variant="fade-up" className="relative group">
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center bg-white md:bg-transparent p-6 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-neutral-100 md:border-none">

                                        {/* Icon Bubble (Centered on Line) */}
                                        <div className="relative flex-shrink-0 z-10">
                                            <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center shadow-sm group-hover:border-[var(--neon-yellow)] group-hover:shadow-[0_8px_30px_-4px_rgba(16,185,129,0.2)] transition-all duration-300 group-hover:-translate-y-1">
                                                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-neutral-400 group-hover:text-[var(--dark-green)] transition-colors" strokeWidth={1.5} />
                                            </div>
                                        </div>

                                        {/* Content card for desktop */}
                                        <div className="flex-1 md:bg-white md:p-6 md:rounded-2xl md:border md:border-neutral-100 md:group-hover:shadow-md md:group-hover:border-neutral-200 transition-all duration-300">
                                            <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-[var(--dark-green)] transition-colors leading-tight">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-neutral-500 font-medium leading-relaxed">
                                                {feature.text}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </Stagger>
                    </div>

                </div>

                {/* Bottom Separator: Location Arrow */}
                <Reveal variant="fade-up" delay={0.2} className="flex flex-col items-center justify-center mt-16 md:mt-32">
                    <span className="text-neutral-500 text-sm font-bold tracking-wider uppercase text-center mb-3">
                        Nuestra oficina
                    </span>
                    <div className="w-10 h-10 flex items-center justify-center animate-bounce">
                        <ChevronDown className="w-5 h-5 text-neutral-300" />
                    </div>
                </Reveal>

            </Container>
        </Section>
    );
}

