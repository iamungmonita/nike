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
        itemSizeSmallScreen
    } = props

    return (
        <>
            {CardVersion === 1 &&
                <div className={`h-auto [&:not(:last-child)]:mr-5 `} >
                    <Image className={`min-w-[400px] h-[400px] object-contain`} src={itemPicture} height={400} width={400} alt='' />
                    <div className='py-[5%]'>
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
                <>
                    {/* small screen */}
                    <div className={`h-auto block sm:hidden [&:not(:last-child)]:mr-5`}>
                        <Image className='min-w-[400px] h-[400px] object-contain' src={itemPicture} height={400} width={400} alt='' />

                        <div className='py-[5%]'>
                            <p className='text-sm font-light sm:text-xl sm:font-medium'>{itemTag}</p>
                            <span><p className='text-xl font-medium block sm:hidden'>{itemTag && itemName}</p><p className='text-xl font-medium'>{!itemTag && itemName}</p> <p>{itemPrice && itemPrice}</p></span>
                            <p>{itemDescription && itemDescription}</p>
                            {itemCategoryId && <p className='text-sm'>{`${itemCategoryId === 1 ? `Men's Shoe` : itemCategoryId === 2 ? `Women's Shoe` : `Kid's Shoes`}`}</p>}
                            {itemShop && <Link href={'/'} className='underline'>Shop</Link>}
                        </div>
                    </div>
                    {/* large screen */}
                    <div className={`min-w-[300px] h-auto  hidden sm:block [&:not(:last-child)]:mr-5`}>

                        <Image className='w-[300px] h-[300px] object-contain' src={itemPicture} height={400} width={400} alt='' />

                        <div className='py-[5%] flex flex-col'>
                            {itemTag && <p className='text-sm font-light sm:text-xl sm:font-medium'>{itemTag}</p>}
                            <span><p className='text-sm block sm:hidden'>{itemTag && itemName}</p><p className='text-md'>{!itemTag && itemName}</p> <p>{itemPrice && itemPrice}</p></span>
                            <p>{itemDescription && itemDescription}</p>
                            {itemCategoryId && <p className='text-sm'>{`${itemCategoryId === 1 ? `Men's Shoe` : itemCategoryId === 2 ? `Women's Shoe` : `Kid's Shoes`}`}</p>}
                            <Link href={'/'} className='underline justify-self-end'>  {itemShop && 'Shop'}</Link>
                        </div>
                    </div>
                </>
            }
            {CardVersion === 3 &&
                <>
                    {/* small screen */}

                    <div className={`min-w-[30px] h-auto grid grid-cols-4 justify-between items-center sm:hidden`}>
                        <div className={`col-span-1 order-2`}>
                            <Image className='w-[100%] h-[100%] object-contain' src={itemPicture} height={400} width={400} alt='' />
                        </div>
                        <div className='py-[5%] order-1 col-span-3'>
                            <p className='text-sm font-light sm:text-xl sm:font-medium'>{itemTag}</p>
                            <span><p className='text-xl font-medium block sm:hidden'>{itemTag && itemName}</p><p className='text-sm font-light'>{!itemTag && itemName}</p> <p>{itemPrice && itemPrice}</p></span>
                            <p className='font-medium'>{itemDescription && itemDescription}</p>
                            {itemCategoryId && <p className='text-sm'>{`${itemCategoryId === 1 ? `Men's Shoe` : itemCategoryId === 2 ? `Women's Shoe` : `Kid's Shoes`}`}</p>}
                            {itemShop && <Link href={'/'} className='underline hidden'>Shop</Link>}
                        </div>
                    </div>

                    {/* large screen */}
                    <div className={`min-w-[400px] h-auto  hidden sm:block [&:not(:last-child)]:mr-5`}>

                        <Image className='w-[400px] h-[400px] object-cover' src={itemPicture} height={400} width={400} alt='' />

                        <div className='py-[5%] flex flex-col'>
                            {itemTag && <p className='text-sm font-light sm:text-xl sm:font-medium'>{itemTag}</p>}
                            <span><p className='text-xl font-medium'>{itemTag && itemName}</p><p className='text-xl font-medium'>{!itemTag && itemName}</p> <p>{itemPrice && itemPrice}</p></span>
                            <p>{itemDescription && itemDescription}</p>
                            {itemCategoryId && <p className='text-sm'>{`${itemCategoryId === 1 ? `Men's Shoe` : itemCategoryId === 2 ? `Women's Shoe` : `Kid's Shoes`}`}</p>}
                            <Link href={'/'} className='underline justify-self-end'>  {itemShop && 'Shop'}</Link>
                        </div>
                    </div>
                </>
            }
            {CardVersion === 4 &&
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