import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Side } from '@/core/layout';
import useScreenWidth from '@/hooks/UseScreenWidth';
import { Category } from '@/models/Category';
import { AHelmet } from '../';
import IconButton from '../IconButton';
import Product from '../Product';
import { SortByProps, getSortBy } from '@/service/sort-by';
import useApi from '@/hooks/useApi';

type Props = {
  products: Category[];
  category?: string | string[] | undefined,
};

export default function Products(props: Props) {
  const fetchResult = () => Promise.resolve(getSortBy())
  const { response } = useApi({ service: fetchResult, effects: [] })
  const [length, setLength] = useState<boolean>(false);
  const { products, category } = props;
  const [sortBy, setSortBy] = useState<SortByProps[]>([])
  const [message, setMessage] = useState<number>()
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [expand, setExpand] = useState<boolean>(false)
  const [refresh, setRefresh] = useState<boolean>(false)
  const [selectedFilter, setSelectedFilter] = useState<string>('Sort By')
  const [items, setItems] = useState<Category[]>([])
  const screen = useScreenWidth();
  const ref = useRef<any>(null)

  function toggleFilter() {
    setShowFilter(!showFilter);
  }
  useEffect(() => {
    if (response?.length) {
      setSortBy(response)
    }
  }, [response?.length])

  useEffect(() => {
    window.addEventListener('scroll', function scroll() {
      if (this.scrollY > 200) {
        setLength(true);
      } else {
        setLength(false);
      }
    });
  }, [length]);

  function sortbyFunction(message: number) {
    setMessage(message)
    const filter = products.filter((item) => item.id === message)
    setItems(filter)

  }
  useEffect(() => {
    document.addEventListener('click', clickOutside)
    return () => {
      document.addEventListener('click', clickOutside)
    }
  }, [ref])

  function selected(name: string, id: number) {
    setSelectedFilter(name)
    const filter = products.filter((item) => item.sortbyId === id)
    setItems(filter)
  }


  useEffect(() => {
    if (products.length && category?.length && category === 'women') {

      const fitlerWomen = products.filter((item) => item.categoryId === 2)
      setItems(fitlerWomen)

    } else {
      setItems(products)
    }
  }, [products.length, category?.length])
  function clickOutside(event: any) {
    if (ref.current && !ref.current.contains(event.target)) {
      setExpand(false)
    }
  }
  useEffect(() => {
    if (screen < 640) {
      setShowFilter(false);
    }
  }, [screen]);

  return (
    <main>
      <AHelmet>Products. Nike.com</AHelmet>
      <section className="relative">
        <div className="px-[5%]">
          <div className="flex justify-between h-20 bg-white items-center">
            <div className={`font-medium duration-500 text-md ${length ? 'fixed top-0 left-0 py-3 justify-center bg-white w-full' : 'text-xl'} z-10`}>
              <p className="pl-[5%] min-w-[200px]">Sale - Up to 50% off</p>
            </div>
            <div className={`{flex justify-end gap-x-5 flex`}>
              <div className={`gap-x-3 items-center text-sm hidden md:flex`}>
                <p className="md:block hidden">{showFilter ? 'Hide' : 'Show'} Filters</p>
                <IconButton
                  IconImage={'/icons/filter.svg'}
                  IconHeight={20}
                  IconWidth={20}
                  NoBackgroundHover={true}
                  onClick={toggleFilter}
                />
              </div>

              <div className="flex gap-x-3 items-center text-sm "></div>
              <div
                onClick={() => setExpand(!expand)}
                ref={ref}
                className="flex gap-x-3 h-10 items-center text-sm border  min-w-[200px] justify-between relative">
                <div className='pl-5'>
                  {selectedFilter}
                </div>
                <IconButton IconImage={'/icons/arrow_down.svg'} IconHeight={10} IconWidth={10} NoBackgroundHover={true} />
                <div
                  className='flex flex-col absolute top-10 w-full'
                >
                  {expand &&
                    <div>
                      {sortBy.map((item) =>
                        <div className='px-5 py-2 bg-white w-full hover:bg-slate-100'
                          key={item.id}
                          onClick={() => selected(item.name, item.id)}
                        >
                          {item.name}
                        </div>
                      )}
                    </div>
                  }
                </div>
              </div>

            </div>
          </div>
          <div className={`grid ${showFilter ? 'grid-cols-5 ' : 'grid-cols-4'} `}>
            <div className={`${showFilter ? 'block' : 'hidden'} mr-5`}>
              <Side sortbyFunction={sortbyFunction} />
            </div>
            <div className="col-span-4">
              <div className="gap-x-5 items-top grid grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
                {items.map((card) => (
                  <Product key={card.id} card={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
