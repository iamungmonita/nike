import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Link from 'next/link'

interface ItemProps {
    CardVersion: number,
    itemPicture: string | StaticImport,
    itemTag: string,
    itemName: string,
    itemPrice?: number,
    itemCategory?: string,
    itemCategoryId?: number,
    itemDescription?: string,
    itemShop?: boolean,
    itemTitleCloser?: boolean,
    itemSize: number,
    itemSizeSmallScreen?: number,
    itemCurrentSlide: number
    itemSlideLength?: number
}

export default function Card(props: ItemProps) {
    const {
        CardVersion,
        itemPicture,
        itemTag,
        itemName,
        itemPrice,
        itemCategoryId,
        itemDescription,
        itemShop,
        itemSize,
    } = props

    return (
        <>
            {CardVersion === 1 &&
                <div className={`h-auto px-[5%] sm:px-0`} >
                    <Image className={`min-w-[200px] min-h-[200px] sm:w-[350px] sm:h-[350px] object-cover`} src={itemPicture} height={400} width={400} alt='' />
                    <div className='py-3'>
                        <p className='text-sm font-light sm:text-xl sm:font-medium'>{itemTag}</p>
                        <span className='flex justify-between items-center'>{itemTag && <p className='text-xl font-medium block sm:hidden'>{itemName}</p>}<p className='font-medium text-md'>{!itemTag && itemName}</p> {itemPrice && <p className='hidden sm:block'>{'$' + itemPrice}</p>}</span>
                        <p>{itemDescription && itemDescription}</p>
                        {itemCategoryId && <p className='text-sm'>{`${itemCategoryId === 1 ? `Men's Shoe` : itemCategoryId === 2 ? `Women's Shoe` : `Kid's Shoes`}`}</p>}
                        {itemPrice && <p className='block sm:hidden'>{'$' + itemPrice}</p>}
                        {itemShop && <Link href={'/'} className='underline'>Shop</Link>}
                    </div>
                </div>
            }
            {CardVersion === 2 &&
                <div className={`h-auto px-[5%] sm:px-0`}>
                    <Image className='min-w-[200px] min-h-[200px] sm:w-[350px] sm:h-[350px] object-cover' src={itemPicture} height={400} width={400} alt='' />
                    <div className='py-[5%]'>
                        <p className='text-sm font-light sm:text-xl sm:font-medium'>{itemTag}</p>
                        <span><p className='text-xl font-medium block sm:hidden'>{itemTag && itemName}</p><p className='text-xl font-medium'>{!itemTag && itemName}</p> <p>{itemPrice && itemPrice}</p></span>
                        <p>{itemDescription && itemDescription}</p>
                        {itemCategoryId && <p className='text-sm'>{`${itemCategoryId === 1 ? `Men's Shoe` : itemCategoryId === 2 ? `Women's Shoe` : `Kid's Shoes`}`}</p>}
                        {itemShop && <Link href={'/'} className='underline'>Shop</Link>}
                    </div>
                </div>
            }
            {CardVersion === 3 &&
                <div className={` h-auto justify-between items-center hidden sm:block`}>
                    <div className={`col-span-1`}>
                        <Image className='min-w-[200px] min-h-[200px] sm:w-[350px] sm:h-[350px] object-cover' src={itemPicture} height={400} width={400} alt='' />
                    </div>
                    <div className='py-[5%]'>
                        <p className='text-sm font-light sm:text-xl sm:font-medium'>{itemTag}</p>
                        <span><p className='text-xl font-medium block sm:hidden'>{itemTag && itemName}</p><p className='text-sm font-light'>{!itemTag && itemName}</p> <p>{itemPrice && itemPrice}</p></span>
                        <p className='font-medium'>{itemDescription && itemDescription}</p>
                        {itemCategoryId && <p className='text-sm'>{`${itemCategoryId === 1 ? `Men's Shoe` : itemCategoryId === 2 ? `Women's Shoe` : `Kid's Shoes`}`}</p>}
                        {itemShop && <Link href={'/'} className='underline hidden'>Shop</Link>}
                    </div>
                </div>
            }
            {
                CardVersion === 4 &&
                <div className={`min-w-[${itemSize}px] h-auto relative`}>
                    <div className={`w-[${itemSize}px] h-auto`}>
                        <Image className='w-[100%] h-[100%] object-contain' src={itemPicture} height={400} width={400} alt='' />
                    </div>
                    <div className='p-[5%] absolute bottom-[10%]'>
                        <p className='text-md font-medium'>{itemTag}</p>
                        <span className='flex justify-between items-center'>{itemTag && <p className='text-xl font-semibold'>{itemName}</p>}<p className='font-medium text-md'>{!itemTag && itemName}</p> {itemPrice && <p className='hidden sm:block'>{'$' + itemPrice}</p>}</span>
                        <p>{itemDescription && itemDescription}</p>
                        {itemCategoryId && <p className='text-sm'>{`${itemCategoryId === 1 ? `Men's Shoe` : itemCategoryId === 2 ? `Women's Shoe` : `Kid's Shoes`}`}</p>}
                        {itemPrice && <p className='block sm:hidden'>{'$' + itemPrice}</p>}
                        {itemShop && <Link href={'/'} className='underline'>Shop</Link>}
                    </div>
                </div>
            }
        </>
    )
}