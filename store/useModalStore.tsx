"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ModalStore = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

export const useModalStore = create<ModalStore>()(
    persist(
        (set) => ({
            isOpen: false,
            open: () => set({ isOpen: true }),
            close: () => set({ isOpen: false }),
            toggle: () => set((state) => ({ isOpen: !state.isOpen })),
        }),
        { name: "modal-storage" }
    )
);
