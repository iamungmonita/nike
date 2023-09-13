import { Category } from '@/models/Category';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface useCounter {
  count: number;
  title: string;
  items: Category[];
  increment: (value: number) => void;
  findIndex: (value: number) => void;
  item: number;
  addToCart: (a: Category) => void;
  incrementQuantity: (value: number) => void;
  removeItem: () => void;
}
export const useCounter = create<useCounter>()(
  persist(
    (set, get) => ({
      count: 0,
      title: 'Testing',
      items: [],
      item: 0,
      increment: (value: number) =>
        set((state) => ({
          count: state.count + value,
        })),
      addToCart: (newProduct: Category) => set((state) => ({ items: [...state.items, newProduct] })),
      findIndex: (id: number) => set((state) => ({ item: state.items.findIndex((a) => a.id === id) })),
      incrementQuantity: (item) =>
        set((state) => ({ items: [...state.items, { ...state.items[get().item], quantity: state.items[item].quantity++ }] })),

      removeItem: () => set((state) => ({ items: [], count: 0 })),
    }),

    { name: 'global', getStorage: () => localStorage }
  )
);
