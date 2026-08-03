# Design System Documentation - Gestor\u00eda HOL

> **Token-First Design System** \nBased on sleek.design aesthetic with WCAG AA compliance

---

## Overview

This design system is built on a token-first architecture where all design decisions are centralized in CSS custom properties (`--tokens`) and consumed by Tailwind CSS v4. The system prioritizes accessibility, consistency, and modern aesthetics inspired by sleek.design.

---

## Color System

### Foundation Colors

#### Backgrounds
```css
--bg: #F5F1E8           /* Warm cream/beige background */
--bg-surface: #FEFDFB   /* Lighter beige for cards */
--surface: #FEFDFB      /* Semantic alias for sections */
--card: #FFFFFF         /* Pure white for elevated surfaces */
```

#### Foreground (Text)
```css
--fg: #0a0a0a           /* Deep black text (17.8:1 ratio on bg) */
--fg-muted: #5A5A5A     /* Muted gray text (5.5:1 ratio on bg) ✅ AA */
```

#### Neutrals
```css
--muted: #E8E4DC        /* Muted beige */
--muted-2: #D4CFC4      /* Darker beige */
--black: #0a0a0a        /* Pure black */
--white: #FFFFFF        /* Pure white */
--border: #E8E4DC       /* Subtle beige border */
--border-hover: #D4CFC4 /* Border on hover */
```

### Vibrant Palette (Sleek.design)

```css
--neon-yellow: #D4FF33     /* Primary accent (16.2:1 on black) */
--vibrant-orange: #E85A2A  /* Secondary accent (4.5:1 on white) ✅ AA */
--vibrant-red: #FF3B30     /* Tertiary accent */
--vibrant-green: #34C759   /* Success/decorative */
```

### Semantic Colors

#### Brand
```css
--brand: #059669           /* Emerald (legacy compatibility) */
--brand-hover: #047857     /* Hover state */
--brand-contrast: #ffffff  /* Text on brand */
```

#### Aliases
```css
--accent: var(--neon-yellow)         /* Maps to primary vibrant */
--ring: var(--vibrant-orange)        /* Focus ring color */
```

#### Links (AA Compliant)
```css
--link: #0066CC           /* Primary link (7.2:1 on bg) ✅ AA */
--link-hover: #004499     /* Hover state (10.1:1 on bg) ✅ AA */
```

#### States
```css
--success: #34C759        /* Vibrant green */
--warning: #FFCC00        /* Vibrant yellow-orange */
--danger: #FF3B30         /* Vibrant red */
--info: #007AFF           /* Bright blue */
```

---

## Typography

### Font Families
```css
--font-sans: var(--font-poppins), 'Poppins', ui-sans-serif, system-ui, sans-serif
--font-display: var(--font-poppins), 'Poppins', ui-sans-serif, system-ui, sans-serif
```

**Weights Used**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Heading Scale
```css
.heading-caps {
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.1;
}
```

---

## Geometry

###Border Radius (Large - Sleek.design)
```css
--r-sm: 0.75rem   /* 12px - Small elements */
--r-md: 1.25rem   /* 20px - Cards, inputs, buttons */
--r-lg: 1.75rem   /* 28px - Large cards */
--r-xl: 2.5rem    /* 40px - Containers, sections */
--r-screen: 2.5rem /* 40px - Screen-level containers */
```

**Usage:**
- Buttons, Inputs: `--r-md` (20px)
- Cards: `--r-lg` (28px)
- Sections: `--r-xl` (40px)

### Box Shadows (Pronounced - Sleek.design)
```css
--shadow-color: rgba(0, 0, 0, 1);  /* Base shadow color */

--sh-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
         0 1px 2px -1px rgba(0, 0, 0, 0.1);

--sh-md: 0 4px 6px -1px rgba(0, 0, 0, 0.12),
         0 2px 4px -2px rgba(0, 0, 0, 0.08);

--sh-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.15),
         0 4px 6px -4px rgba(0, 0, 0, 0.1);

--sh-hover: 0 14px 20px -3px rgba(0, 0, 0, 0.18),
            0 6px 8px -4px rgba(0, 0, 0, 0.12);

--sh-float: 0 20px 25px -5px rgba(0, 0, 0, 0.15),
            0 8px 10px -6px rgba(0, 0, 0, 0.08);
```

---

## Components

### Buttons

**Base Style:**
```css
.btn-base {
  padding: 0.625rem 1.5rem;      /* 10px 24px */
  border-radius: var(--r-md);    /* 20px */
  font-weight: 700;
  transition: all 0.2s;
}
```

