import { Metadata } from 'next';
import { AboutHero } from '@/components/sections/AboutHero';
import { AboutStats } from '@/components/sections/AboutStats';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { OurStory } from '@/components/sections/OurStory';
import { AlliesAndVision } from '@/components/sections/AlliesAndVision';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { DondeEstamos } from '@/components/sections/DondeEstamos';

export const metadata: Metadata = {
    title: 'Quiénes Somos | Gestoría HOL — Expertos en Trámites para Cubanos',
    description:
        'Conoce al equipo de Gestoría HOL. Especialistas en legalización de documentos y trámites migratorios para cubanos en España con más de 10 años de experiencia.',
    keywords: [
        'quiénes somos gestoría cubanos',
        'equipo gestoría HOL',
        'expertos trámites migratorios cubanos',
        'gestoría española cubanos Valencia',
    ],
    alternates: { canonical: 'https://gestoriahol.com/sobre-nosotros' },
    openGraph: {
        title: 'Quiénes Somos | Gestoría HOL',
        description:
            'Especialistas en legalización de documentos y trámites migratorios para cubanos en España. Más de 10 años de experiencia.',
        url: 'https://gestoriahol.com/sobre-nosotros',
        siteName: 'Gestoría HOL',
        locale: 'es_ES',
        type: 'website',
        images: [{ url: 'https://gestoriahol.com/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Quiénes Somos | Gestoría HOL',
        description: 'Equipo de expertos en trámites migratorios para cubanos en España.',
    },
    robots: { index: true, follow: true },
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutStats />
            <WhyChooseUs />
            <OurStory />
            <AlliesAndVision />
            <DondeEstamos />
            <FinalCTA />
        </>
    );
}
