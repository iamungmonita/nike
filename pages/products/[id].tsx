import { getAllPopular } from '@/service/popular'
import React, { useEffect, useState } from 'react'
import { Category } from '@/models/Category'
import useApi from '@/hooks/useApi'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { AHelmet, Button } from '@/core'
type Props = {}

export default function index({ }: Props) {
    const [products, setProducts] = useState<Category[]>([])
    const [product, setProduct] = useState<Category>()
    const promiseAll = () => Promise.resolve(getAllPopular())
    const { response } = useApi({ service: promiseAll, effects: [] })
    const router = useRouter()
    const { id } = router.query
    const filterId = Number(id)

    useEffect(() => {
        if (response?.length) {
            setProducts(response)
        }

    }, [response?.length])

    const result = products.filter((pro) => pro.id === filterId)
    return (
        <div>

            {result.map((res) =>
                <div key={res.id} className='max-w-5xl mx-auto'>
                    <AHelmet>{res.name}</AHelmet>
                    <div className='grid grid-cols-6 text-left py-5 gap-x-10'>
                        <div className='flex gap-x-2  col-span-4 h-[80vh]'>
                            <div className='flex flex-col min-w-[30px] gap-2 overflow-y-scroll overflow-x-hidden '>
                                {[1, 2, 3, 4, 5].map((pic) =>
                                    <div className='min-w-[50px]' key={pic}>
                                        <Image className='object-cover w-full h-full' src={res.picture} height={60} width={60} alt='' />
                                    </div>
                                )}
                            </div>
                            <div className='w-full h-full'>
                                <Image className='w-full h-full object-cover aspect-auto' src={res.picture} height={400} width={400} alt='' />
                            </div>
                        </div>
                        <div className='p-2 space-y-5 col-span-2 overflow-scroll h-[80vh]'>
                            <div>
                                <h2 className='text-2xl font-medium'>{res.name}</h2>
                                <h2 className='text-md'>{`${res.categoryId === 1 ? `Men's Shoes` : res.categoryId === 2 ? `Women's Shoes` : `Kid's Shoes`}  `}</h2>
                                <h2 className='text-md'>{'$' + res.price}</h2>
                            </div>
                            <div className='max-w-[100px] gap-x-2 flex'>
                                <Image className='object-cover w-full h-full rounded-md' src={res.picture} height={100} width={100} alt='' />
                                <Image className='object-cover w-full h-full rounded-md' src={res.picture} height={100} width={100} alt='' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='font-medium'>Select Size</div>
                                <div className='font-medium text-gray-500'>Size Guides</div>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) =>
                                    <button key={num} className='border px-3 py-2 rounded-md'>{num}</button>
                                )}
                            </div>
                            <div className='text-center'>
                                <p>4 interest-free payments of $32.50 with Klarna. <span className='underline'>Learn More</span></p>
                            </div>
                            <div className='flex flex-col gap-y-5'>
                                <Button ButtonName='Add to Bag' ButtonTextWhiteBackgroundBlack={true} customStyle={'p-5'} />
                                <Button ButtonName='Favorite' customStyle={'p-5 bg-white text-black border'} />
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}