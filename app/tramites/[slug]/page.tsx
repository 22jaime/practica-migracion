
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDocumentBySlug, documentsData } from '@/lib/document-data';
import { DocumentHero } from '@/components/shared/DocumentHero';
import { PricingCards } from '@/components/shared/PricingCards';
import { ServicesGrid } from '@/components/shared/ServicesGrid';
import { ProcessSteps } from '@/components/shared/ProcessSteps';
import { ComparisonSection } from '@/components/shared/ComparisonSection';
import { ProcessExplanation } from '@/app/legalizacion-documentos-cubanos-espana-minjus-consulado/components/ProcessExplanation';
import { LegalizationsFAQ } from '@/app/legalizacion-documentos-cubanos-espana-minjus-consulado/components/LegalizationsFAQ';
import { Reseñas } from '@/components/sections/Reseñas';
import { FinalCTA } from '@/components/sections/FinalCTA';

// Generate Static Params for all known documents to improve performance and enable static export if needed
export async function generateStaticParams() {
    return documentsData.map((doc) => ({
        slug: doc.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const document = getDocumentBySlug(slug);

    if (!document) {
        return {
            title: 'Documento no encontrado',
        };
    }

    return {
        title: document.metaTitle,
        description: document.metaDescription,
        keywords: `Legalización ${document.title}, ${document.title} Cuba, MINJUS, Consulado España`,
        openGraph: {
            title: document.metaTitle,
            description: document.metaDescription,
            type: "website",
            locale: "es_ES",
            url: `https://gestoriahol.com/tramites/${document.slug}`,
        },
    };
}

export default async function DocumentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const document = getDocumentBySlug(slug);

    if (!document) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Legalización de ${document.title}`,
        "provider": {
            "@type": "Organization",
            "name": "Gestoría HOL"
        },
        "description": document.metaDescription,
        "areaServed": "World",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Legalización",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": `Legalización de ${document.title} en MINJUS y Consulado`
                    }
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-background">
                {/* 1. Dynamic Hero */}
                <DocumentHero
                    title={document.heroTitle}
                    subtitle={document.heroSubtitle}
                />


                {/* 3. Standard Process Steps (Shared) */}
                <ProcessSteps
                    title={document.processTitle}
                />

                {/* 4. Pricing Cards (Shared) */}
                <PricingCards
                    title={document.pricingTitle}
                    documentName={document.title}
                />

                {/* 5. Comparision & Details (Shared for now) */}
                <ComparisonSection
                    subtitle={document.comparisonSubtitle}
                />
                <ProcessExplanation />

                {/* 6. Cross-sell: Other Documents */}
                <ServicesGrid
                    title="¿Necesitas otros documentos?"
                    subtitle="Gestionamos todo tipo de trámites en Cuba"
                />

                <LegalizationsFAQ />

                {/* 6. Social Proof & Final CTA */}
                <Reseñas />
                <FinalCTA />
            </main>
        </>
    );
}
