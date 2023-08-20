import React from 'react'
import Image from 'next/image'
import { Product } from '@/models/product';
import { Button } from '..';
import Link from 'next/link';


export default function index({ name, pic, price, tag, description, shop, gender }: Product) {
    console.log(pic);

    return (
        <div className='mb-5'>
            <div className={`h-96 w-96`}>
                <Image className='object-cover object-left-top h-96 w-96' src={pic} alt='pic' width={800} height={800} />
            </div>
            <div className='flex justify-between items-center mt-3 '>
                <div>
                    {tag ? <p>{tag}</p> : ''}
                    <h2 className='text-lg font-semibold tracking-wide'>{name}</h2>
                </div>
                {price ? <h2 className='pr-3'>${price}</h2> : ''}
            </div>
            <p className={`font-light ${shop ? 'mb-10' : ''}`}>{description}</p>
            {gender ? <p className='font-light text-black/50'>{gender = 'men' ? `Men's Shoes` : gender = 'women' ? `Women's Shoes` : `Big Kid's Shoes`}</p> : ''}
            {shop ? <Link href={'/'} className='underline font-semibold'>Shop</Link> : ''}
        </div>
    )
}