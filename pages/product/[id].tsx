import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Button } from '@/core'
type Props = {}

export default function index({ }: Props) {
    const router = useRouter()
    const { id } = router.query

    console.log(id);

    return (
        <div className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-6 text-left py-5 gap-x-10'>
                <div className='flex gap-x-2  col-span-4 h-[80vh]'>
                    <div className='flex flex-col min-w-[30px] gap-2 overflow-y-scroll overflow-x-hidden '>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pic) =>
                            <div className='min-w-[50px]'>
                                <Image className='object-cover w-full h-full' src={'/pictures/desktop/iconic/1.webp'} height={60} width={60} alt='' />
                            </div>
                        )}
                    </div>
                    <div className='w-full h-full'>
                        <Image className='w-full h-full object-cover aspect-auto' src={'/pictures/desktop/iconic/1.webp'} height={400} width={400} alt='' />
                    </div>
                </div>
                <div className='p-2 space-y-5 col-span-2 overflow-scroll h-[80vh]'>
                    <div>
                        <h2 className='text-2xl font-medium'>{id}</h2>
                        <h2 className='text-md'>Basketball Shoes</h2>
                        <h2 className='text-md'>100$</h2>
                    </div>
                    <div className='max-w-[60px] gap-x-2 flex'>
                        <Image className='object-cover w-full h-full rounded-md' src={'/pictures/desktop/iconic/1.webp'} height={50} width={50} alt='' />
                        <Image className='object-cover w-full h-full rounded-md' src={'/pictures/desktop/iconic/1.webp'} height={50} width={50} alt='' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='font-medium'>Select Size</div>
                        <div className='font-medium text-gray-500'>Size Guides</div>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) =>
                            <button className='border px-3 py-2 rounded-md'>{num}</button>
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
    )
}