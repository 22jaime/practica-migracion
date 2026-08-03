# Gestoría HOL

Proyecto Next.js con App Router para gestoriahol.com

## Tecnologías

- **Next.js 16** con App Router
- **TypeScript**
- **Tailwind CSS 4**
- **ESLint**

## Dependencias adicionales

- `clsx` y `tailwind-merge` - Gestión optimizada de clases CSS
- `zod` - Validación de esquemas y tipos
- `next-sitemap` - Generación automática de sitemap

## Estructura del proyecto

```
gestoriahol/
├── app/          # App Router pages y layouts
├── components/   # Componentes reutilizables
├── lib/          # Utilidades y helpers
├── content/      # Contenido estático (markdown, JSON, etc.)
├── public/       # Assets estáticos
└── ...
```

## Scripts disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Crea build de producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta ESLint
npm run format   # Formatea código con Prettier
```

## Configuración

- **Alias de importación**: `@/*` apunta a la raíz del proyecto
- **TypeScript**: Configuración estricta habilitada
- **Tailwind CSS**: Configurado con PostCSS

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000)
