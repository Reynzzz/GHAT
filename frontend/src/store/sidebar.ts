import { create } from "zustand";
interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const sidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  openSidebar: () => set({ isOpen: true }), // Pass an object to the state updater
  closeSidebar: () => set({ isOpen: false }), // Pass an object to the state updater
}));

export default sidebarStore;
