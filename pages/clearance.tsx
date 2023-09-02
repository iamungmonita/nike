import { AHelmet, IconButton, Side, Sidebar } from '@/core'
import React, { useEffect, useState } from 'react'
import { filter, arrow_down } from '@/public/icons'
import { getHeaderMiddle } from '@/service/header'
import { Category } from '@/models/Category'
import { Header } from '@/models/Header'
import style from '@/styles/Scrollbar.module.scss'
type Props = {}

export default function Clearance({ }: Props) {
    const [sideBar, setSideBar] = useState<Header[]>([])
    useEffect(() => {
        initFunction()
    }, [])
    function initFunction() {
        Promise.resolve(getHeaderMiddle()).then((response: Header[]) => {
            setSideBar(response.slice(3, 4))
        })
    }
    console.log(sideBar);


    return (
        <main>
            <AHelmet>Clearance Outlet Deals & Discounts. Nike.com</AHelmet>
            <section>
                <div className='px-[5%]'>
                    <div className='flex justify-between h-20 bg-white items-center'>
                        <div className='text-2xl font-medium'>Sale - Up to 50% off</div>
                        <div className='flex justify-end gap-x-5'>
                            <div className='flex gap-x-3 items-center text-sm'>
                                <p>Hide Filters</p>
                                <IconButton IconImage={'/icons/filter.svg'} IconHeight={20} IconWidth={20} />
                            </div>
                            <div className='flex gap-x-3 items-center text-sm'>
                                <p>Sort By</p>
                                <IconButton IconImage={'/icons/arrow_down.svg'} IconHeight={20} IconWidth={20} />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-5 h-auto w-full'>
                        <Side />
                        <div className=' col-span-4'>
                            col2
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}