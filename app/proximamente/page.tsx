"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { Phone, ArrowLeft } from "lucide-react";
import { WHATSAPP_URL_BASE } from "@/lib/constants";

// Inline WhatsApp Icon
function WhatsAppIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>;
}

export default function Proximamente() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--neon-yellow)] rounded-full blur-[150px] opacity-20" />
            </div>

            <Container className="relative z-10 flex flex-col items-center text-center px-4">

                <Reveal variant="fade-up" duration="slow" className="space-y-8 max-w-2xl">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 text-white text-sm font-bold tracking-widest uppercase mb-4">
                        Próximamente
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tight leading-[1.1]">
                        Estamos ultimando los detalles
                    </h1>

                    <p className="text-xl text-neutral-500 leading-relaxed font-medium">
                        Estamos terminando los últimos detalles de la página, pero ya estamos operativos. Puedes llamarnos y te explicamos todo lo que necesites.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Link href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, he visto que la página de este servicio está en construcción. Me gustaría que me informaran.")}`} target="_blank">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full sm:w-auto h-14 px-8 bg-brand-solid text-neutral-900 hover:opacity-90 font-bold text-lg rounded-xl shadow-lg gap-3"
                                leftIcon={<WhatsAppIcon className="w-5 h-5" />}
                            >
                                Contactar ahora
                            </Button>
                        </Link>

                        <Link href="/">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto h-14 px-8 border-neutral-200 text-neutral-600 hover:text-neutral-900 font-bold text-lg rounded-xl gap-2 hover:bg-neutral-50"
                                leftIcon={<ArrowLeft className="w-5 h-5" />}
                            >
                                Volver al Inicio
                            </Button>
                        </Link>
                    </div>
                </Reveal>

            </Container>
        </div>
    );
}
