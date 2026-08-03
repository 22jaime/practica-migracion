"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Smartphone, Building2, FileCheck, Truck } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Solicitud Online",
        description: "Nos envías los datos por nuestro formulario. Si es solo consulado, deberás entregarnos el documento en nuestra oficina de La Habana.",
        icon: <Smartphone className="w-6 h-6 text-white" />,
    },
    {
        number: "02",
        title: "Gestión en La Habana",
        description: "Nuestro equipo se encarga de las legalizaciones ante el MINJUS y el Consulado",
        icon: <Building2 className="w-6 h-6 text-white" />,
    },
    {
        number: "03",
        title: "Copia Digital",
        description: "Te enviamos un PDF del documento legalizado listo para presentar online",
        icon: <FileCheck className="w-6 h-6 text-white" />,
    },
    {
        number: "04",
        title: "Envío Seguro",
        description: "Lo ponemos en un sobre certificado hacia tu domicilio en cualquier parte del mundo",
        icon: <Truck className="w-6 h-6 text-white" />,
    },
];

interface ProcessStepsProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
}

export function ProcessSteps({
    title = "Así gestionamos tu documento",
    subtitle = "Olvídate de intermediarios opacos. Sabrás exactamente qué pasa en cada etapa."
}: ProcessStepsProps) {
    return (
        <Section className="py-24 relative overflow-hidden bg-[#0B2319]">
            {/* Background Gradient & Auroras (Matches Reviews Section) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1B4332] via-[#0D281E] to-[#051610] opacity-100" />
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#1B4332]/40 blur-[100px] rounded-full pointer-events-none mix-blend-overlay" />

            <Container className="relative z-10">
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-[44px] font-black tracking-tight text-white leading-[1.1] mb-6 drop-shadow-sm">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-300 font-medium leading-relaxed">
                        {subtitle}
                    </p>
                </Reveal>

                <div className="relative max-w-md md:max-w-4xl mx-auto">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-[28px] top-4 bottom-4 w-px bg-white/10 -translate-x-1/2 md:hidden" />

                    <Stagger className="space-y-12" staggerDelay={150}>
                        {steps.map((step, index) => (
                            <Reveal key={step.number} variant="fade-up" duration="med" className="relative group">
                                <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>

                                    {/* Content Card (Matches Reviews Card Style) */}
                                    <div className="flex-1 ml-12 md:ml-0">
                                        <div className={`
                                            p-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md
                                            shadow-lg hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-1
                                            relative overflow-hidden
                                            ${index % 2 !== 0 ? "text-left md:text-right" : "text-left"}
                                        `}>
                                            <div className={`flex flex-col ${index % 2 !== 0 ? "md:items-end" : "md:items-start"}`}>
                                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 backdrop-blur-md shadow-inner border border-white/10 text-white">
                                                    {step.icon}
                                                </div>

                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 block">
                                                    {step.title}
                                                </h3>
                                                <p className="text-neutral-300 font-medium leading-relaxed max-w-sm">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                                        <div className="
                                            w-4 h-4 rounded-full bg-[var(--brand-mid)] border-2 border-white/20 shadow-[0_0_10px_rgba(82,183,136,0.5)]
                                            z-10 transition-all duration-300 group-hover:scale-150 group-hover:bg-white
                                        " />
                                    </div>

                                    {/* Empty Spacer for alternating layout */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            </Reveal>
                        ))}
                    </Stagger>
                </div>

            </Container>
        </Section>
    );
}
