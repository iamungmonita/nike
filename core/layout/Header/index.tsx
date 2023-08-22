import Image from 'next/image'
import { jordan, converse, nike } from '@/public/pictures'
import { useEffect, useState } from 'react'
import { getHeaderTop, getHeaderMiddle, getHeaderBottom } from '@/pages/service/navigtion'
import { Header } from '@/models/Header'
import Link from 'next/link'
import { heart, menu, search, shoppingbag } from '@/public/icons'
import style from '@/styles/Carousel.module.scss'

type Props = {
    getHeaderTop?: () => Promise<any>
    getHeaderMiddle?: () => Promise<any>
    getHeaderBottom?: () => Promise<any>
}

export default function Header({ }: Props) {
    const [navlinksTop, setNavlinksTop] = useState<Header[]>([])
    const [navlinksMiddle, setNavlinksMiddle] = useState<Header[]>([])
    const [navlinksBottom, setNavlinksBottom] = useState<Header[]>([])
    const [curr, setCurr] = useState<number>(0)
    const [autoSlide, setAutoSlide] = useState<boolean>(true)

    const next = () => {
        setCurr((curr) => (curr === 4 - 1 ? 0 : curr + 1))
    }

    useEffect(() => {
        initFunction()
        if (!autoSlide) return;
        const slideInterval = setInterval(next, 3000)
        return () => clearInterval(slideInterval)
    }, [])

    function initFunction() {
        Promise.resolve(getHeaderTop()).then((response) => {
            const res = response
            setNavlinksTop(res)
        })
        Promise.resolve(getHeaderMiddle()).then((response) => {
            const res = response
            setNavlinksMiddle(res)
        })
        Promise.resolve(getHeaderBottom()).then((response) => {
            const res = response
            setNavlinksBottom(res)
        })
    }

    return (
        <section>
            <div className='w-screen'>
                <div className='flex flex-col justify-between items-center'>

                    {/* HeaderTop */}
                    <div className='bg-header w-screen py-2 px-10 hidden md:flex justify-between items-center'>
                        <div className='flex gap-x-3'>
                            <Image src={jordan} width={20} height={20} alt='' />
                            <Image src={converse} width={30} height={20} alt='' />
                        </div>
                        <ul className='text-xs font-medium flex gap-x-3'>
                            {navlinksTop.map((navlink, index) =>
                                <li key={index} className={`[&:not(:last-child)]:border-r border-r-gray-500 [&:not(:last-child)]:pr-3 hover:text-gray-500 cursor-pointer relative`}>
                                    <Link href={navlink.routePath}>{navlink.name}  </Link>
                                </li>)
                            }
                        </ul>
                    </div>

                    {/* HeaderMiddle */}
                    <div className='w-full px-10 py-3 flex md:grid grid-cols-4 justify-between items-center'>
                        <div className='grid col-span-1'>
                            <Image src={nike} width={60} height={60} alt='' />
                        </div>
                        <div className='flex items-center justify-between col-span-3 gap-x-10'>
                            <div className='hidden md:block'>
                                <ul className='flex gap-x-3 font-medium'>
                                    {navlinksMiddle.map((navlink, index) =>
                                        <li key={index} className=''>
                                            <Link href={navlink.routePath}>{navlink.name}</Link>
                                        </li>)}
                                </ul>
                            </div>
                            <div className='flex gap-x-3 justify-between'>
                                <div className='bg-header hover:bg-gray-200 rounded-full hidden lg:flex justify-between gap-x-3'>
                                    <div className='hover:bg-gray-300 rounded-full p-3 z-20' >
                                        <Image src={search} width={20} height={20} alt='' />
                                    </div>
                                    <input type="text" className='bg-transparent w-[125px] outline-none' placeholder='Search...' />
                                </div>
                                <ul className='flex gap-x-3 list-none'>
                                    <li className='p-2 hover:bg-gray-300 rounded-full lg:hidden'><Image src={search} width={25} height={25} alt='' /></li>
                                    <li className='p-2 hover:bg-gray-300 rounded-full hidden md:block'><Image src={heart} width={25} height={25} alt='' /></li>
                                    <li className='p-2 hover:bg-gray-300 rounded-full'><Image src={shoppingbag} width={25} height={25} alt='' /></li>
                                    <li className='p-2 hover:bg-gray-300 rounded-full md:hidden'><Image src={menu} width={25} height={25} alt='' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* HeaderBottom */}
                    <div className=' bg-header text-center overflow-x-hidden'>
                        <ul className={`flex font-medium ${style.container} transition-transform ease-out duration-500 w-screen`}>
                            {navlinksBottom.map((navlink, index) =>
                                <div key={index} className={`${style.slider} transition-transform ease-out duration-500 text-center items-center p-3`} style={{ transform: `translateX(-${curr * 100}%)` }}>
                                    <p>{navlink.name}</p>
                                    <p className='font-normal text-xs'>{navlink.description} <Link href={navlink.routePath} className='text-xs underline font-normal'>{navlink.route}</Link></p>
                                </div>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}