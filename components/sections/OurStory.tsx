import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import Image from "next/image";

export function OurStory() {
    return (
        <Section className="bg-neutral-50 overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <Reveal variant="fade-up" duration="slow">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                            Más de 10 años ayudando a cubanos a cumplir sus sueños en España
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                En <span className="font-semibold text-brand-solid">Gestoría HOL</span> llevamos más de una década acompañando a cubanos en sus trámites migratorios para lograr la reunificación familiar, la regularización legal y la obtención de la nacionalidad española.
                            </p>
                            <p>
                                Sabemos que cada caso es único, por eso ofrecemos un servicio cercano, claro y accesible desde Cuba.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal variant="scale-in" duration="slow" delay={200} className="relative">
                        {/* Team Image */}
                        <div className="relative w-full aspect-[4/5] max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                            <Image
                                src="/images/team-hol.jpeg"
                                alt="Equipo Gestoría HOL"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Reveal>

                </div>
            </Container>
        </Section>
    );
}
