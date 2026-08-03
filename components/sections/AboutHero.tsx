import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";

export function AboutHero() {
    return (
        <Section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[var(--bg)] overflow-hidden">
            <Container>
                <div className="max-w-4xl mx-auto text-center">

                    <Reveal variant="fade-up" duration="slow">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                            Especialistas en legalización de documentos y trámites migratorios entre <span className="text-brand-solid">Cuba y España</span>
                        </h1>
                    </Reveal>

                    <Reveal variant="fade-up" duration="slow" delay={100}>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Nuestro principal objetivo es ofrecer a nuestros clientes información clara y transparente, garantizando un servicio de excelencia que les permita realizar sus trámites de manera sencilla, exitosa, rápida y económica.
                        </p>
                    </Reveal>

                </div>
            </Container>

            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-[-1]">
                <div className="absolute top-20 left-1/4 w-64 h-64 bg-brand-solid/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-50" />
            </div>
        </Section>
    );
}
