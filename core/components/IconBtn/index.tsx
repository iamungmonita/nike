import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
type Props = {
    icon: StaticImport
    hidden?: boolean
    md_hidden?: boolean,
    footer: boolean
}

export default function index({ icon, hidden, md_hidden, footer }: Props) {
    return (
        <>
            {!footer ?
                <button className={`hover:rounded-full  hover:bg-gray-200 p-2  ${hidden ? 'hidden' : ''} ${md_hidden ? 'md:hidden' : ''} `}>
                    <Link href={'/'}><Image src={icon} alt='icon' height={25} width={25} /></Link>
                </button>
                :
                <button className={`rounded-full  hover:rounded-full bg-gray-200 hover:bg-gray-200 p-2  ${hidden ? 'hidden' : ''} ${md_hidden ? 'md:hidden' : ''} `}>
                    <Link href={'/'}><Image src={icon} alt='icon' height={25} width={25} /></Link>
                </button>
            }
        </>
    )
}