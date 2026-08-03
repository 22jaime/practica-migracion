import type { Metadata } from "next";
import { NacionalidadHero } from "@/components/sections/tramites/NacionalidadHero";
import { NacionalidadTypesGrid } from "@/components/sections/tramites/NacionalidadTypesGrid";
import { NacionalidadFeatures } from "@/components/sections/tramites/NacionalidadFeatures";
import { NacionalidadAdvisoryCTA } from "@/components/sections/tramites/NacionalidadAdvisoryCTA";
import { NacionalidadFAQ } from "@/components/sections/tramites/NacionalidadFAQ";
import { Reseñas } from "@/components/sections/Reseñas";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
    title: "Nacionalidad Española para Cubanos 2026 | Gestoría HOL",
    description:
        "Consigue la nacionalidad española: por residencia, por origen, carta de naturaleza o Ley de Memoria Democrática. Expertos en nacionalidad para cubanos. Consulta gratis.",
    keywords: [
        "nacionalidad española cubanos",
        "nacionalidad por residencia",
        "Ley de Memoria Democrática cubanos",
        "carta de naturaleza española",
        "doble nacionalidad Cuba España",
        "trámite nacionalidad España",
        "gestoría nacionalidad cubanos",
    ],
    alternates: { canonical: "https://gestoriahol.com/nacionalidad" },
    openGraph: {
        title: "Nacionalidad Española para Cubanos 2026 | Gestoría HOL",
        description:
            "Solicita la nacionalidad española con ayuda de expertos. Por residencia, origen o Ley de Memoria Democrática.",
        url: "https://gestoriahol.com/nacionalidad",
        siteName: "Gestoría HOL",
        locale: "es_ES",
        type: "website",
        images: [{ url: "https://gestoriahol.com/og-image.png", width: 1200, height: 630, alt: "Nacionalidad Española para Cubanos — Gestoría HOL" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nacionalidad Española para Cubanos | Gestoría HOL",
        description: "Consigue la nacionalidad española por residencia, origen o Ley de Memoria Democrática.",
    },
    robots: { index: true, follow: true },
};

export default function NacionalidadPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Gestión de Nacionalidad Española para Cubanos",
            "description": "Consigue la nacionalidad española: por residencia, por origen, carta de naturaleza o Ley de Memoria Democrática. Expertos en nacionalidad para cubanos.",
            "provider": { "@id": "https://gestoriahol.com/#organization" },
            "areaServed": "España",
            "serviceType": "Gestión de Nacionalidad",
            "url": "https://gestoriahol.com/nacionalidad",
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
                { "@type": "ListItem", "position": 2, "name": "Nacionalidad Española para Cubanos", "item": "https://gestoriahol.com/nacionalidad" },
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
                <NacionalidadHero />
                <NacionalidadTypesGrid />
                <NacionalidadAdvisoryCTA />
                <NacionalidadFeatures />
                <Reseñas />
                <NacionalidadFAQ />
                <FinalCTA />
            </main>
        </>
    );
}
