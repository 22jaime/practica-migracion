import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { WHATSAPP_URL_BASE } from "@/lib/constants";
import { Plane, Users, Flag, GraduationCap } from "lucide-react";

export function VisaTypesGrid() {
    const visas = [
        {
            title: "Turismo (Schengen)",
            category: "Estancia Corta",
            description: "Visado de tiempo limitado que autoriza a viajar por turismo o visita a familiares. No permite trabajar ni residir en España.",
            icon: Plane
        },
        {
            title: "Reagrupación Familiar",
            category: "Residencia",
            description: "Para familiares de residentes legales en España. Aplica a cónyuges, hijos menores y, en algunos casos, padres.",
            icon: Users
        },
        {
            title: "Familiar Unión Europea",
            category: "Residencia",
            description: "Permite a extranjeros reunirse con familiares que residen legalmente en la Unión Europea.",
            icon: Flag
        },
        {
            title: "Visado de Estudio",
            category: "Estancia",
            description: "Se otorga a estudiantes o investigadores que van a realizar estudios en España por más de 90 días.",
            icon: GraduationCap
        }
    ];

    return (
        <Section id="tipos-visados" className="bg-neutral-50" spacing="lg">
            <Container>
                <Reveal variant="fade-up" className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
                        Tipos de Visado
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Analizamos su situación personal para recomendarle la vía más segura y efectiva.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {visas.map((visa, i) => (
                        <Reveal key={i} variant="fade-up" delay={i * 100}>
                            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                        {visa.category}
                                    </span>
                                    <div className="w-12 h-12 bg-emerald-100/50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                                        <visa.icon size={28} strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                    {visa.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed mb-8 flex-grow">
                                    {visa.description}
                                </p>

                                {/* Actions */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <Link
                                        href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent(`Hola, me interesa el ${visa.title}.`)}`}
                                        target="_blank"
                                        className="flex-1"
                                    >
                                        <Button
                                            variant="primary"
                                            fullWidth
                                            className="bg-neutral-900 text-white hover:bg-neutral-800"
                                        >
                                            Consulta Gratis
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
