import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Category } from '@/models/Category';

interface IUseCounter {
  count: number;
  title: string;
  items: Category[];
  item: number;
  //
  increment: (value: number) => void;
  findIndex: (value: number) => void;
  addToCart: (a: Category) => void;
  incrementQuantity: (index: number, amount: number) => void;
  removeItem: (index: number) => void;
}

export const cartCounter = create<IUseCounter>()(
  persist(
    (set, get) => ({
      count: 0,
      title: 'Testing',
      items: [],
      item: 0,
      increment: (value: number) => set((state) => ({ count: state.count + value })),
      addToCart: (newProduct: Category) => set((state) => ({ items: [...state.items, newProduct] })),
      findIndex: (id: number) => set((state) => ({ item: state.items.findIndex((a) => a.id === id) })),
      incrementQuantity: (index: number, amount: number) =>
        set((state) => {
          state.items[index].quantity = amount;
          return { ...state };
        }),
      removeItem: (index: number) =>
        set((state) => {
          delete state.items[index];
          return state;
        }),
    }),

    { name: 'global', getStorage: () => localStorage }
  )
);
