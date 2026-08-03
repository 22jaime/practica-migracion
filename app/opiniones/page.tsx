"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const GOOGLE_WRITE_REVIEW_URL =
    "https://search.google.com/local/writereview?placeid=ChIJ0x0LiBg5g4IR3pzId98xnoA";

export default function OpinionesPage() {
    return (
        <div className="min-h-screen relative flex items-center justify-start overflow-hidden bg-[#0B2319]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-family-celebration.png"
                    alt="Familia Gestoría HOL"
                    fill
                    className="object-cover object-center lg:object-right opacity-80"
                    priority
                />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-r from-[#0B2319] via-[#0B2319]/90 to-transparent md:w-3/4" />

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start translate-y-[-2rem] md:translate-y-0 mt-20 md:mt-0">
                <div className="max-w-2xl">
                    <Image
                        src="/images/logo-hol.png"
                        alt="Gestoría HOL"
                        width={72}
                        height={72}
                        className="mb-8"
                        priority
                    />
                    <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white leading-[1.1] mb-6 drop-shadow-sm">
                        Si está satisfecho con nuestros servicios...
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed font-medium">
                        Su opinión significa el mundo para nosotros. Nos ayuda a seguir mejorando y permite que otras familias confíen en nosotros para lograr su sueño en España. <br /><br />¿Nos regalas 1 minuto para dejarnos 5 estrellas?
                    </p>
                    <a
                        href={GOOGLE_WRITE_REVIEW_URL}
                        target="_self"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full sm:w-auto h-16 px-8 text-lg font-bold bg-[#00E599] text-neutral-900 border-transparent hover:opacity-90 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00E599]/20 transition-all duration-300"
                        >
                            <span className="flex items-center gap-3">
                                <StarIcon className="w-6 h-6 text-[#FBBC05]" />
                                Dejar una reseña de 5 estrellas
                            </span>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

function StarIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
