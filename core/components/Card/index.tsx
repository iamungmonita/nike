import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Link from 'next/link'

interface ItemProps {
    itemVersion: number,
    itemPicture: string | StaticImport,
    itemTag: string,
    itemName: string,
    itemPrice: number,
    itemCategory: string,
    itemCategoryId?: number,
    itemDescription?: string,
    itemShop?: boolean,
    itemTitleCloser?: boolean,
    itemSize: number | string
}

export default function Card(props: ItemProps) {
    const {
        itemVersion,
        itemPicture,
        itemTag,
        itemName,
        itemPrice,
        itemCategory,
        itemCategoryId,
        itemDescription,
        itemShop,
        itemTitleCloser,
        itemSize
    } = props

    return (
        <div className={`min-w-[${itemSize}px] h-full [&:not(:last-child)]:mr-5`}>
            <Image className='w-full h-full object-contain' src={itemPicture} height={500} width={500} alt='' />
            {itemVersion === 1 ?
                <div className='pb-[10%]'>
                    <p className='text-sm sm:text-xl sm:font-medium'>{itemTag}</p>
                    <span><p className='text-xl font-medium block sm:hidden'>{itemTag && itemName}</p><p className='text-xl font-medium'>{!itemTag && itemName}</p> <p>{itemPrice && itemPrice}</p></span>
                    <p>{itemDescription && itemDescription}</p>
                    <p className='text-sm sm:text-xl sm:font-medium'>{itemCategory}</p>
                    {itemShop && <Link href={'/'} className='underline'>Shop</Link>}
                </div>
                :
                <div className='pb-[10%]'>
                    <p className='text-sm sm:text-xl'>{itemTag}</p>
                    <span className='flex justify-between items-center'><p className='text-xl font-medium'>{itemName}</p> <p className='hidden sm:block'>{itemPrice && `$ ${itemPrice}`}</p></span>
                    <p className='text-sm'>{`${itemCategoryId === 1 ? `Men's Shoe` : itemCategoryId === 2 ? `Women's Shoe` : `Kid's Shoes`}`}</p>
                    {itemShop && <Link href={'/'} className='underline self-end'>Shop</Link>}
                </div>}
        </div>
    )
}