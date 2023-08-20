import React from 'react'
import { useEffect, useState } from 'react'
import { Product } from '@/models/product'
import { Card } from '..'
import { Button } from '..'
import Image from 'next/image'
type Props = {

    MainTitle?: string,
    getAllFunction: Function
}

export default function index(
    { MainTitle, getAllFunction }: Props) {
    const [results, setResults] = useState<Product[]>([])
    useEffect(() => {
        initFunction()
    }, [])
    const initFunction = () => {
        Promise.all([getAllFunction()]).then((response: [Product[]]) => {
            const res = response[0]
            setResults(res)
        })
    }
    return (
        <section className='my-20'>
            <h2 className='text-[30px] ml-14 my-5'>{MainTitle}</h2>
            <div className={`max-w-6xl mx-auto ${results.length > 2 ? 'overflow-x-scroll' : ''} `}>
                {MainTitle !== "Featured" ?
                    <div>
                        <div className='flex gap-2.5'>
                            {results.map((result, index) =>
                                <Card key={index} name={result.name} pic={result.pic} description={result.description} shop={result.shop} price={result.price} gender={result.gender} />)}
                        </div>
                    </div> :
                    <div className='flex gap-2.5'>
                        {results.map((result, index) =>
                            <div key={index} className='relative'>
                                <Image src={result.pic} alt={result.name} width={800} height={800} />
                                <div className='absolute bottom-10 left-10 space-y-3'>
                                    <div className='text-white'>
                                        <p className='text-lg '>{result.tag}</p>
                                        <p className='text-2xl'>{result.name}</p>
                                    </div>
                                    <Button text={`${index === 0 ? 'Shop' : 'Shop All'}`} bg_color={true} />
                                </div>
                            </div>
                        )}
                    </div>
                }
            </div>
        </section>

    )
}