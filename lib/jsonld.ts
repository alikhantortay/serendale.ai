import { testimonials } from "@/data/testimonials";

export function reviewsJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Serendale AI Platform",
        review: testimonials.map((t) => ({
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: "5" },
            author: { "@type": "Person", name: t.name },
            reviewBody: t.text,
        })),
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue:
                testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length,
            reviewCount: testimonials.length,
        },
    };
}
