import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { ShieldCheck, Heart, Users } from "lucide-react";

export function WhyChooseUs() {
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-brand-solid" />,
            title: "Experiencia Real y Comprobada",
            description: "Cientos de familias cubanas ya confiaron en nosotros para legalizar sus documentos o conseguir su visado.",
        },
        {
            icon: <Heart className="w-8 h-8 text-brand-solid" />,
            title: "Atención Personalizada y Humana",
            description: "Nos tomamos el tiempo de escuchar cada caso y ofrecer soluciones reales y alcanzables.",
        },
        {
            icon: <Users className="w-8 h-8 text-brand-solid" />,
            title: "Alianzas y Colaboraciones Reales",
            description: "Trabajamos en red con expertos y colaboradores que nos permiten ofrecer un servicio integral y confiable.",
        },
    ];

    return (
        <Section className="bg-white">
            <Container>
                <Reveal variant="fade-up" duration="slow" className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        ¿Por qué escogernos?
                    </h2>
                    <div className="h-1 w-20 bg-brand-solid mx-auto rounded-full" />
                </Reveal>

                <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={100}>
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </Stagger>
            </Container>
        </Section>
    );
}
