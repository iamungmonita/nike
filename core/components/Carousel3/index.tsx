import { Category } from '@/models/Category'
import IconButton from '../IconButton'
import Image from 'next/image'
import Card from '../Card'
import style from '@/styles/Scrollbar.module.scss'
import { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import Link from 'next/link'

export interface Carousel2Props {
    productItem: Category[],
    CardVersion: number,
    itemTitleCloser?: boolean,
    itemTitle?: string
}
export default function Carousel2(props: Carousel2Props) {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const { productItem, CardVersion, itemTitleCloser, itemTitle, } = props
    // 
    function previousSlide() {
        setCurrentSlide((curr) => (curr === 0 ? productItem.length - 1 : curr - 1))
    }
    function nextSlide() {
        setCurrentSlide((curr) => (curr === productItem.length - 1 ? 0 : curr + 1))
    }
    return (
        <section className='w-full pt-5 pb-10 px-[5%]'>
            <div className='sm:hidden'>
                <div className='flex items-center justify-between py-5'>
                    {itemTitle && <h2 className='text-2xl font-medium'>{itemTitle}</h2>}
                </div>
                <ul className={`flex flex-col gap-y-5 pb-5`}>
                    {productItem.map((item, index) =>
                        <div className={`grid grid-cols-5 h-auto justify-between items-center gap-5`}>
                            <div className={`col-span-2 order-2 max-w-[300px]`}>
                                <Image className=' w-full h-full object-cover' src={item.picture} height={400} width={400} alt='' />
                            </div>
                            <div className='py-[5%] order-1 col-span-3'>
                                <p className='text-sm font-light sm:text-xl sm:font-medium'>{item.tag}</p>
                                <span><p className='text-xl font-medium block sm:hidden'>{item.tag && item.name}</p><p className='text-sm font-light'>{!item.tag && item.name}</p> <p>{item.price && item.price}</p></span>
                                <p className='font-medium'>{item.description && item.description}</p>
                                {item.categoryId && <p className='text-sm'>{`${item.categoryId === 1 ? `Men's Shoe` : item.categoryId === 2 ? `Women's Shoe` : `Kid's Shoes`}`}</p>}
                                {item.shop && <Link href={'/'} className='underline hidden'>Shop</Link>}
                            </div>
                        </div>
                    )}
                </ul >
            </div>

            <div className='hidden sm:block '>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev'
                    }}
                    scrollbar={{ draggable: true }}>
                    <div className='py-5'>
                        {itemTitle && <h2 className='text-2xl font-medium'>{itemTitle}</h2>}
                        <div className='flex'>
                            <div className={`bg-gray-200 rounded-full slider-arrow button-prev absolute z-20 top-[40%] ml-[5%]`}>
                                <IconButton IconImage={'/icons/arrow_left.svg'} IconWidth={30} IconHeight={30} onClick={previousSlide} />
                            </div>
                            <div className={`bg-gray-200 rounded-full slider-arrow button-next absolute z-20 top-[40%] right-[0%] mr-[5%]`}>
                                <IconButton IconImage={'/icons/arrow_right.svg'} IconWidth={30} IconHeight={30} onClick={nextSlide} />
                            </div>
                        </div>
                    </div>
                    <ul className={`overflow-x-scroll  flex px-[5%] pb-5`}>
                        {productItem.map((item, index) =>
                            <SwiperSlide key={index}>
                                <Card key={index}
                                    CardVersion={CardVersion}
                                    itemTitleCloser={itemTitleCloser}
                                    itemSize={item.imageSize}
                                    itemSizeSmallScreen={item.imageSmallScreen}
                                    itemPicture={item.picture}
                                    itemTag={item.tag}
                                    itemName={item.name}
                                    itemPrice={item.price}
                                    itemCategory={item.category}
                                    itemCategoryId={item.categoryId}
                                    itemDescription={item.description}
                                    itemShop={item.shop}
                                    itemCurrentSlide={currentSlide}
                                    itemSlideLength={productItem.length} />
                            </SwiperSlide>
                        )}
                    </ul >
                </Swiper >
            </div>
        </section>
    )
}