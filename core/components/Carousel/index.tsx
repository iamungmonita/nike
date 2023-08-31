
import { Category } from '@/models/Category'
import IconButton from '../IconButton'
import Card from '../Card'
import style from '@/styles/Scrollbar.module.scss'
import { useState } from 'react'

interface CarouselProps {
    productItem: Category[],
    CardVersion: number,
    itemTitleCloser?: boolean,
    itemTitle?: string
}

export default function Carousel(props: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const { productItem, CardVersion, itemTitleCloser, itemTitle, } = props

    function previousSlide() {
        setCurrentSlide((curr) => (curr === 0 ? productItem.length - 1 : curr - 1))



    }
    function nextSlide() {
        setCurrentSlide((curr) => (curr === productItem.length - 1 ? 0 : curr + 1))


    }
    console.log(currentSlide);

    return (
        <div className='w-full pt-5 pb-10'>
            <div className='flex items-center justify-between py-5 px-[5%]'>
                {itemTitle && <h2 className='text-2xl font-medium'>{itemTitle}</h2>}
                <div className='gap-x-3 hidden sm:flex '>
                    <div className='bg-gray-200 rounded-full'>
                        <IconButton IconImage={'/icons/arrow_left.svg'} IconWidth={30} IconHeight={30} onClick={previousSlide} />
                    </div>
                    <div className='bg-gray-200 rounded-full'>
                        <IconButton IconImage={'/icons/arrow_right.svg'} IconWidth={30} IconHeight={30} onClick={nextSlide} />
                    </div>
                </div>
            </div>
            <ul className={`overflow-x-scroll ${style.scroll_bar} ${CardVersion === 3 ? 'grid grid-cols-1 gap-y-3 sm:flex' : 'flex'} px-[5%] pb-5`}  >
                {productItem.map((item, index) =>
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
                )
                }
            </ul >
        </div >
    )

}