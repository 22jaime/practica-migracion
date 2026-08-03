import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { FAQItem } from "@/components/ui/faq-item";
import { Hero } from "@/components/sections/Hero";
import { Obstaculos } from "@/components/sections/Obstaculos";
import { ComoLoResolvemos } from "@/components/sections/ComoLoResolvemos";
// import { Servicios } from "@/components/sections/Servicios"; // OLD
import { ServiciosSticky } from "@/components/sections/ServiciosSticky"; // NEW
import { ComoTrabajamos } from "@/components/sections/ComoTrabajamos";
import { Reseñas } from "@/components/sections/Reseñas";
import { DondeEstamos } from "@/components/sections/DondeEstamos";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Gestoría HOL — Trámites Migratorios para Cubanos en España",
  description:
    "Especialistas en legalización de documentos cubanos, residencia, nacionalidad española, visados y envío de documentos Cuba-España. Consulta gratuita por WhatsApp.",
  keywords: [
    "gestoría cubanos España",
    "trámites migratorios cubanos",
    "legalización documentos Cuba España",
    "residencia cubanos España",
    "nacionalidad española cubanos",
    "visados cubanos",
    "gestoría HOL",
    "extranjería cubanos",
  ],
  alternates: {
    canonical: "https://gestoriahol.com",
  },
  openGraph: {
    title: "Gestoría HOL — Trámites Migratorios para Cubanos en España",
    description:
      "Especialistas en legalización de documentos cubanos, residencia, nacionalidad española, visados y envío de documentos Cuba-España. Consulta gratuita por WhatsApp.",
    url: "https://gestoriahol.com",
    siteName: "Gestoría HOL",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://gestoriahol.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gestoría HOL — Trámites Migratorios para Cubanos en España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestoría HOL — Trámites Migratorios para Cubanos en España",
    description:
      "Especialistas en legalización de documentos cubanos, residencia, nacionalidad española y visados.",
    images: ["https://gestoriahol.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};


export default function Home() {
  // Structured Data (JSON-LD)
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["LegalService", "LocalBusiness"],
      "@id": "https://gestoriahol.com/#local-business",
      "name": "Gestoría HOL",
      "url": "https://gestoriahol.com",
      "logo": "https://gestoriahol.com/images/logo-hol.png",
      "image": "https://gestoriahol.com/og-image.png",
      "areaServed": ["España", "Cuba"],
      "description": "Expertos en trámites de extranjería, nacionalidad, legalización de documentos cubanos y envíos entre Cuba y España. Más de 10 años de experiencia.",
      "telephone": "+34642066283",
      "email": "info@gestoriahol.com",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C/ Vicente Beltrán Grimal, 24, 1-D",
        "addressLocality": "Valencia",
        "addressRegion": "Comunidad Valenciana",
        "postalCode": "46023",
        "addressCountry": "ES",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00",
        },
      ],
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
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué trámites puedo hacer con Gestoría HOL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gestionamos legalización de documentos, residencia, visados, nacionalidad española, envíos de documentos Cuba-España y asesoría migratoria para cubanos en España. Te indicamos exactamente qué trámite aplica a tu caso antes de empezar.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Tengo que ir a alguna oficina o hacer gestiones presenciales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Nos encargamos de todo el proceso por ti. La mayoría de los trámites pueden gestionarse a distancia, sin que tengas que desplazarte ni acudir a oficinas, pero siempre eres bienvenido a conocernos en persona.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cómo sé que no se trata de una estafa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Somos una gestoría con oficina, contratos claros y atención directa. Puedes hablar con nosotros antes de iniciar cualquier trámite y comprobar nuestra experiencia a través de reseñas reales de otros clientes.",
          },
        },
        {
          "@type": "Question",
          "name": "¿La consulta inicial tiene algún coste?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. La consulta inicial es gratuita. Revisamos tu caso, resolvemos tus dudas y te explicamos las opciones disponibles antes de que decidas si continuar.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué métodos de pago aceptan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aceptamos Bizum, transferencia bancaria o efectivo en nuestra oficina de Valencia o La Habana. Te indicamos el método más cómodo según tu situación.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Me mantendrán informado durante el proceso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Te informamos del estado real de tu trámite y te explicamos cada paso, para que siempre sepas en qué punto se encuentra tu expediente.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Son seguros los envíos de documentos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, totalmente. Todos los documentos se envían a través de Correos mediante carta certificada, el servicio postal oficial de España. Con cada envío recibirás un número de seguimiento. La carta certificada garantiza que solo el destinatario puede recoger el envío, con acuse de recibo y firma obligatoria.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. OBSTACULOS SECTION */}
      <Obstaculos />

      {/* 3. COMO LO RESOLVEMOS SECTION */}
      <ComoLoResolvemos />




      {/* 6. RESEÑAS */}
      <Reseñas />

      {/* 4. SERVICES SECTION (Sticky) */}
      <ServiciosSticky />


      {/* 5. CÓMO TRABAJAMOS */}
      <ComoTrabajamos />



      {/* 7. SOCIAL PROOF (Location) */}
      <DondeEstamos />



      {/* 7. FAQ */}
      <FAQ />

      {/* 8. FINAL CTA */}
      <FinalCTA />

    </>
  );
}

// Inline Icons to avoid massive dependencies interactions for the skeleton
function WhatsAppIcon({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>;
}

function ArrowRight({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
}

function CheckCircle({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
}

function ChevronDown({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6" /></svg>;
}
