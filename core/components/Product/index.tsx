import { Category } from '@/models/Category'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

type Props = {
    card: Category
}

export default function Product(props: Props) {
    const router = useRouter()
    const { card } = props
    function routerPush(id: number) {
        router.push(`/products/${id}`)
    }
    return (
        <div key={card.id} className="flex cursor-pointer" onClick={() => routerPush(card.id)}>
            <div className={`h-auto pb-5`}>
                <div className="group/image">
                    <Image
                        className={`w-[400px] h-auto  object-cover`}
                        src={card.picture}
                        height={500}
                        width={500}
                        alt=""
                    />
                    <div className="py-[5%]">
                        <div className=" gap-x-1 hidden group-hover/image:flex">
                            {[1, 2, 3, 4].map((e, index) => (
                                <Image
                                    key={index}
                                    className={`min-w-[40px] h-[40px] object-cover`}
                                    src={card.picture}
                                    height={40}
                                    width={40}
                                    alt=""
                                />
                            ))}
                        </div>
                        <div className="group-hover/image:hidden">
                            {card.tag && <p className="text-sm text-red-800">{card.tag}</p>}
                            <p className="font-medium">{card.name}</p>
                            <p className="text-sm text-gray-700">
                                {card.categoryId === 1 ? `Men's Shoes` : card.categoryId === 2 ? `Women's Shoes` : `Kids' Shoes`}
                            </p>
                            <p className="text-gray-700 text-sm">{card.categoryId} colors</p>
                        </div>
                        {card.price && (
                            <p className="py-5">
                                {'$' + card.price}{' '}
                                {card.discountedPrice && <span className="font-medium line-through text-sm">{'$' + card.discountedPrice}</span>}
                            </p>
                        )}
                        {card.price && <p className="text-green-700 text-sm">{card.price} % off</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}