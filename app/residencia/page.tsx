import type { Metadata } from "next";
import { ResidenciaHero } from "@/components/sections/tramites/ResidenciaHero";
import { ResidenciaTypesGrid } from "@/components/sections/tramites/ResidenciaTypesGrid";
import { ResidenciaFeatures } from "@/components/sections/tramites/ResidenciaFeatures";
import { ResidenciaAdvisoryCTA } from "@/components/sections/tramites/ResidenciaAdvisoryCTA";
import { ResidenciaFAQ } from "@/components/sections/tramites/ResidenciaFAQ";
import { Reseñas } from "@/components/sections/Reseñas";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
    title: "Residencia en España para Cubanos 2026 | Gestoría HOL",
    description:
        "Te ayudamos a obtener la residencia en España: arraigo social, laboral, familiar y más. Gestión completa sin desplazamientos. Consulta gratuita.",
    keywords: [
        "residencia España cubanos",
        "arraigo social cubanos",
        "residencia legal España",
        "permiso de residencia cubanos",
        "extranjería cubanos España",
        "residencia por arraigo laboral",
        "residencia familiar España",
    ],
    alternates: { canonical: "https://gestoriahol.com/residencia" },
    openGraph: {
        title: "Residencia en España para Cubanos 2026 | Gestoría HOL",
        description:
            "Obtén tu residencia en España sin complicaciones. Arraigo social, laboral o familiar gestionado por expertos.",
        url: "https://gestoriahol.com/residencia",
        siteName: "Gestoría HOL",
        locale: "es_ES",
        type: "website",
        images: [{ url: "https://gestoriahol.com/og-image.png", width: 1200, height: 630, alt: "Residencia en España para Cubanos — Gestoría HOL" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Residencia en España para Cubanos | Gestoría HOL",
        description: "Arraigo social, laboral y familiar gestionado por expertos en extranjería.",
    },
    robots: { index: true, follow: true },
};

export default function ResidenciaPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Gestión de Residencia en España para Cubanos",
            "description": "Servicio de gestión integral de residencia en España para cubanos: arraigo social, laboral, familiar y más. Sin desplazamientos.",
            "provider": { "@id": "https://gestoriahol.com/#organization" },
            "areaServed": "España",
            "serviceType": "Gestión de Extranjería",
            "url": "https://gestoriahol.com/residencia",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "200",
                "bestRating": "5",
                "worstRating": "1",
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://gestoriahol.com" },
                { "@type": "ListItem", "position": 2, "name": "Residencia en España para Cubanos", "item": "https://gestoriahol.com/residencia" },
            ],
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main>
                <ResidenciaHero />
                <ResidenciaTypesGrid />
                <ResidenciaAdvisoryCTA />
                <ResidenciaFeatures />
                <Reseñas />
                <ResidenciaFAQ />
                <FinalCTA />
            </main>
        </>
    );
}
