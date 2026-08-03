import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";

export function AlliesAndVision() {
    return (
        <Section className="bg-[var(--bg)] pb-24">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                    {/* Allies & Services */}
                    <Reveal variant="fade-up" duration="slow" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Nuestros Aliados y Servicios</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Ofrecemos una gestión integral, desde la legalización de documentos en Cuba, hasta la preparación de expedientes para visados o nacionalidades. Todo 100% online, para que puedas hacer cada trámite sin salir de casa.
                        </p>
                    </Reveal>

                    {/* Vision */}
                    <Reveal variant="fade-up" duration="slow" delay={100} className="bg-neutral-900 text-white p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white mb-6 relative z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10">Nuestra Visión</h3>
                        <p className="text-neutral-300 leading-relaxed relative z-10">
                            Nuestro objetivo es facilitar el camino de quienes buscan una nueva vida en España, asegurando un servicio cercano, profesional y libre de errores, donde cada familia cubana se sienta acompañada en cada paso.
                        </p>
                    </Reveal>

                </div>
            </Container>
        </Section>
    );
}
