import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Formulario de Solicitud | Gestoría HOL",
    description: "Completa nuestro formulario de solicitud de trámites de manera rápida y segura. Te ayudamos con legalizaciones, visados y más.",
    metadataBase: new URL("https://gestoriahol.com"),
    openGraph: {
        title: "Formulario de Solicitud | Gestoría HOL",
        description: "Inicia tu trámite online con Gestoría HOL de forma rápida y sencilla.",
        images: [
            {
                url: "https://gestoriahol.com/images/legalizaciones-hero-minjus.png", // A nice image from the public folder
                width: 1200,
                height: 630,
                alt: "Gestoría HOL - Formulario",
            },
        ],
        type: "website",
        locale: "es_ES",
        siteName: "Gestoría HOL",
    },
    twitter: {
        card: "summary_large_image",
        title: "Formulario de Solicitud | Gestoría HOL",
        description: "Inicia tu trámite online con Gestoría HOL de forma rápida y sencilla.",
        images: ["https://gestoriahol.com/images/legalizaciones-hero-minjus.png"],
    },
};

export default function FormulariosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
