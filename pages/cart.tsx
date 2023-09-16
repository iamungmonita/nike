import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { AHelmet, Button, Carousel, IconButton } from '@/core';
import useApi from '@/hooks/useApi';
import { useGetState } from '@/hooks/useGetState';
import { Category } from '@/models/Category';
import { getAllPopular } from '@/service/popular';
import { cartCounter } from '@/store/counterStore';

export default function Cart() {

  const [carousel, setCarousel] = useState<Category[]>([]);
  const promiseALl = () => Promise.resolve(getAllPopular());
  const { response } = useApi({ service: promiseALl, effects: [] });
  const [promotionCode, setPromotionCode] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  const [quantity, setQuantity] = useState<number>(1);
  const total = useGetState(cartCounter, (state: any) => state.count);
  const fee = total * 0.02;
  const items = useGetState(cartCounter, (state: any) => state.items) ?? [];
  const result = useGetState(cartCounter, (state: any) => state.item);
  const qty = useGetState(cartCounter, (state: any) => state.qty);
  const [size, setSize] = useState<string>('S');
  const [totalQty, setTotalQty] = useState<number>(0)
  const { incrementQuantity, updateItems, removeAll, changeSize, increment, decrement } = cartCounter();


  useEffect(() => {
    if (response?.length) {
      setCarousel(response);
    }
  }, [response?.length]);


  function showPromotionCode() {
    setPromotionCode(!promotionCode);
  }

  function onIncrQuantity(index: number, amount: number) {
    const quantity = (amount += 1);
    incrementQuantity(index, quantity);
    increment(items[index].price, 1)
    setTotalQty(totalQty + 1)
  }
  function onChangeSize(index: number) {
    changeSize(size, index)
  }

  function onDcrQuantity(index: number, amount: number) {
    if (amount === 0) {
      return;
    }
    const quantity = (amount -= 1);
    incrementQuantity(index, quantity);
    decrement(items[index].price, 1)
    setTotalQty(totalQty - 1)
  }

  function deleteItem(index: number) {
    if (items > 1) {
      decrement(items[index].price * items[index].quantity, items[index].quantity)
      items.splice(index - 1, index)
    }
    else {
      decrement(items[index].price * items[index].quantity, items[index].quantity)
      items.splice(index, 1)
    }
    updateItems(items);
  }
  // const qty = items.filter((item: Category) => item.quantity > 2).map((e: Category) => e.quantity)



  return (
    <section>
      <AHelmet>Cart. Nike Store.</AHelmet>
      <div className="max-w-5xl mx-auto space-y-5 p-5 md:p-0">
        <div className="text-center md:hidden mb-10">
          <p className="text-2xl font-medium">BAG</p>
          <p>{qty + " Items | - "}</p>
        </div>
        <div className="md:grid grid-cols-6 md:gap-x-10">
          <div className="md:col-span-4">
            <div className="border p-3">
              <h2 className="text-[20px] text-red-600">Members get free shipping on order $50+</h2>
              <p>Become a nike member for fast free shipping on orders +$50 </p>
            </div>
            <div className="border-t pt-5">
              <h2 className="hidden md:block text-2xl font-medium">BAG</h2>
              <div className="space-y-5 pt-5">
                {items.length > 0 &&
                  items.map((item: any, index: number) => (
                    <div className="flex gap-x-5  border-b pb-5" key={item.id}>
                      <Image src={item.picture} height={150} width={150} alt={item.name as string} />
                      <div className='space-y-3 w-full'>
                        <div className='flex justify-between items-center w-full'>
                          <h2 className='font-medium text-xl'>{item.name}</h2>
                          <div className="flex items-center">
                            <IconButton
                              IconImage={'/icons/heart.svg'}
                              IconHeight={20}
                              IconWidth={20}
                              NoPadding={true}
                              NoBackgroundHover={true}
                              CustomizeStyle='px-2' />
                            <IconButton
                              onClick={() => deleteItem(index)}
                              IconImage={'/icons/garbage.svg'}
                              IconHeight={20}
                              IconWidth={20}
                              NoPadding={true}
                              NoBackgroundHover={true}
                              CustomizeStyle='px-2'
                            />
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 space-y-1">
                          <p>Basketball Shoes</p>
                          <p>Description of the materials</p>
                          <div className="flex gap-x-5 items-center" onClick={() => onChangeSize(index)}>
                            <select value={item.size} onChange={(e) => setSize(e.target.value)} className="border text-center pl-4 py-1 w-[100px]">
                              <option value="S">S</option>
                              <option value="M">M</option>
                              <option value="L">L</option>
                            </select>
                          </div>
                          <div className='flex w-[100px] border items-center'>
                            <IconButton
                              onClick={() => onDcrQuantity(index, item.quantity)}
                              IconImage={'/icons/minus.svg'}
                              IconHeight={10}
                              IconWidth={10}
                            />
                            <p className='px-5'>{item.quantity}</p>
                            <IconButton
                              IconImage={'/icons/plus-black.svg'}
                              IconHeight={10}
                              IconWidth={10}
                              onClick={() => onIncrQuantity(index, item.quantity)}
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="py-10 md:pb-10 md:pt-0 flex flex-col gap-y-3 md:col-span-2">
            <h2 className="font-medium text-2xl">Summary</h2>
            <div className="flex items-center">
              <p className="mr-10">Do you have a promotional code?</p>
              <IconButton
                onClick={showPromotionCode}
                NoBackgroundHover={true}
                NoPadding={true}
                IconHeight={20}
                IconWidth={20}
                IconImage={`${promotionCode ? '/icons/arrow_up.svg' : '/icons/arrow_down.svg'}`}
              />
            </div>
            <div className={`${promotionCode ? 'block' : 'hidden'}`}>
              <input type="text" className="px-10 w-[50%] py-3 border mr-5" />
              <Button ButtonName="Apply" ButtonTextWhiteBackgroundBlack={true} />
            </div>
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <p>{'$' + total}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Estimated Shipping and Handling</p>
              <p>{'$' + fee}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Estimated Tax</p>
              <IconButton NoBackgroundHover={true} NoPadding={true} IconHeight={20} IconWidth={20} IconImage={'/icons/minus.svg'} />
            </div>
            <div className="flex justify-between items-center border-y py-5">
              <p>Total: {'$' + total}</p>
              <IconButton NoBackgroundHover={true} NoPadding={true} IconHeight={20} IconWidth={20} IconImage={'/icons/minus.svg'} />
            </div>
            <div className="flex flex-col gap-y-5">
              <Button ButtonName="Checkout" ButtonTextWhiteBackgroundBlack={true} customStyle="p-5" />
              <Button ButtonName="Paypal" customStyle="p-5 bg-gray-300 text-black border" />
            </div>
          </div>
        </div>
        <div className="py-10">
          <h2 className="font-medium text-2xl">Favorites</h2>
          <p>Want to review your favorites?</p>
          <p>
            <span className="underline font-medium">Join Us</span> or <span className="underline font-medium">Sign In</span>
          </p>
        </div>
      </div>
      <div>
        <Carousel productItem={carousel} CardVersion={1} itemTitle="You might also like" />
      </div>
    </section>
  );
}
