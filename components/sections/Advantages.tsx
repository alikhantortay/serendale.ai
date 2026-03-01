"use client";

import { advantages } from "@/data/advantages";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";

function AdvantageCard({
                           icon,
                           title,
                           description,
                       }: {
    icon: string;
    title: string;
    description: string;
}) {
    const ref = useRef<HTMLDivElement | null>(null);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const glow = useMotionTemplate`radial-gradient(240px 240px at ${mx}px ${my}px, rgba(255,255,255,0.14), rgba(255,255,255,0) 60%)`;

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
    };

    return (
        <motion.article
            ref={ref}
            onMouseMove={onMove}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
        >
            <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: glow }} />
            <div className="relative">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-montserrat text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/80">{description}</p>
            </div>
        </motion.article>
    );
}

export function Advantages() {
    return (
        <section id="advantages" className="scroll-mt-24 md:scroll-mt-32 py-16 sm:py-20">
            <Container>
                <motion.header
                    className="max-w-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2 className="font-montserrat text-2xl font-semibold md:text-4xl">
                        Why Choose Us
                    </h2>

                    <motion.p
                        className="mt-4 text-white/80 text-sm sm:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
                    >
                        Our platform combines speed, security and scalability to deliver enterprise-grade performance for modern applications.
                    </motion.p>
                </motion.header>

                <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {advantages.map((a) => (
                        <AdvantageCard key={a.id} icon={a.icon} title={a.title} description={a.description} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
