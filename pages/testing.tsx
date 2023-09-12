
import React, { useEffect, useState } from 'react'
import { useCounter } from '@/store/counterStore'
import { shallow } from 'zustand/shallow'
import { useGetState } from '@/hooks/useGetState'
import { getAllIconic } from '@/service/iconic'
import useApi from '@/hooks/useApi'
import { Category } from '@/models/Category'
import Image from 'next/image'

type Props = {}

export default function testing({ }: Props) {
  const promiseAll = () => Promise.resolve(getAllIconic())
  const { response } = useApi({ service: promiseAll, effects: [] })
  const [products, setProducts] = useState<Category[]>([])
  const counter = useGetState(useCounter, ((state: any) => state.count))
  const cartItems = useGetState(useCounter, ((state: any) => state.items))
  const [productId, setProductId] = useState<number>()
  const { increment, addToCart, removeItem } = useCounter()
  useEffect(() => {
    if (response?.length) {
      setProducts(response)
    }
  }, [response?.length])

  console.log(cartItems);

  function handleSubmit(e: any) {
    e.preventDefault()
    const filterProduct = products.filter((product) => product.id === productId)
    addToCart(filterProduct[0])

  }

  return (
    <div>
      <p>Count: {counter}</p>

      <div>
        {products.map((product) =>
          <form onSubmit={handleSubmit}>
            <p>{product.price}</p>
            <Image src={product.picture} width={300} height={300} alt={product.name as string} />
            <button className='bg-blue-700 px-10 py-2 text-white' onClick={() => setProductId(product.id)}>Add to Cart</button>
          </form>
        )}
        <button>Submit</button>

      </div>
      <button onClick={() => increment(10)}>increment by 10</button>
      <button onClick={() => removeItem()}>Remove Item</button>

    </div>
  )
} 