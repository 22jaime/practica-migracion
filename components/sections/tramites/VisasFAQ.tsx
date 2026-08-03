import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { FAQItem } from "@/components/ui/faq-item";

const faqs = [
    {
        q: "¿Qué visado necesito para visitar a mi familia en España?",
        a: "Depende del tiempo que quieras estar. Para estancias menores a 90 días, necesitas un Visado de Estancia (Turismo o Visita Familiar). Si eres familiar directo de un ciudadano de la UE y quieres vivir allí, te corresponde el Visado de Familiar de Comunitario."
    },
    {
        q: "¿Cuánto tiempo tarda la respuesta del Consulado?",
        a: "Los tiempos varían. Un visado de turismo suele tardar entre 15 y 45 días. Los visados de residencia o estudios pueden tardar más. Nosotros te mantenemos informado de los plazos actualizados del Consulado en La Habana."
    },
    {
        q: "¿Puedo trabajar en España con un visado de turismo?",
        a: "No. El visado de estancia (turismo) no permite realizar actividades laborales. Para trabajar necesitas un visado de residencia y trabajo o una autorización previa."
    },
    {
        q: "¿Qué pasa si me deniegan el visado?",
        a: "Si deniegan tu visado, podemos analizar la causa y presentar un Recurso de Reposición. Es fundamental revisar bien el expediente antes de presentarlo para minimizar este riesgo, algo que garantizamos con nuestra asesoría."
    },
    {
        q: "¿Tengo que viajar a La Habana para presentar los papeles?",
        a: "Generalmente sí, la presentación es personal en el Consulado de España en La Habana. Nosotros te ayudamos a preparar todo el expediente y conseguir la cita para que solo tengas que ir el día indicado."
    }
];

export function VisasFAQ() {
    return (
        <Section className="bg-neutral-50" spacing="lg">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    {/* Header Column */}
                    <div className="md:col-span-4">
                        <div className="sticky top-24 px-4 md:px-0">
                            <Reveal variant="fade-up" duration="slow">
                                <h2 className="text-3xl md:text-[44px] font-black text-neutral-900 tracking-tight mb-4 leading-[1.1]">
                                    Preguntas Frecuentes sobre Visados
                                </h2>
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                                    Resolvemos tus dudas específicas sobre los trámites consulares.
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