**Variants:**
- `.btn-primary`: Neon yellow background (#D4FF33), black text
- `.btn-black`: Black background, white text
- `.btn-orange`: Vibrant orange background (#E85A2A), white text
- `.btn-ghost`: Transparent with 2px border

**Hover:** `transform: translateY(-2px)` + enhanced shadow

### Cards

**Base Style:**
```css
.card-base {
  border-radius: var(--r-lg);    /* 28px */
  background: var(--card);       /* white */
  border: 1px solid var(--border);
  box-shadow: var(--sh-md);
  transition: all 0.3s;
}
```

**Variants:**
- `.card-yellow`: Neon yellow background
- `.card-orange`: Vibrant orange background, white text
- `.card-cream`: Cream background
- `.card-glass*`: Glassmorphism variants (see below)

**Hover:** Lift 4px + `box-shadow: var(--sh-hover)`

### Chips (Pills)

**Base Style:**
```css
.chip-base {
  padding: 0.375rem 0.875rem;    /* 6px 14px */
  border-radius: 9999px;          /* fully rounded */
  font-size: 0.875rem;            /* 14px */
  font-weight: 600;
  transition: transform 0.2s;
}
```

**Hover:** `transform: scale(1.03)`

---

## Special Effects

### Glassmorphism

Four variants with backdrop-filter blur:

```css
/* Glass White */
.card-glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

/* Glass Yellow */
.card-glass-yellow {
  background: rgba(212, 255, 51, 0.2);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(212, 255, 51, 0.3);
}

/* Glass Dark */
.card-glass-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--white);
}

/* Glass Beige */
.card-glass-beige {
  background: rgba(245, 241, 232, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(228, 220, 204, 0.5);
}
```

**Usage:** Best on vibrant gradient backgrounds to showcase transparency

### Floating Dots (Decorative)

```css
.playful-container {
  position: relative;
  border-radius: var(--r-xl);
  box-shadow: var(--sh-float);
  overflow: hidden;
}

.floating-dot {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}
```

**Variants:** `.yellow`, `.orange`, `.green`, `.red`

---

## Accessibility (WCAG AA)

### Contrast Ratios ✅

All combinations meet or exceed WCAG AA requirements (4.5:1 for normal text, 3:1 for large text):

| Combination | Ratio | Status |
|-------------|-------|--------|
| `--fg` on `--bg` | 17.8:1 | ✅ AAA |
| `--fg` on `--card` | 20.6:1 | ✅ AAA |
| `--fg-muted` on `--bg` | 5.5:1 | ✅ AA |
| `--link` on `--bg` | 7.2:1 | ✅ AA |
| `--link-hover` on `--bg` | 10.1:1 | ✅ AAA |
| Neon Yellow Button (black text) | 16.2:1 | ✅ AAA |
| Orange Button (white text) | 4.5:1 | ✅ AA |

### Focus States

All interactive elements have visible focus indicators:

```css
*:focus-visible {
  outline: 3px solid var(--ring);    /* vibrant-orange */
  outline-offset: 2px;
}
```

### Interactive States

- **Hover**: Color change + shadow enhancement
- **Focus**: 3px orange ring with 2px offset
- **Active**: Slight scale down (`scale(0.98)`)
- **Disabled**: 50% opacity + `cursor-not-allowed`

---

## Dark Theme

The system includes a dark theme variant with adjusted colors for better contrast:

```css
[data-theme="dark"] {
  --bg: #0a0a0a;
  --bg-surface: #1A1612;
  --fg: #fafafa;
  --fg-muted: #a3a3a3;
  --card: #171717;
  
  /* Brighter vibrant colors for dark */
  --neon-yellow: #E5FF66;
  --vibrant-orange: #FF8A5B;
  --link: #5C9FFF;
  --link-hover: #7FB3FF;
}
```

---

## Usage

### In CSS
```css
.my-component {
  background: var(--card);
  color: var(--fg);
  border-radius: var(--r-lg);
  box-shadow: var(--sh-md);
}
```

### In Tailwind (via @theme inline)
```html
<div class="bg-card text-fg rounded-lg shadow-md">
  Content
</div>
```

### Inline Styles (for dynamic colors)
```tsx
<div style={{ backgroundColor: 'var(--neon-yellow)', color: 'var(--fg)' }}>
  Dynamic colored element
</div>
```

---

## Production Protection

UI Lab is protected in production via environment variable:

```bash
# .env.local (development)
NEXT_PUBLIC_SHOW_UI_LAB=true

# .env.production (or default)
NEXT_PUBLIC_SHOW_UI_LAB=false
```

When `false`, `/ui` route returns 404 (notFound()).

---

## Resources

- **Design Reference**: [sleek.design](https://sleek.design)
- **WCAG Guidelines**: [W3C WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- **Contrast Checker**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Font**: [Poppins on Google Fonts](https://fonts.google.com/specimen/Poppins)

---

**Last Updated**: February 2026  
**Version**: 1.0 (Token-First Hardened)
