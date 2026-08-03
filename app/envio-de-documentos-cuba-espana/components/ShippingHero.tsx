"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package, Shield, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { WHATSAPP_URL_BASE } from "@/lib/constants";

const WHATSAPP_ENVIOS = `${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me interesa el servicio de envío de documentos Cuba-España.")}`;

export function ShippingHero() {
    return (
        <Section className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--bg)]" spacing="none">

            {/* Background decorative blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-[var(--neon-yellow)]/10 to-transparent rounded-full blur-3xl" />
            </div>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
                    {/* LEFT: Content */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">

                        {/* Top Badge */}
                        <Reveal variant="fade-up" duration="slow" delay={0}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-xs sm:text-sm font-medium text-neutral-800 mb-5 cursor-default">
                                <Package className="w-4 h-4 text-[var(--brand)] shrink-0" />
                                <div className="h-3.5 w-px bg-neutral-200" />
                                <span className="tracking-wide text-neutral-600">Servicio Postal Cuba – España</span>
                            </div>
                        </Reveal>

                        {/* H1 */}
                        <Reveal variant="blur-up" duration="slower" delay={100} className="mb-5">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.02em] leading-[1.1] text-neutral-900 text-left">
                                Enviamos tus documentos entre{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10">Cuba y España</span>
                                    <span className="absolute -bottom-1 left-0 w-full h-3 bg-[var(--neon-yellow)]/60 rounded-full -z-0 blur-[2px]" />
                                </span>{" "}
                                de forma segura y rápida
                            </h1>
                        </Reveal>

                        {/* Subtitle */}
                        <Reveal variant="blur-up" duration="slow" delay={200} className="mb-7">
                            <p className="text-base sm:text-lg md:text-xl text-neutral-500 font-medium leading-relaxed text-left">
                                Envíos seguros con <strong className="text-neutral-900">3-4 salidas al mes</strong>.{" "}
                                Entrega a domicilio en España. Recogida en La Habana.
                            </p>
                        </Reveal>

                        {/* CTAs */}
                        <Reveal variant="blur-up" duration="slow" delay={300} className="mb-8 w-full">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link href="https://formularios.gestoriahol.com/gestorahol/form/EnviosdeDocumentos/formperma/I5Rd0kM8BEna-UOn1nRLi0GcUl7i0sFdGFhasqNlnRA" target="_blank" className="w-full sm:w-auto">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        fullWidth
                                        className="h-13 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold bg-[var(--neon-yellow)] text-neutral-900 hover:bg-[var(--brand-hover)] shadow-lg shadow-[var(--neon-yellow)]/20 border-transparent hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
                                    >
                                        Solicitar Envío
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="#pricing" className="w-full sm:w-auto">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        fullWidth
                                        className="h-13 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-medium border-2 border-neutral-300 hover:border-neutral-900 hover:bg-transparent text-neutral-900 rounded-xl"
                                    >
                                        Ver Tarifas
                                    </Button>
                                </Link>
                            </div>
                        </Reveal>

                        {/* Trust badges */}
                        <Reveal delay={400} duration="slow" className="w-full">
                            <Stagger className="flex flex-row flex-wrap gap-4 sm:gap-8 w-full border-t border-neutral-200 pt-6" staggerDelay={100}>
                                {[
                                    { icon: <Shield className="w-5 h-5 text-neutral-900" />, title: "Envíos Seguros", text: "Bodega del avión" },
                                    { icon: <Clock className="w-5 h-5 text-neutral-900" />, title: "7 – 15 días", text: "Tiempo de entrega" },
                                    { icon: <Package className="w-5 h-5 text-neutral-900" />, title: "50€ (hasta 10)", text: "+ Envío" },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-row items-center gap-2.5 group cursor-default">
                                        <div className="p-2.5 rounded-xl bg-neutral-100/80 text-neutral-900 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="font-bold text-sm text-neutral-900 leading-none mb-1">{item.title}</span>
                                            <span className="text-xs text-neutral-500 leading-none font-medium">{item.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </Stagger>
                        </Reveal>
                    </div>

                    {/* RIGHT: Visual card — hidden on mobile, shown from lg */}
                    <div className="lg:col-span-5 relative hidden sm:block mt-8 lg:mt-0">
                        <Reveal variant="scale-in" duration="slower" delay={150} className="w-full flex items-center justify-center relative">
                            {/* Glow */}
                            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                                <div className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-blue-200/40 via-blue-100/30 to-transparent rounded-full blur-3xl opacity-70 animate-pulse" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--neon-yellow)]/10 rounded-full blur-[80px]" />
                            </div>

                            {/* Visual card */}
                            <div className="relative z-10 w-full max-w-sm mx-auto">
                                <div className="bg-white border border-neutral-100 rounded-[2.5rem] shadow-2xl shadow-neutral-900/10 p-6 sm:p-8 flex flex-col gap-5">
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Ruta del Envío</p>
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="flex flex-col items-center gap-1.5">
                                                <Image src="https://flagcdn.com/w80/cu.png" alt="Cuba" width={40} height={28} className="rounded-md shadow-sm object-cover" />
                                                <span className="text-sm font-bold text-neutral-900">Cuba</span>
                                                <span className="text-xs text-neutral-500">La Habana</span>
                                            </div>
                                            <div className="flex flex-col items-center gap-2 flex-1">
                                                <div className="w-full h-px bg-neutral-200 relative">
                                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xl">✈️</div>
                                                </div>
                                                <span className="text-xs text-neutral-400 font-medium">3-4 salidas/mes</span>
                                            </div>
                                            <div className="flex flex-col items-center gap-1.5">
                                                <Image src="https://flagcdn.com/w80/es.png" alt="España" width={40} height={28} className="rounded-md shadow-sm object-cover" />
                                                <span className="text-sm font-bold text-neutral-900">España</span>
                                                <span className="text-xs text-neutral-500">Domicilio</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-px bg-neutral-100" />

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-neutral-50 rounded-2xl p-4 text-center">
                                            <p className="text-2xl font-black text-neutral-900">50€</p>
                                            <p className="text-xs text-neutral-500 font-medium mt-1">Paquete 1 a 10</p>
                                        </div>
                                        <div className="bg-neutral-50 rounded-2xl p-4 text-center">
                                            <p className="text-2xl font-black text-neutral-900">50€</p>
                                            <p className="text-xs text-neutral-500 font-medium mt-1">Títulos (y C/U)</p>
                                        </div>
                                    </div>

                                    <div className="bg-[var(--neon-yellow)]/20 border border-[var(--neon-yellow)]/30 rounded-2xl p-3 text-center">
                                        <p className="text-sm font-bold text-neutral-800">
                                            🚚 Envío final: +20€ (España) u otros países a consultar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
