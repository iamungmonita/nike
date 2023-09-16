import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Header } from '@/models/Header';
import { getHeaderBottom } from '@/service/header';
import style from '@/styles/Carousel.module.scss';

type Props = {}

export default function HeaderBottom({ }: Props) {
    const [navLinks, setNavLinks] = useState<Header[]>([])
    const [autoSlide, setAutoSlide] = useState<boolean>(true)
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    useEffect(() => {
        initFunction()
    }, [])

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(nextSlide, 3000);

        return () => clearInterval(slideInterval);
    }, [navLinks.length])

    function initFunction() {
        Promise.resolve(getHeaderBottom()).then((response) => {
            setNavLinks(response)
        })
    }

    function nextSlide() {
        setCurrentSlide((current) => (current === navLinks.length - 1 ? 0 : current + 1))
    }

    return (
        <div className='text-center overflow-x-hidden bg-gray-100'>
            <ul className={`flex font-medium ${style.container} transition-transform ease-out duration-500 w-screen`}>
                {navLinks.map((navlink, index) =>
                    <div key={index} className={`${style.slider} transition-transform ease-out duration-500 text-center items-center p-5`} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        <p>{navlink.name}</p>
                        <p className='font-normal text-xs'>{navlink.description} <Link href={navlink.routePath} className='text-xs underline font-normal'>{navlink.route}</Link></p>
                    </div>)
                }
            </ul>
        </div>
    )
}