
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AHelmet, IconButton, Side, Sidebar } from '@/core';
import useApi from '@/hooks/useApi';
import { Category } from '@/models/Category';
import { getAllIconic } from '@/service/iconic';
import { useCounter } from '@/store/counterStore';
import { shallow } from 'zustand/shallow';
import { useGetState } from '@/hooks/useGetState';
import { useRouter } from 'next/router';
import { Listbox } from '@headlessui/react'
type Props = {};

export default function Clearance({ }: Props) {
  const router = useRouter()
  const count = useCounter((state) => state.count)
  const [items, setItems] = useState<Category[] | null>([]);
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [length, setLength] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const counter = useGetState(useCounter, ((state: any) => state.count))
  const PromsieAll = () => Promise.resolve(getAllIconic());
  const { response } = useApi({ service: PromsieAll, effects: [] });
  const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  useEffect(() => {
    setItems(response)
  }, [response?.length])

  function toggleFilter() {
    setShowFilter(!showFilter);
  }
  function FilterProduct() {
    const filter = response?.filter((item) => item.categoryId === 1)
    if (filter?.length) {
      setItems(filter)
      setRefresh(!refresh)
    }
  }
  function FilterProductWomen() {
    const filterwomen = response?.filter((item) => item.categoryId === 2)
    if (filterwomen?.length) {
      setItems(filterwomen)
      setRefresh(!refresh)
    }
  }
  function routerPush(id: number) {
    router.push(`/product/${id}`)
  }
  useEffect(() => {
    window.addEventListener('scroll', function scroll() {
      if (this.scrollY > 200) {
        setLength(true)
      } else {
        setLength(false)
      }
    }
    )
  }, [length])


  return (
    <main>
      <AHelmet>Clearance Outlet Deals & Discounts. Nike.com</AHelmet>
      <section className='relative'>
        <div className="px-[5%]">
          <div className="flex justify-between h-20 bg-white items-center">
            <div className={`font-medium duration-500 ${length ? 'text-md fixed top-0 left-0 pl-[5%] py-3 justify-center bg-white shadow w-full' : 'md:text-2xl  text-md'} z-20`}>Sale - Up to 50% off</div>
            <div className={`{flex justify-end gap-x-5 flex`}>
              <div className={`flex gap-x-3 items-center text-sm`}>
                <p className='md:block hidden'>{!showFilter ? 'Hide' : 'Show'} Filters</p>
                <IconButton IconImage={'/icons/filter.svg'} IconHeight={20} IconWidth={20} NoBackgroundHover={true} onClick={toggleFilter} />
              </div>
              <div className="flex gap-x-3 items-center text-sm ">
                <IconButton IconImage={'/icons/gender-male.svg'} IconHeight={20} IconWidth={20} NoBackgroundHover={true} onClick={FilterProduct} />
                {/* <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                  <Listbox.Button>{selectedPerson.name}</Listbox.Button>
                  <Listbox.Options>
                    <div className='absolute top-10 bg-green-200 left-0 p-5 space-y-2 w-full'>
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          value={person}
                          disabled={person.unavailable}
                        >
                          <p>{person.name}</p>
                        </Listbox.Option>
                      ))}
                    </div>
                  </Listbox.Options>
                </Listbox> */}

              </div>
              <div className="flex gap-x-3 items-center text-sm">
                <IconButton IconImage={'/icons/gender-female.svg'} IconHeight={20} IconWidth={20} NoBackgroundHover={true} onClick={FilterProductWomen} />
              </div>
            </div>
          </div>
          <div className={` ${showFilter && 'grid-cols-5 grid'} `}>
            <div className={`${showFilter ? 'block' : 'hidden'} animate__animated duration-100 mr-5`}>
              <Side />
            </div>
            <div className="col-span-4">
              <div className="gap-x-5 items-top grid grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
                {items?.map((card) => (
                  <div key={card.id} className="flex cursor-pointer" onClick={() => routerPush(card.id)}>
                    <div className={`h-auto pb-5`}>
                      <div className="group/image">
                        <Image
                          className={`w-[400px] h-auto  object-cover`}
                          src={card.picture}
                          height={500}
                          width={500}
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
