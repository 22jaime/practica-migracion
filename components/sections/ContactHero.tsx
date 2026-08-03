import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";

export function ContactHero() {
    return (
        <Section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[var(--bg)] overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-brand-solid/5 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[var(--neon-yellow)]/5 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <Reveal variant="fade-up" duration="slow">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-solid/10 text-brand-solid text-sm font-bold tracking-wide uppercase mb-6 border border-brand-solid/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-solid opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-solid"></span>
                            </span>
                            Soporte 24/7
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-8 leading-[1.05]">
                            Estamos aquí para <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-solid to-[var(--neon-yellow)]">ayudarte a avanzar</span>
                        </h1>
                    </Reveal>

                    <Reveal variant="fade-up" duration="slow" delay={100}>
                        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                            ¿Tienes dudas sobre tu trámite? Contáctanos por el medio que prefieras y te responderemos lo antes posible.
                        </p>
                    </Reveal>

                </div>
            </Container>
        </Section>
    );
}
