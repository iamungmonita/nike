import React, { useEffect, useState } from 'react'
import { facebook, twitter, youtube, instagram, location } from '@/public/icons'
import Image from 'next/image'
import { Footer, subFooter, MappedFooter } from '@/models/Header'
import { getFooter, getSubFooter } from '@/pages/service/footer'
type Props = {}

export default function Footer({ }: Props) {
    const [navlinks, setNavlinks] = useState<Footer[]>([])
    const [navlinkstest, setNavlinksTest] = useState<subFooter[]>([])

    useEffect(() => { initFunction() }, [])
    function initFunction() {
        Promise.all([getFooter(), getSubFooter()]).then((response: [Footer[], subFooter[]]) => {
            const footer = response[0]
            const subFooter = response[1]
            if (!navlinkstest.length) {
                const mappedObject = footer.map((item): MappedFooter => {
                    const filterSub = filter(subFooter, { categoryId: item.id });
                    return {
                        ...item,
                        subFooter: filterSub
                    }
                });
                setNavlinksTest(mappedObject)
            }
        })
    }


    return (
        <footer>
            <div className='w-screen px-10 py-3'>
                <div className='flex flex-col justify-between md:flex-row'>
                    <div className='flex flex-col justify-between md:flex-row gap-x-20'>

                    </div>
                    <ul className='flex cursor-pointer'>
                        <li className='p-2 hover:bg-gray-300 rounded-full '><Image src={twitter} width={25} height={25} alt='' /></li>
                        <li className='p-2 hover:bg-gray-300 rounded-full '><Image src={facebook} width={25} height={25} alt='' /></li>
                        <li className='p-2 hover:bg-gray-300 rounded-full '><Image src={youtube} width={25} height={25} alt='' /></li>
                        <li className='p-2 hover:bg-gray-300 rounded-full '><Image src={instagram} width={25} height={25} alt='' /></li>
                    </ul>
                </div>
                <div>
                    <span className='flex'><Image src={location} width={25} height={25} alt='' /><p>United States</p></span>
                </div>
                <div>right reserved</div>
            </div>
        </footer>
    )
}