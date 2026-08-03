"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function MobileFormPreview() {
    return (
        <Section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

            <Container>
                <Reveal variant="fade-up" duration="slow" className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-6">
                        ¿Listo para comenzar o prefiere informarse gratis primero?
                    </h2>
                    <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        En Gestoría HOL le asesoramos sin compromiso para que tome la mejor decisión, pero si ya lo tiene claro, puede iniciar su legalización ante el MINJUS o el Consulado ahora mismo.
                    </p>
                </Reveal>

                {/* Phone Mockup */}
                <Reveal variant="fade-up" duration="slow" delay={200} className="relative mx-auto w-[300px] md:w-[350px] mb-12">
                    {/* Phone Frame */}
                    <div className="relative rounded-[3rem] bg-neutral-900 p-3 shadow-2xl border-4 border-neutral-800">
                        {/* Camera Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-neutral-900 rounded-b-2xl z-20"></div>

                        {/* Screen Content - Placeholder for Image */}
                        <div className="relative aspect-[9/19] bg-neutral-100 rounded-[2.25rem] overflow-hidden flex items-center justify-center border border-neutral-200">
                            {/* Placeholder Instruction */}
                            <div className="text-center p-6 bg-neutral-50/50 backdrop-blur-sm rounded-xl border border-neutral-200/50 shadow-sm">
                                <span className="block text-sm font-medium text-neutral-400 mb-2">Espacio para Imagen</span>
                                <span className="block text-xs text-neutral-300">Formulario Solicitud</span>
                            </div>

                            {/* You will replace this div with: 
                                <Image src="/path/to/form-image.png" alt="Formulario de Solicitud" fill className="object-cover" /> 
                            */}
                        </div>

                        {/* Side Buttons (Visual Only) */}
                        <div className="absolute top-24 -right-1.5 w-1 h-12 bg-neutral-800 rounded-r-lg"></div>
                        <div className="absolute top-40 -right-1.5 w-1 h-20 bg-neutral-800 rounded-r-lg"></div>
                    </div>

                    {/* Shadow/Glow underneath */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full h-24 bg-neutral-900/20 blur-3xl -z-10 rounded-full"></div>
                </Reveal>

                {/* CTAs */}
                <Reveal variant="fade-up" duration="slow" delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="#pricing">
                        <Button
                            size="lg"
                            className="bg-[#0B2319] hover:bg-[#0f2f22] text-white px-8 h-14 rounded-xl text-lg font-bold shadow-xl shadow-green-900/20 hover:-translate-y-1 transition-all duration-300"
                        >
                            Iniciar Legalización Ahora
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>

                    <Link href="https://wa.me/34919931888" target="_blank">
                        <Button
                            variant="ghost"
                            size="lg"
                            className="text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 px-6 h-14 rounded-xl text-lg font-medium"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Quiero una consulta gratuita
                        </Button>
                    </Link>
                </Reveal>

            </Container>
        </Section>
    );
}
