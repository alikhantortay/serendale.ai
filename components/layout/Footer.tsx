import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black">
            <Container className="py-12 sm:py-14">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <h3 className="font-montserrat text-xl font-semibold">SERENDALE.AI</h3>
                        <p className="mt-4 text-sm text-white/70">
                            Building scalable AI solutions for the future.
                        </p>
                    </div>

                    <nav aria-label="Footer navigation">
                        <h4 className="font-semibold">Navigation</h4>
                        <ul className="mt-4 space-y-2 text-sm text-white/80">
                            <li><Link href="/#hero" className="hover:text-white transition">Home</Link></li>
                            <li><Link href="/#advantages" className="hover:text-white transition">Advantages</Link></li>
                            <li><Link href="/#testimonials" className="hover:text-white transition">Testimonials</Link></li>
                            <li><Link href="/#get-started" className="hover:text-white transition">Get Started</Link></li>
                            <li><Link href="/#read-more" className="hover:text-white transition">Read More</Link></li>
                        </ul>
                    </nav>

                    <div>
                        <h4 className="font-semibold">Contact</h4>
                        <ul className="mt-4 space-y-2 text-sm text-white/80">
                            <li>Email: contact@serendale.ai</li>
                            <li>Phone: +1 (555) 123-4567</li>
                            <li>Location: Global</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 sm:mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60">
                    © {new Date().getFullYear()} Serendale. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
