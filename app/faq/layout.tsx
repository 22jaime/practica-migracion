import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Preguntas Frecuentes — Centro de Ayuda | Gestoría HOL",
    description:
        "Resolvemos tus dudas sobre trámites migratorios, legalizaciones, residencia, nacionalidad y visados para cubanos en España. Consulta gratuita.",
    keywords: [
        "preguntas frecuentes gestoría cubanos",
        "FAQ trámites migratorios Cuba España",
        "dudas residencia cubanos España",
        "consultas legalización documentos",
        "preguntas nacionalidad española",
    ],
    alternates: { canonical: "https://gestoriahol.com/faq" },
    openGraph: {
        title: "Preguntas Frecuentes | Gestoría HOL",
        description:
            "Resolvemos tus dudas sobre trámites migratorios, legalizaciones, residencia, nacionalidad y visados para cubanos en España.",
        url: "https://gestoriahol.com/faq",
        siteName: "Gestoría HOL",
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "FAQ — Centro de Ayuda | Gestoría HOL",
        description: "Dudas sobre trámites migratorios para cubanos en España respondidas.",
    },
    robots: { index: true, follow: true },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
