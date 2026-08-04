import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Chip } from "@/components/ui/chip";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { cn } from "@/lib/cn";
import { TextHighlight } from "@/components/ui/highlight";

import { WHATSAPP_URL_BASE } from "@/lib/constants";

export function Hero() {
    return (
        <Section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 md:pt-40 md:pb-24 overflow-hidden bg-[var(--bg)]" spacing="none">



            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* --- IZQUIERDA (60%) --- */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left px-2 md:px-0">
                        {/* 1. Badge superior */}
                        <Reveal variant="fade-up" duration="slow" delay={0}>
                            <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-sm font-medium text-neutral-800 mb-6 translate-y-2 hover:scale-[1.01] transition-transform duration-500 cursor-default">
                                <ScaleIcon className="w-5 h-5 text-[var(--brand)]" />
                                <div className="h-4 w-px bg-neutral-200" />
                                <span className="tracking-wide text-neutral-600">Gestoría Migratoria Cubana</span>
                            </div>
                        </Reveal>

                        {/* 2. H1 - Premium Typography */}
                        <Reveal variant="blur-up" duration="slower" delay={100} className="mb-6">
                            <h1 className="text-4xl md:text-5xl lg:text-[70px] font-extrabold tracking-[-0.02em] leading-[1.1] text-foreground drop-shadow-sm">
                                esto es una prueba
                            </h1>
                        </Reveal>

                        {/* 3. Subtitle with Highlight System */}
                        <Reveal variant="blur-up" duration="slow" delay={200} className="mb-8">
                            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                                Nos encargamos del proceso migratorio completo para cubanos: legalización de documentos, visados, residencia, nacionalidad y mucho más.
                            </p>
                        </Reveal>

                        {/* 4. CTAs (Conversion Ready) */}
                        <Reveal variant="blur-up" duration="slow" delay={300} className="mb-10">
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link
                                    href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola buenas, quiero hacer una consulta sobre un trámite")}`}
                                    target="_blank"
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        fullWidth
                                        className="h-14 font-bold bg-brand-solid text-neutral-900 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg border-transparent gap-2 transition-all duration-300"
                                        leftIcon={<WhatsAppIcon className="w-6 h-6" />}
                                    >
                                        Consulta
                                    </Button>
                                </Link>
                                <Link href="#servicios" className="w-full sm:w-auto">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        fullWidth
                                        className="h-14 font-medium border-2 border-neutral-300 hover:border-neutral-900 hover:bg-transparent text-foreground"
                                    >
                                        Ver servicios
                                    </Button>
                                </Link>
                            </div>
                        </Reveal>

                        {/* 6. FUD Icons (Safety/Speed/Trust) - 3 Blocks Row */}
                        <Reveal delay={500} duration="slow" className="w-full">
                            <Stagger className="flex flex-col sm:flex-row justify-between gap-8 pt-8 border-t border-border/40 w-full" staggerDelay={100}>
                                {[
                                    {
                                        icon: <ShieldCheckIcon className="w-6 h-6 text-foreground" aria-hidden="true" />,
                                        title: "Seguridad",
                                        text: "Trámites reales"
                                    },
                                    {
                                        icon: <BoltIcon className="w-6 h-6 text-foreground" aria-hidden="true" />,
                                        title: "Rapidez",
                                        text: "Procesos ágiles"
                                    },
                                    {
                                        icon: <CompassIcon className="w-6 h-6 text-foreground" aria-hidden="true" />,
                                        title: "Sencillez",
                                        text: "Paso a paso"
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-row items-center gap-3 sm:gap-4 group cursor-default">
                                        <div className="p-2 rounded-xl bg-muted/30 text-foreground group-hover:scale-110 transition-transform duration-fluid ease-fluid flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-base text-foreground leading-none mb-1">{item.title}</span>
                                            <span className="text-sm text-muted-foreground leading-none">{item.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </Stagger>
                        </Reveal>
                    </div>

                    {/* --- DERECHA (40%) --- */}
                    <div className="lg:col-span-5 relative w-full h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[500px] mt-8 lg:mt-0">
                        <Reveal variant="scale-in" duration="slower" delay={150} className="w-full h-full">
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Decorative Aura/Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[var(--neon-yellow)]/10 blur-[130px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#FF6B00]/10 blur-[100px] rounded-full pointer-events-none" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[var(--neon-yellow)]/20 blur-[80px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />

                                {/* 3D Placeholder Card - Polaroid/App Style */}
                                <a
                                    href="https://www.google.com/maps/place/?q=place_id:ChIJ0x0LiBg5g4IR3pzId98xnoA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full max-w-[500px] bg-white rounded-[2.5rem] shadow-2xl p-4 transition-all duration-500 ease-out hover:rotate-[0.3deg] hover:-translate-y-1 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] cursor-pointer block transform-gpu"
                                >
                                    {/* Image Section */}
                                    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-inner isolate">
                                        <img
                                            src="/images/hero-family-celebration.png"
                                            alt="Familia celebrando éxito en sus trámites"
                                            width="100%"
                                            height="100%"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
                                        />
                                    </div>

                                    {/* Bottom Content Section (Strict Layout: 5.0/Stars/Reviews Left + Logo/CTA Right) */}
                                    <div className="py-5 px-6 flex items-center justify-between bg-white border-t border-slate-100 relative overflow-hidden rounded-b-[2.5rem] group/footer">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover/footer:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                                        {/* LEFT: Compacted Ratings (5.0 + Stars + Reviews) */}
                                        <div className="flex flex-col items-start gap-0.5">
                                            {/* Row 1: 5.0 + Stars */}
                                            <div className="flex items-center gap-2">
                                                <span className="text-3xl font-black text-neutral-900 leading-none">5.0</span>
                                                <div className="flex text-[#FBBC05] text-2xl gap-0.5 drop-shadow-sm" aria-hidden="true">
                                                    ★★★★★
                                                </div>
                                            </div>

                                        </div>

                                        {/* DIVIDER */}
                                        <div className="h-10 w-px bg-slate-200 mx-2" />

                                        {/* RIGHT: Google Maps Logo + CTA Subtitle */}
                                        <div className="flex flex-col items-end">
                                            <img
                                                src="/images/gmaps-old-logo.png"
                                                alt="Google Maps"
                                                width="100"
                                                height="30"
                                                className="h-9 w-auto object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Hover "Bocadillo" / Tooltip - visible always on mobile, hover on desktop */}
                                    <div className="absolute bottom-4 left-4 right-4 lg:bottom-auto lg:right-auto lg:top-24 lg:left-auto lg:-right-20 lg:translate-x-0 lg:translate-y-0 z-40 lg:w-64 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all lg:duration-500 lg:ease-out lg:translate-y-8 lg:group-hover:translate-y-0 pointer-events-none lg:delay-0 lg:group-hover:delay-700">
                                        <div className="bg-white/90 backdrop-blur-md border border-white/50 p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] relative">
                                            <h3 className="font-bold text-base text-foreground mb-1 leading-tight">
                                                Un proceso que funciona
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-snug">
                                                Otras familias como la tuya ya pasaron por este camino y hoy viven juntas en España con su situación en regla.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

// --- ICONS ---

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.412 7.412 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.463 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112-.149.224-.579.73-.709.88-.131.149-.261.169-.486.056-.224-.112-.953-.351-1.815-1.12-.673-.6-1.125-1.34-1.257-1.565-.132-.224-.014-.345.098-.458.101-.101.224-.263.336-.395.112-.131.149-.224.224-.374.075-.149.038-.28-.019-.395-.056-.112-.504-1.214-.69-1.662-.181-.435-.366-.377-.504-.383-.131-.006-.28-.008-.429-.008-.149 0-.391.056-.597.28-.205.225-.786.769-.786 1.875 0 1.106.806 2.174.919 2.323.112.149 1.587 2.415 3.844 3.387.536.231.954.369 1.279.473.538.171 1.027.147 1.413.089.43-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.066-.056-.094-.206-.151-.43-.263" />
        </svg>
    );
}



function ShieldCheckIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}



function BoltIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    )
}



function CompassIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
    )
}





function ScaleIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
    )
}


