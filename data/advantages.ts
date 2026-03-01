export type Advantage = {
    id: number;
    title: string;
    description: string;
    icon: string;
};

export const advantages: Advantage[] = [
    {
        id: 1,
        title: "High Performance",
        description:
            "Process massive workloads with ultra-fast infrastructure designed for scale.",
        icon: "⚡",
    },
    {
        id: 2,
        title: "Secure by Design",
        description:
            "Built with modern security practices and AI-driven threat protection.",
        icon: "🔒",
    },
    {
        id: 3,
        title: "Global Availability",
        description:
            "Reliable cloud distribution ensures low latency worldwide.",
        icon: "🌍",
    },
    {
        id: 4,
        title: "Developer Friendly",
        description:
            "Clean APIs and documentation allow rapid integration.",
        icon: "💻",
    },
    {
        id: 5,
        title: "Scalable Architecture",
        description:
            "Easily grow from startup scale to enterprise without re-architecting.",
        icon: "📈",
    },
    {
        id: 6,
        title: "AI Powered",
        description:
            "Advanced machine learning optimizes performance automatically.",
        icon: "🤖",
    },
];
