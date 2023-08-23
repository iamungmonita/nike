import React, { useEffect, useState } from 'react'
import { facebook, twitter, youtube, instagram, location, plus } from '@/public/svg'
import Image from 'next/image'
import { Footer, subFooter, FooterTermOfUse } from '@/models/Footer'
import { getFooter, getFooterTermOfUse, getSubFooter } from '@/pages/service/footer'
import { IconButton } from '@/core/components'
import Link from 'next/link'
type Props = {}

export default function Footer({ }: Props) {
    const [navlinks, setNavlinks] = useState<Footer[]>([])
    const [subNavlinks, setSubNavlinks] = useState<subFooter[]>([])
    const [termOfUse, setTermOfUse] = useState<FooterTermOfUse[]>([])

    useEffect(() => {
        initFunction()
    }, [])

    function initFunction() {
        Promise.all([getFooter(), getSubFooter()]).then((response: [Footer[], subFooter[]]) => {
            setNavlinks(response[0])
            setSubNavlinks(response[1])
        })
        Promise.resolve(getFooterTermOfUse()).then((response) => {
            setTermOfUse(response)
        })
    }
    const subLinks = subNavlinks.filter((subNavlink) => subNavlink.subCategories)
    return (
        <footer className='bg-[#101010] text-white'>
            <div className='w-screen p-10 space-y-5 md:space-y-0'>
                <div className='md:flex justify-between'>
                    <div className='md:grid md:grid-cols-4 justify-between gap-x-20 w-full space-y-5 md:space-y-0'>
                        <ul className='gap-y-2 flex flex-col font-semibold'>{navlinks.slice(0, 6).map((navlink, index) =>
                            <Link href={navlink.routePath} key={index} className='flex'>{(navlink.name).toUpperCase()}</Link>)}
                            {navlinks.slice(6, 8).map((navlink, index) =>
                                <Link href={navlink.routePath} key={index} className='flex md:hidden gap-5 justify-between font-semibold'>{(navlink.name).toUpperCase()}
                                    <Image className='text-end' src={plus} height={20} width={20} alt='' />
                                </Link>)}
                        </ul>
                        <ul className='hidden md:flex flex-col gap-y-2'>
                            {navlinks.slice(6, 7).map((navlink, index) => <Link href={navlink.routePath} key={index} className='font-semibold'>{(navlink.name).toUpperCase()}</Link>)}
                            {subLinks.slice(0, 1).map((sublink, index) => <ul className='gap-y-2 flex flex-col  text-gray-400 text-xs' key={index}>{sublink.subCategories.map((subcategory, index) => <Link href={subcategory.routePath} key={index}>{subcategory.name}</Link>)}</ul>)}
                        </ul>
                        <ul className='hidden md:flex flex-col gap-y-2 '>
                            {navlinks.slice(7, 8).map((navlink, index) => <Link href={navlink.routePath} key={index} className='font-semibold'>{(navlink.name).toUpperCase()}</Link>)}
                            {subLinks.slice(1, 2).map((sublink, index) => <ul className='gap-y-2 flex flex-col  text-gray-400 text-xs' key={index}>{sublink.subCategories.map((subcategory, index) => <Link href={subcategory.routePath} key={index}>{subcategory.name}</Link>)}</ul>)}
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