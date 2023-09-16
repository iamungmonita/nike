import { Category } from '@/models/Category'
import IconButton from '../IconButton'
import Card from '../Card'
import style from '@/styles/Scrollbar.module.scss'
import { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import useScreenWidth from '@/hooks/useScreenWidth'

export interface Carousel2Props {
    productItem: Category[],
    CardVersion: number,
    itemTitleCloser?: boolean,
    itemTitle?: string
}
export default function Carousel2(props: Carousel2Props) {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const screen = useScreenWidth()
    const { productItem, CardVersion, itemTitleCloser, itemTitle, } = props

    function previousSlide() {
        setCurrentSlide((curr) => (curr === 0 ? productItem.length - 1 : curr - 1))
    }
    function nextSlide() {
        setCurrentSlide((curr) => (curr === productItem.length - 1 ? 0 : curr + 1))
    }
    return (
        <section className='w-full pt-5 pb-10 px-[5%]'>
            <div className='sm:hidden'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev'
                    }}
                    scrollbar={screen ? { draggable: true } : { draggable: false }}>
                    <div className='flex items-center justify-between py-5'>
                        {itemTitle && <h2 className='text-2xl font-medium'>{itemTitle}</h2>}
                        <div className='gap-x-3 flex'>
                            <div className={`bg-gray-200 rounded-full slider-arrow button-prev`}>
                                <IconButton IconImage={'/icons/arrow_left.svg'} IconWidth={30} IconHeight={30} onClick={previousSlide} />
                            </div>
                            <div className={`bg-gray-200 rounded-full slider-arrow button-next`}>
                                <IconButton IconImage={'/icons/arrow_right.svg'} IconWidth={30} IconHeight={30} onClick={nextSlide} />
                            </div>
                        </div>
                    </div>
                    <ul className={`flex px-[5%] pb-5`}>
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
            <div className='hidden sm:block md:hidden relative'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={2.5}
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev'
                    }}
                    scrollbar={screen ? { draggable: true } : { draggable: false }}>
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
                    <ul className={`flex px-[5%] pb-5`}>
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
            <div className='hidden md:block relative'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={3.5}
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev'
                    }}
                    scrollbar={screen ? { draggable: true } : { draggable: false }}>
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
                    <ul className={`overflow-x-scroll ${style.scroll_bar} ${CardVersion === 3 ? 'grid grid-cols-1 gap-y-3 sm:flex' : 'flex'} px-[5%] pb-5`}>
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