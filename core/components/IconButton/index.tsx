import React from 'react'
import Image from 'next/image'
import { IconButton } from '@/models/IconButton'


export default function IconButton(props: IconButton) {
    const { IconImage, IconWidth, IconHeight, IconHidden, IconMediumHidden, IconLargeHidden, BackgroundColor } = props
    return (
        <li className={`${IconHidden ? 'hidden md:block' : IconMediumHidden ? 'md:hidden' : IconLargeHidden ? 'lg:hidden' : ''} list-none p-2 hover:bg-gray-300 rounded-full cursor-pointer ${BackgroundColor && 'bg-slate-300 hover:bg-white'}`}>
            <Image src={IconImage} width={IconWidth} height={IconHeight} alt={IconImage as string} />
        </li>
    )
}