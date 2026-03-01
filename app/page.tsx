import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Advantages } from "@/components/sections/Advantages";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Advantages />
                <Testimonials />
            </main>
            <Footer />
        </>
    );
}
