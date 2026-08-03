import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

import { fetchReviews, Review } from "@/lib/services/reviews";

const ReviewCard = ({ review }: { review: Review }) => (
    <div className="w-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/15 transition-all duration-300 group">
        <div className="flex items-center gap-4 mb-4">
            {review.photo ? (
                <img src={review.photo} alt={review.name} className="w-10 h-10 rounded-full object-cover shadow-sm bg-white" />
            ) : (
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm font-bold text-[#1B4332] shadow-sm">
                    {review.name.charAt(0)}
                </div>
            )}
            <div>
                <p className="text-sm font-bold text-white">{review.name}</p>
                <div className="flex text-yellow-400 text-[10px] gap-0.5 mt-0.5">
                    {[...Array(review.stars)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 drop-shadow-sm">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    ))}
                </div>
            </div>
        </div>
        <p className="text-sm text-neutral-200 leading-relaxed font-medium opacity-95 line-clamp-4">
            {review.text}
        </p>
        <p className="text-xs text-neutral-400 mt-2">{typeof review.date === 'string' ? review.date : 'Hace un tiempo'}</p>
    </div>
);

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/?q=place_id:ChIJ0x0LiBg5g4IR3pzId98xnoA";
const GOOGLE_WRITE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJ0x0LiBg5g4IR3pzId98xnoA";

const GoogleReviewsBadge = () => (
    <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-3 pr-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer group/badge w-fit"
    >
        {/* Google G Icon (Simplified) */}
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
        </div>

        <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1">
                <span className="text-white font-bold text-lg leading-none">5.0</span>
                <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 drop-shadow-sm"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                    ))}
                </div>
            </div>
            <p className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
                200+ reseñas verificadas
            </p>
        </div>

        <ArrowRight className="w-5 h-5 text-neutral-500 group-hover/badge:text-white transition-colors ml-2" />
    </a>
);

export async function Reseñas() {
    const reviews = await fetchReviews();

    return (
        <Section id="testimonios" className="py-12 md:py-32 bg-[#0B2319] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Background Gradient - Subtle Radial */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1B4332] via-[#0D281E] to-[#051610] opacity-100" />

                {/* Decorative Elements (Auroras) */}
                <div className="absolute top-[-10%] right-[-5%] w-full max-w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-10%] w-full max-w-[600px] h-[600px] bg-[#1B4332]/40 blur-[100px] rounded-full mix-blend-overlay" />

                {/* Aurora Effect behind reviews - Subtle Glow */}
                <div className="absolute top-1/2 right-0 w-[50%] h-[100%] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4 mix-blend-screen" />
            </div>

            <Container className="relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-20 items-center">

                    {/* Left Column: Sticky Content */}
                    <div className="flex flex-col justify-center h-full px-4 md:px-0">
                        <h2 className="text-3xl md:text-[44px] font-black tracking-tight mb-4 text-white drop-shadow-sm leading-[1.1]">
                            La experiencia de otras familias
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-300 font-medium mb-8 leading-relaxed max-w-lg">
                            La opinión de cientos de cubanos que ya confiaron en nuestra gestoría para sus trámites migratorios en España.
                        </p>

                        {/* Trust Indicator - Mobile (below subtitle, above marquees) */}
                        <div className="flex lg:hidden flex-col items-start gap-3 mb-8">
                            <GoogleReviewsBadge />
                            <a
                                href={GOOGLE_WRITE_REVIEW_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-100 transition-all duration-300"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Déjanos tu opinión en Google
                            </a>
                        </div>

                        {/* Trust Indicator - Desktop Only */}
                        <div className="hidden lg:flex flex-col items-start gap-3 border-t border-white/10 pt-8 mt-4">
                            <GoogleReviewsBadge />
                            <a
                                href={GOOGLE_WRITE_REVIEW_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-2"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Déjanos tu opinión en Google
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Vertical Marquees */}
                    <div
                        className="relative h-[60vh] lg:h-[120vh] lg:-my-32 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden"
                        style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
                    >
                        {/* Column 1: Scroll Up (Slow) */}
                        <div
                            className="animate-scroll-up flex flex-col gap-4"
                            style={{ animationDuration: '300s' }}
                        >
                            {[...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
                                <ReviewCard key={`col1-${i}`} review={review} />
                            ))}
                        </div>

                        {/* Column 2: Scroll Up (Slower + Offset) */}
                        <div
                            className="animate-scroll-up flex flex-col gap-4 pt-32"
                            style={{ animationDuration: '420s' }}
                        >
                            {[...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
                                <ReviewCard key={`col2-${i}`} review={review} />
                            ))}
                        </div>
                    </div>

                    {/* Trust Indicator - Mobile Only (now rendered above in left column) */}

                </div>
            </Container>
        </Section>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
