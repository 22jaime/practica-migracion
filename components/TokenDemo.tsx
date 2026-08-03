export default function TokenDemo() {
    return (
        <div className="min-h-screen bg-bg p-4 md:p-8">
            {/* Floating decorative dots */}
            <div className="floating-dot yellow" style={{ top: '10%', left: '5%' }}></div>
            <div className="floating-dot orange" style={{ top: '25%', right: '8%' }}></div>
            <div className="floating-dot green" style={{ bottom: '15%', left: '12%' }}></div>
            <div className="floating-dot red" style={{ bottom: '30%', right: '15%' }}></div>

            <div className="mx-auto max-w-6xl space-y-12">
                {/* Header */}
                <header className="text-center space-y-4">
                    <h1 className="heading-caps font-display text-6xl md:text-7xl mb-2" style={{ color: 'var(--vibrant-orange)' }}>
                        GESTORÍA HOL
                    </h1>
                    <p className="text-xl md:text-2xl text-fg-muted font-semibold">
                        Sistema de diseño vibrante y moderno
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                        <span className="chip-base" style={{ backgroundColor: 'var(--black)', color: 'var(--white)' }}>Sleek.design</span>
                        <span className="chip-base" style={{ backgroundColor: 'var(--accent)', color: 'var(--black)', fontWeight: 700 }}>✨ Vibrante</span>
                        <span className="chip-base" style={{ backgroundColor: 'var(--vibrant-orange)', color: 'var(--white)' }}>Bold</span>
                    </div>
                </header>

                {/* Cards Section */}
                <section className="playful-container">
                    <h2 className="heading-caps mb-8 font-display text-3xl text-fg">
                        🃏 Tarjetas
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* White Card */}
                        <div className="card-base p-6">
                            <div className="mb-3 text-sm font-bold uppercase tracking-wider text-fg-muted">
                                Blanca
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-fg">
                                Tarjeta Clásica
                            </h3>
                            <p className="text-sm text-fg-muted leading-relaxed">
                                Fondo blanco con borde grande (28px) y sombra pronunciada. Hover con lift de 4px.
                            </p>
                        </div>

                        {/* Yellow Card */}
                        <div className="card-base card-yellow p-6">
                            <div className="mb-3 text-sm font-bold uppercase tracking-wider opacity-70">
                                Amarillo Neón
                            </div>
                            <h3 className="mb-3 text-xl font-bold">
                                Energética
                            </h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                Fondo amarillo neón (#D4FF33) para destacar contenido importante con máximo contraste.
                            </p>
                        </div>

                        {/* Orange Card */}
                        <div className="card-base card-orange p-6">
                            <div className="mb-3 text-sm font-bold uppercase tracking-wider text-white/70">
                                Naranja Vibrante
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">
                                Llamativa
                            </h3>
                            <p className="text-sm text-white/90 leading-relaxed">
                                Fondo naranja (#FF6B35) para acciones secundarias con alto impacto visual.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Glassmorphism Cards Section */}
                <section className="relative rounded-3xl p-8 md:p-10 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--neon-yellow) 0%, var(--vibrant-orange) 100%)' }}>
                    <h2 className="heading-caps mb-8 font-display text-3xl" style={{ color: 'var(--black)' }}>
                        ✨ Glassmorphism
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Glass Yellow Card */}
                        <div className="card-base card-glass-yellow p-6">
                            <div className="mb-3 text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--black)' }}>
                                Glass Yellow
                            </div>
                            <h3 className="mb-3 text-xl font-bold" style={{ color: 'var(--black)' }}>
                                Efecto Blur
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>
                                Fondo semi-transparente con backdrop-filter blur(12px) sobre amarillo neón.
                            </p>
                        </div>

                        {/* Glass White Card */}
                        <div className="card-base card-glass p-6">
                            <div className="mb-3 text-sm font-bold uppercase tracking-wider" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                                Glass White
                            </div>
                            <h3 className="mb-3 text-xl font-bold" style={{ color: 'var(--black)' }}>
                                Cristal Claro
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                                Fondo blanco semi-transparente (15% opacity) con blur para efecto vidrio.
                            </p>
                        </div>

                        {/* Glass Dark Card */}
                        <div className="card-base card-glass-dark p-6">
                            <div className="mb-3 text-sm font-bold uppercase tracking-wider text-white/70">
                                Glass Dark
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">
                                Oscuro
                            </h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Fondo negro semi-transparente (30% opacity) con borde blanco sutil.
                            </p>
                        </div>

                        {/* Glass Beige Card */}
                        <div className="card-base card-glass-beige p-6">
                            <div className="mb-3 text-sm font-bold uppercase tracking-wider text-fg-muted">
                                Glass Beige
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-fg">
                                Crema Suave
                            </h3>
                            <p className="text-sm text-fg-muted leading-relaxed">
                                Fondo beige/crema semi-transparente (40% opacity) ideal para fondos claros.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Buttons Section */}
                <section className="rounded-3xl bg-white p-8 md:p-10 shadow-lg border border-border">
                    <h2 className="heading-caps mb-8 font-display text-3xl text-fg">
                        🔘 Botones
                    </h2>

                    <div className="space-y-8">
                        {/* Primary Buttons */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-fg-muted uppercase tracking-wide">Primary</h3>
                            <div className="flex flex-wrap gap-4">
                                <button className="btn-base btn-primary">
                                    Consulta
                                </button>
                                <button className="btn-base btn-black">
                                    Ver Servicios
                                </button>
                                <button className="btn-base btn-orange">
                                    Contactar Ahora
                                </button>
                            </div>
                            <p className="text-sm text-fg-muted">
                                <strong>Yellow:</strong> Primario (neon yellow, bold, chunky).
                                <strong className="ml-3">Black:</strong> Alternativa elegante.
                                <strong className="ml-3">Orange:</strong> Call-to-action secundario.
                            </p>
                        </div>

                        {/* Ghost Buttons */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-fg-muted uppercase tracking-wide">Ghost</h3>
                            <div className="flex flex-wrap gap-4">
                                <button className="btn-base btn-ghost">Explorar</button>
                                <button className="btn-base btn-ghost">Más Información</button>
                            </div>
                            <p className="text-sm text-fg-muted">
                                Fondo transparente con borde 2px. Hover rellena con fondo muted.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chips Section */}
                <section className="rounded-3xl bg-white p-8 md:p-10 shadow-lg border border-border">
                    <h2 className="heading-caps mb-8 font-display text-3xl text-fg">
                        🏷️ Chips (Pills)
                    </h2>

                    <div className="space-y-6">
                        {/* Color Variants */}
                        <div>
                            <h3 className="text-sm font-bold text-fg-muted uppercase tracking-wide mb-3">
                                Variantes de Color
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="chip-base">Neutral</span>
                                <span className="chip-base" style={{ backgroundColor: 'var(--black)', color: 'var(--white)' }}>Negro</span>
                                <span className="chip-base" style={{ backgroundColor: 'var(--white)', color: 'var(--black)', border: '1px solid var(--border)' }}>Blanco</span>
                                <span className="chip-base" style={{ backgroundColor: 'var(--accent)', color: 'var(--black)', fontWeight: 700 }}>Destacado</span>
                                <span className="chip-base" style={{ backgroundColor: 'var(--vibrant-orange)', color: 'var(--white)' }}>Naranja</span>
                                <span className="chip-base" style={{ backgroundColor: 'var(--vibrant-green)', color: 'var(--white)' }}>Verde</span>
                            </div>
                        </div>

                        {/* Examples */}
                        <div>
                            <h3 className="text-sm font-bold text-fg-muted uppercase tracking-wide mb-3">
                                Ejemplos de Uso
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="chip-base">Estado: Activo</span>
                                <span className="chip-base">Categoría: Gestoría</span>
                                <span className="chip-base" style={{ backgroundColor: 'var(--black)', color: 'var(--white)' }}>Premium</span>
                                <span className="chip-base" style={{ backgroundColor: 'var(--accent)', color: 'var(--black)', fontWeight: 700 }}>✨ Nuevo</span>
                                <span className="chip-base" style={{ backgroundColor: 'var(--vibrant-orange)', color: 'var(--white)' }}>Popular</span>
                                <span className="chip-base" style={{ backgroundColor: 'var(--vibrant-green)', color: 'var(--white)' }}>✓ Verificado</span>
                            </div>
                        </div>

                        <p className="text-sm text-fg-muted">
                            Pills completamente redondeadas (9999px) con padding generoso. Hover scale 1.03.
                        </p>
                    </div>
                </section>

                {/* Color Palette */}
                <section className="rounded-3xl bg-white p-8 md:p-10 shadow-lg border border-border">
                    <h2 className="heading-caps mb-8 font-display text-3xl text-fg">
                        🎨 Paleta Vibrante
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {/* Neon Yellow */}
                        <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                            <div className="h-24" style={{ backgroundColor: 'var(--neon-yellow)' }}></div>
                            <div className="p-4 bg-white">
                                <div className="font-bold text-fg">Neon Yellow</div>
                                <div className="text-sm font-mono text-fg-muted">#D4FF33</div>
                                <div className="text-xs text-fg-muted mt-1">Acento primario</div>
                            </div>
                        </div>

                        {/* Vibrant Orange */}
                        <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                            <div className="h-24" style={{ backgroundColor: 'var(--vibrant-orange)' }}></div>
                            <div className="p-4 bg-white">
                                <div className="font-bold text-fg">Vibrant Orange</div>
                                <div className="text-sm font-mono text-fg-muted">#FF6B35</div>
                                <div className="text-xs text-fg-muted mt-1">Acento secundario</div>
                            </div>
                        </div>

                        {/* Vibrant Red */}
                        <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                            <div className="h-24" style={{ backgroundColor: 'var(--vibrant-red)' }}></div>
                            <div className="p-4 bg-white">
                                <div className="font-bold text-fg">Vibrant Red</div>
                                <div className="text-sm font-mono text-fg-muted">#FF3B30</div>
                                <div className="text-xs text-fg-muted mt-1">Acento terciario</div>
                            </div>
                        </div>

                        {/* Vibrant Green */}
                        <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                            <div className="h-24" style={{ backgroundColor: 'var(--vibrant-green)' }}></div>
                            <div className="p-4 bg-white">
                                <div className="font-bold text-fg">Vibrant Green</div>
                                <div className="text-sm font-mono text-fg-muted">#34C759</div>
                                <div className="text-xs text-fg-muted mt-1">Success/Decorativo</div>
                            </div>
                        </div>

                        {/* Background Cream */}
                        <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                            <div className="h-24" style={{ backgroundColor: 'var(--bg)' }}></div>
                            <div className="p-4 bg-white">
                                <div className="font-bold text-fg">Background Cream</div>
                                <div className="text-sm font-mono text-fg-muted">#F5F1E8</div>
                                <div className="text-xs text-fg-muted mt-1">Fondo cálido</div>
                            </div>
                        </div>

                        {/* Pure Black */}
                        <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                            <div className="h-24" style={{ backgroundColor: 'var(--black)' }}></div>
                            <div className="p-4 bg-white">
                                <div className="font-bold text-fg">Pure Black</div>
                                <div className="text-sm font-mono text-fg-muted">#0A0A0A</div>
                                <div className="text-xs text-fg-muted mt-1">Texto/elementos</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section className="rounded-3xl bg-white p-8 md:p-10 shadow-lg border border-border">
                    <h2 className="heading-caps mb-8 font-display text-3xl text-fg">
                        ✍️ Tipografía
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <div className="heading-caps text-5xl font-display mb-2">
                                ENCABEZADO BOLD
                            </div>
                            <p className="text-sm text-fg-muted">
                                Poppins, 800 weight, ALL CAPS, letter-spacing -0.02em
                            </p>
                        </div>

                        <div>
                            <div className="text-3xl font-bold text-fg mb-2">
                                Título Grande
                            </div>
                            <p className="text-sm text-fg-muted">
                                Poppins, 700 weight, sentence case
                            </p>
                        </div>

                        <div>
                            <div className="text-lg text-fg-muted mb-2">
                                Cuerpo de texto regular con buena legibilidad y contraste para contenido extenso.
                            </div>
                            <p className="text-sm text-fg-muted">
                                Poppins, 400-500 weight, line-height 1.6
                            </p>
                        </div>
                    </div>
                </section>

                {/* Elevation & Shadows */}
                <section className="rounded-3xl bg-white p-8 md:p-10 shadow-lg border border-border">
                    <h2 className="heading-caps mb-8 font-display text-3xl text-fg">
                        💎 Elevación (Sombras)
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="p-6 bg-white rounded-2xl border border-border" style={{ boxShadow: 'var(--sh-sm)' }}>
                            <div className="font-bold mb-2">shadow-sm</div>
                            <div className="text-sm text-fg-muted">Sombra pequeña</div>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-border" style={{ boxShadow: 'var(--sh-md)' }}>
                            <div className="font-bold mb-2">shadow-md</div>
                            <div className="text-sm text-fg-muted">Sombra media</div>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-border" style={{ boxShadow: 'var(--sh-lg)' }}>
                            <div className="font-bold mb-2">shadow-lg</div>
                            <div className="text-sm text-fg-muted">Sombra grande</div>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-border" style={{ boxShadow: 'var(--sh-float)' }}>
                            <div className="font-bold mb-2">shadow-float</div>
                            <div className="text-sm text-fg-muted">Máxima elevación</div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center py-8">
                    <p className="text-fg-muted mb-4">
                        Sistema de diseño inspirado en{' '}
                        <a
                            href="https://sleek.design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:underline"
                            style={{ color: 'var(--vibrant-orange)' }}
                        >
                            sleek.design
                        </a>
                    </p>
                    <p className="text-sm text-fg-muted">
                        Border radius: 12-40px • Colores vibrantes • Sombras pronunciadas • Tipografía bold
                    </p>
                </footer>
            </div>
        </div>
    );
}
