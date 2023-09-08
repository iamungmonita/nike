import React, { useEffect, useState } from 'react';

import { Carousel, IconButton } from '@/core';
import useApi from '@/hooks/useApi';
import { Category } from '@/models/Category';
import { getAllPopular } from '@/service/popular';

type Props = {};

export default function cart({}: Props) {
  const [carousel, setCarousel] = useState<Category[]>([]);
  const promiseALl = () => Promise.resolve(getAllPopular());
  const { response } = useApi({ service: promiseALl, effects: [] });

  useEffect(() => {
    if (response?.length) {
      setCarousel(response);
    }
  }, [response?.length]);

  return (
    <section>
      <div className="p-5 space-y-5">
        <div className="text-center">
          <p>BAG</p>
          <p>0 Items | -</p>
        </div>
        <div className="border p-3">
          <h2 className="text-[20px] text-red-600">Members get free shipping on order $50+</h2>
          <p>Become a nike member for fast free shipping on orders +$50 </p>
        </div>
        <div className="border-t pt-5">
          <p>There are no items in your bag.</p>
        </div>
        <div className="py-10">
          <h2 className="font-medium text-2xl">Summary</h2>
          <div className="flex justify-between items-center">
            <p>Do you have a promotional code?</p>
            <IconButton NoBackgroundHover={true} NoPadding={true} IconHeight={20} IconWidth={20} IconImage={'/icons/arrow_down.svg'} />
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
          <div className="flex justify-between items-center">
            <p>Total</p>
            <IconButton NoBackgroundHover={true} NoPadding={true} IconHeight={20} IconWidth={20} IconImage={'/icons/minus.svg'} />
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
