import { create } from "zustand";

type UIState = {
    mobileMenuOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;

    activeTestimonialIndex: number;
    setActiveTestimonialIndex: (index: number) => void;
    nextTestimonial: (len: number) => void;
};

export const useUIStore = create<UIState>((set) => ({
    mobileMenuOpen: false,
    openMenu: () => set({ mobileMenuOpen: true }),
    closeMenu: () => set({ mobileMenuOpen: false }),
    toggleMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),

    activeTestimonialIndex: 0,
    setActiveTestimonialIndex: (index) => set({ activeTestimonialIndex: index }),
    nextTestimonial: (len) =>
        set((s) => ({ activeTestimonialIndex: (s.activeTestimonialIndex + 1) % len })),
}));
