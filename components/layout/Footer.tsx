"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-neutral-50 pt-20 pb-12 border-t border-neutral-200 text-neutral-900">
            <Container>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* 1. Brand & Info */}
                    <div className="flex flex-col items-start gap-6">
                        <Link href="/" className="flex items-center gap-3 font-black text-2xl tracking-tighter">
                            <Image
                                src="/images/logo-hol.png"
                                alt="Logo Gestoría HOL"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                            <span className="text-neutral-900">Gestoría HOL</span>
                        </Link>
                        <p className="text-neutral-500 text-sm leading-relaxed font-medium max-w-xs">
                            Especialistas en la gestión integral de trámites migratorios para cubanos. Seguridad, rapidez y transparencia en cada paso.
                        </p>
                        <div className="flex items-center gap-3">
                            <Link href="https://www.instagram.com/gestoria_hol?igsh=YWo3d2V2bW10anFq" target="_blank" className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50 transition-all shadow-sm">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.facebook.com/share/15SbKrvrsm/?mibextid=wwXIfr" target="_blank" className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* 2. Services */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-black text-neutral-900 text-sm uppercase tracking-widest">Servicios</h4>
                        <ul className="flex flex-col gap-3 text-neutral-500 text-sm font-medium">
                            <li><Link href="/legalizacion-documentos-cubanos-espana-minjus-consulado" className="hover:text-brand-solid transition-colors">Legalización de Cuba</Link></li>
                            <li><Link href="/legalizacion-documentos-cubanos-espana" className="hover:text-brand-solid transition-colors">Legalización desde España</Link></li>
                            <li><Link href="/residencia" className="hover:text-brand-solid transition-colors">Residencia</Link></li>
                            <li><Link href="/visados" className="hover:text-brand-solid transition-colors">Visados</Link></li>
                            <li><Link href="/nacionalidad" className="hover:text-brand-solid transition-colors">Nacionalidad</Link></li>
                        </ul>
                    </div>

                    {/* 3. Company */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-black text-neutral-900 text-sm uppercase tracking-widest">Compañía</h4>
                        <ul className="flex flex-col gap-3 text-neutral-500 text-sm font-medium">
                            <li><Link href="/sobre-nosotros" className="hover:text-brand-solid transition-colors">Sobre nosotros</Link></li>
                            <li><Link href="/terminos" className="hover:text-brand-solid transition-colors">Términos y condiciones</Link></li>
                            <li><Link href="/politica-de-privacidad" className="hover:text-brand-solid transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="/faq" className="hover:text-brand-solid transition-colors">Preguntas frecuentes</Link></li>
                        </ul>
                    </div>

                    {/* 4. Contact */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-black text-neutral-900 text-sm uppercase tracking-widest">Contacto</h4>
                        <ul className="flex flex-col gap-4 text-neutral-500 text-sm font-medium">
                            <li>
                                <a href="tel:+34642066283" className="hover:text-brand-solid transition-colors flex items-center gap-3 group">
                                    <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-brand-solid group-hover:border-brand-solid/30 transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span>+34 642 066 283</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@gestoriahol.com" className="hover:text-brand-solid transition-colors flex items-center gap-3 group">
                                    <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-brand-solid group-hover:border-brand-solid/30 transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span>info@gestoriahol.com</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 mt-0.5 shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="leading-relaxed">
                                    C/ Vicente Beltrán Grimal, 24 <br />
                                    Piso 1, Puerta D <br />
                                    46023 València, España
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-neutral-200">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs font-bold text-neutral-400 uppercase tracking-wide">
                        <span>&copy; {new Date().getFullYear()} Gestoría HOL</span>
                        <div className="hidden md:block w-1 h-1 rounded-full bg-neutral-300" />
                        <Link href="/politica-de-privacidad" className="hover:text-neutral-900 transition-colors">Privacidad</Link>
                        <Link href="/terminos" className="hover:text-neutral-900 transition-colors">Términos</Link>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-wide">
                        <span>Hecho con</span>
                        <span className="text-red-500 animate-pulse text-sm">♥</span>
                        <span>para la comunidad cubana</span>
                    </div>
                </div>

            </Container>
        </footer>
    );
}
