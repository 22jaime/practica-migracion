import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Phone, Mail, ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL_BASE } from "@/lib/constants";

// Inline WhatsApp Icon for consistency
function WhatsAppIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>;
}

export function ContactMethods() {
    return (
        <Section className="pb-24 -mt-10 md:-mt-20 relative z-20">
            <Container>
                <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start" staggerDelay={100}>

                    {/* Card 1: Phone */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                        <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 text-neutral-900 group-hover:scale-110 transition-transform duration-300">
                            <Phone className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-neutral-900">Llámanos</h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                            Estamos disponibles de Lunes a Viernes de 9:00 a 13:00 y 15:00 a 18:00.
                        </p>
                        <a href="tel:+34642066283" className="inline-flex items-center gap-2 font-bold text-lg text-neutral-900 hover:text-brand-solid transition-colors">
                            +34 642 066 283
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Card 2: WhatsApp (Premium / Prominent) */}
                    <div className="relative md:-mt-12 md:mb-12">
                        <div className="absolute inset-0 bg-[#25D366] blur-2xl opacity-20 rounded-full" />
                        <a
                            href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, tengo una consulta.")}`}
                            target="_blank"
                            className="relative block bg-gradient-to-br from-[#20c75e] to-[#128C7E] p-8 rounded-[2.5rem] shadow-2xl text-white overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
                        >
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-8 border border-white/20">
                                    Más Rápido
                                </div>

                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-lg text-[#128C7E] group-hover:rotate-12 transition-transform duration-500 cursor-pointer">
                                    <WhatsAppIcon className="w-10 h-10" />
                                </div>

                                <h3 className="text-3xl font-black mb-3">WhatsApp</h3>
                                <p className="text-white/90 mb-8 font-medium">
                                    Respuesta inmediata. Envíanos un audio o mensaje escrito.
                                </p>

                                <span className="w-full py-4 rounded-xl bg-white text-[#128C7E] font-black text-lg shadow-lg group-hover:bg-[#f0f0f0] transition-colors flex items-center justify-center gap-2">
                                    Escribir Ahora
                                    <MessageCircle className="w-5 h-5 fill-current" />
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Card 3: Email */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                        <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 text-neutral-900 group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-neutral-900">Email</h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                            Envíanos tu documentación o dudas detalladas por correo.
                        </p>
                        <a href="mailto:info@gestoriahol.com" className="inline-flex items-center gap-2 font-bold text-lg text-neutral-900 hover:text-brand-solid transition-colors">
                            info@gestoriahol.com
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                </Stagger>
            </Container>
        </Section>
    );
}
