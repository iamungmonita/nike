import React from 'react'
import { useSwiper } from 'swiper/react'
import IconButton from '../../IconButton'
type Props = {}

export default function SwieprButton({ }: Props) {
    const swiper = useSwiper()
    return (
        <div className='flex py-[3%] gap-x-3 ' style={{ transform: "translateY(-20%)" }}>
            <div className='bg-gray-300 rounded-full'>
                <IconButton IconImage={'/icons/arrow_left.svg'} IconHeight={25} IconWidth={25} />
            </div>
            <div className='bg-gray-300 rounded-full'>
                <IconButton IconImage={'/icons/arrow_right.svg'} IconHeight={25} IconWidth={25} />
            </div>
        </div>
    )
}