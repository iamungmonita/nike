import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { AHelmet, IconButton, Side, Sidebar } from '@/core';
import useApi from '@/hooks/useApi';
import { Category } from '@/models/Category';
import { getAllIconic } from '@/service/iconic';

type Props = {};

export default function Clearance({ }: Props) {
  const [items, setItems] = useState<Category[] | null>(null);
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const PromsieAll = () => Promise.resolve(getAllIconic());
  const { response } = useApi({ service: PromsieAll, effects: [] });

  useEffect(() => {
    setItems(response);
  }, [response?.length]);

  function toggleFilter() {
    setShowFilter(!showFilter);
  }

  return (
    <main>
      <AHelmet>Clearance Outlet Deals & Discounts. Nike.com</AHelmet>
      <section>
        <div className="px-[5%]">
          <div className="flex justify-between h-20 bg-white items-center">
            <div className="md:text-2xl font-medium text-md">Sale - Up to 50% off</div>
            <div className="flex justify-end gap-x-5">
              <div className={`flex gap-x-3 items-center text-sm`}>
                <p className='md:block hidden'>{!showFilter ? 'Hide' : 'Show'} Filters</p>
                <IconButton IconImage={'/icons/filter.svg'} IconHeight={20} IconWidth={20} NoBackgroundHover={true} onClick={toggleFilter} />
              </div>
              <div className="flex gap-x-3 items-center text-sm">
                <p className='md:block hidden'>Sort By</p>
                <IconButton IconImage={'/icons/arrow_down.svg'} IconHeight={20} IconWidth={20} NoBackgroundHover={true} />
              </div>
            </div>
          </div>
          <div className="grid  grid-cols-2  lg:grid-cols-5 h-auto w-full flex-wrap">
            <div className={`${!showFilter ? 'block' : 'hidden'} animate__animated duration-100`}>
              <Side />
            </div>
            <div className="col-span-4">
              <div className="gap-x-5 lg:pl-5 items-top grid grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
                {items?.map((card) => (
                  <div key={card.id} className="flex cursor-pointer">
                    <div className={`h-auto`}>
                      <div className="group/image">
                        <Image
                          className={`w-[450px] h-auto  lg:w-[300px] lg:max-h-[300px] object-contain`}
                          src={card.picture}
                          height={300}
                          width={300}
                          alt=""
                        />
                        <div className="py-[5%]">
                          <div className=" gap-x-1 hidden group-hover/image:flex">
                            {[1, 2, 3, 4].map((e, index) => (
                              <Image
                                key={index}
                                className={`min-w-[40px] h-[40px] object-cover`}
                                src={card.picture}
                                height={40}
                                width={40}
                                alt=""
                              />
                            ))}
                          </div>
                          <div className="group-hover/image:hidden">
                            {card.tag && <p className="text-sm text-red-800">{card.tag}</p>}
                            <p className="font-medium">{card.name}</p>
                            <p className="text-sm text-gray-700">
                              {card.categoryId === 1 ? `Men's Shoes` : card.categoryId === 2 ? `Women's Shoes` : `Kids' Shoes`}
                            </p>
                            <p className="text-gray-700 text-sm">{card.categoryId} colors</p>
                          </div>
                          {card.price && (
                            <p className="py-5">
                              {'$' + card.price}{' '}
                              {card.discountedPrice && <span className="font-medium line-through text-sm">{'$' + card.discountedPrice}</span>}
                            </p>
                          )}
                          {card.price && <p className="text-green-700 text-sm">{card.price} % off</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
