import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/proximamente",
                    "/api/",
                    "/generador",
                    "/ui",
                    "/_next/",
                ],
            },
            {
                userAgent: "GPTBot",
                allow: "/",
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/proximamente", "/api/", "/generador", "/ui"],
            },
        ],
        sitemap: "https://gestoriahol.com/sitemap.xml",
    };
}
