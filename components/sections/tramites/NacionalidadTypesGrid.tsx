import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { WHATSAPP_URL_BASE } from "@/lib/constants";
import { Baby, HeartHandshake, Users, ScrollText } from "lucide-react";

export function NacionalidadTypesGrid() {
    const tipos = [
        {
            title: "Origen",
            description: "Se otorga a los nacidos en España (salvo excepciones), hijos de españoles nacidos fuera del país, y a los hijos de españoles nacidos en el extranjero que pueden optar por ella.",
            icon: Baby
        },
        {
            title: "Matrimonio (Residencia)",
            description: "Se obtiene tras vivir legalmente en España durante un tiempo determinado (1 año si está casado con español/a), con requisitos de residencia continua e integración.",
            icon: HeartHandshake
        },
        {
            title: "Familiar Unión Europea",
            description: "Los extranjeros casados con un ciudadano español pueden solicitarla después de residir legalmente en España durante un año.",
            icon: Users
        },
        {
            title: "Ley de Memoria Democrática",
            description: "Si alguno de tus padres o abuelos es ciudadano español, podrías tener derecho a obtener la ciudadanía española, siempre y cuando cumplas los requisitos establecidos.",
            icon: ScrollText
        }
    ];

    return (
        <Section id="tipos-nacionalidad" className="bg-neutral-50" spacing="lg">
            <Container>
                <Reveal variant="fade-up" className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
                        Tipos de Nacionalidad Española
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        La ciudadanía española confiere derechos en España y la UE. Su adquisición puede realizarse por diversas vías.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {tipos.map((tipo, i) => (
                        <Reveal key={i} variant="fade-up" delay={i * 100}>
                            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:bg-red-100 transition-all duration-300">
                                        <tipo.icon size={32} strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-red-700 transition-colors">
                                    {tipo.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed mb-8 flex-grow">
                                    {tipo.description}
                                </p>

                                {/* Actions */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <Link
                                        href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent(`Hola, me interesa la Nacionalidad por ${tipo.title}.`)}`}
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
