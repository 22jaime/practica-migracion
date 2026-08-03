import { Metadata } from 'next';
import { HeroEspanaCuba } from './components/HeroEspanaCuba';
import { EspanaServicesList } from './components/EspanaServicesList';
import { ProcessExplanationEspana } from './components/ProcessExplanationEspana';
import { PricingRange } from './components/PricingRange';
import { FAQEspanaCuba } from './components/FAQEspanaCuba';
import { ComparisonSection } from '@/components/shared/ComparisonSection';
import { Reseñas } from '@/components/sections/Reseñas';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
    title: 'Legalizar Documentos Españoles para Cuba 2026 | Gestoría HOL',
    description: "Legalizamos documentos españoles para que tengan validez en Cuba. Tramitamos Ministerio de Justicia, MAEC y Consulado de Cuba. Gestión completa desde España.",
    keywords: [
        "Legalización documentos españoles Cuba",
        "Legalizar nacimiento para Cuba",
        "Sello MAEC",
        "Consulado Cuba España legalización",
        "documentos españoles válidos Cuba",
        "apostilla documentos para Cuba",
        "MAEC legalización Cuba",
    ],
    alternates: { canonical: "https://gestoriahol.com/legalizacion-documentos-espanoles-cuba" },
    openGraph: {
        title: 'Legalizar Documentos Españoles para Cuba 2026 | Gestoría HOL',
        description: "Legalizamos documentos españoles para Cuba: Ministerio Justicia, MAEC y Consulado de Cuba. Gestión integral desde España.",
        type: "website",
        locale: "es_ES",
        siteName: "Gestoría HOL",
        url: "https://gestoriahol.com/legalizacion-documentos-espanoles-cuba",
        images: [{ url: "https://gestoriahol.com/og-image.png", width: 1200, height: 630, alt: "Legalización Documentos Españoles para Cuba — Gestoría HOL" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Legalizar Documentos Españoles para Cuba | Gestoría HOL",
        description: "Legalizamos documentos españoles para Cuba vía Ministerio de Justicia, MAEC y Consulado. Gestión integral.",
    },
    robots: { index: true, follow: true },
};

export default function LegalizacionesEspanaCubaPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Legalización de Documentos Españoles para Cuba",
            "description": "Servicio de legalización de documentos españoles en Justicia, MAEC y Consulado Cubano, para que tengan pleno efecto y validez en Cuba.",
            "provider": { "@id": "https://gestoriahol.com/#organization" },
            "areaServed": ["España", "Cuba"],
            "serviceType": "Legalización de Documentos Españoles",
            "url": "https://gestoriahol.com/legalizacion-documentos-espanoles-cuba",
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
                { "@type": "ListItem", "position": 2, "name": "Legalización Documentos Españoles para Cuba", "item": "https://gestoriahol.com/legalizacion-documentos-espanoles-cuba" },
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
                <HeroEspanaCuba />
                <EspanaServicesList />
                <PricingRange />
                <ComparisonSection />
                <ProcessExplanationEspana />
                <FAQEspanaCuba />
                <Reseñas />
                <FinalCTA />
            </main>
        </>
    );
}
