import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Briefcase, Plane, Heart, Scale } from "lucide-react";

const features = [
    {
        icon: Briefcase,
        title: "Permiso de Trabajo",
        description: "Casi todas las residencias que tramitamos llevan aparejada la autorización para trabajar legalmente en España."
    },
    {
        icon: Plane,
        title: "Libertad de Movimiento",
        description: "Con tu tarjeta de residencia podrás viajar libremente por todo el espacio Schengen sin necesidad de visado."
    },
    {
        icon: Heart,
        title: "Reagrupación Familiar",
        description: "Tener residencia legal es el primer paso para poder traer a tus familiares contigo a España."
    },
    {
        icon: Scale,
        title: "Seguridad Jurídica",
        description: "Tu estatus legal estará garantizado, permitiéndote firmar contratos, alquilar vivienda y acceder a servicios públicos."
    }
];

export function ResidenciaFeatures() {
    return (
        <Section className="bg-white py-24 md:py-32" spacing="none">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <Reveal variant="fade-up">
                            <span className="text-green-600 font-bold uppercase tracking-wider text-sm">
                                Beneficios de la Residencia
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mt-4 leading-[1.1]">
                                Vivir legalmente en España te abre todas las puertas.
                            </h2>
                            <p className="text-lg text-neutral-600 leading-relaxed mt-6">
                                La irregularidad limita tus derechos y oportunidades. Obtener una autorización de residencia no solo te da tranquilidad, sino que te permite construir un futuro sólido, acceder al mercado laboral formal y disfrutar de plena libertad de movimiento.
                            </p>
                        </Reveal>
                    </div>

                    {/* Right: Features Grid */}
                    <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-8" staggerDelay={100}>
                        {features.map((feature, i) => (
                            <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-100/50 hover:bg-green-50/50 transition-colors duration-300">
                                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-700">
                                    <feature.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Stagger>
                </div>
            </Container>
        </Section>
    );
}
