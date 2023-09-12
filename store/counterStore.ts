import { Category } from '@/models/Category';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface useCounter {
  count: number;
  title: string;
  items: Category[];
  increment: (value: number) => void;
  addToCart: (a: Category) => void;
  removeItem: () => void;
}
export const useCounter = create<useCounter>()(
  persist(
    (set) => ({
      count: 0,
      title: 'Testing',
      items: [],
      increment: (value: number) =>
        set((state) => ({
          count: state.count + value,
        })),
      addToCart: (newProduct: Category) => set((state) => ({ items: [...state.items, newProduct] })),
      removeItem: () => set((state) => ({ items: [] })),
    }),

    { name: 'global', getStorage: () => localStorage }
  )
);
