import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    loader: 'custom',
    loaderFile: './custom-loader.js',
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
  },
  async redirects() {
    return [

      // ── Legalizacion de documentos ──────────────────────────────────────
      {
        source: '/servicio/legalizacion-documentos-cubanos',
        destination: '/legalizacion-documentos-cubanos-espana-minjus-consulado',
        permanent: true,
      },
      {
        source: '/servicio/legalizacion-documentos-cubanos/:path*',
        destination: '/legalizacion-documentos-cubanos-espana-minjus-consulado',
        permanent: true,
      },
      // con 's'
      {
        source: '/servicios/legalizacion-documentos-cubanos',
        destination: '/legalizacion-documentos-cubanos-espana-minjus-consulado',
        permanent: true,
      },
      {
        source: '/servicios/legalizacion-documentos-cubanos/:path*',
        destination: '/legalizacion-documentos-cubanos-espana-minjus-consulado',
        permanent: true,
      },

      // ── Visados ─────────────────────────────────────────────────────────
      {
        source: '/servicio/visados-a-espana-desde-cuba',
        destination: '/visados',
        permanent: true,
      },
      {
        source: '/servicio/visados-a-espana-desde-cuba/visado-de-turismo-espana',
        destination: '/visados',
        permanent: true,
      },
      {
        source: '/servicio/visados-a-espana-desde-cuba/visado-de-estudio-espana',
        destination: '/visados',
        permanent: true,
      },
      {
        source: '/servicio/visados-a-espana-desde-cuba/visado-de-reagrupacion-familiar-espana',
        destination: '/visados',
        permanent: true,
      },
      {
        source: '/servicio/visados-a-espana-desde-cuba/visado-de-familiares-union-europea-espana',
        destination: '/visados',
        permanent: true,
      },

      // ── Envio de documentos ─────────────────────────────────────────────
      {
        source: '/servicio/visados-a-espana-desde-cuba/envio-cuba',
        destination: '/envio-de-documentos-cuba-espana',
        permanent: true,
      },
      {
        source: '/servicio/envio-documentos-cuba-espana',
        destination: '/envio-de-documentos-cuba-espana',
        permanent: true,
      },

      // ── Nacionalidad ────────────────────────────────────────────────────
      {
        source: '/servicio/nacionalidad-espanola',
        destination: '/nacionalidad',
        permanent: true,
      },

      // ── Residencia ──────────────────────────────────────────────────────
      {
        source: '/servicio/residencia-espana',
        destination: '/residencia',
        permanent: true,
      },

      // ── Otras páginas ───────────────────────────────────────────────────
      {
        source: '/servicios',
        destination: '/#servicios',
        permanent: true,
      },
      {
        source: '/acerca',
        destination: '/sobre-nosotros',
        permanent: true,
      },
      {
        source: '/politica-privacidad',
        destination: '/politica-de-privacidad',
        permanent: true,
      },
      {
        source: '/contactos',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/formulario',
        destination: '/formularios',
        permanent: true,
      },

      // ── Redirección de reseñas a opiniones ───────────────────────────────
      {
        source: '/resenas',
        destination: '/opiniones',
        permanent: true,
      },
      {
        source: '/reseñas',
        destination: '/opiniones',
        permanent: true,
      },
      {
        source: '/review',
        destination: '/opiniones',
        permanent: true,
      },

      // ── Páginas WordPress sin equivalente → inicio ───────────────────────
      {
        source: '/mirava-y-cadidaturas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/flora-4',
        destination: '/',
        permanent: true,
      },
      {
        source: '/flora-1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/com/r-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/com/7-2',
        destination: '/',
        permanent: true,
      },

      // ── Con trailing slash ───────────────────────────────────────────────
      {
        source: '/servicio/legalizacion-documentos-cubanos/',
        destination: '/legalizacion-documentos-cubanos-espana-minjus-consulado',
        permanent: true,
      },
      {
        source: '/acerca/',
        destination: '/sobre-nosotros',
        permanent: true,
      },
      {
        source: '/contactos/',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/faqs/',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/servicios/',
        destination: '/#servicios',
        permanent: true,
      },

      // ── Google Maps ──────────────────────────────────────────────────────
      {
        source: '/ubicacion',
        destination: 'https://www.google.com/maps/search/?api=1&query=C/+de+Vicente+Beltrán+Grimal,+24,+València',
        permanent: false,
      },
      {
        source: '/mapa',
        destination: 'https://www.google.com/maps/search/?api=1&query=C/+de+Vicente+Beltrán+Grimal,+24,+València',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
