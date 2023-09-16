import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Category } from '@/models/Category';

interface IUseCounter {
  count: number;
  title: string;
  items: Category[];
  item: number;
  qty: number;
  //
  updateItems: (value: Category[]) => void;
  increment: (value: number, quantity: number) => void;
  decrement: (value: number, quantity: number) => void;
  findIndex: (value: number) => void;
  addToCart: (a: Category) => void;
  incrementQuantity: (index: number, amount: number) => void;
  changeSize: (size: string, index: number) => void;
  removeItem: (index: number) => void;
  removeAll: () => void;
}

export const cartCounter = create<IUseCounter>()(
  persist(
    (set, get) => ({
      count: 0,
      title: 'Testing',
      items: [],
      item: 0,
      qty: 0,

      updateItems: (value: Category[]) => set((state) => ({ items: value })),
      increment: (value: number, quantity: number) => set((state) => ({ count: state.count + value, qty: state.qty + quantity })),
      decrement: (value: number, quantity: number) => set((state) => ({ count: state.count - value, qty: state.qty - quantity })),
      addToCart: (newProduct: Category) => set((state) => ({ items: [...state.items, newProduct], qty: state.qty + 1 })),
      findIndex: (id: number) => set((state) => ({ item: state.items.findIndex((a) => a.id === id) })),
      incrementQuantity: (index: number, amount: number) =>
        set((state) => {
          state.items[index].quantity = amount;
          return { ...state };
        }),
      changeSize: (size: string, index: number) =>
        set((state) => {
          state.items[index].size = size;
          return { ...state };
        }),
      removeItem: (index: number) =>
        set((state) => {
          delete state.items[index];
          return { ...state };
        }),
      removeAll: () => set((state) => ({ items: [], count: 0, qty: 0 })),
    }),

    { name: 'global', getStorage: () => localStorage }
  )
);
