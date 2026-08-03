import { Metadata } from 'next';
import { LegalizationsHero } from './components/LegalizationsHero';
import { ServicesGrid } from '@/components/shared/ServicesGrid';
import { ProcessSteps } from '@/components/shared/ProcessSteps';
import { ComparisonSection } from '@/components/shared/ComparisonSection';
import { PricingCards } from '@/components/shared/PricingCards';
import { ProcessExplanation } from './components/ProcessExplanation';
import { LegalizationsFAQ } from './components/LegalizationsFAQ';
import { Reseñas } from '@/components/sections/Reseñas';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
    title: 'Legalización de Documentos Cubanos para España — Guía MINJUS 2026',
    description: "¿Necesitas legalizar documentos cubanos para España? Cuba NO apostilla. Te gestionamos la legalización vía MINJUS y Consulado Español en La Habana. Desde 175€.",
    keywords: [
        "Legalización documentos cubanos España",
        "MINJUS Cuba",
        "Consulado de España La Habana",
        "Apostilla Cuba",
        "Certificado Digital Cuba validez España",
        "legalizar documentos cubanos",
        "gestoría legalización Cuba España",
    ],
    alternates: { canonical: "https://gestoriahol.com/legalizacion-documentos-cubanos-espana-minjus-consulado" },
    openGraph: {
        title: 'Legalización de Documentos Cubanos para España — Guía MINJUS 2026',
        description: "¿Necesitas legalizar documentos cubanos para España? Cuba NO apostilla. Gestionamos MINJUS y Consulado Español en La Habana.",
        type: "website",
        locale: "es_ES",
        siteName: "Gestoría HOL",
        url: "https://gestoriahol.com/legalizacion-documentos-cubanos-espana-minjus-consulado",
        images: [{ url: "https://gestoriahol.com/og-image.png", width: 1200, height: 630, alt: "Legalización Documentos Cubanos España — Gestoría HOL" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Legalización Documentos Cubanos para España | Gestoría HOL",
        description: "Cuba no apostilla. Gestionamos tu legalización vía MINJUS y Consulado Español. Guía actualizada 2026.",
    },
    robots: { index: true, follow: true },
};

export default function LegalizacionesPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Legalización de Documentos Cubanos para España (MINJUS y Consulado)",
            "description": "Servicio de legalización de documentos cubanos para ciudadanos que desean emigrar o regularizar su situación en España. Gestión vía MINJUS y Consulado de España en La Habana.",
            "provider": { "@id": "https://gestoriahol.com/#organization" },
            "areaServed": ["España", "Cuba"],
            "serviceType": "Legalización de Documentos",
            "url": "https://gestoriahol.com/legalizacion-documentos-cubanos-espana-minjus-consulado",
            "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "175",
                "highPrice": "310",
                "priceCurrency": "EUR",
            },
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
                { "@type": "ListItem", "position": 2, "name": "Legalización Documentos Cubanos (MINJUS)", "item": "https://gestoriahol.com/legalizacion-documentos-cubanos-espana-minjus-consulado" },
            ],
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-background">
                <LegalizationsHero />
                <ServicesGrid />
                <ProcessSteps />
                <PricingCards documentName="Documento Cubano" />
                <ComparisonSection />
                <ProcessExplanation />
                <LegalizationsFAQ />
                <Reseñas />
                <FinalCTA />
            </main>
        </>
    );
}
