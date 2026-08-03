import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { WHATSAPP_URL_BASE } from "@/lib/constants";
import { Users, Briefcase, GraduationCap, HeartHandshake, Plane, Wallet } from "lucide-react";

export function ResidenciaTypesGrid() {
    const tipos = [
        {
            title: "Arraigo Social",
            description: "Para quienes llevan 3 años en España y cuentan con un contrato de trabajo o medios económicos propios. Requiere informe de integración.",
            icon: Users
        },
        {
            title: "Arraigo Familiar",
            description: "Si eres padre/madre de un menor español o hijo de padre/madre originariamente español. Permite trabajar y residir por 5 años.",
            icon: HeartHandshake
        },
        {
            title: "Arraigo Laboral",
            description: "Si has vivido 2 años en España y puedes demostrar una relación laboral de al menos 6 meses (incluso irregular).",
            icon: Briefcase
        },
        {
            title: "Arraigo para la Formación",
            description: "Compromiso de realizar una formación reglada para obtener una cualificación técnica. Requiere 2 años de estancia.",
            icon: GraduationCap
        },
        {
            title: "Tarjeta Comunitaria",
            description: "Para familiares de ciudadanos de la UE (cónyuges, hijos, ascendientes a cargo) que deseen residir en España.",
            icon: Plane
        },
        {
            title: "Residencia No Lucrativa",
            description: "Para quienes disponen de medios económicos suficientes para no trabajar en España. Ideal para jubilados o rentistas.",
            icon: Wallet
        }
    ];

    return (
        <Section id="tipos-residencia" className="bg-neutral-50" spacing="lg">
            <Container>
                <Reveal variant="fade-up" className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
                        Tipos de Residencia
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Existen diversas vías para regularizar tu situación en España. Analizamos tu caso para elegir la más adecuada.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {tipos.map((tipo, i) => (
                        <Reveal key={i} variant="fade-up" delay={i * 100}>
                            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:scale-110 group-hover:bg-green-100 transition-all duration-300">
                                        <tipo.icon size={32} strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-green-700 transition-colors">
                                    {tipo.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed mb-8 flex-grow text-sm">
                                    {tipo.description}
                                </p>

                                {/* Actions */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <Link
                                        href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent(`Hola, me interesa la Residencia por ${tipo.title}.`)}`}
                                        target="_blank"
                                        className="flex-1"
                                    >
                                        <Button
                                            variant="primary"
                                            fullWidth
                                            className="bg-neutral-900 text-white hover:bg-neutral-800"
                                        >
                                            Más info
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
