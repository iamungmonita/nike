import React, { useEffect, useState } from 'react';

import { Button, Carousel, IconButton } from '@/core';
import useApi from '@/hooks/useApi';
import { Category } from '@/models/Category';
import { getAllPopular } from '@/service/popular';

type Props = {};

export default function cart({ }: Props) {
  const [carousel, setCarousel] = useState<Category[]>([]);
  const [promotionCode, setPromotionCode] = useState<boolean>(false)
  const promiseALl = () => Promise.resolve(getAllPopular());
  const { response } = useApi({ service: promiseALl, effects: [] });

  useEffect(() => {
    if (response?.length) {
      setCarousel(response);
    }
  }, [response?.length]);
  function showPromotionCode() {
    setPromotionCode(!promotionCode)
  }
  return (
    <section>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="text-center md:hidden mb-10">
          <p className='text-2xl font-medium'>BAG</p>
          <p>0 Items | -</p>
        </div>
        <div className='md:grid grid-cols-6 md:gap-x-10'>
          <div className='md:col-span-4'>

            <div className="border p-3">
              <h2 className="text-[20px] text-red-600">Members get free shipping on order $50+</h2>
              <p>Become a nike member for fast free shipping on orders +$50 </p>
            </div>
            <div className="border-t pt-5">
              <h2 className='hidden md:block text-2xl font-medium'>BAG</h2>
              <p>There are no items in your bag.</p>
            </div>
          </div>
          <div className="py-10 md:pb-10 md:pt-0 flex flex-col gap-y-3 md:col-span-2">
            <h2 className="font-medium text-2xl">Summary</h2>
            <div className="flex items-center">
              <p className='mr-10'>Do you have a promotional code?</p>
              <IconButton onClick={showPromotionCode}
                NoBackgroundHover={true} NoPadding={true} IconHeight={20} IconWidth={20} IconImage={`${promotionCode ? '/icons/arrow_up.svg' : '/icons/arrow_down.svg'}`} />
            </div>
            <div className={`${promotionCode ? 'block' : 'hidden'}`}>
              <input type='text' className='px-10 w-[50%] py-3 border mr-5' />
              <Button ButtonName='Apply' ButtonTextWhiteBackgroundBlack={true} />
            </div>
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <IconButton NoBackgroundHover={true} NoPadding={true} IconHeight={20} IconWidth={20} IconImage={'/icons/minus.svg'} />
            </div>
            <div className="flex justify-between items-center">
              <p>Estimated Shipping and Handling</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Estimated Tax</p>
              <IconButton NoBackgroundHover={true} NoPadding={true} IconHeight={20} IconWidth={20} IconImage={'/icons/minus.svg'} />
            </div>
            <div className="flex justify-between items-center border-y py-5">
              <p>Total</p>
              <IconButton NoBackgroundHover={true} NoPadding={true} IconHeight={20} IconWidth={20} IconImage={'/icons/minus.svg'} />
            </div>
            <div className='flex flex-col gap-y-5'>
              <Button ButtonName='Checkout' ButtonTextWhiteBackgroundBlack={true} customStyle='p-5' />
              <Button ButtonName='Paypal' customStyle='p-5 bg-gray-300 text-black' />
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
