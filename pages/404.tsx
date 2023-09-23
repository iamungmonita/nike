import React, { useEffect, useState } from 'react'
import Link from 'next/link'
type Props = {}

import { AHelmet, Carousel } from '@/core'
import { getAllProducts } from '@/service/products'
import useApi from '@/hooks/useApi'
import { Category } from '@/models/Category'
export default function index({ }: Props) {
    const [products, setProducts] = useState<Category[]>([])
    const promise = () => Promise.resolve(getAllProducts())
    const { response } = useApi({ service: promise, effects: [] })
    useEffect(() => {
        if (response?.length) {
            setProducts(response)
        }
    }, [response?.length])
    return (
        <section>
            <AHelmet>Page not found. Nike.com</AHelmet>
            <div
                className='max-w-6xl mx-auto text-center relative p-[5%]'>
                <div className=''>
                    <h2 className='text-xl pb-5'>
                        We can't find the page you are looking for.
                        <br />
                        Sorry for the inconvenience.</h2>
                    <button className='px-10 py-2 bg-gray-100 text-sm '>
                        <Link href={'/'}>BACK TO HOMEPAGE</Link>
                    </button>
                </div>
            </div>
            <Carousel productItem={products} itemTitle='You might also like' CardVersion={1} />
        </section>
    )
}