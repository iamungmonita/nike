import { Category } from '@/models/Category'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Product from '../Product'
import { Side } from '@/core/layout'
import IconButton from '../IconButton'
import { useRouter } from 'next/router'
import { AHelmet } from '..'
import useScreenWidth from '@/hooks/useScreenWidth'
type Props = {
    products: Category[]
}

export default function Products(props: Props) {

    const [length, setLength] = useState<boolean>(false);
    const { products } = props
    const [showFilter, setShowFilter] = useState<boolean>(true);
    const screen = useScreenWidth()
    function toggleFilter() {
        setShowFilter(!showFilter);
    }
    useEffect(() => {
        window.addEventListener('scroll', function scroll() {
            if (this.scrollY > 200) {
                setLength(true)
            } else {
                setLength(false)
            }
        })
    }, [length])

    useEffect(() => {
        if (screen < 640) {
            setShowFilter(false)
        }
    }, [screen])
    return (
        <main>
            <AHelmet>Clearance Outlet Deals & Discounts. Nike.com</AHelmet>
            <section className='relative'>
                <div className="px-[5%]">
                    <div className="flex justify-between h-20 bg-white items-center">
                        <div className={`font-medium duration-500 text-md ${length ? 'fixed top-0 left-0 py-3 justify-center bg-white w-full' : 'text-xl'} z-10`}>
                            <p className='pl-[5%] min-w-[200px]'>Sale - Up to 50% off</p>
                        </div>
                        <div className={`{flex justify-end gap-x-5 flex`}>
                            <div className={`gap-x-3 items-center text-sm hidden md:flex`}>
                                <p className='md:block hidden'>{!showFilter ? 'Hide' : 'Show'} Filters</p>
                                <IconButton IconImage={'/icons/filter.svg'} IconHeight={20} IconWidth={20} NoBackgroundHover={true} onClick={toggleFilter} />
                            </div>
                            <div className="flex gap-x-3 items-center text-sm ">
                            </div>
                            <div className="flex gap-x-3 items-center text-sm">
                                <IconButton IconImage={'/icons/gender-female.svg'} IconHeight={20} IconWidth={20} NoBackgroundHover={true} />
                            </div>
                        </div>
                    </div>
                    <div className={`grid ${showFilter ? 'grid-cols-5 ' : 'grid-cols-4'} `}>
                        <div className={`${showFilter ? 'block' : 'hidden'} mr-5`}>
                            <Side />
                        </div>
                        <div className="col-span-4">
                            <div className="gap-x-5 items-top grid grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
                                {products?.map((card) => (
                                    <Product key={card.id} card={card} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}