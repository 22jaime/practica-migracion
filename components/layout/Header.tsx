"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

import { usePathname, useSearchParams } from "next/navigation";

import { LEGALIZATION_FORM_URL, WHATSAPP_URL_BASE } from "@/lib/constants";
import { documentsData } from "@/lib/document-data";
import { ChevronDown, Users, Phone, HelpCircle, FileText, User, ArrowRight } from "lucide-react";

export function Header() {
    return (
        <React.Suspense fallback={<div className="h-14" />}>
            <HeaderContent />
        </React.Suspense>
    );
}

function HeaderContent() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isNosotrosExpanded, setIsNosotrosExpanded] = React.useState(false);
    const [isLegalizacionesExpanded, setIsLegalizacionesExpanded] = React.useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const navLinks = [
        { href: "/legalizacion-documentos-cubanos-espana-minjus-consulado", label: "Legalizaciones" },
        // { href: "/legalizacion-documentos-espanoles-cuba", label: "Trámites España-Cuba" },
        { href: "/residencia", label: "Residencia" },
        { href: "/nacionalidad", label: "Nacionalidad" },
        { href: "/visados", label: "Visados" },
        { href: "/envio-de-documentos-cuba-espana", label: "Envíos" },
    ];

    // Lock body scroll
    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.setProperty("overflow-x", "hidden", "important");
            document.body.style.overflowY = "auto";
        }
        return () => {
            document.body.style.setProperty("overflow-x", "hidden", "important");
            document.body.style.overflowY = "auto";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed z-50 transform-gpu transition-all duration-300",
                    isMobileMenuOpen
                        ? "top-0 left-0 w-full h-16 bg-white rounded-none border-none shadow-sm"
                        : "top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl rounded-full glass-pro border border-white/20"
                )}
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
            >
                <div className={cn(
                    "w-full px-6 flex items-center justify-between",
                    isMobileMenuOpen ? "h-16" : "h-14"
                )}>
                    {/* Logo */}
                    <div className="flex-1 flex justify-start z-50 relative">
                        <Link href="/" className="flex items-center gap-2 font-extrabold text-[18px] tracking-tight">
                            <img
                                src="/images/logo-hol.png"
                                alt="Gestoría HOL Logo"
                                width="32"
                                height="32"
                                className="object-contain"
                            />
                            <div className="flex items-center gap-1.5">
                                <span className="text-foreground">Gestoría</span>
                                <span className="text-primary">HOL</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
                        {navLinks.map((link) => {
                            if (link.label === "Legalizaciones") {
                                return (
                                    <div key={link.label} className="relative group">
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "flex items-center gap-1 text-[15px] font-medium transition-all duration-200 px-4 py-2 rounded-full whitespace-nowrap text-neutral-600 hover:text-[var(--brand-dark)] hover:bg-[var(--brand)]/[0.08] group-hover:text-[var(--brand-dark)]",
                                                pathname.startsWith("/legalizacion") && "bg-[var(--brand)]/[0.10] text-[var(--brand-dark)] shadow-sm"
                                            )}
                                        >
                                            {link.label}
                                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                        </Link>

                                        {/* Dropdown */}
                                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                                            <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-6 w-[min(950px,95vw)] max-h-[90vh] overflow-y-auto flex gap-6">

                                                {/* Left Column: Documentos Cubanos */}
                                                <div className="flex-[3]">
                                                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3 px-1">Documentos Cubanos</h4>
                                                    <div className="grid grid-cols-3 gap-2">
                                                        {documentsData.map((doc) => {
                                                            if (doc.id === 'otros-documentos') {
                                                                return (
                                                                    <Link
                                                                        key={doc.slug}
                                                                        href="/legalizacion-documentos-cubanos-espana-minjus-consulado"
                                                                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group/item"
                                                                    >
                                                                        <div className="mt-0.5 p-1.5 rounded-lg bg-neutral-100 text-neutral-500 group-hover/item:bg-brand-light group-hover/item:text-brand-dark transition-colors shrink-0">
                                                                            <ArrowRight className="w-5 h-5" />
                                                                        </div>
                                                                        <div>
                                                                            <div className="font-medium text-sm text-neutral-900 leading-tight mb-1">
                                                                                Ver todos
                                                                            </div>
                                                                            <div className="text-xs text-neutral-500 font-normal leading-tight line-clamp-2">
                                                                                {doc.shortDescription}
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                );
                                                            }

                                                            return doc.isWhatsappAction ? (
                                                                <a
                                                                    key={doc.slug}
                                                                    href={`https://wa.me/34642066283?text=${encodeURIComponent("Hola, tengo una consulta sobre otros documentos legalizados.")}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group/item"
                                                                >
                                                                    <div className="mt-0.5 p-1.5 rounded-lg bg-neutral-100 text-neutral-500 group-hover/item:bg-brand-light group-hover/item:text-brand-dark transition-colors shrink-0">
                                                                        <doc.icon className="w-5 h-5" />
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-medium text-sm text-neutral-900 leading-tight mb-1">
                                                                            {doc.title}
                                                                        </div>
                                                                        <div className="text-xs text-neutral-500 font-normal leading-tight line-clamp-2">
                                                                            {doc.shortDescription}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            ) : (
                                                                <Link
                                                                    key={doc.slug}
                                                                    href={`/${doc.slug}`}
                                                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group/item"
                                                                >
                                                                    <div className="mt-0.5 p-1.5 rounded-lg bg-neutral-100 text-neutral-500 group-hover/item:bg-brand-light group-hover/item:text-brand-dark transition-colors shrink-0">
                                                                        <doc.icon className="w-5 h-5" />
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-medium text-sm text-neutral-900 leading-tight mb-1">
                                                                            {doc.title}
                                                                        </div>
                                                                        <div className="text-xs text-neutral-500 font-normal leading-tight line-clamp-2">
                                                                            {doc.shortDescription}
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                                {/* Divider */}
                                                <div className="w-px bg-neutral-100 shrink-0 hidden md:block" />

                                                {/* Right Column: Desde España */}
                                                <div className="flex-1">
                                                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3 px-1">Desde España</h4>
                                                    <div className="space-y-2">
                                                        <Link
                                                            href="/legalizacion-documentos-cubanos-espana"
                                                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group/item"
                                                        >
                                                            <div className="mt-0.5 p-1.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover/item:bg-emerald-100 transition-colors shrink-0">
                                                                <FileText className="w-5 h-5" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-sm text-neutral-900 leading-tight mb-1">
                                                                    Desde España
                                                                </div>
                                                                <div className="text-xs text-neutral-500 font-normal leading-tight">
                                                                    Legalización vía Consulado de Cuba en España + MAEC.
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            const isExternal = link.href.startsWith("http");

                            // Active state logic with query param support
                            let isActive = pathname === link.href;

                            if (link.href.includes("?")) {
                                const [path, query] = link.href.split("?");
                                const params = new URLSearchParams(query);
                                const section = params.get("s");

                                if (section) {
                                    isActive = pathname === path && searchParams.get("s") === section;
                                }
                            }

                            if (isExternal) {
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "relative text-[15px] font-medium transition-all duration-200 px-4 py-2 rounded-full whitespace-nowrap text-neutral-600 hover:text-[var(--brand-dark)] hover:bg-[var(--brand)]/[0.08]"
                                        )}
                                    >
                                        {link.label}
                                    </a>
                                );
                            }

                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={cn(
                                        "relative text-[15px] font-medium transition-all duration-200 px-4 py-2 rounded-full whitespace-nowrap",
                                        isActive
                                            ? "bg-[var(--brand)]/[0.10] text-[var(--brand-dark)] shadow-sm"
                                            : "text-neutral-600 hover:text-[var(--brand-dark)] hover:bg-[var(--brand)]/[0.08]"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        {/* Compañía Mega Menu */}
                        <div className="relative group">
                            <button
                                className={cn(
                                    "flex items-center gap-1 text-[15px] font-medium transition-all duration-200 px-4 py-2 rounded-full whitespace-nowrap text-neutral-600 hover:text-[var(--brand-dark)] hover:bg-[var(--brand)]/[0.08] group-hover:text-[var(--brand-dark)]",
                                    ["/sobre-nosotros", "/contacto", "/faq"].some(path => pathname.startsWith(path)) && "bg-[var(--brand)]/[0.10] text-[var(--brand-dark)] shadow-sm"
                                )}
                            >
                                Nosotros
                                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                            </button>

                            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                                <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-2 w-[320px] grid grid-cols-1 gap-1">
                                    {[
                                        { title: "Sobre nosotros", href: "/sobre-nosotros", icon: Users, desc: "Nuestra historia y equipo" },
                                        { title: "Contacto", href: "/contacto", icon: Phone, desc: "Estamos para ayudarte" },
                                        { title: "Preguntas frecuentes", href: "/faq", icon: HelpCircle, desc: "Respuestas directas" },
                                    ].map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group/item"
                                        >
                                            <div className="mt-0.5 p-1.5 rounded-lg bg-neutral-100 text-neutral-500 group-hover/item:bg-brand-light group-hover/item:text-brand-dark transition-colors shrink-0">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm text-neutral-900 leading-tight mb-0.5">
                                                    {item.title}
                                                </div>
                                                <div className="text-xs text-neutral-500 font-medium">
                                                    {item.desc}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </nav>

                    {/* Right Side: Desktop CTA & Mobile Toggle */}
                    <div className="flex-1 flex justify-end items-center gap-2 z-50 relative">
                        <div className="hidden md:flex items-center gap-2">

                            <Link
                                href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, quiero más información sobre vuestros servicios.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="default"
                                    size="sm"
                                    className="bg-brand-solid text-neutral-900 font-bold hover:opacity-90 hover:shadow-lg border-transparent px-5 h-10 transition-all duration-300"
                                    leftIcon={<WhatsAppIcon className="h-5 w-5" />}
                                >
                                    WhatsApp
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="flex items-center justify-center p-2 rounded-full hover:bg-black/[0.04] transition-all duration-200 md:hidden z-50 relative cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <XIcon className="h-5 w-5" />
                            ) : (
                                <MenuIcon className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-white transition-opacity duration-300 md:hidden flex flex-col pt-20 px-6 overflow-y-auto overflow-x-hidden h-[100dvh]",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <nav className="flex flex-col space-y-8 pb-20 mt-4">
                    {navLinks.map((link) => {
                        if (link.label === "Legalizaciones") {
                            return (
                                <div key={link.label}>
                                    <button
                                        onClick={() => setIsLegalizacionesExpanded(!isLegalizacionesExpanded)}
                                        className="flex items-center justify-between w-full text-2xl font-bold tracking-tight text-foreground/80"
                                    >
                                        {link.label}
                                        <ChevronDown
                                            className={cn(
                                                "w-5 h-5 transition-transform duration-200",
                                                isLegalizacionesExpanded && "rotate-180"
                                            )}
                                        />
                                    </button>
                                    <div
                                        className={cn(
                                            "pl-4 space-y-6 border-l-2 border-neutral-100 overflow-hidden transition-all duration-300 ease-in-out",
                                            isLegalizacionesExpanded ? "max-h-[1200px] opacity-100 mt-6" : "max-h-0 opacity-0"
                                        )}
                                    >
                                        <div>
                                            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Documentos Cubanos</h4>
                                            <div className="space-y-4 pl-2">
                                                {documentsData.map((doc) => {
                                                    if (doc.id === 'otros-documentos') {
                                                        return (
                                                            <Link
                                                                key={doc.slug}
                                                                href="/legalizacion-documentos-cubanos-espana-minjus-consulado"
                                                                className="flex items-center gap-3 text-lg font-medium text-neutral-600 hover:text-brand-solid group/mobile-item"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                <div className="p-1.5 rounded-lg bg-neutral-100 text-neutral-500 group-hover/mobile-item:bg-brand-light group-hover/mobile-item:text-brand-dark transition-colors shrink-0">
                                                                    <ArrowRight className="w-5 h-5" />
                                                                </div>
                                                                Ver todo
                                                            </Link>
                                                        );
                                                    }

                                                    return doc.isWhatsappAction ? (
                                                        <a
                                                            key={doc.slug}
                                                            href={`https://wa.me/34642066283?text=${encodeURIComponent("Hola, tengo una consulta sobre otros documentos legalizados.")}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-3 text-lg font-medium text-neutral-600 hover:text-brand-solid group/mobile-item"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            <div className="p-1.5 rounded-lg bg-neutral-100 text-neutral-500 group-hover/mobile-item:bg-brand-light group-hover/mobile-item:text-brand-dark transition-colors shrink-0">
                                                                <doc.icon className="w-5 h-5" />
                                                            </div>
                                                            {doc.title}
                                                        </a>
                                                    ) : (
                                                        <Link
                                                            key={doc.slug}
                                                            href={`/${doc.slug}`}
                                                            className="flex items-center gap-3 text-lg font-medium text-neutral-600 hover:text-brand-solid group/mobile-item"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            <div className="p-1.5 rounded-lg bg-neutral-100 text-neutral-500 group-hover/mobile-item:bg-brand-light group-hover/mobile-item:text-brand-dark transition-colors shrink-0">
                                                                <doc.icon className="w-5 h-5" />
                                                            </div>
                                                            {doc.title}
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Desde España</h4>
                                            <div className="space-y-4 pl-2">
                                                <Link
                                                    href="/legalizacion-documentos-cubanos-espana"
                                                    className="flex items-center gap-3 text-lg font-medium text-neutral-600 hover:text-emerald-600 group/mobile-item"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover/mobile-item:bg-emerald-100 transition-colors shrink-0">
                                                        <FileText className="w-5 h-5" />
                                                    </div>
                                                    Desde España
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        const isExternal = link.href.startsWith("http");
                        if (isExternal) {
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl font-bold tracking-tight text-foreground/80 hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            )
                        }
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-2xl font-bold tracking-tight text-foreground/80 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        )
                    })}

                    {/* Mobile Compañía Section */}
                    <div className="space-y-4">
                        <button
                            onClick={() => setIsNosotrosExpanded(!isNosotrosExpanded)}
                            className="flex items-center justify-between w-full text-2xl font-bold tracking-tight text-foreground/80"
                        >
                            Nosotros
                            <ChevronDown
                                className={cn(
                                    "w-5 h-5 transition-transform duration-200",
                                    isNosotrosExpanded && "rotate-180"
                                )}
                            />
                        </button>
                        <div
                            className={cn(
                                "pl-4 space-y-4 border-l-2 border-neutral-100 overflow-hidden transition-all duration-300 ease-in-out",
                                isNosotrosExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            )}
                        >
                            {[
                                { title: "Sobre nosotros", href: "/sobre-nosotros", icon: Users },
                                { title: "Contacto", href: "/contacto", icon: Phone },
                                { title: "Preguntas frecuentes", href: "/faq", icon: HelpCircle },
                            ].map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="flex items-center gap-3 text-lg font-medium text-neutral-600 hover:text-brand-solid group/mobile-item"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <div className="p-1.5 rounded-lg bg-neutral-100 text-neutral-500 group-hover/mobile-item:bg-brand-light group-hover/mobile-item:text-brand-dark transition-colors shrink-0">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                </nav>

                <div className="mt-auto mb-8 space-y-4">

                    <Link
                        href={`${WHATSAPP_URL_BASE}?text=${encodeURIComponent("Hola, quiero más información sobre vuestros servicios.")}`}
                        target="_blank"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Button
                            variant="default"
                            size="lg"
                            fullWidth
                            className="bg-brand-solid text-neutral-950 hover:opacity-90 shadow-lg cursor-pointer"
                            leftIcon={<WhatsAppIcon className="h-5 w-5" />}
                        >
                            Hablar por WhatsApp
                        </Button>
                    </Link>

                </div>
            </div>
        </>
    );
}

// Inline Icons
function MenuIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>;
}

function XIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>;
}

function WhatsAppIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>;
}
