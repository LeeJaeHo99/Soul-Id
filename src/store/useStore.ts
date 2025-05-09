import { create } from "zustand";
import { ResultStore } from "@/types/DataType";

export const useResultStore = create<ResultStore>((set) => ({
    SO: 0,
    setSO: (v: number) => set((state) => ({ SO: state.SO + v })),
    OP: 0,
    setOP: (v: number) => set((state) => ({ OP: state.OP + v })),
    AD: 0,
    setAD: (v: number) => set((state) => ({ AD: state.AD + v })),
    HP: 0,
    setHP: (v: number) => set((state) => ({ HP: state.HP + v })),
}));