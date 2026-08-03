import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { FAQItem } from "@/components/ui/faq-item";

const faqs = [
    {
        q: "¿Cuánto tiempo tarda en resolverse la Nacionalidad Española?",
        a: "Los plazos varían según la vía. Por residencia, el Ministerio de Justicia puede tardar entre 1 y 3 años, aunque existe la opción del Recurso Contencioso para agilizarlo (3-6 meses). Por Ley de Memoria Democrática, depende del Consulado o Registro Civil."
    },
    {
        q: "¿Tengo que renunciar a mi nacionalidad cubana?",
        a: "No necesariamente. Cuba y España tienen convenio de doble nacionalidad en ciertos casos, y la Ley de Memoria Democrática permite conservarla. Te asesoramos sobre tu caso particular para que mantengas tus derechos."
    },
    {
        q: "¿Puedo vivir en España mientras se tramita mi nacionalidad?",
        a: "Solo si tienes una autorización de residencia válida. La solicitud de nacionalidad por sí misma no otorga derecho a residir. Si estás en España, debemos asegurarnos de que tu residencia no caduque durante el proceso."
    },
    {
        q: "¿Qué documentos necesito para la Ley de Memoria Democrática?",
        a: "Necesitas acreditar el vínculo con el familiar español (abuelo/a o padre/madre) mediante certificados de nacimiento, matrimonio y defunción, debidamente legalizados y apostillados. Nosotros nos encargamos de revisar y legalizar toda tu documentación."
    },
    {
        q: "¿Mis hijos también obtienen la nacionalidad?",
        a: "Si obtienes la nacionalidad, tus hijos menores de edad pueden optar a ella por la vía de 'Opción'. Es un trámite adicional que también gestionamos para garantizar el futuro de tu familia."
    }
];

export function NacionalidadFAQ() {
    return (
        <Section className="bg-neutral-50" spacing="lg">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    {/* Header Column */}
                    <div className="md:col-span-4">
                        <div className="sticky top-24 px-4 md:px-0">
                            <Reveal variant="fade-up" duration="slow">
                                <h2 className="text-3xl md:text-[44px] font-black text-neutral-900 tracking-tight mb-4 leading-[1.1]">
                                    Preguntas Frecuentes sobre Nacionalidad
                                </h2>
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                                    Aclaramos tus dudas sobre la adquisición de la ciudadanía española.
                                </p>
                            </Reveal>
                        </div>
                    </div>

                    {/* Questions Column */}
                    <div className="md:col-span-8 space-y-4">
                        {faqs.map((faq, i) => (
                            <Reveal key={i} delay={i * 50} variant="fade-up">
                                <FAQItem question={faq.q} answer={faq.a} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
