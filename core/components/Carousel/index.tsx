
import { Category } from '@/models/Category'
import IconButton from '../IconButton'
import Card from '../Card'

interface CarouselProps {
    productItem: Category[],
    itemVersion: number,
    itemTitleCloser?: boolean,
    itemSize: number | string
    itemTitle?: string,
}

export default function Carousel(props: CarouselProps) {
    const { productItem, itemVersion, itemTitleCloser, itemSize, itemTitle } = props
    return (
        <div className='w-full '>
            <div className='flex items-center justify-between py-5 px-[5%]'>
                <h2 className='text-2xl font-medium'>{itemTitle && itemTitle}</h2>
                <div className='gap-x-3 hidden sm:flex'>
                    <div className='bg-gray-200 rounded-full'>
                        <IconButton IconImage={'/icons/arrow_left.svg'} IconWidth={30} IconHeight={30} />
                    </div>
                    <div className='bg-gray-200 rounded-full'>
                        <IconButton IconImage={'/icons/arrow_right.svg'} IconWidth={30} IconHeight={30} />
                    </div>
                </div>
            </div>
            <ul className='overflow-x-scroll scroll_bar flex px-[5%]'>
                {productItem.map((item, index) => <Card key={index}
                    itemVersion={itemVersion}
                    itemTitleCloser={itemTitleCloser}
                    itemSize={itemSize}
                    itemPicture={item.picture}
                    itemTag={item.tag}
                    itemName={item.name}
                    itemPrice={item.price}
                    itemCategory={item.category}
                    itemDescription={item.description}
                    itemShop={item.shop} />
                )}
            </ul>
        </div>

    )

}