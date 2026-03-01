"use client";

import { testimonials } from "@/data/testimonials";
import { reviewsJsonLd } from "@/lib/jsonld";
import { useUIStore } from "@/store/ui-store";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { Container } from "@/components/layout/Container";

const AUTOPLAY_MS = 5000;

export function Testimonials() {
    const jsonLd = reviewsJsonLd();

    const idx = useUIStore((s) => s.activeTestimonialIndex);
    const setIdx = useUIStore((s) => s.setActiveTestimonialIndex);
    const next = useUIStore((s) => s.nextTestimonial);

    const active = testimonials[Math.min(idx, testimonials.length - 1)];
    const progressKey = useMemo(() => `p-${idx}`, [idx]);
    const pausedRef = useRef(false);

    useEffect(() => {
        const t = setInterval(() => {
            if (!pausedRef.current) next(testimonials.length);
        }, AUTOPLAY_MS);
        return () => clearInterval(t);
    }, [next]);

    return (
        <section
            id="testimonials"
            className="scroll-mt-24 md:scroll-mt-32 py-14 sm:py-16"
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
        >
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <h2 className="font-montserrat text-2xl font-semibold md:text-4xl">
                        Testimonials
                    </h2>

                    <p className="mt-3 max-w-[720px] text-white/80 text-sm sm:text-base">
                        Feedback from people who shipped fast, kept quality high, and didn’t sacrifice performance.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {testimonials.map((t, i) => {
                            const isActive = i === idx;

                            return (
                                <button
                                    key={t.name}
                                    type="button"
                                    onClick={() => setIdx(i)}
                                    className={`rounded-full px-4 py-2 text-sm transition ${
                                        isActive ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/15"
                                    }`}
                                >
                                    {t.name}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-4 h-[2px] w-full overflow-hidden rounded bg-white/10">
                        <motion.div
                            key={progressKey}
                            className="h-full bg-white"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                        />
                    </div>

                    <div className="mt-6">
                        <AnimatePresence mode="wait">
                            <motion.article
                                key={active.name}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.12}
                                onDragEnd={(_, info) => {
                                    const threshold = 60;

                                    if (info.offset.x < -threshold) {
                                        next(testimonials.length);
                                    }

                                    if (info.offset.x > threshold) {
                                        setIdx((idx - 1 + testimonials.length) % testimonials.length);
                                    }
                                }}
                                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                                transition={{ duration: 0.28, ease: "easeOut" }}
                                className="cursor-grab active:cursor-grabbing rounded-2xl bg-white/5 p-5 sm:p-6 ring-1 ring-white/10 backdrop-blur"
                            >
                                <div className="text-sm text-white/70">{active.role}</div>
                                <h3 className="mt-1 font-montserrat text-lg font-semibold">{active.name}</h3>
                                <div className="mt-3 text-sm text-white/80">Rating: {active.rating}/5</div>
                                <p className="mt-4 text-white/90 text-sm sm:text-base">{active.text}</p>
                                <div className="mt-4 text-xs text-white/50">
                                    Drag left/right to switch • Autoplay pauses on hover
                                </div>
                            </motion.article>
                        </AnimatePresence>
                    </div>
                </motion.div>

                <Script
                    id="reviews-jsonld"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Container>
        </section>
    );
}
