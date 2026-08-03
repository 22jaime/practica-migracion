import { Metadata } from 'next';
import { ShippingHero } from './components/ShippingHero';
import { ShippingPricingCards } from './components/ShippingPricingCards';
import { ShippingHowItWorks } from './components/ShippingHowItWorks';
import { ShippingFAQ } from './components/ShippingFAQ';
import { Reseñas } from '@/components/sections/Reseñas';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
    title: 'Envío de Documentos Cuba–España 2026 | Gestoría HOL',
    description:
        'Envía documentos desde Cuba a España de forma segura y rápida. Carta certificada con número de seguimiento. Desde 50€ hasta 10 documentos + envío. 3–4 salidas al mes.',
    keywords: [
        'envío documentos Cuba España',
        'mensajería Cuba España',
        'enviar documentos Cuba domicilio',
        'carta certificada Cuba España',
        'gestión documentos Cuba',
        'envío seguro documentos cubanos',
    ],
    alternates: { canonical: 'https://gestoriahol.com/envio-de-documentos-cuba-espana' },
    openGraph: {
        title: 'Envío de Documentos Cuba–España | Gestoría HOL',
        description:
            'Envíos seguros de documentos desde Cuba a España. Carta certificada con seguimiento. Envíos desde 50€ (hasta 10 docs) + envío. 7–15 días de entrega.',
        type: 'website',
        locale: 'es_ES',
        url: 'https://gestoriahol.com/envio-de-documentos-cuba-espana',
        siteName: 'Gestoría HOL',
        images: [{ url: 'https://gestoriahol.com/og-image.png', width: 1200, height: 630, alt: 'Envío de Documentos Cuba–España — Gestoría HOL' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Envío de Documentos Cuba–España | Gestoría HOL',
        description: 'Envíos seguros con carta certificada y seguimiento. Envíos desde 50€/paquete + envío.',
    },
    robots: { index: true, follow: true },
};

export default function EnvioDocumentosPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Envío de Documentos Cuba-España",
            "provider": { "@id": "https://gestoriahol.com/#organization" },
            "areaServed": ["Cuba", "España"],
            "description": "Servicio de mensajería segura de documentos entre Cuba y España. Entrega a domicilio en España. Paquete de hasta 10 documentos por 50€ + envío a domicilio (+20€ España).",
            "url": "https://gestoriahol.com/envio-de-documentos-cuba-espana",
            "offers": [
                {
                    "@type": "Offer",
                    "name": "Paquete de Documentos Generales (hasta 10)",
                    "price": "50",
                    "priceCurrency": "EUR",
                    "description": "Envío de documentos generales entre Cuba y España. 50€ por un paquete de hasta 10 documentos, y 5€ por cada documento adicional. El envío final tiene un coste extra.",
                },
                {
                    "@type": "Offer",
                    "name": "Envío con Títulos y planes temáticos",
                    "price": "50",
                    "priceCurrency": "EUR",
                    "description": "Envío de títulos universitarios y planes temáticos entre Cuba y España (50€ cada uno + envío final).",
                },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://gestoriahol.com" },
                { "@type": "ListItem", "position": 2, "name": "Envío de Documentos Cuba–España", "item": "https://gestoriahol.com/envio-de-documentos-cuba-espana" },
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
                <ShippingHero />
                <ShippingPricingCards />
                <ShippingHowItWorks />
                <ShippingFAQ />
                <Reseñas />
                <FinalCTA />
            </main>
        </>
    );
}
