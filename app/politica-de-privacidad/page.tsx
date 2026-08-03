import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Política de Privacidad | Gestoría HOL",
    description: "Política de privacidad y protección de datos conforme al RGPD de Gestoría HOL.",
};

export default function PrivacyPage() {
    return (
        <div className="bg-[var(--bg)] min-h-screen pt-32 pb-24">
            <Container>
                {/* Header */}
                <div className="mb-16 max-w-3xl">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-brand-solid transition-colors mb-6 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver al inicio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
                        Política de Privacidad
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

                    {/* Table of Contents (Sticky) */}
                    <div className="hidden lg:block lg:col-span-4 relative">
                        <div className="sticky top-32 space-y-2 p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-4 px-3 uppercase tracking-wider text-xs">Índice de Contenidos</h3>
                            <nav className="flex flex-col space-y-1">
                                <TOCLink href="#responsable">1. Responsable del Tratamiento</TOCLink>
                                <TOCLink href="#finalidad">2. Finalidad del Tratamiento</TOCLink>
                                <TOCLink href="#legitimacion">3. Legitimación</TOCLink>
                                <TOCLink href="#destinatarios">4. Destinatarios de Cesiones</TOCLink>
                                <TOCLink href="#derechos">5. Derechos de los Interesados</TOCLink>
                                <TOCLink href="#procedencia">6. Procedencia de los Datos</TOCLink>
                                <TOCLink href="#seguridad">7. Medidas de Seguridad</TOCLink>
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8 prose prose-neutral prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand-solid prose-strong:text-neutral-900">

                        <section id="intro" className="mb-12">
                            <p>
                                En <strong>Gestoría HOL</strong>, nos comprometemos a proteger la privacidad y la seguridad de sus datos personales.
                                Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información personal de conformidad
                                con el Reglamento General de Protección de Datos (RGPD) de la UE 2016/679 y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales.
                            </p>
                        </section>

                        <section id="responsable" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Responsable del Tratamiento</h2>
                            <p>
                                El responsable del tratamiento de sus datos personales es <strong>Gestoría HOL</strong>.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Identidad:</strong> Gestoría HOL</li>
                                <li><strong>Correo electrónico:</strong> <a href="mailto:info@gestoriahol.com">info@gestoriahol.com</a></li>
                                <li><strong>Teléfono:</strong> 642 066 283</li>
                            </ul>
                        </section>

                        <section id="finalidad" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Finalidad del Tratamiento</h2>
                            <p>Tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Gestión de encargos:</strong> Tramitación y legalización de documentos, solicitud de certificados y gestiones administrativas solicitadas.</li>
                                <li><strong>Atención al cliente:</strong> Gestión de consultas realizadas a través de correo electrónico, formularios web o WhatsApp.</li>
                                <li><strong>Comunicaciones comerciales:</strong> Envío de información sobre nuestros servicios, novedades o cambios legislativos relevantes (siempre que exista consentimiento o relación contractual previa).</li>
                                <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales, fiscales y contables.</li>
                            </ul>
                            <p className="mt-4">
                                Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.
                            </p>
                        </section>

                        <section id="legitimacion" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Legitimación</h2>
                            <p>La base legal para el tratamiento de sus datos es la siguiente:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Ejecución de un contrato:</strong> Para la prestación de los servicios de gestoría solicitados.</li>
                                <li><strong>Consentimiento del interesado:</strong> Para el envío de comunicaciones comerciales o la respuesta a consultas.</li>
                                <li><strong>Interés legítimo:</strong> Para la mejora de nuestros servicios y seguridad de la web.</li>
                                <li><strong>Obligación legal:</strong> Para el cumplimiento de normas fiscales y administrativas aplicables.</li>
                            </ul>
                        </section>

                        <section id="destinatarios" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Destinatarios de Cesiones</h2>
                            <p>
                                Sus datos no se cederán a terceros, salvo obligación legal. Sin embargo, para prestar nuestros servicios, puede ser necesario compartir datos con:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Organismos públicos y administraciones (Consulados, ministerios, registros civiles) necesarios para la tramitación de los expedientes.</li>
                                <li>Proveedores de servicios tecnológicos (hosting, correo electrónico, CRM) encargados del tratamiento, que cumplen con las garantías de seguridad exigidas.</li>
                                <li>Entidades bancarias y pasarelas de pago para la gestión de cobros.</li>
                            </ul>
                        </section>

                        <section id="derechos" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Derechos de los Interesados</h2>
                            <p>Cualquier persona tiene derecho a obtener confirmación sobre si en Gestoría HOL estamos tratando datos personales que les conciernan o no.</p>
                            <p className="mt-2">Las personas interesadas tienen derecho a:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Solicitar el <strong>acceso</strong> a los datos personales relativos al interesado.</li>
                                <li>Solicitar su <strong>rectificación</strong> o <strong>supresión</strong>.</li>
                                <li>Solicitar la <strong>limitación</strong> de su tratamiento.</li>
                                <li>Oponerse al tratamiento.</li>
                                <li>Solicitar la <strong>portabilidad</strong> de los datos.</li>
                            </ul>
                            <p className="mt-4">
                                Puede ejercer sus derechos enviando un correo electrónico a <a href="mailto:info@gestoriahol.com">info@gestoriahol.com</a>, adjuntando copia de su DNI o documento equivalente.
                                Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.
                            </p>
                        </section>

                        <section id="procedencia" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Procedencia de los Datos</h2>
                            <p>
                                Los datos personales que tratamos en Gestoría HOL proceden del propio interesado o de su representante legal debidamente acreditado.
                            </p>
                            <p className="mt-2">Las categorías de datos que se tratan son:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Datos de identificación (nombre, apellidos, DNI/NIE/Pasaporte).</li>
                                <li>Códigos o claves de identificación.</li>
                                <li>Direcciones postales o electrónicas.</li>
                                <li>Información comercial.</li>
                                <li>Datos económicos.</li>
                            </ul>
                            <p className="mt-2">No se tratan datos de categorías especiales, salvo que sea estrictamente necesario para la tramitación de algún expediente específico y con el consentimiento explícito.</p>
                        </section>

                        <section id="seguridad" className="scroll-mt-32 mb-20">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Medidas de Seguridad</h2>
                            <p>
                                Gestoría HOL ha adoptado los niveles de seguridad de protección de los datos personales legalmente requeridos y procura instalar aquellos otros medios y medidas técnicas adicionales a su alcance para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los datos personales facilitados.
                            </p>
                        </section>

                        <hr className="my-12 border-neutral-200" />

                        <div className="bg-neutral-900 text-white p-8 rounded-3xl">
                            <h3 className="font-bold text-xl mb-4">Contacto de Privacidad</h3>
                            <p className="text-neutral-300">
                                Si tiene alguna duda sobre nuestra política de privacidad o sobre cómo gestionamos sus datos, no dude en contactarnos en <a href="mailto:info@gestoriahol.com" className="text-white underline decoration-white/30 hover:decoration-white transition-all">info@gestoriahol.com</a>.
                            </p>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
}

function TOCLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="block px-3 py-2 text-sm text-neutral-500 hover:text-brand-solid hover:bg-neutral-50 rounded-lg transition-all"
        >
            {children}
        </a>
    )
}
