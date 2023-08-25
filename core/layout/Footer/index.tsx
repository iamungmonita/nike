import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { IconButton } from '@/core/components';
import { Footer as FooterProps, FooterTermOfUse, subFooter } from '@/models/Footer';
import { facebook, instagram, location, plus, twitter, youtube } from '@/public/icons';
import { getFooter, getFooterTermOfUse, getSubFooter } from '@/service/footer';

type ResponseType = [FooterProps[], subFooter[], FooterTermOfUse[]];

export default function Footer() {
    const [termOfUse, setTermOfUse] = useState<FooterTermOfUse[]>([]);

    const [firstColumnLinks, setFirstColumnLinks] = useState<FooterProps[]>([]);
    const [secondColumnLinks, setSecondColumnLinks] = useState<FooterProps[]>([]);
    const [thirdColumnLinks, setThirdColumnLinks] = useState<FooterProps[]>([]);

    const [secondColumnSubLinks, setSecondColumnSubLinks] = useState<subFooter[]>([]);
    const [thirdColumnSubLinks, setThirdColumnSubLinks] = useState<subFooter[]>([]);

    useEffect(() => {
        initFunction();
    }, [])

    function initFunction() {
        Promise.all([
            getFooter(),
            getSubFooter(),
            getFooterTermOfUse()
        ]).then((response: ResponseType) => {
            const navLink = response[0];
            const subNavLinks = response[1];
            setTermOfUse(response[2]);
            //
            setFirstColumnLinks(navLink.slice(0, 6))
            setSecondColumnLinks(navLink.slice(6, 7));
            setThirdColumnLinks(navLink.slice(7, 8));
            setSecondColumnSubLinks(subNavLinks.filter((subNavLink) => subNavLink.subCategories).slice(0, 1));
            setThirdColumnSubLinks(subNavLinks.filter((subNavLink) => subNavLink.subCategories).slice(1, 2));
        });
    }

    return (
        <footer className='bg-[#101010] text-white'>
            <div className='w-screen p-10 space-y-5 md:space-y-0'>
                <div className='md:flex justify-between'>
                    <div className='md:grid md:grid-cols-4 justify-between gap-x-20 w-full space-y-5 md:space-y-0'>
                        <ul className='gap-y-2 flex flex-col font-semibold uppercase'>
                            {firstColumnLinks.map((navLink) => (
                                <Link key={navLink.id} href={navLink.routePath}>{navLink.name}</Link>
                            ))}
                            {secondColumnLinks.map((navLink) => (
                                <div key={navLink.id} className='flex justify-between items-center md:hidden'>
                                    <Link href={navLink.routePath}>{navLink.name}</Link>
                                    <Image src={plus} height={25} width={25} alt='' />
                                </div>
                            ))}
                            {thirdColumnLinks.map((navLink) =>
                                <div key={navLink.id} className='flex justify-between items-center md:hidden'>
                                    <Link href={navLink.routePath}>{navLink.name}</Link>
                                    <Image src={plus} height={25} width={25} alt='' />
                                </div>)}
                        </ul>
                        <ul className='hidden md:flex flex-col gap-y-2 font-semibold uppercase'>
                            {secondColumnLinks.map((navLink) => (
                                <Link key={navLink.id} href={navLink.routePath}>{navLink.name}</Link>
                            ))}
                            {secondColumnSubLinks.map((subLink) =>
                                <ul className='gap-y-2 flex flex-col normal-case font-normal text-gray-400 text-xs' key={subLink.id}>
                                    {subLink.subCategories.map((category) => (
                                        <Link key={category.id} href={category.routePath}>{category.name}</Link>
                                    ))}
                                </ul>
                            )}
                        </ul>
                        <ul className='hidden md:flex flex-col gap-y-2 font-semibold uppercase'>
                            {thirdColumnLinks.map((navLink) => (
                                <Link key={navLink.id} href={navLink.routePath}>{navLink.name}</Link>
                            ))}
                            {thirdColumnSubLinks.map((subLink) =>
                                <ul className='gap-y-2 flex flex-col normal-case font-normal text-gray-400 text-xs' key={subLink.id}>
                                    {subLink.subCategories.map((category) =>
                                        <Link key={category.id} href={category.routePath}>{category.name}</Link>
                                    )}
                                </ul>
                            )}
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
                            {termOfUse.map((term) => <Link key={term.id} href={term.routePath} >{term.name}</Link>)}
                        </ul>
                        <h2 className='text-xs md:text-end'>CA Supply Chains Act</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}