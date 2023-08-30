
import { Category } from '@/models/Category'
import IconButton from '../IconButton'
import Card from '../Card'

interface CarouselProps {
    productItem: Category[],
    CardVersion: number,
    itemTitleCloser?: boolean,
    itemSize: number,
    itemSizeSmallScreen?: number,
    itemTitle?: string,
}

export default function Carousel(props: CarouselProps) {
    const { productItem, CardVersion, itemTitleCloser, itemSize, itemTitle, itemSizeSmallScreen } = props
    return (
        <div className='w-full pt-5 pb-10'>
            <div className='flex items-center justify-between py-5 px-[5%]'>
                {itemTitle && <h2 className='text-2xl font-medium'>{itemTitle}</h2>}
                <div className='gap-x-3 hidden sm:flex '>
                    <div className='bg-gray-200 rounded-full'>
                        <IconButton IconImage={'/icons/arrow_left.svg'} IconWidth={30} IconHeight={30} />
                    </div>
                    <div className='bg-gray-200 rounded-full'>
                        <IconButton IconImage={'/icons/arrow_right.svg'} IconWidth={30} IconHeight={30} />
                    </div>
                </div>
            </div>
            <ul className={`overflow-x-scroll scroll_bar ${CardVersion === 3 ? 'grid grid-cols-1 gap-y-3 sm:flex border-t sm:border-none sm:pt-none ' : 'flex'} px-[5%] pb-5`}>
                {productItem.map((item, index) =>
                    <Card key={index}
                        CardVersion={CardVersion}
                        itemTitleCloser={itemTitleCloser}
                        itemSize={itemSize}
                        itemSizeSmallScreen={itemSizeSmallScreen}
                        itemPicture={item.picture}
                        itemTag={item.tag}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemCategory={item.category}
                        itemCategoryId={item.categoryId}
                        itemDescription={item.description}
                        itemShop={item.shop} />
                )}
            </ul>
        </div>

    )

}