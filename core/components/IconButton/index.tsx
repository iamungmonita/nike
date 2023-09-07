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
    NoBackgroundHover?: boolean,
    NoPadding?: boolean,

    onClick?: () => void;
}

export default function IconButton(props: IconButtonProps) {
    const { IconImage, IconWidth, IconHeight, IconHidden, IconMediumHidden, IconLargeHidden, BackgroundColor, NoBackgroundHover, onClick, NoPadding } = props
    return (
        <li onClick={onClick} className={`${IconHidden ? 'hidden md:block' : IconMediumHidden ? 'md:hidden' : IconLargeHidden ? 'lg:hidden' : ''} list-none  ${NoBackgroundHover ? 'hover:bg-none rounded-full' : 'hover:bg-gray-300 rounded-full'} cursor-pointer ${BackgroundColor && 'bg-slate-300 hover:bg-white'} ${!NoPadding ? 'p-2' : 'p-0'}`}  >
            <Image src={IconImage} width={IconWidth} height={IconHeight} alt={IconImage as string} />
        </li>
    )
}