import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

export type IconButtonProps = {
    IconImage: string | StaticImport
    IconWidth: number,
    IconHeight: number,
    IconHidden?: boolean,
    IconMediumHidden?: boolean,
    IconLargeHidden?: boolean,
    BackgroundColor?: boolean,
}

export default function IconButton(props: IconButtonProps) {
    const { IconImage, IconWidth, IconHeight, IconHidden, IconMediumHidden, IconLargeHidden, BackgroundColor } = props
    return (
        <li className={`${IconHidden ? 'hidden md:block' : IconMediumHidden ? 'md:hidden' : IconLargeHidden ? 'lg:hidden' : ''} list-none p-2 hover:bg-gray-300 rounded-full cursor-pointer ${BackgroundColor && 'bg-slate-300 hover:bg-white'}`}>
            <Image style={{ maxWidth: "40px" }} src={IconImage} width={IconWidth} height={IconHeight} alt={IconImage as string} />
        </li>
    )
}