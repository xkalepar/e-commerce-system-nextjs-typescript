import { create } from "zustand";

interface UseStoreModalStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const useStoreModal = create<UseStoreModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
