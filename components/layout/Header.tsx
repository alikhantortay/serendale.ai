"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useUIStore } from "@/store/ui-store";
import { Container } from "@/components/layout/Container";
import {withBasePath} from "@/lib/asset";

const nav = [
    { label: "Smart Contracts", href: "#smart-contracts" },
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Whitepaper", href: "#whitepaper" },
];

export function Header() {
    const mobileMenuOpen = useUIStore((s) => s.mobileMenuOpen);
    const openMenu = useUIStore((s) => s.openMenu);
    const closeMenu = useUIStore((s) => s.closeMenu);

    useEffect(() => {
        if (!mobileMenuOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [mobileMenuOpen]);

    return (
        <header className="absolute top-0 z-50 w-full">
            <Container>
                <div className="flex h-20 items-center md:h-[120px] md:items-start md:pt-[42px]">
                    <Link
                        href="/"
                        className="font-montserrat text-[18px] font-medium leading-[22px] text-white md:text-[24px] md:leading-[29px]"
                    >
                        SERENDALE.AI
                    </Link>

                    <nav
                        aria-label="Primary"
                        className="absolute left-1/2 top-[50px] hidden -translate-x-1/2 lg:flex w-[594px] h-[22px] items-center justify-between font-clash text-[18px] leading-[100%] text-white"
                    >
                        {nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="relative whitespace-nowrap font-clash text-[18px] text-white transition-[color,opacity] duration-200 hover:opacity-80 after:absolute after:bottom-[-8px] after:left-0 after:h-px after:w-0 after:bg-white after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full focus-visible:outline-none focus-visible:after:w-full"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="ml-auto flex items-center gap-4 md:gap-5 md:pt-[6px]">
                        <a href="#" aria-label="GitHub">
                            <Image src={withBasePath("/icons/github.svg")} alt="GitHub" width={20} height={20} />
                        </a>
                        <a href="#" aria-label="Discord">
                            <Image src={withBasePath("/icons/discord.svg")} alt="Discord" width={20} height={20} />
                        </a>
                        <a href="#" aria-label="Reddit" className="hidden sm:inline-flex">
                            <Image src={withBasePath("/icons/reddit.svg")} alt="Reddit" width={20} height={20} />
                        </a>
                        <a href="#" aria-label="Twitter" className="hidden sm:inline-flex">
                            <Image src={withBasePath("/icons/twitter.svg")} alt="Twitter" width={20} height={20} />
                        </a>

                        <button
                            type="button"
                            onClick={openMenu}
                            aria-label="Open menu"
                            aria-expanded={mobileMenuOpen}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
                        >
              <span className="relative block h-[14px] w-[18px]">
                <span className="absolute left-0 top-0 block h-px w-full bg-white" />
                <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-white" />
                <span className="absolute left-0 bottom-0 block h-px w-full bg-white" />
              </span>
                        </button>
                    </div>
                </div>
            </Container>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={closeMenu}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.aside
                            role="dialog"
                            aria-modal="true"
                            className="absolute right-0 top-0 h-full w-[320px] max-w-[85vw] border-l border-white/10 bg-black/80 backdrop-blur-xl"
                            initial={{ x: 40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 40, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <div className="flex items-center justify-between px-5 py-5">
                                <div className="font-montserrat text-[16px] font-semibold text-white">
                                    Menu
                                </div>

                                <button
                                    type="button"
                                    onClick={closeMenu}
                                    aria-label="Close menu"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                                >
                  <span className="relative block h-[18px] w-[18px]">
                    <span className="absolute left-1/2 top-1/2 block h-px w-[18px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                    <span className="absolute left-1/2 top-1/2 block h-px w-[18px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
                  </span>
                                </button>
                            </div>

                            <div className="px-5 pb-6">
                                <div className="space-y-2">
                                    {nav.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-clash text-[16px] text-white transition hover:bg-white/10"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center gap-4">
                                    <a href="#" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition">
                                        <Image src={withBasePath("/icons/github.svg")} alt="GitHub" width={18} height={18} />
                                    </a>
                                    <a href="#" aria-label="Discord" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition">
                                        <Image src={withBasePath("/icons/discord.svg")} alt="Discord" width={18} height={18} />
                                    </a>
                                    <a href="#" aria-label="Reddit" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition">
                                        <Image src={withBasePath("/icons/reddit.svg")} alt="Reddit" width={18} height={18} />
                                    </a>
                                    <a href="#" aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition">
                                        <Image src={withBasePath("/icons/twitter.svg")} alt="Twitter" width={18} height={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
