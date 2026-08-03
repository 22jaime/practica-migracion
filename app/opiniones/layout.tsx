import { Metadata } from "next";

export const metadata: Metadata = {
    title: "¡Déjanos tu opinión! | Gestoría HOL",
    description: "Tu experiencia es nuestro mayor logro. Tómate 1 minuto para dejarnos una reseña y ayudar a más familias a lograr sus metas en España.",
    metadataBase: new URL("https://gestoriahol.com"),
    openGraph: {
        title: "¡Déjanos tu opinión! | Gestoría HOL",
        description: "Tu experiencia es nuestro mayor logro. Tómate 1 minuto para dejarnos una reseña y ayudar a más familias a lograr sus metas en España.",
        images: [
            {
                url: "https://gestoriahol.com/images/hero-family-celebration.png",
                width: 1200,
                height: 630,
                alt: "Gestoría HOL - Familias felices",
            },
        ],
        type: "website",
        locale: "es_ES",
        siteName: "Gestoría HOL",
    },
    twitter: {
        card: "summary_large_image",
        title: "¡Déjanos tu opinión! | Gestoría HOL",
        description: "Tu experiencia es nuestro mayor logro. Tómate 1 minuto para dejarnos una reseña y ayudar a más familias a lograr sus metas en España.",
        images: ["https://gestoriahol.com/images/hero-family-celebration.png"],
    },
};

export default function OpinionesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
