import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Términos y Condiciones | Gestoría HOL",
    description: "Cláusulas de uso, política de privacidad y condiciones de servicio de Gestoría HOL.",
};

export default function TermsPage() {
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
                        Términos y Condiciones
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
                                <TOCLink href="#introduccion">Introducción</TOCLink>
                                <TOCLink href="#declaracion">Declaración de Partes</TOCLink>
                                <TOCLink href="#proposito">Propósito y Alcance</TOCLink>
                                <TOCLink href="#politica-uso">Política de Uso</TOCLink>
                                <TOCLink href="#intermediario">Actuación como Intermediario</TOCLink>
                                <TOCLink href="#obligaciones">Obligaciones del Interesado</TOCLink>
                                <TOCLink href="#condiciones">Condiciones de Trámites</TOCLink>
                                <TOCLink href="#responsabilidad">Responsabilidad</TOCLink>
                                <TOCLink href="#pagos">Pagos y Envíos</TOCLink>
                                <TOCLink href="#desistimiento">Desistimiento y Reembolsos</TOCLink>
                                <TOCLink href="#privacidad">Privacidad y Datos</TOCLink>
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8 prose prose-neutral prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand-solid prose-strong:text-neutral-900">

                        <section id="introduccion" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Introducción</h2>
                            <p>
                                El acceso y la utilización de los servicios ofrecidos en el sitio web “gestoriahol.com” se rigen por las siguientes Cláusulas de Uso, que establecen los términos bajo los cuales el proveedor pone a disposición dichos servicios. Dichas condiciones, junto con cualquier otro aviso legal o modificación que resulte relevante, estarán permanentemente accesibles en el portal, ya sea mediante su publicación directa en la web o a través de comunicaciones en otras plataformas pertenecientes a GESTORIA HOL.
                            </p>
                            <p>
                                Al descargar contenido, registrarse en la aplicación o completar cualquiera de los formularios dispuestos, el usuario manifiesta haber leído, comprendido y aceptado en su totalidad los términos aquí expuestos, así como la Política de Privacidad, configurándose en conjunto como el Acuerdo de Uso.
                            </p>
                        </section>

                        <section id="declaracion" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Declaración de Partes</h2>

                            <h3 className="text-xl font-semibold mb-2">Titular de la WEB</h3>
                            <p>
                                Gestoría Hol es la entidad propietaria de este sitio web. Todos nuestros datos se encuentran disponibles en nuestra plataforma de manera completamente transparente. Para obtener más detalles, consulte nuestra Política de Privacidad.
                            </p>
                            <p>
                                Si surge cualquier duda, comentario o problema relacionado con el funcionamiento de Gestoria Hol, el usuario puede comunicarse con nuestro equipo a través del correo <a href="mailto:info@gestoriahol.com">info@gestoriahol.com</a> o llamando al teléfono 642 066 283.
                            </p>

                            <h3 className="text-xl font-semibold mb-2 mt-6">Usuario</h3>
                            <p>A efectos del presente acuerdo, se entenderá por “usuario” a cualquier persona que interactúe con nuestros servicios:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Quienes se inscriban en el portal gestoriahol.com, manifestando así su conformidad con estos términos.</li>
                                <li>Aquellos que, para solicitar alguno de nuestros servicios, completen y envíen formularios disponibles ya sea en este sitio web o a través de nuestro proveedor CRM Bitrix24.es, aceptando en el acto las condiciones aquí establecidas.</li>
                                <li>Las personas que requieran nuestros servicios mediante los canales oficiales de comunicación, como WhatsApp o Gmail, al expresar su consentimiento con las presentes disposiciones.</li>
                                <li>Quienes acudan de manera presencial a nuestras oficinas para solicitar nuestros servicios y, de igual modo, acepten estos términos.</li>
                            </ul>
                        </section>

                        <section id="proposito" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Propósito y Alcance</h2>
                            <p>
                                Este documento tiene como objetivo establecer las pautas que regulan el uso de la plataforma digital www.gestoria.com, la cual opera en línea. Para cualquier consulta o aclaración, le invitamos a ponerse en contacto con nosotros a través del correo: <a href="mailto:info@gestoriahol.com">info@gestoriahol.com</a>.
                            </p>
                            <p>
                                El ingreso y la participación en nuestro sitio, así como el uso de los recursos, productos y servicios ofrecidos, se realizan de forma libre y voluntaria, lo que implica la aceptación sin reservas de las condiciones aquí expuestas, según la versión vigente. Cabe destacar que el acceso a ciertos servicios puede requerir el cumplimiento de requisitos adicionales, y GESTORIA HOL se reserva el derecho de actualizar o modificar estas condiciones en cualquier momento.
                            </p>
                            <p>
                                Al utilizar esta plataforma, el usuario confirma haber leído y comprendido las normativas de uso, comprometiéndose a emplearla de manera responsable y conforme a la ley. En caso de incumplimiento, se adoptarán las medidas necesarias para restringir o cancelar el acceso a nuestros servicios.
                            </p>
                            <p>
                                Además, para facilitar la correcta prestación de nuestros servicios, el usuario se compromete a proporcionar la información necesaria para verificar su identidad cuando sea requerida.
                            </p>
                            <p>
                                Finalmente, el usuario declara ser mayor de edad y contar con la capacidad legal para asumir compromisos contractuales, responsabilizándose de manera plena por sus transacciones y actividades relacionadas con GESTORIA HOL.
                            </p>
                        </section>

                        <section id="politica-uso" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Política de Uso de los Servicios</h2>
                            <p>
                                El usuario se compromete a utilizar la plataforma únicamente para fines lícitos, absteniéndose de efectuar transacciones comerciales que infrinjan la normativa aplicable. GESTORIA HOL se reserva el derecho de solicitar la documentación o información que considere necesaria para confirmar el uso correcto y legítimo de sus servicios.
                            </p>
                            <p>
                                Además, el usuario acepta no intentar, ni facilitar a terceros, la manipulación o eludir las medidas de seguridad, el código fuente o cualquier componente del software que forma parte integral del servicio. Queda expresamente prohibido interferir en la administración o gestión de la información y recursos proporcionados.
                            </p>
                            <p>
                                La implementación técnica del servicio, incluido el código fuente, no otorga al usuario derechos para emplear comercial o promocionalmente los productos o tecnologías que sustentan la prestación del servicio por parte de GESTORIA HOL.
                            </p>
                        </section>

                        <section id="intermediario" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Actuación como Intermediario</h2>
                            <p>
                                Gestoría HOL es una entidad especializada en la tramitación y legalización de documentos, actuando como intermediario entre los solicitantes y los organismos oficiales encargados de la expedición de documentos personales y administrativos de interés. Nuestra labor se centra en facilitar la obtención de certificados, legalizaciones, visados y otros trámites esenciales para ciudadanos cubanos residentes en el extranjero, garantizando un servicio eficiente.
                            </p>
                            <p>
                                Como entidad independiente, Gestoría HOL no mantiene afiliaciones políticas, sociales o contractuales con otras organizaciones, asegurando así un servicio imparcial y orientado exclusivamente a las necesidades de sus clientes.
                            </p>
                            <p>
                                Nuestra misión es simplificar y agilizar los procesos burocráticos para aquellas personas que, debido a su residencia fuera de Cuba, enfrentan dificultades para realizar estos trámites por sí mismas.
                            </p>

                            <h3 className="text-xl font-semibold mb-2 mt-6">Comunicación del cliente</h3>
                            <p>
                                La comunicación entre el interesado y Gestoría HOL será respetuosa y planificada, previa cita en el horario laboral establecido para formalizar el acuerdo, seguimiento y aclaraciones, así como para establecer pagos.
                            </p>
                        </section>

                        <section id="obligaciones" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Obligaciones del Interesado</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>El interesado debe leer y aceptar los términos y condiciones descritos por Gestoría HOL mediante firma escrita o digital.</li>
                                <li>El interesado debe aportar datos correctos para las certificaciones a obtener y subsanar errores personalmente.</li>
                            </ul>
                        </section>

                        <section id="condiciones" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Condiciones de Uso y Prestación de Servicios</h2>

                            <h3 className="text-xl font-semibold mb-2">Solicitud, obtención y legalización de documentos cubanos</h3>
                            <p>
                                Nuestras gestiones se centran en la solicitud de documentos emitidos por el Registro del Estado Civil cubano, tales como certificados de nacimiento, matrimonio, soltería, divorcio, defunción, vigencia de matrimonio, estado conyugal, entre otros. Además, gestionamos la obtención de certificados de antecedentes penales y documentos académicos o titulaciones según proceda.
                            </p>
                            <p>
                                Gestoría Hol actúa como intermediario en la gestión y tramitación de documentos, pero no tiene facultades para expedir, modificar, legalizar, corregir o subsanar errores en documentos en nombre propio. Todas estas acciones dependen exclusivamente de las instituciones oficiales competentes y solo pueden realizarse bajo su autorización. Nuestra labor se limita a asesorar y gestionar los trámites en nombre de los usuarios, siempre dentro del marco legal y de acuerdo con los requisitos establecidos por las autoridades correspondientes.
                            </p>

                            <h3 className="text-xl font-semibold mb-2 mt-6">Legitimidad de los documentos</h3>
                            <p>
                                Para garantizar el correcto desarrollo de cualquier trámite, es esencial que los documentos presentados sean auténticos y emitidos por instituciones reconocidas, conforme a la legislación vigente de cada país. La autenticidad de un documento se refiere a su legitimidad y veracidad, asegurando que ha sido expedido por la autoridad competente y que su contenido es fidedigno. La legalidad implica que el documento cumple con todas las normativas y requisitos establecidos por el ordenamiento jurídico correspondiente.
                            </p>
                            <p>
                                La entrega de documentación incorrecta o falsificada impedirá a GESTORIA HOL prestar el servicio solicitado. Además, conforme a nuestra política de privacidad, notificaremos esta situación a las autoridades pertinentes.
                            </p>
                        </section>

                        <section id="responsabilidad" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Responsabilidad de Gestoría HOL</h2>
                            <p>
                                Gestoría HOL no se responsabiliza por la tramitación de documentos cuya autenticidad o legalidad sea cuestionable. El solicitante es responsable de la veracidad y legitimidad de los documentos a tramitar.
                            </p>

                            <h3 className="text-xl font-semibold mb-2 mt-6">Requisitos y condiciones para la gestión de trámites y documentos</h3>
                            <p>
                                Para la correcta ejecución de los servicios, el usuario tiene la obligación de proporcionar a GESTORÍA HOL toda la documentación y datos requeridos. Sin la totalidad de la información solicitada, no se podrá proceder con la gestión del servicio, y la empresa se reserva el derecho de no continuar con el trámite.
                            </p>
                            <p>
                                En caso de que el usuario entregue información errónea o documentos falsificados, GESTORÍA HOL no podrá completar el servicio solicitado y notificará la situación a las autoridades competentes conforme a su política de privacidad.
                            </p>

                            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 my-6">
                                <h4 className="font-bold mb-2">Tramitación de Múltiples Documentos</h4>
                                <p className="text-sm">
                                    Cuando un usuario solicita varios documentos a su nombre, es importante saber que el Ministerio de Justicia de Cuba (MINJUS) procesa cada documento de manera independiente. Esto puede generar diferencias en los tiempos de entrega, que en algunos casos superan el mes entre la recepción de un documento y otro.
                                </p>
                                <p className="text-sm mt-2">
                                    GESTORÍA HOL no tiene la facultad de agilizar los procesos en estos ministerios, ya que la gestión y los tiempos de respuesta dependen exclusivamente de dichas instituciones. En caso de que un documento pierda validez debido a la demora en la legalización de otro, GESTORÍA HOL asumirá la responsabilidad únicamente sobre el documento afectado por esta situación.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold mb-2 mt-6">Conformación de Expedientes</h3>
                            <p>
                                Gestoría HOL prestará el servicio de conformación de expedientes siempre que el cliente aporte todos los datos necesarios.
                            </p>
                            <p>
                                Cuando el cliente contrate uno de nuestros servicios, debe tener en cuenta que no debe compartir los datos del proceso con otros gestores, ya que esto podría generar errores en el sistema de citas, solicitudes u otros procedimientos.
                            </p>
                            <p>
                                Es muy importante que los clientes revisen a fondo toda la información proporcionada, ya que Gestoría HOL no será responsable de una revisión deficiente por parte del cliente.
                            </p>
                            <p>
                                Gestoría HOL se guiará por la información disponible en la página web del consulado correspondiente para la conformación de los expedientes.
                            </p>
                            <p>
                                No nos hacemos responsables de la aprobación o rechazo del trámite solicitado, ni de la demora en su resolución. Estas decisiones dependen exclusivamente de las autoridades correspondientes del Consulado de España en La Habana, Cuba, u otro organismo pertinente.
                            </p>
                        </section>

                        <section id="pagos" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Pagos y Envíos</h2>

                            <h3 className="text-xl font-semibold mb-2">Condiciones de Pago e Inicio del Servicio</h3>
                            <p>
                                El servicio solicitado solo se iniciará una vez que el usuario haya efectuado el pago correspondiente, ya sea parcial o total. Esto significa que el proceso comenzará únicamente cuando el pago se haya reflejado en la cuenta, y no en el momento en que se realice la solicitud del trámite o la entrega de documentos.
                            </p>

                            <h4 className="font-bold mt-4 mb-2">Formas de Pagos disponibles</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Pago en efectivo:</strong> Disponible en ubicaciones específicas donde se pueda recibir directamente.</li>
                                <li><strong>Transferencia bancaria internacional:</strong> Opción segura para clientes en cualquier país.</li>
                                <li><strong>Bizum:</strong> Método rápido y sencillo para clientes en España.</li>
                                <li><strong>Pagos alternativos:</strong> Incluye pagos en cajeros automáticos, transferencias postales u otras opciones acordadas previamente.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-2 mt-8">Empresa de Transporte y Modalidad de Envío</h3>
                            <p>
                                El servicio de envío de documentos se realiza a través de <strong>Correos</strong>, empresa pública de servicios postales, mediante carta certificada con número de seguimiento incluido. Esta es la modalidad estándar incluida en el precio del servicio.
                            </p>
                            <p>
                                Si el cliente desea que el envío se realice a través de otra empresa de transporte o mensajería privada, esto conllevará un <strong>coste adicional</strong> que variará según la empresa elegida y el destino. En ningún caso Gestoría HOL asumirá dicho sobrecoste de forma automática.
                            </p>

                            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 my-6">
                                <h4 className="font-bold mb-2">📞 Consulta antes de solicitar</h4>
                                <p className="text-sm">
                                    Antes de solicitar el servicio, le recomendamos consultar con nuestro equipo para recibir información actualizada sobre las opciones de envío disponibles y sus precios. Puede contactarnos por <strong>WhatsApp</strong> o llamando al <strong>642 066 283</strong>.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold mb-2 mt-8">Compromiso de Entrega y Política de Reembolso</h3>
                            <p>
                                Una vez recibido el pago completo por el servicio contratado, nos comprometemos a realizar el envío de los documentos correspondientes en un plazo máximo de <strong>40 días calendario</strong>.
                            </p>
                            <p>
                                <strong>Política de reembolso:</strong> En caso de que no realicemos el envío dentro de este plazo y sea comprobable que no se ha generado ningún número de seguimiento ni evidencia de despacho, el cliente tendrá derecho a solicitar el reembolso total del monto abonado.
                            </p>

                            <div className="bg-red-50 text-red-900 p-6 rounded-2xl border border-red-100 my-6">
                                <h4 className="font-bold mb-2">Exclusiones Importantes</h4>
                                <p className="text-sm">Esta garantía de reembolso no aplica en los siguientes casos:</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                                    <li>Si el envío fue realizado dentro del plazo, pero se vio afectado por errores en la dirección proporcionada por el cliente.</li>
                                    <li>Si el destinatario no se encontraba en el lugar al momento de la entrega.</li>
                                    <li>Si hubo retrasos atribuibles a la agencia de transporte o circunstancias fuera de nuestro control (como eventos climáticos, huelgas u otras eventualidades logísticas).</li>
                                    <li>Si el cliente no respondió a solicitudes necesarias para completar o confirmar el envío (por ejemplo, validación de identidad, datos de contacto, etc.)</li>
                                </ul>
                            </div>

                        </section>

                        <section id="desistimiento" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Desistimiento y Reembolsos</h2>

                            <h3 className="text-xl font-semibold mb-2">Situaciones en las que No Procede el Reembolso</h3>
                            <ol className="list-decimal pl-5 space-y-1">
                                <li>Desistimiento fuera del plazo de 24 horas.</li>
                                <li>Retraso de documentos por causas ajenas a Gestoría HOL.</li>
                                <li>Abandono del trámite por parte del interesado.</li>
                                <li>Si el cliente adquiere el documento por otro medio diferente a Gestoría HOL.</li>
                                <li>Cambios legislativos o en el documento inicial.</li>
                                <li>Caso fortuito o fuerza mayor.</li>
                                <li>Insolvencia del interesado para continuar el pago final.</li>
                            </ol>

                            <h3 className="text-xl font-semibold mb-2 mt-6">Condiciones para la Aprobación de Reembolsos</h3>
                            <ol className="list-decimal pl-5 space-y-1">
                                <li>Cancelación dentro de las 24 horas posteriores al pago inicial, sin necesidad de justificación y sin penalizaciones, siempre y cuando el servicio no haya sido proporcionado.</li>
                                <li>Documentos vencidos: Si Gestoría HOL entrega un documento caducado, el cliente podrá elegir entre recibir un reembolso completo o solicitar un nuevo documento del mismo tipo sin costo adicional.</li>
                                <li>Pérdida o extravío de documentos, siempre y cuando la responsabilidad recaiga en Gestoría HOL.</li>
                                <li>Errores o equivocaciones en los documentos, siempre que sean responsabilidad de Gestoría HOL.</li>
                            </ol>
                        </section>

                        <section id="privacidad" className="scroll-mt-32 mb-20">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Privacidad y Datos</h2>
                            <h3 className="text-xl font-semibold mb-2">Confidencialidad</h3>
                            <p>
                                Este mensaje y sus archivos adjuntos están dirigidos exclusivamente a su destinatario, pudiendo contener información confidencial sometida a secreto profesional. No está permitida su reproducción o distribución sin la autorización expresa de Gestoría HOL. Si usted no es el destinatario final, por favor, elimínelo e infórmenos por esta vía.
                            </p>

                            <h3 className="text-xl font-semibold mb-2 mt-6">Protección de Datos</h3>
                            <p>
                                De acuerdo con la LOPD, le informamos que sus datos personales y dirección de correo electrónico forman parte de un fichero cuyo responsable es Gestoría HOL. La finalidad del fichero es la gestión comercial y el envío de comunicaciones comerciales sobre nuestros servicios.
                            </p>
                        </section>

                        <hr className="my-12 border-neutral-200" />

                        <div className="bg-neutral-900 text-white p-8 rounded-3xl">
                            <h3 className="font-bold text-xl mb-4">Aceptación de los Términos</h3>
                            <p className="text-neutral-300">
                                IMPORTANTE: Al realizar el pago, usted está expresando su conformidad con los términos y condiciones establecidos. En caso de no estar de acuerdo o sentir desconfianza, le recomendamos no proceder con el pago. Una vez completada la transacción, se entenderá que ha aceptado plenamente los términos y condiciones mencionados anteriormente.
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
