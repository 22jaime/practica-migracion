import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { WHATSAPP_URL_BASE } from "@/lib/constants";

export function VisasHero() {
    return (
        <Section className="relative min-h-[90vh] flex items-center pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-[var(--bg)]" spacing="none">

            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-visados.jpg"
                    alt="Visados España"
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
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm font-bold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Gestión 100% Online
                        </div>
                    </Reveal>

                    {/* Title */}
                    <Reveal variant="blur-up" duration="slower" delay={100} className="mb-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[1.1] text-foreground drop-shadow-sm">
                            Visados a España <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">para Cubanos</span>
                        </h1>
                    </Reveal>

                    {/* Subtitle */}
                    <Reveal variant="blur-up" duration="slow" delay={200} className="mb-8">
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Le ayudamos a conseguir el visado que necesita para viajar, estudiar, reunirse con su familia o vivir legalmente en España. Gestión 100% online y asesoría personalizada para cubanos en cualquier parte del mundo.
                        </p>
                    </Reveal>

                    {/* CTAs */}
                    <Reveal variant="blur-up" duration="slow" delay={300} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me interesa información sobre Visados para España.")}`}
                            target="_blank"
                            className="w-full sm:w-auto"
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                fullWidth
                                className="h-14 font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20"
                            >
                                Consulta Gratis
                            </Button>
                        </Link>
                        <Link href="#tipos-visados" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                size="lg"
                                fullWidth
                                className="h-14 font-medium"
                            >
                                Ver tipos de visado
                            </Button>
                        </Link>
                    </Reveal>

                </div>
            </Container>
        </Section>
    );
}
