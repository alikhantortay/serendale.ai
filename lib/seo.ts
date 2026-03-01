export const defaultSEO = {
    title: "Serendale",
    description:
        "High-performance AI platform with scalable infrastructure and enterprise-grade security.",
    url: "https://alikhantortay.github.io/serendale.ai/",
    image: "/og-image.jpg",
};

export function generateMetadata(
    overrides?: Partial<typeof defaultSEO>
) {
    const meta = { ...defaultSEO, ...overrides };

    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: meta.url,
            images: [meta.image],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: [meta.image],
        },
    };
}
