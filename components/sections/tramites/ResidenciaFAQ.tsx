import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/Reveal";
import { FAQItem } from "@/components/ui/faq-item";

const faqs = [
    {
        q: "¿Puedo trabajar con mi tarjeta de residencia?",
        a: "Depende del tipo de residencia. El Arraigo Social y Laboral, así como la Tarjeta Comunitaria, autorizan a trabajar (por cuenta ajena o propia). La residencia no lucrativa no permite trabajar, aunque sí se pueden recibir ingresos pasivos."
    },
    {
        q: "¿Cuánto tiempo tengo que llevar en España para solicitar el arraigo?",
        a: "Para el Arraigo Social se requieren 3 años de permanencia continuada. Para el Arraigo Laboral y el de Formación, se exigen 2 años. En el Arraigo Familiar no se exige tiempo previo si eres hijo de español de origen o padre de menor español."
    },
    {
        q: "¿Qué pasa si tengo antecedentes penales?",
        a: "Tener antecedentes penales en España o en tu país de origen durante los últimos 5 años es motivo de denegación. Es fundamental cancelarlos antes de iniciar cualquier trámite de extranjería."
    },
    {
        q: "¿Puedo traer a mi familia conmigo?",
        a: "Sí, una vez tengas tu residencia y cumplas ciertos requisitos económicos y de vivienda, puedes solicitar la reagrupación familiar para tu cónyuge, hijos menores y ascendientes a cargo."
    },
    {
        q: "¿Cuánto tardan en aprobar la residencia?",
        a: "El plazo legal es de 3 meses, pero en la práctica puede variar según la Oficina de Extranjería de tu provincia. Nosotros hacemos seguimiento constante de tu expediente para evitar retrasos innecesarios."
    }
];

export function ResidenciaFAQ() {
    return (
        <Section className="bg-neutral-50" spacing="lg">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    {/* Header Column */}
                    <div className="md:col-span-4">
                        <div className="sticky top-24 px-4 md:px-0">
                            <Reveal variant="fade-up" duration="slow">
                                <h2 className="text-3xl md:text-[44px] font-black text-neutral-900 tracking-tight mb-4 leading-[1.1]">
                                    Preguntas Frecuentes sobre Residencia
                                </h2>
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                                    Resolvemos tus dudas sobre cómo vivir legalmente en España.
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
