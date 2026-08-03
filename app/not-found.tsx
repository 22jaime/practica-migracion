"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] relative overflow-hidden px-4 py-24">

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--neon-yellow)]/10 blur-[140px] rounded-full pointer-events-none" />

            <Container className="relative z-10 flex flex-col items-center text-center">

                {/* 404 + plane animation */}
                <div className="relative mb-6 select-none">
                    <span className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-400/30">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl md:text-7xl animate-bounce" style={{ animationDuration: "3s" }}>✈️</span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight -mt-10 md:-mt-16">
                    Oops, página no encontrada
                </h1>
                <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
                    Parece que te has perdido en el camino. No te preocupes, siempre puedes volver al inicio.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-bold text-base hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                    >
                        <Home className="w-5 h-5" />
                        Ir al inicio
                    </Link>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-neutral-300 hover:border-neutral-900 text-foreground font-semibold text-base transition-all duration-300"
                    >
                        Contactar
                    </Link>
                </div>

                {/* Quick links */}
                <p className="text-sm text-muted-foreground mb-4">O visita alguno de nuestros servicios:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                    {[
                        { label: "Residencia", href: "/residencia" },
                        { label: "Nacionalidad", href: "/nacionalidad" },
                        { label: "Visados", href: "/visados" },
                        { label: "Legalización documentos", href: "/legalizacion-documentos-cubanos-espana-minjus-consulado" },
                        { label: "Envío documentos", href: "/envio-de-documentos-cuba-espana" },
                        { label: "FAQ", href: "/faq" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 rounded-full border border-neutral-200 text-sm text-muted-foreground hover:text-foreground hover:border-neutral-400 transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

            </Container>
        </div>
    );
}
