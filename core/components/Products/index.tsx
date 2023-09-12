import { Category } from '@/models/Category'
import Image from 'next/image'
import React from 'react'
import Product from '../Product'
type Props = {
    products: Category[]
}

export default function Products(props: Props) {
    const { products } = props
    return (
        <div className='grid grid-cols-3 p-[5%] gap-y-3'>
            {products.map((product, index) =>
                <Product key={index} product={product} />
            )}
        </div>
    )
}