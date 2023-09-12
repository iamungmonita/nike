import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import style from '@/styles/Carousel.module.scss'
import Link from 'next/link';
import { Header, SubHeader, SubSubHeader } from '@/models/Header';
import IconButton from '../IconButton';
import { getHeaderMiddle } from '@/service/header';
import useApi from '@/hooks/useApi';
import { title } from 'process';

type SidebarProps = {
    onCancelSideBar: () => void

}
export default function Sidebar(props: SidebarProps) {
    const [curr, setCurr] = useState<number>(0)
    const { onCancelSideBar } = props
    const sliderImages = [1, 2, 3]
    const [category, setCategory] = useState<Header[]>([])
    const [subCategories, setSubCategories] = useState<SubHeader[][]>([])
    const [subSubCategories, setSubSubCategories] = useState<SubHeader[]>([])
    const [subSubSUbCategories, setSubSubSubCategories] = useState<SubSubHeader[][]>([])

    const promiseAll = () => Promise.all([getHeaderMiddle()])
    const { response } = useApi({ service: promiseAll, effects: [] })

    useEffect(() => {

    }, [response?.length])

    const prev = () => {
        setCurr((curr) => (curr === 0 ? sliderImages.length - 1 : curr - 1))
    }
    const nextPage = (index: number) => {
        setCurr((curr) => (curr === sliderImages.length - 1 ? 0 : curr + 1))
        if (subCategories.length) {
            const bro = subCategories?.map((e) => e[index])
            const sis = bro?.map((e) => e.subCategories.map((f) => f))
            setSubSubCategories(bro)
            setSubSubSubCategories(sis)
        }

    }
    const next = (index: number) => {
        setCurr((curr) => (curr === sliderImages.length - 1 ? 0 : curr + 1))
        if (response?.length) {
            const title = response?.map((e) => e[index])
            const SubTitle = title?.map((e) => e.subCategories.map((f) => f))
            setCategory(title)
            setSubCategories(SubTitle)
        }
    }

    return (
        <ul className='relative w-full mx-auto overflow-x-hidden'>
            <div className={`${style.container} flex transition-transform ease-out duration-500 gap-y-5`}>
                <div className={`${style.slider} flex flex-col transition-transform ease-out duration-500 p-5`}
                    style={{ transform: `translateX(-${curr * 100}%)` }}>
                    <div className='self-end'>
                        <IconButton IconImage={'/icons/delete.svg'} IconHeight={25} IconWidth={25} onClick={onCancelSideBar} NoBackgroundHover={true} />
                    </div>
                    <div className='pt-10'>
                        {response?.map((res) => res.map((e, index) =>
                            <div className='flex justify-between pl-5' key={e.id}>
                                <p className='font-medium text-2xl'>{e.name}</p>
                                <IconButton IconImage={'/icons/arrow_right.svg'} IconHeight={25} IconWidth={25} onClick={() => next(index)} NoBackgroundHover={true} />
                            </div>
                        ))}

                    </div>
                </div>
                <p className={`${style.slider} transition-transform ease-out duration-500`}
                    style={{ transform: `translateX(-${curr * 100}%)` }}>
                    {subCategories.map((e) =>
                        <div className='p-5 space-y-5'>
                            <span className='flex justify-start items-center space-x-5 '><IconButton IconImage={'/icons/arrow_left.svg'} IconHeight={25} IconWidth={25} onClick={prev} NoBackgroundHover={true} NoPadding={true} /><p>All</p></span>
                            {category.map((cat) => <h2 className='font-medium text-2xl pl-10 pr-5'>{cat.name}</h2>)}
                            {e.map((b, index) => <div className='flex justify-between pl-10 pr-5' key={index}>
                                <Link href={b.routePath}>{b.name}</Link>
                                <IconButton IconImage={'/icons/arrow_right.svg'} IconHeight={25} IconWidth={25} onClick={() => nextPage(index)} NoBackgroundHover={true} NoPadding={true} />
                            </div>)}
                        </div>
                    )}
                </p>
                <div className={`${style.slider} transition-transform ease-out duration-500 p-5`}
                    style={{ transform: `translateX(-${curr * 100}%)` }}>
                    <div>
                        <div className='flex justify-start items-center space-x-5'>
                            <IconButton IconImage={'/icons/arrow_left.svg'} IconHeight={25} IconWidth={25} onClick={prev} NoBackgroundHover={true} NoPadding={true} />
                            {subSubCategories.map((g) =>
                                <p className='text-lg font-medium'>{g.name}</p>)}
                        </div>
                        {subSubSUbCategories.map((e) =>
                            <div className='flex flex-col p-5'>
                                {e.map((g) =>
                                    <div className='flex py-2 px-6'>
                                        <p>{g.name}</p>
                                    </div>)}
                            </div>
                        )}
                    </div>
                </div>


            </div>



            {/* {NavLinks?.map((navLink, index) => (
                <div className='relative'>
                    <li className='py-3 font-medium group/item flex justify-between items-center' key={navLink.id}>
                        <Link href={navLink.routePath}>{navLink.name}</Link>
                        <Image src={'/icons/arrow_right.svg'} width={25} height={25} alt='arrow_right' onClick={() => toggleExpanded(index)} />
                    </li>
                    {subLinks.map((sub) =>
                        <div className='flex flex-col '>
                            <p>{sub.name}</p>
                        </div>

                    )}
                </div>

            ))} */}
        </ul >
    )
}