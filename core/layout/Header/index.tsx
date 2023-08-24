import { useEffect, useState } from 'react'
import { getHeaderTop, getHeaderMiddle, getHeaderBottom } from '@/pages/service/header'
import { Header } from '@/models/Header'
import HeaderBottom from './HeaderBottom'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'

type Props = {}

export default function Header({ }: Props) {
    return (
        <section>
            <div className='w-screen'>
                <div className='flex flex-col justify-between items-center'>
                    <HeaderTop />
                    <HeaderMiddle />
                    <HeaderBottom />
                </div>
            </div>
        </section >
    )
}