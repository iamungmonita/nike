import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import useApi from '@/hooks/useApi';
import { useGetState } from '@/hooks/useGetState';
import { Category } from '@/models/Category';
import { getAllIconic } from '@/service/iconic';
import { cartCounter } from '@/store/counterStore';

type Props = {};

export default function testing({ }: Props) {
  const promiseAll = () => Promise.resolve(getAllIconic());
  const { response } = useApi({ service: promiseAll, effects: [] });
  const [products, setProducts] = useState<Category[]>([]);
  const [exist, setExist] = useState<Category[]>([]);
  const counter = useGetState(cartCounter, (state: any) => state.count);
  const cartItems = useGetState(cartCounter, (state: any) => state.items);
  const [productId, setProductId] = useState<number>();
  const { increment, addToCart, removeItem } = cartCounter();
  useEffect(() => {
    if (response?.length) {
      setProducts(response);
    }
  }, [response?.length]);

  console.log(cartItems);

  function handleSubmit(e: any) {
    e.preventDefault();
    const filterProduct = products.filter((product) => product.id === productId);
    const exist = products.filter((product) => product.id === filterProduct[0].id);

    addToCart(filterProduct[0]);
    increment(filterProduct[0].price, 0);
    // removeItem()
  }

  return (
    <div>
      <p>Count: {counter}</p>
      <div>{exist.length}</div>
      <div>
        {products.map((product) => (
          <form onSubmit={handleSubmit}>
            <p>{product.price}</p>
            <Image src={product.picture} width={300} height={300} alt={product.name as string} />
            <button className="bg-blue-700 px-10 py-2 text-white" onClick={() => setProductId(product.id)}>
              Add to Cart
            </button>
          </form>
        ))}
        <button>Submit</button>
      </div>
      <button onClick={() => increment(10, 0)}>increment by 10</button>
      <button>Remove Item</button>
    </div>
  );
}
