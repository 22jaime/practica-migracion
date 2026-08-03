import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { BottomBlur } from "@/components/ui/BottomBlur";
import { SmoothScrollProvider } from "@/components/motion/SmoothScroll";
import { PageLoader } from "@/components/ui/PageLoader";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Gestoría HOL",
    default: "Gestoría HOL — Trámites para Cubanos en España",
  },
  description:
    "Expertos en legalización de documentos cubanos, residencia, nacionalidad española, visados y envío de documentos Cuba–España. Más de 10 años de experiencia. Consulta gratuita.",
  keywords: [
    "gestoría cubanos España",
    "trámites migratorios cubanos",
    "legalización documentos Cuba España",
    "residencia cubanos España",
    "nacionalidad española cubanos",
    "visados cubanos",
    "envío documentos Cuba España",
    "gestoría Valencia cubanos",
  ],
  metadataBase: new URL("https://gestoriahol.com"),
  alternates: { canonical: "https://gestoriahol.com" },
  openGraph: {
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
    site: "@gestoriahol",
    creator: "@gestoriahol",
  },
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gestoriahol.com/#organization",
        "name": "Gestoría HOL",
        "url": "https://gestoriahol.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gestoriahol.com/images/logo-hol.png",
          "width": 200,
          "height": 200,
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34642066283",
          "contactType": "customer service",
          "areaServed": ["ES", "CU"],
          "availableLanguage": "Spanish",
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "C/ Vicente Beltrán Grimal, 24, 1-D",
          "addressLocality": "Valencia",
          "addressRegion": "Valencia",
          "postalCode": "46023",
          "addressCountry": "ES",
        },
        "sameAs": [
          "https://www.instagram.com/gestoria_hol",
          "https://www.facebook.com/gestoriahol",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://gestoriahol.com/#website",
        "url": "https://gestoriahol.com",
        "name": "Gestoría HOL",
        "description": "Expertos en trámites migratorios y legalizaciones para cubanos en España.",
        "publisher": { "@id": "https://gestoriahol.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://gestoriahol.com/faq?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      {/* Global Schema: Organization + WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MYH4TGGWN0"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MYH4TGGWN0', { anonymize_ip: true });
        `}
      </Script>
      <body className={`${poppins.variable} antialiased min-h-screen flex flex-col bg-background font-sans text-foreground`}>
        <MotionProvider>
          <PageLoader />
          <SmoothScrollProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieBanner />
            <BottomBlur />
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
