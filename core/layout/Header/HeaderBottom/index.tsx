import { Header } from '@/models/Header'
import React from 'react'
import { useEffect, useState } from 'react'
import { getHeaderBottom } from '@/pages/service/navigtion'
import style from '@/styles/Carousel.module.scss'
import Link from 'next/link'

type Props = {}

export default function HeaderBottom({ }: Props) {
    const [navlinks, setNavlinks] = useState<Header[]>([])
    const [autoSlide, setAutoSlide] = useState<boolean>(true)
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const nextSlide = () => {
        // instead of 4 i cant put the navlinks.length because it wont comeback to the first slide.
        setCurrentSlide((current) => (current === 4 - 1 ? 0 : current + 1))
    }
    useEffect(() => {
        initFunction()
        if (!autoSlide) return;
        const slideInterval = setInterval(nextSlide, 3000)
        return () => clearInterval(slideInterval)
    }, [])

    function initFunction() {
        Promise.resolve(getHeaderBottom()).then((response) => {
            setNavlinks(response)
        })
    }
    return (
        <div className='bg-header text-center overflow-x-hidden'>
            <ul className={`flex font-medium ${style.container} transition-transform ease-out duration-500 w-screen`}>
                {navlinks.map((navlink, index) =>
                    <div key={index} className={`${style.slider} transition-transform ease-out duration-500 text-center items-center p-3`} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        <p>{navlink.name}</p>
                        <p className='font-normal text-xs'>{navlink.description} <Link href={navlink.routePath} className='text-xs underline font-normal'>{navlink.route}</Link></p>
                    </div>)
                }
            </ul>
        </div>
    )
}