import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { AHelmet, IconButton, Side, Sidebar } from '@/core';
import useApi from '@/hooks/useApi';
import { Category } from '@/models/Category';
import { getAllIconic } from '@/service/iconic';

type Props = {};

export default function Clearance({}: Props) {
  const [_, setSideBar] = useState<Category[] | null>(null);
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const PromsieAll = () => Promise.resolve(getAllIconic());
  const { response } = useApi({ service: PromsieAll, effects: [] });

  useEffect(() => {
    setSideBar(response);
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
                <p>{!showFilter ? 'Hide' : 'Show'} Filters</p>
                <IconButton IconImage={'/icons/filter.svg'} IconHeight={20} IconWidth={20} NoBackgroundHover={true} onClick={toggleFilter} />
              </div>
              <div className="flex gap-x-3 items-center text-sm">
                <p>Sort By</p>
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
                {[
                  {
                    id: 1,
                    name: 'Nike Blazer Mid Pro Club',
                    color: 6,
                    genderCategory: 1,
                    price: '100',
                    discountPercentage: '10',
                    deletedPrice: '20',
                    tag: 'Sustainable Materials',
                  },
                  {
                    id: 2,
                    name: 'Nike Blazer Mid Pro Club',
                    color: 6,
                    genderCategory: 1,
                    price: '100',
                  },
                  {
                    id: 3,
                    name: 'Nike Blazer Mid Pro Club',
                    color: 6,
                    genderCategory: 2,
                    price: '100',
                  },
                  {
                    id: 4,
                    name: 'Nike Blazer Mid Pro Club',
                    color: 6,
                    genderCategory: 1,
                    price: '100',
                    discountPercentage: '10',
                    deletedPrice: '20',
                    tag: 'Sustainable Materials',
                  },
                  {
                    id: 5,
                    name: 'Nike Blazer Mid Pro Club',
                    color: 6,
                    genderCategory: 1,
                    price: '100',
                  },
                  {
                    id: 6,
                    name: 'Nike Blazer Mid Pro Club',
                    color: 6,
                    genderCategory: 1,
                    price: '100',
                  },
                  {
                    id: 7,
                    name: 'Nike Blazer Mid Pro Club',
                    color: 6,
                    genderCategory: 1,
                    price: '100',
                  },
                  {
                    id: 8,
                    name: 'Nike Blazer Mid Pro Club',
                    color: 6,
                    genderCategory: 1,
                    price: '100',
                  },
                  {
                    id: 9,
                    name: 'Nike Blazer Mid Pro Club',
                    color: 6,
                    genderCategory: 1,
                    price: '100',
                  },
                ].map((card) => (
                  <div key={card.id} className="flex cursor-pointer">
                    <div className={`h-auto`}>
                      <div className="group/image">
                        <Image
                          className={`w-[450px] h-auto  lg:w-[300px] lg:max-h-[300px] object-contain`}
                          src={'/pictures/desktop/iconic/1.webp'}
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
                                src={'/pictures/desktop/iconic/1.webp'}
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
                              {card.genderCategory === 1 ? `Men's Shoes` : card.genderCategory === 2 ? `Women's Shoes` : `Kids' Shoes`}
                            </p>
                            <p className="text-gray-700 text-sm">{card.color} colors</p>
                          </div>
                          {card.price && (
                            <p className="py-5">
                              {'$' + card.price}{' '}
                              {card.deletedPrice && <span className="font-medium line-through text-sm">{'$' + card.deletedPrice}</span>}
                            </p>
                          )}
                          {card.discountPercentage && <p className="text-green-700 text-sm">{card.discountPercentage} % off</p>}
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
