import React, { useState } from 'react'
import Image from 'next/image';

import Link from 'next/link';
import { Header } from '@/models/Header';
import IconButton from '../IconButton';

type SidebarProps = {
    onCancelSideBar: () => void
    NavLinks: Header[] | null,
}
export default function Sidebar(props: SidebarProps) {

    const { onCancelSideBar, NavLinks } = props
    return (
        <ul className='flex flex-col justify-center p-[10%] '>
            <div className='self-end mb-10 border rounded-full'>
                <IconButton onClick={onCancelSideBar} IconHeight={25} IconWidth={25} IconImage={'/icons/delete.svg'} />
            </div>

            {NavLinks?.map((navLink) => (
                <li className='py-3 font-medium group/item flex justify-between items-center' key={navLink.id}>
                    <Link href={navLink.routePath}>{navLink.name}</Link>
                    <Image src={'/icons/arrow_right.svg'} width={25} height={25} alt='arrow_right' />
                </li>
            ))}
        </ul>
    )
}