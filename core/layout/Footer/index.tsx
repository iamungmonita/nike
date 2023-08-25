import React, { useEffect, useState } from 'react'
import { facebook, twitter, youtube, instagram, location, plus } from '@/public/icons'
import Image from 'next/image'
import { Footer, subFooter, FooterTermOfUse } from '@/models/Footer'
import { getFooter, getFooterTermOfUse, getSubFooter } from '@/pages/service/footer'
import { IconButton, NavLink } from '@/core/components'
import Link from 'next/link'

type Props = {
    handleChange?: () => void
}

export default function Footer(props: Props) {
    const [navlinks, setNavlinks] = useState<Footer[]>([])
    const [subNavlinks, setSubNavlinks] = useState<subFooter[]>([])
    const [termOfUse, setTermOfUse] = useState<FooterTermOfUse[]>([])
    const [item, setItem] = useState<number>(1)

    useEffect(() => {
        initFunction()
    }, [])

    function initFunction() {
        Promise.resolve((getFooter())).then((response: Footer[]) => setNavlinks(response))
        Promise.all([getFooter(), getSubFooter()]).then((response: [Footer[], subFooter[]]) => {
            setNavlinks(response[0])
            setSubNavlinks(response[1])
        })
        Promise.resolve(getFooterTermOfUse()).then((response) => {
            setTermOfUse(response)
        })
    }
    const firstColumnLinks = navlinks.slice(0, 6)
    const secondColumnLinks = navlinks.slice(6, 7)
    const thirdColumnLinks = navlinks.slice(7, 8)
    const secondColumnSubLinks = subNavlinks.filter((subNavlink) => subNavlink.subCategories).slice(0, 1)
    const thirdColumnSubLinks = subNavlinks.filter((subNavlink) => subNavlink.subCategories).slice(1, 2)

    function handle(id: number) {

        setItem(id)



    }
    useEffect(() => {
        const number = [0, 2, 3, 4, 5]
        const label = (): number => {
            const result = number.find((num) => num === item)
            if (!result) return 0;
            return 1
        }
        console.log(label());
    }, [item])




    return (
        <footer className='bg-[#101010] text-white'>
            <div className='w-screen p-10 space-y-5 md:space-y-0'>
                <div className='md:flex justify-between'>
                    <div className='md:grid md:grid-cols-4 justify-between gap-x-20 w-full space-y-5 md:space-y-0'>
                        <ul className='gap-y-2 flex flex-col font-semibold uppercase'>
                            {firstColumnLinks
                                .map((navlink, index) =>
                                    <NavLink index={index} name={navlink.name} routePath={navlink.routePath} />)}
                            {secondColumnLinks
                                .map((navlink, index) =>
                                    <div className='flex justify-between items-center md:hidden'>
                                        <NavLink index={index} name={navlink.name} routePath={navlink.routePath} />
                                        <button onClick={(e) => handle(2)}><Image src={plus} height={25} width={25} alt='' /></button>
                                    </div>)}
                            {thirdColumnLinks
                                .map((navlink, index) =>
                                    <div className='flex justify-between items-center md:hidden'>
                                        <NavLink index={index} name={navlink.name} routePath={navlink.routePath} />
                                        <button onClick={(e) => handle(0)}><Image src={plus} height={25} width={25} alt='' /></button>
                                    </div>)}
                        </ul>
                        <ul className='hidden md:flex flex-col gap-y-2 font-semibold uppercase'>
                            {secondColumnLinks
                                .map((navlink, index) =>
                                    <NavLink index={index} name={navlink.name} routePath={navlink.routePath} />)}
                            {secondColumnSubLinks
                                .map((sublink, index) =>
                                    <ul className='gap-y-2 flex flex-col normal-case font-normal text-gray-400 text-xs' key={index}>{sublink.subCategories
                                        .map((sublink, index) =>
                                            <NavLink index={index} name={sublink.name} routePath={sublink.routePath} />)}
                                    </ul>)}
                        </ul>
                        <ul className='hidden md:flex flex-col gap-y-2 font-semibold uppercase'>
                            {thirdColumnLinks
                                .map((navlink, index) =>
                                    <NavLink index={index} name={navlink.name} routePath={navlink.routePath} />)}
                            {thirdColumnSubLinks
                                .map((sublink, index) =>
                                    <ul className='gap-y-2 flex flex-col normal-case font-normal text-gray-400 text-xs' key={index}>{sublink.subCategories
                                        .map((sublink, index) =>
                                            <NavLink index={index} name={sublink.name} routePath={sublink.routePath} />)}
                                    </ul>)}
                        </ul>
                        <ul className='flex md:justify-end md:items-start gap-3 flex-wrap h-8'>
                            <IconButton IconImage={twitter} IconWidth={20} IconHeight={20} BackgroundColor={true} />
                            <IconButton IconImage={facebook} IconWidth={20} IconHeight={20} BackgroundColor={true} />
                            <IconButton IconImage={youtube} IconWidth={20} IconHeight={20} BackgroundColor={true} />
                            <IconButton IconImage={instagram} IconWidth={20} IconHeight={20} BackgroundColor={true} />
                        </ul>
                    </div>
                </div>
                <div className='md:flex justify-between items-end gap-y-3 space-y-5'>
                    <span className='flex justify-start items-center gap-x-3 text-sm'>
                        <Image src={location} width={15} height={165} alt='' />
                        <h2>United States</h2>
                        <h2 className='font-light'>© 2013 Nike. Inc. All Rights Reserved.</h2>
                    </span>
                    <div className='flex flex-col space-y-5'>
                        <ul className='flex flex-col md:flex-row gap-x-3 text-sm gap-y-2'>
                            {termOfUse.map((term, index) => <Link href={term.routePath} key={index}>{term.name}</Link>)}
                        </ul>
                        <h2 className='text-xs md:text-end'>CA Supply Chains Act</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}