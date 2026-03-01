import Image from "next/image";
import { Container } from "@/components/layout/Container";
import {withBasePath} from "@/lib/asset";

export function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden bg-black min-h-[680px] sm:min-h-[760px] md:min-h-[1090px]">
            <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
                <div className="absolute left-[168px] top-[742px] h-[462px] w-[464px] rounded-full bg-[#8593E8]/20 blur-[100px]"/>
                <div className="absolute left-[602px] top-[652px] h-[467px] w-[467px] rounded-full bg-[#5D6EF3]/20 blur-[125px]"/>
                <div className="absolute left-[1076px] top-[783px] h-[446px] w-[446px] rounded-full bg-[#FC4FF6]/20 blur-[100px]"/>
            </div>

            <div className="pointer-events-none absolute inset-x-0 left-4 right-4 bottom-0 sm:bottom-[-20px] md:left-10 md:right-10 md:bottom-[-90px] z-0 flex justify-center">
                <picture className="w-full max-w-[1605px]">
                    <source
                        media="(max-width: 640px)"
                        srcSet={withBasePath("/images/hero-mobile.webp")}
                    />
                    <img
                        src={withBasePath("/images/hero.webp")}
                        alt="Hero illustration"
                        width={1605}
                        height={619}
                        className="w-full select-none"
                        loading="eager"
                        fetchPriority="high"
                    />
                </picture>
            </div>

            <Container className="relative z-10 text-center">
                <div className="pt-[120px] md:pt-[260px]">
                    <h1 className="font-montserrat font-medium tracking-[0.02em]">
            <span
                className="block bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] bg-clip-text text-transparent text-[34px] leading-[44px] sm:text-[42px] sm:leading-[52px] md:text-[80px] md:leading-[98px]">
              THE BEST WEBSITE EVER
            </span>

                        <span
                            className="block text-white text-[34px] leading-[44px] sm:text-[42px] sm:leading-[52px] md:text-[80px] md:leading-[98px]">
              Scalable.
            </span>
                    </h1>

                    <p style={{fontFamily: "var(--font-montserrat)", fontWeight: 400}} className="mx-auto mt-4 md:mt-[18px] w-full max-w-[723px] text-center text-white tracking-[0.72px] text-[13px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[20px] md:leading-[33px]">
                        Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data
                        security. Proof of Stake, its consensus
                        <br/>
                        algorithm enables unlimited speeds.
                    </p>

                    <div
                        className="mt-6 md:mt-[28px] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-[12px] relative z-20">
                        <a href="#get-started" className="inline-flex h-[56px] w-full max-w-[220px] sm:h-[70px] sm:w-[176px] items-center justify-center rounded-full bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] p-[2px] transition-transform duration-300 hover:scale-[1.03]">
              <span
                  className="inline-flex h-full w-full items-center justify-center rounded-full bg-black font-space text-[18px] leading-[24px] sm:text-[20px] sm:leading-[26px] text-white transition-colors duration-300 hover:bg-[#111111]">
                Get started
              </span>
                        </a>

                        <a href="#read-more" className="inline-flex h-[56px] w-full max-w-[220px] sm:h-[70px] sm:w-[167px] items-center justify-center rounded-full bg-black border-2 border-white font-space text-[18px] leading-[24px] sm:text-[20px] sm:leading-[26px] text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-[#1a1a1a]">
                            Read more
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
