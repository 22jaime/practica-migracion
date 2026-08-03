import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Laptop, PhoneCall, FileCheck, Banknote } from "lucide-react"; // Using laptop for Online, Phone for Consultation, FileCheck for Integral, Banknote for Price

const features = [
    {
        icon: Laptop,
        title: "Tramitación 100% Online",
        description: "Gestiona todo desde tu provincia, sin salir de Cuba y sin tener que viajar a embajadas en otros países."
    },
    {
        icon: PhoneCall,
        title: "Consulta Inicial Gratuita",
        description: "Revisamos tu caso antes de empezar, sin compromiso ni coste."
    },
    {
        icon: FileCheck,
        title: "Gestión Integral del Proceso",
        description: "Gestionamos cada etapa por ti: credenciales, citas en La Habana y presentación ante el Consulado Español."
    },
    {
        icon: Banknote,
        title: "Precio Cerrado y Transparente",
        description: "El coste se define desde el inicio, sin letras pequeñas ni cargos ocultos."
    }
];

export function VisasFeatures() {
    return (
        <Section className="bg-white py-24 md:py-32" spacing="none">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <Reveal variant="fade-up">
                            <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">
                                Asesoría para Visados a España
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mt-4 leading-[1.1]">
                                Gestionamos tu Visado para España desde Cuba
                            </h2>
                            <p className="text-lg text-neutral-600 leading-relaxed mt-6">
                                Desde la consulta inicial hasta la entrega del visado, te acompañamos en cada etapa del proceso directamente en Cuba. Nos encargamos de gestionar credenciales, citas y requisitos consulares para que tú y tu familia no tengan que preocuparse por nada.
                            </p>
                        </Reveal>
                    </div>

                    {/* Right: Features Grid */}
                    <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-8" staggerDelay={100}>
                        {features.map((feature, i) => (
                            <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-100/50 hover:bg-emerald-50/50 transition-colors duration-300">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
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
