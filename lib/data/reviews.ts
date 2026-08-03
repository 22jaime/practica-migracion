export interface Review {
    name: string;
    text: string;
    stars: number;
    date: string;
    photo?: string;
    source?: 'google' | 'other';
}

export const REVIEWS: Review[] = [
    {
        name: "Chabely Valdés Sánchez",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocL3OgBN_q-ewT6-jN7O-Ee03egovrGidlcA72jox1VEkuMARQ=w36-h36-p-rp-mo-br100",
        text: "Quiero expresarle mi más profundo agradecimiento a esta gestoria por su ayuda para poder obtener a tiempo el documento que me fue requerido y continuar con el curso de mi expediente, lo que me permite seguir en este país y continuar trabajando. No existen palabras suficientes para expresar lo agradecida que me siento, ni dinero que pueda compensar lo que ha hecho por mí que ha sido mucho más que un simple servicio, ha sido una disposición constante, una implicación genuina ante una situación que parecía imposible. Ese tipo de apoyo es invaluable. Gracias de corazón por su profesionalidad y, sobre todo, por su humanidad.",
        stars: 5,
        date: "Hace un mes",
        source: "google"
    },
    {
        name: "Claudia Rivero",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjVRUVsFA7KZ-SaBkQZLJE5e169994CnOLcrxvuLWUWTNl8XjRYh=w36-h36-p-rp-mo-br100",
        text: "Hola , soy cubana y quedé encantada con el servicio de esta gestoría , la rapidez , la seguridad , en todo momento te dan asistencia y seguimiento de tu proceso , la verdad muy muy recomendable, y mas en un país donde es tan complicado solucionar algo por los conflictos sociales que existen! Ni aquí en España se hace un proceso tan rápido . Hay cosas que ni pagando se hacen tan rápido , la verdad que nunca pensé que en Cuba existiera una agencia tan profesional. Ole chicos por el trabajo que hacéis !\n100 por 100 recomendable .\nMuchassss GRACIAS",
        stars: 5,
        date: "Hace un mes",
        source: "google"
    },
    {
        name: "Raidamys Hernandez",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocLf65dpU6SxOFEzEfdsbAkgSmw7yyhZlyPceACjpPsUU0nrLA=w36-h36-p-rp-mo-br100",
        text: "Estoy muy agradecida por la rapidez en sus servicios de legalización, el trato muy bueno y profesional, siempre con la explicación detallada cuando fué necesario,los recomiendo mucho y volvería a solicitar sus servicios si fuese necesario. Gracias!",
        stars: 5,
        date: "Hace 2 meses",
        source: "google"
    },
    {
        name: "lieslies hernandez",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUOPCqxz3GMKr0xf-6Jx5Z57sSn9CWd2QtxNqihKD9s0sQ33DSr=w36-h36-p-rp-mo-br100",
        text: "Una gestión excepcional la de esta gestoría. Soy cubano y les pedí mi certificado de nacimiento a Cuba. Pagué 140 euros de entrada y apenas dos meses después ya tengo el documento. Me mantubieron informado por correo y WhatsApp durante todo el proceso de búsqueda en los registros de Cuba que es un desastre. Teniendo en cuenta el estado actual de Cuba y su caos, creo que no lo podían hacer mejor. Rápidos y fiables al 100%. Soy un cliente satisfecho.",
        stars: 5,
        date: "Hace un mes",
        source: "google"
    },
    {
        name: "Hilda",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjVCcyJlK2ZwfZrqn9IR9FVz0ZyRk-XRQIumBsnrjCWSChcAV74cQw=w36-h36-p-rp-mo-ba2-br100",
        text: "Muy agradecida por el servicio recibido por parte de la empresa Gestoría Hol. Magnífica atención y asesoría a cada consulta que hice. La documentación perfecta. Recomiendo esta empresa por la excelente labor que hacen. Saludos.",
        stars: 5,
        date: "Hace 4 meses",
        source: "google"
    },
    {
        name: "Alvaro Andaluz Alcazar",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJPqHtVFFCAuoQrdxfZhdIPA8g6vQM--2D99xBAa7HIuU466AQ=w36-h36-p-rp-mo-ba3-br100",
        text: "Esta gestoría no solo me ha facilitado la vida con los trámites, sino que me ha quitado todo todo el estrés que conlleva y los tiempos son muy rápidos (6 semanas para homologar todo y recibirlos tanto en pdf como por correo)",
        stars: 5,
        date: "Hace 2 meses",
        source: "google"
    },
    {
        name: "Leonor Pèrez",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjWlMezNaNEESfHx2y2D4JYten7Wjxpi5F46imndekhMdefvX47h=w36-h36-p-rp-mo-br100",
        text: "Vivo en los Estados Unidos , y a pesar de existir varias sitios donde tramitar mis documentos, los elegí, no me desfraudaron, tengo en mis manos mis documentos y el proceso realizado. Son excelentes profesionales y asesoran con el mejor de los conocimientos…\nMuchas gracias",
        stars: 5,
        date: "Hace 4 meses",
        source: "google"
    },
    {
        name: "Gilberto Javier Ponce Fernández",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjWeZXRb1k9cIrZPkiMjvyEWR5_dOG4fsnTcfetp40Kk-FtA0IX_=w36-h36-p-rp-mo-ba3-br100",
        text: "Muy buen servicio, recomiendo mucho esta gestoría, en menos de 20 días obtuve mi documento Legalizado. Sin dudas seguiré haciendo uso del servicio cuando lo necesite.",
        stars: 5,
        date: "Hace 4 semanas",
        source: "google"
    },
    {
        name: "Ana María Pérez Gómez",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjWLEAzvDkACitMccE6K24Fj5tIXuMbRr1lFeKiJUxnZyVqYwCqG=w36-h36-p-rp-mo-br100",
        text: "Estoy sumamente contenta con el servicio que me ha brindado Gestoría Hol,muy profesionales,muy atentos,muy, pero muy confiables. Y con un servicio rápido a pesar de todas las dificultades a que están sometidos para lograr que salgan a tiempo nuestros documentos.\nGracias mil gracias a ese equipaso de Gestoría Hol,que nos resuelve nuestro problema y además nos hace sentir en casa. Lo recomiendo a un 100%",
        stars: 5,
        date: "Hace un mes",
        source: "google"
    },
    {
        name: "Nelly Salazar",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocKvl7dAM6F0_sWSKvmvkPmQrfs5nCL257pExt_Z732Ur3o_aA=w36-h36-p-rp-mo-ba2-br100",
        text: "Muy contenta, ha habido comunicación constante para atender mis necesidades, han sido rápidos en la gestión, algo imprescindible en este ámbito.Muy profesionales, sin duda atenderé mis asuntos con ellos en un futuro y ya les recomiendo a mi gente que hagan lo mismo.",
        stars: 5,
        date: "Hace un año",
        source: "google"
    },
    {
        name: "Ali pv",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjXDzKM4vxLlxHu3_qxg-MMhHSrmf_lpv_RUaTVD5Rr-TK-ap_I=w36-h36-p-rp-mo-br100",
        text: "Mi experiencia ha sido totalmente positiva.\nHace unos meses logré legalizar varios documentos para la homologación de mi título universitario de manera rápida y eficiente.\nEl trato es muy profesional pero a la vez muy cercano.\nPor eso he vuelto a recurrir de sus servicios para otros trámites importantes.\nSinceramente se los recomiendo al 100 por ciento.\nHéctor muy profesional y muy amable.",
        stars: 5,
        date: "Hace 11 meses",
        source: "google"
    },
    {
        name: "NV",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocKulsMn1e51zEM1PY8bhx0fC6WQBJmLMZecLRDLCpPXH6_gdQ=w36-h36-p-rp-mo-ba2-br100",
        text: "Solicité certificado de nacimiento y antecedentes penales, ambos legalizados en MINREX y Consulado español de La Habana, no tuve ningún problema, siempre amables, dispuestos a responderme dudas que podía tener, muy transparentes, informándome en cada paso del procedimiento y muy rápidos. Inicié los trámites el 30 de octubre 2024 y hoy 2 de enero 2025 he recibido en casa los documentos. Muy contenta con el servicio, lo recomiendo.",
        stars: 5,
        date: "Hace un año",
        source: "google"
    },
    {
        name: "Sergio Barroso",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocL3mrPnGGVHJnir7ttdPBuVz0ScplYPmLJHrz6lbUVUrE4HGw=w36-h36-p-rp-mo-br100",
        text: "Héctor y su equipo,sin duda los mejores profesionales para confiar tu visado,profesionalidad,seriedad,compromiso,rapidez y sobre todo el trato cercano,y la comodidad que ellos te lo hacen todo,los volvería a elegir mil veces más,muchísimas gracias equipo,agradecido de por vida.",
        stars: 5,
        date: "Hace un año",
        source: "google"
    },
    {
        name: "Nelda Lopez Franco",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjXYbw0S5V3H0LSWi7oKDN_OKz1rcV5-UrDTCcgJVBt5jx6woug=w36-h36-p-rp-mo-ba3-br100",
        text: "Mi experiencia a sido maravillosa buena atención y dedicación en cada trasmite que e hecho con ellos que han sido varios ,reunificaciones ,documentos legalizados ,citas en fin todo lo que nesecite siempre con ellos mis abogados de confianza ,los pagos maravillosos vas pagando a medida se van saliendo los procedimientos de cada gestión yo encantada siempre que los llamo me atienden enseguida y me ayudan con cariño lo que nesecite los recomiendo 100%",
        stars: 5,
        date: "Hace un año",
        source: "google"
    },
    {
        name: "Rubén Infante",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjXDudgbTkXq6z7vjOpI1uCrHxWZaiLBpohm8kVkPCZsEtywx8l6=w36-h36-p-rp-mo-ba4-br100",
        text: "He recibido un excelente servicio de Gestoría HOL, desde el primer momento me he sentido acompañado, guiado en el proceso, rápida respuesta y rápido servicio, muchas gracias por todo. Sin duda alguna muy recomendado.",
        stars: 5,
        date: "Hace un año",
        source: "google"
    },
    {
        name: "francisco javier pereda medina",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocKdtngLdA5brj8adr8U0w38aEOMOhsJ7ZWLwLlxLgtE86FU6w=w36-h36-p-rp-mo-br100",
        text: "No encontrarán nada mejor en seriedad y cumplimiento, merece la pena y mucho confiar en personas como las de Gestoría Hola. Felicidades  Una vez más he necesitado de los servicios de la Gestoría Hol y siguen mejorando cada vez más en los servicios que prestan, te mantienen informado en todo momento y te ayudan cuantas veces necesites, hasta tener todo claro y en mi caso, hasta más considerandos en el precio de los servicios, que más se puede pedir, el trato, por si algo faltara es de Nota. Os felicito a todos por prestar un servicio Impecable. Salud y Agradecimiento para todos",
        stars: 5,
        date: "Hace 11 meses",
        source: "google"
    },
    {
        name: "Dolores Dominguez",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJX9NowxWEGNwN71IFQpWWtqc0-0F3wBLusdzrKoYJLn1n_Cgg=w36-h36-p-rp-mo-br100",
        text: "Mi experiencia con Gestora Hol a sido genial, su profesionalidad y transparencia han llevado a que realice trámites de todos los tipos con ellos. Felicito a todo su equipo y los recomiendo para trámites de solicitud de documentación a Cuba, extranjería y homologación de títulos. Agradecida siempre.",
        stars: 5,
        date: "Hace 11 meses",
        source: "google"
    },
    {
        name: "Yordanka Vazquez",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJGwEc5q0WkMPLUmHzTJ2mYDstM6JuJtrsjo_yR8fQtlDlxtg=w36-h36-p-rp-mo-br100",
        text: "Mi experiencia con la Gestoria Hol ha sido muy buena ,excelentes profesionales ,un trato muy amable ,el documento que solicite por mediación de ellos tenía que ser  solicitado  y legalizado en cuba y me aseguraron una fecha promedio para la  obtención del mismo y así  fue ,los recomiendo al 100",
        stars: 5,
        date: "Hace 9 meses",
        source: "google"
    },
    {
        name: "Liannet Martell",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocKxFMauyyZpIRVflabFasuyD_Ft3_vol6QGhROcH_6JWsxxYA=w36-h36-p-rp-mo-br100",
        text: "Hice mi Nacionalidad y ahora el visado de mis hijos, los documentos me salieron en un tiempo inmejorable y mi expediente de nacionalidad fue impecable. Gracias siempre chicos.",
        stars: 5,
        date: "Hace un año",
        source: "google"
    },
    {
        name: "Edel Perez castellanos",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUil1R6ljb4YgZ8-taAk1V0-Ml2TENl4PnRANDGUFJzjRUMZvuR=w36-h36-p-rp-mo-br100",
        text: "Felicidades para este magnífico equipo de profesionales, con una atención muy esmerada, claridad en la información, sencilles en el proceso de pago y sobre todo la información constante sobre el desarrollo del proceso solicitado hasta su finalizacion en el tiempo que me dijeron a pesar de la situación que vive cuba en estos momentos. Me siento muy contento y satisfecho. Lo recomiendo 100%.Gracias a todos y que Dios los bendiga.🙏👍",
        stars: 5,
        date: "Hace una semana",
        source: "google"
    },
    {
        name: "Adelfa Lopéz",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocL_Dzc96_PqZm3IdtuRYZtMbt4AoOWFP0tGCQ_kQ-H-eonNZA=w36-h36-p-rp-mo-br100",
        text: "Es un equipo muy profesional y serio en su labor, en mi experiencia puedo decir que su trabajo es excelente, durante todo el proceso ha existido una amplia información en cuanto al estado y situación de cada paso del trámite hasta su finalización. Lo recomiendo 100 %.",
        stars: 5,
        date: "Hace una semana",
        source: "google"
    },
    {
        name: "Sergey Klevtsov",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjU2NqzUap487_9NusdatqATUWqO-TBBboosKlRDx8wY4_-7G62w2A=w36-h36-p-rp-mo-br100",
        text: "Necesitaba una copia reciente y legalizada de mi certificado de matrimonio. De todas las agencias, esta ofrecía las mejores condiciones. Todo el trabajo fue transparente y se completó dentro de los plazos establecidos. Siempre respondieron amablemente a los mensajes. Nunca hubo un solo retraso por parte de la agencia.",
        stars: 5,
        date: "Hace 2 meses",
        source: "google"
    },
    {
        name: "Juan Gomez",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocI9rPHoKqIdwrC-dwaCNKPgTSbAvnunJ-73_qxN4zWKghj4ww=w36-h36-p-rp-mo-br100",
        text: "Estoy muy complacido con el trabajo de este equipo, he solicitado la certificación de antecedentes penales y el nacimiento  de mi pareja y todo super rápido. Lo recomiendo 100%.",
        stars: 5,
        date: "Hace 11 meses",
        source: "google"
    },
    {
        name: "Beatriz Zayas Fleitas",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJenHTXoJHVJD4i3yRaKnhHZVt0ePSOjdu6et_vC9kzN6hOxg=w36-h36-p-rp-mo-br100",
        text: "Se recibe una excelente atención por parte de profesionales muy preparados. Estoy muy satisfecha de los servicios que ofrecen y lo recomiendo a quienes estén interesados en realizar trámites consulares en España. Gracias 🙏…",
        stars: 5,
        date: "Hace 11 meses",
        source: "google"
    },
    {
        name: "Norayda Castro",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocKFZNpaX9vbF1S1pXNn-oXk1CJF5w9oyAivwA3VczBaX2AzTQ=w36-h36-p-rp-mo-br100",
        text: "Muy satisfecha con su trabajo y atención son un 10 los recomiendo",
        stars: 5,
        date: "Hace 2 días",
        source: "google"
    },
    {
        name: "Aliadis Garnica Sotolongo",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJxMEDOBkDt95CkZxsmM0S4-6-RRPJCVwLc1QrIh9GrJqNqnQ=w36-h36-p-rp-mo-br100",
        text: "Muchísimas gracias a Gestoría Hol por su exelente trato y atención. En lo personal mi experiencia fue maravillosa.;un resultado rápido y sin errores . Super lo recomiendo la verdad .",
        stars: 5,
        date: "Hace un día",
        source: "google"
    },
    {
        name: "Dalia Broche",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocK-t3vq7RGQ02tei7Tdnm0ap5NDHN4zkHZFNYKAvVqr2XcbFg=w36-h36-p-rp-mo-br100",
        text: "Buenos días , para cualquier persona que le pueda interesar va este comentario, en lo personal quedé muy satisfecha y agradecida con el trabajo de esta agencia , son super confiables , siempre están atentos a tu proceso y te van guiando paso a paso , mi experiencia fue super satisfactoria y sin dudas contraria de sus servicios en cualquier ocasión que fuese necesario .",
        stars: 5,
        date: "Hace un año",
        source: "google"
    },
    {
        name: "Reysel Fernandez Perez",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjV0uOZFVqSHbVuaqRVkmsIyGvW4hu34aSi-jAjB96Eu7RbxK8E=w36-h36-p-rp-mo-br100",
        text: "Muy rápidos, calidad y eficiencia los caracteriza. Estoy muy agradecido por su gestión ya que en un tiempo récord he logrado tramitar la documentación de mi familia aquí en España. Lo recomiendo totalmente",
        stars: 5,
        date: "Hace un año",
        source: "google"
    },
    {
        name: "Yamila Soutuyo de la torre",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocLg97nWbbKSLSiLQP9rFG5LqvFYdEjF9bDhZbmcSs2qmlQ0Lg=w36-h36-p-rp-mo-br100",
        text: "E tenido muy buena experiencia con esta agencia,buena atención y rapidez con los documentos ,la verdad la recomiendo 100% ,y el compañero Héctor que fue el que siempre me atendió muy atento la verdad seguiré con ellos siempre que necesite",
        stars: 5,
        date: "Hace un año",
        source: "google"
    },
    {
        name: "Pablo Hernandez Alvarez",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjXIpSUbVDOoAJqavch_pyuqEd1n0N0p0bUspiaOrB2AC8nDZCtp=w36-h36-p-rp-mo-ba2-br100",
        text: "Recomiendo Gestoria HOL a cualquier persona que necesite realizar tramites de documentos Cubanos para España, muy profesionales en su gestion en especial Hector y Lis, muchas gracias",
        stars: 5,
        date: "Hace 7 meses",
        source: "google"
    }
];
