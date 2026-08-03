import { Metadata } from 'next';
import { CubaEspanaHero } from './components/CubaEspanaHero';
import { CubaEspanaDocumentsGrid } from './components/CubaEspanaDocumentsGrid';
import { CubaEspanaPricing } from './components/CubaEspanaPricing';
import { CubaEspanaComparison } from './components/CubaEspanaComparison';
import { CubaEspanaProcess } from './components/CubaEspanaProcess';
import { CubaEspanaTramites } from './components/CubaEspanaTramites';
import { CubaEspanaFAQ } from './components/CubaEspanaFAQ';
import { Reseñas } from '@/components/sections/Reseñas';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
    title: 'Obtención y Legalización de Documentos Cubanos desde España | Gestoría HOL',
    description: "Solicitamos y legalizamos tus documentos directamente en Cuba vía MINJUS, MINREX y Consulado de España en La Habana. Evita el colapso del consulado. Desde 175€.",
    keywords: [
        "Legalización documentos cubanos",
        "MINJUS Cuba",
        "Consulado España La Habana",
        "certificado nacimiento cubano",
        "documentos desde Cuba",
        "obtención documentos cubanos España",
        "legalizar certificado cubano",
    ],
    alternates: { canonical: "https://gestoriahol.com/legalizacion-documentos-cubanos-espana" },
    openGraph: {
        title: 'Obtención y Legalización de Documentos Cubanos desde España | Gestoría HOL',
        description: "Solicitamos y legalizamos tus documentos en Cuba vía MINJUS, MINREX y Consulado de España. Desde 175€.",
        type: "website",
        locale: "es_ES",
        siteName: "Gestoría HOL",
        url: "https://gestoriahol.com/legalizacion-documentos-cubanos-espana",
        images: [{ url: "https://gestoriahol.com/og-image.png", width: 1200, height: 630, alt: "Obtención y Legalización Documentos Cubanos — Gestoría HOL" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Obtención y Legalización Documentos Cubanos | Gestoría HOL",
        description: "Legalizamos tus documentos en Cuba vía MINJUS, MINREX y Consulado de España. Sin desplazamientos. Desde 175€.",
    },
    robots: { index: true, follow: true },
};

export default function LegalizacionCubanoEspanaPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Obtención y Legalización de Documentos Cubanos",
            "description": "Servicio de solicitud y legalización de documentos cubanos directamente en origen (vía MINJUS y Consulado de España). Evita esperas consulares. Desde 175€.",
            "provider": { "@id": "https://gestoriahol.com/#organization" },
            "areaServed": ["España", "Cuba"],
            "serviceType": "Obtención y Legalización de Documentos",
            "url": "https://gestoriahol.com/legalizacion-documentos-cubanos-espana",
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
                { "@type": "ListItem", "position": 2, "name": "Obtención y Legalización de Documentos Cubanos", "item": "https://gestoriahol.com/legalizacion-documentos-cubanos-espana" },
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
                <CubaEspanaHero />
                <CubaEspanaDocumentsGrid />
                <CubaEspanaPricing />
                <CubaEspanaComparison />
                <CubaEspanaProcess />
                <CubaEspanaTramites />
                <CubaEspanaFAQ />
                <Reseñas />
                <FinalCTA />
            </main>
        </>
    );
}
