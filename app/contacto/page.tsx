import { Metadata } from 'next';
import { ContactHero } from '@/components/sections/ContactHero';
import { ContactMethods } from '@/components/sections/ContactMethods';
import { DondeEstamos } from '@/components/sections/DondeEstamos';
import { FAQ } from '@/components/sections/FAQ';

export const metadata: Metadata = {
    title: 'Contacto | Gestoría HOL — Consulta Gratuita para Cubanos',
    description:
        'Contacta con Gestoría HOL para una consulta gratuita. WhatsApp, email y cita presencial en Valencia. Especialistas en trámites migratorios para cubanos.',
    keywords: [
        'contacto gestoría cubanos España',
        'consulta gratuita trámites migratorios',
        'gestoría HOL Valencia contacto',
        'whatsapp gestoría cubanos',
    ],
    alternates: { canonical: 'https://gestoriahol.com/contacto' },
    openGraph: {
        title: 'Contacto | Gestoría HOL',
        description:
            'Consulta gratuita por WhatsApp. Especialistas en trámites migratorios para cubanos en España.',
        url: 'https://gestoriahol.com/contacto',
        siteName: 'Gestoría HOL',
        locale: 'es_ES',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Contacto | Gestoría HOL',
        description: 'Consulta gratuita por WhatsApp. Expertos en trámites migratorios para cubanos.',
    },
    robots: { index: true, follow: true },
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactMethods />
            <DondeEstamos />
            <FAQ />
        </>
    );
}
