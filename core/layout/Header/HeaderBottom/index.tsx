import React from 'react'
import { HeaderBottom } from '@/constants'
import style from '@/styles/HeaderBottom.module.scss'
import { useState, useEffect } from 'react'
type Props = {}

export default function index({ }: Props) {
    const [curr, setCurr] = useState<number>(0)

    const prev = () => {
        setCurr((curr) => (curr === 0 ? HeaderBottom.length - 1 : curr - 1))
    }
    const next = () => {
        setCurr((curr) => (curr === HeaderBottom.length - 1 ? 0 : curr + 1))
    }
    const [autoSlide, setAutoSlide] = useState<boolean>(true)

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, 3000)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <section className='bg-backgroundHeader'>
            <div className='relative w-full mx-auto overflow-x-hidden justify-center items-center text-center '>
                <div className={`${style.slider} transition-transform ease-out duration-500 items-center`}>
                    {HeaderBottom.map((bottom, index) =>
                        <div className={`transition-transform ease-out duration-500 text-sm p-3 ${style.image}`} style={{ transform: `translateX(-${curr * 100}%)` }} key={index} >
                            <h2 className='font-bold'>{bottom.link}</h2>
                            <h2 className='text-sm'>{bottom.description} <button className='underline text-[13px]'>{bottom.button}</button></h2>

                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}