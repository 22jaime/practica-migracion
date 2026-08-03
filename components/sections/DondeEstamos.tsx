"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { MapPin, Clock } from "lucide-react";

// OpenStreetMap bbox centrado en Valencia, España
// bbox = oeste, sur, este, norte  |  marker = lat, lon
const OSM_SRC =
    "https://www.openstreetmap.org/export/embed.html" +
    "?bbox=-0.4300%2C39.4400%2C-0.3200%2C39.5000" +
    "&layer=mapnik" +
    "&marker=39.4699%2C-0.3763";

export function DondeEstamos() {
    return (
        <Section className="relative text-white overflow-hidden" style={{ padding: 0 }}>

            {/* ── BACKGROUND LAYER: Map (OpenStreetMap — sin API key, funciona en local y producción) ── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <iframe
                    src={OSM_SRC}
                    width="100%"
                    height="100%"
                    style={{
                        border: 0,
                        filter: "grayscale(20%) brightness(0.55) contrast(1.05) saturate(0.8)",
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none"
                ></iframe>
            </div>

            {/* ── BACKGROUND LAYER: Vignette + color blending ── */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Radial vignette — darkens edges, keeps center map visible */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#051610_100%)]" />
                {/* Top fade — seamless join with section above */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B2319] to-transparent" />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B2319] to-transparent" />
                {/* Subtle emerald tint to unify brand color with map */}
                <div className="absolute inset-0 bg-[#0D3526]/30 mix-blend-multiply" />
                {/* Glow accents */}
                <div className="absolute top-[-15%] right-[-5%] w-[700px] h-[700px] bg-emerald-500/8 blur-[140px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-700/15 blur-[110px] rounded-full mix-blend-screen" />
            </div>

            {/* ── CONTENT ── */}
            <Container className="relative z-20 py-28 md:py-36">

                {/* Header */}
                <Reveal variant="fade-up" duration="slow">
                    <div className="text-center mb-16 md:mb-20 px-4 md:px-0">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
                            <MapPin className="w-3.5 h-3.5" />
                            Sede Central
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05] mb-6">
                            Estamos en{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                                Valencia
                            </span>
                        </h2>

                        <p className="text-neutral-200 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                            Le ofrecemos la posibilidad de gestionar el 100% de sus trámites
                            de forma online, sin necesidad de desplazarse.
                        </p>
                    </div>
                </Reveal>

                {/* Info Cards */}
                <Reveal delay={200} duration="slow">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 md:px-0">

                        {/* Card: Ubicación */}
                        <div className="w-full sm:w-auto flex-1 sm:max-w-xs bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:bg-white/8 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-neutral-300 uppercase tracking-widest mb-2">Ubicación</p>
                                <p className="text-2xl md:text-3xl font-black text-white tracking-tight">Valencia</p>
                                <p className="text-neutral-200 text-sm mt-1">España</p>
                            </div>
                        </div>

                        {/* Divider — horizontal on mobile, vertical on desktop */}
                        <div className="hidden sm:block w-px h-24 bg-gradient-to-b from-transparent via-white/15 to-transparent flex-shrink-0" />
                        <div className="sm:hidden w-16 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                        {/* Card: Horario */}
                        <div className="w-full sm:w-auto flex-1 sm:max-w-xs bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:bg-white/8 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-neutral-300 uppercase tracking-widest mb-2">Horario</p>
                                <p className="text-2xl md:text-3xl font-black text-white tracking-tight">Lun – Vie</p>
                                <p className="text-neutral-200 text-sm mt-1">9:00–13:00 · 15:00–18:00</p>
                            </div>
                        </div>

                    </div>
                </Reveal>

            </Container>
        </Section>
    );
}
