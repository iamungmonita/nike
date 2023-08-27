import React from 'react'
import Image from 'next/image'
import image1 from '@/public/pictures/desktop/trending/1.jpeg'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type Props = {
    ImageSize?: number,
    showMainTitleOnly: boolean,
    showMainTitle: boolean,
    changeMainTitle?: boolean,
    showTag?: boolean,
    showDescription?: boolean,
    showLink?: boolean,
    showPrice?: boolean,
    showCategory?: boolean,
    changeTag?: boolean,
    ShowDetails?: boolean,
    showButton?: boolean,
    showSampelImages?: boolean,
    DisplayImage: string | StaticImport,
    MainTitle: string
}

export default function Card(props: Props) {

    const { ShowDetails = false,
        showMainTitleOnly = false,
        showMainTitle = true,
        showDescription = true,
        showCategory = true,
        showLink = true,
        showPrice = true,
        showTag = true,
        showButton = false,
        showSampelImages = true,
        DisplayImage,
        ImageSize,
        MainTitle
    } = props

    return (
        <div className={`w-[${ImageSize}px] group mx-auto bg-red-200`}>
            <div className='p-5'>
                <div className='group'>
                    <Image className='object-contain' src={DisplayImage} width={400} height={400} alt='' />
                </div>
                <div className={`pt-2 ${showSampelImages && 'group-hover:block'}`}>
                    <Image src={image1} width={50} height={50} alt='' />
                </div>

                {/* Text */}

                {/* Detailed */}
                <div className={`pt-5 ${ShowDetails ? '' : 'hidden'}`}>
                    <p className={`text-red-700`}>Just In</p>
                    <p>Tag</p>
                    <span className='flex justify-between'>
                        <h2>{MainTitle}</h2>
                        <h2>Price</h2>
                    </span>
                    <div className='group-hover:hidden'>
                        <p>description</p>
                        <p className='font-medium'>Category</p>
                        <p className='text-gray font-light'>Type </p>
                        <p className='text-gray font-light'>Color </p>
                    </div>
                    <h2>Price</h2>
                    <h2 className='text-green-700 font-medium'>Discouted Price</h2>
                    <h2 className='line-through'>Original Price</h2>
                    <Link href={'/'}>Shop</Link>
                    <div>button</div>
                </div>

                {/* General */}
                <div className={`pt-5 ${!ShowDetails ? '' : 'hidden'} `}>
                    <p className={` ${showMainTitleOnly && 'hidden'} ${showTag ? '' : 'hidden'}`}>Tag</p>
                    <span className={`flex justify-between ${showMainTitle && 'block'}`}>
                        <h2 className={`${showMainTitle && 'block'}`}> Main Title</h2>
                        <h2 className={`${showMainTitleOnly && 'hidden'} ${showPrice ? '' : 'hidden'}`}>Price</h2>
                    </span>
                    <p className={`${showMainTitleOnly && 'hidden'} ${showDescription ? '' : 'hidden'}`}>description</p>
                    <p className={`text-gray font-light ${showMainTitleOnly && 'hidden'} ${showCategory ? '' : 'hidden'}`}>Type </p>
                    <Link href={'/'} className={` ${showMainTitleOnly && 'hidden'} ${showLink ? '' : 'hidden'}`}>Shop</Link>
                    <div className={` ${showMainTitleOnly && 'hidden'} ${showButton ? '' : 'hidden'}`}>button</div>
                </div>
            </div>
        </div >
    )
}