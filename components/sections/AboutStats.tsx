import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export function AboutStats() {
    const stats = [
        { value: "10+", label: "Años de Experiencia" },
        { value: "5,000+", label: "Trámites Completados" },
        { value: "800+", label: "Visados" },
    ];

    return (
        <Section className="py-12 bg-neutral-50/50 border-y border-neutral-100">
            <Container>
                <Reveal variant="fade-up" duration="slow" className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        Nuestro Compromiso con las Familias Cubanas
                    </h2>
                </Reveal>

                <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" staggerDelay={100}>
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300">
                            <span className="text-5xl md:text-6xl font-black text-brand-solid mb-2 tracking-tight">
                                {stat.value}
                            </span>
                            <span className="text-lg font-medium text-muted-foreground">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </Stagger>
            </Container>
        </Section>
    );
}
