import type { Metadata } from "next";
import { VisasHero } from "@/components/sections/tramites/VisasHero";
import { VisaTypesGrid } from "@/components/sections/tramites/VisaTypesGrid";
import { VisasFeatures } from "@/components/sections/tramites/VisasFeatures";
import { VisasAdvisoryCTA } from "@/components/sections/tramites/VisasAdvisoryCTA";
import { VisasFAQ } from "@/components/sections/tramites/VisasFAQ";
import { Reseñas } from "@/components/sections/Reseñas";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
    title: "Visados para Cubanos en España 2026 | Gestoría HOL",
    description:
        "Tramitamos visados de reagrupación familiar, visado de larga duración y más para cubanos. Gestión completa, sin colas. Consulta gratuita por WhatsApp.",
    keywords: [
        "visado cubanos España",
        "reagrupación familiar cubanos",
        "visado larga duración Cuba",
        "visado familiar España",
        "trámite visado cubanos",
        "gestoría visados extranjería",
    ],
    alternates: { canonical: "https://gestoriahol.com/visados" },
    openGraph: {
        title: "Visados para Cubanos en España 2026 | Gestoría HOL",
        description:
            "Visados de reagrupación familiar y larga duración gestionados por expertos. Sin colas, sin complicaciones.",
        url: "https://gestoriahol.com/visados",
        siteName: "Gestoría HOL",
        locale: "es_ES",
        type: "website",
        images: [{ url: "https://gestoriahol.com/og-image.png", width: 1200, height: 630, alt: "Visados para Cubanos en España — Gestoría HOL" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Visados para Cubanos en España | Gestoría HOL",
        description: "Reagrupación familiar y visados de larga duración gestionados por expertos.",
    },
    robots: { index: true, follow: true },
};

export default function VisadosPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Gestión de Visados para Cubanos en España",
            "description": "Tramitamos visados de reagrupación familiar, visado de larga duración y más para cubanos en España. Gestión completa, sin colas.",
            "provider": { "@id": "https://gestoriahol.com/#organization" },
            "areaServed": "España",
            "serviceType": "Gestión de Visados",
            "url": "https://gestoriahol.com/visados",
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
                { "@type": "ListItem", "position": 2, "name": "Visados para Cubanos", "item": "https://gestoriahol.com/visados" },
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
                <VisasHero />
                <VisaTypesGrid />
                <VisasAdvisoryCTA />
                <VisasFeatures />
                <Reseñas />
                <VisasFAQ />
                <FinalCTA />
            </main>
        </>
    );
}
