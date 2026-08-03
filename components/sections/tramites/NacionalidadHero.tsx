import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL_BASE, EXPEDIENTES_FORM_URL } from "@/lib/constants";

export function NacionalidadHero() {
    return (
        <Section className="relative min-h-[90vh] flex items-center pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-[var(--bg)]" spacing="none">

            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-nacionalidad.jpg"
                    alt="Nacionalidad Española"
                    fill
                    className="object-cover opacity-5"
                    priority
                />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-white/50 to-[var(--bg)]" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    {/* Badge */}
                    <Reveal variant="fade-up" duration="slow" delay={0}>
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 text-sm font-bold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            Pasaporte Español
                        </div>
                    </Reveal>

                    {/* Title */}
                    <Reveal variant="blur-up" duration="slower" delay={100} className="mb-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[1.1] text-foreground drop-shadow-sm">
                            Nacionalidad Española <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">para Cubanos</span>
                        </h1>
                    </Reveal>

                    {/* Subtitle */}
                    <Reveal variant="blur-up" duration="slow" delay={200} className="mb-8">
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Más de 10 años ayudando a cubanos a cumplir el sueño de obtener su nacionalidad española. Nos encargamos de tu expediente de principio a fin.
                        </p>
                    </Reveal>

                    {/* CTAs */}
                    <Reveal variant="blur-up" duration="slow" delay={300} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                        <Link href={EXPEDIENTES_FORM_URL} target="_blank" className="w-full sm:w-auto">
                            <Button
                                variant="primary"
                                size="lg"
                                fullWidth
                                className="h-14 px-8 text-lg font-bold bg-[var(--neon-yellow)] text-neutral-900 hover:bg-[var(--brand-hover)] shadow-lg shadow-[var(--neon-yellow)]/20 border-transparent hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
                            >
                                Llenar Formulario
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link
                            href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me interesa información sobre trámites de Nacionalidad Española.")}`}
                            target="_blank"
                            className="w-full sm:w-auto"
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                fullWidth
                                className="h-14 font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 rounded-xl"
                            >
                                Consulta Gratis
                            </Button>
                        </Link>
                        <Link href="#tipos-nacionalidad" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                size="lg"
                                fullWidth
                                className="h-14 font-medium rounded-xl"
                            >
                                Ver tipos de nacionalidad
                            </Button>
                        </Link>
                    </Reveal>

                </div>
            </Container>
        </Section>
    );
}
