import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface useCounter {
  count: number;
  title: string;
  increment: (value: number) => void;
}
export const useCounter = create<useCounter>()(
  persist(
    (set) => ({
      count: 0,
      title: 'Testing',
      increment: (value: number) =>
        set((state) => ({
          count: state.count + value,
        })),
    }),
    { name: 'global', getStorage: () => localStorage }
  )
);
