import { create } from "zustand";

type SectionState = {
	activeSection: string;
	setActiveSection: (section: string) => void;
};

export const useActiveSection = create<SectionState>((set) => ({
	activeSection: "home",
	setActiveSection: (section) => set({ activeSection: section }),
}));
