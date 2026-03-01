export const withBasePath = (p: string) => {
    const base = process.env.NODE_ENV === "production" ? "/serendale.ai" : "";
    return `${base}${p}`;
};
