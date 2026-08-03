import { MetadataRoute } from "next";

const BASE_URL = "https://gestoriahol.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return [
        // Home
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },

        // Servicios principales — alta prioridad
        {
            url: `${BASE_URL}/residencia`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/nacionalidad`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/visados`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },

        // Legalizaciones
        {
            url: `${BASE_URL}/legalizacion-documentos-cubanos-espana-minjus-consulado`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/legalizacion-documentos-cubanos-espana`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${BASE_URL}/legalizacion-documentos-espanoles-cuba`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        // Envíos
        {
            url: `${BASE_URL}/envio-de-documentos-cuba-espana`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },

        // Trámites (índice de servicios)
        {
            url: `${BASE_URL}/tramites`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        // Contenido de confianza / E-E-A-T
        {
            url: `${BASE_URL}/sobre-nosotros`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/opiniones`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/contacto`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/faq`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.65,
        },

        // Legal (baja prioridad, pero importante para E-E-A-T)
        {
            url: `${BASE_URL}/politica-de-privacidad`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/terminos`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
