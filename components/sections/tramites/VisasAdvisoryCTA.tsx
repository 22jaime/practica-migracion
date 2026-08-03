import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { WHATSAPP_URL_BASE } from "@/lib/constants";
import { FileSearch } from "lucide-react";

export function VisasAdvisoryCTA() {
    return (
        <Section className="bg-emerald-950 py-20 text-white relative overflow-hidden" spacing="none">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <Reveal variant="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                            ¿No está seguro si aplica a algún visado?
                        </h2>
                        <p className="text-emerald-100 text-lg mb-8 leading-relaxed max-w-xl">
                            Cada caso migratorio es diferente. Por eso no ofrecemos precios genéricos ni promesas vacías. Primero, te orientamos sin compromiso: analizamos tu situación y te indicamos si puedes optar a un visado.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, me interesa saber si aplico a un Visado para España.")}`}
                                target="_blank"
                            >
                                <Button size="lg" className="bg-[#EDF2F7] text-emerald-950 hover:bg-white font-bold h-14 px-8 text-lg">
                                    Consulta
                                </Button>
                            </Link>
                            <div className="flex items-center gap-3 text-sm text-emerald-200 bg-white/5 px-6 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
                                <span className="font-bold text-2xl text-white">50€</span>
                                <span className="leading-tight">Asesoría Completa<br />(solo si aplica)</span>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal variant="scale-in" delay={200} className="hidden lg:block">
                        {/* Illustration / Visual */}
                        <div className="relative w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-950 overflow-hidden border border-white/10 flex items-center justify-center shadow-2xl">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                            <div className="text-center p-8 relative z-10 transform translate-y-2">
                                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20 shadow-inner">
                                    <FileSearch className="w-12 h-12 text-emerald-200" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Análisis de Perfil</h3>
                                <p className="text-emerald-200/80 text-sm">Validamos tus opciones antes de que pagues nada.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>
    );
}
