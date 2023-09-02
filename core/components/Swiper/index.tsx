import { Category } from '@/models/Category';
import { getAllIconic } from '@/service/iconic';
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import Image from 'next/image';
import { Card, SwiperButton } from '@/core';
import useApi from '@/core/services/useApi';
type Props = {}

export default function swiper({ }: Props) {
    const { response } = useApi<Category[]>('/data/category/iconic.json')

    return (
        <Swiper className='flex'
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}

            spaceBetween={1}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

        >



            {response.map((res: Category) => <SwiperSlide className='bg-red-200 relative'>
                <p>{res.name}</p>
                <Image src={res.picture} width={300} height={300} alt='' />
                <div className='p-[10%]'>
                    <SwiperButton />
                </div>
            </SwiperSlide>)}






        </Swiper >
    )
}