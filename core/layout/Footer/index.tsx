import React, { useEffect, useState } from 'react'
import { getFooter } from '@/pages/service/footer'
import { Product } from '@/models/product'
import { facebook, twitter, instagram, youtube } from '@/public/icons'
import { IconBtn } from '@/core/components'

type Props = {}

export default function index({ }: Props) {
    const [footer, setFooter] = useState<Product[]>([])
    useEffect(() => {
        initFooter()
    }, [])
    const initFooter = () => {
        Promise.all([getFooter()]).then((response: [Product[]]) => {
            const res_footer = response[0]
            setFooter(res_footer)
        })
    }
    return (
        <footer className='bg-black text-white px-10 py-10 sm:px-none'>
            <div className='max-w-6xl mx-auto space-y-10 '>
                <div className='flex flex-col sm:flex-row justify-between'>
                    <div className=' grid grid-cols-1 sm:grid-cols-3 sm:gap-x-20 md:gap-x-32'>
                        <div>
                            {footer.map((foo, index) =>
                                <div key={index} className='uppercase font-bold'>
                                    {!foo.subCategory ? <p>{foo.name}</p> : ''}
                                </div>
                            )}
                        </div>


                    </div>
                    <div>
                        {footer.map((foo, index) =>
                            <div key={index}>
                                {foo.id === 7 ?
                                    <div>
                                        <p className='font-bold uppercase'>{foo.name}</p>
                                        {foo.subCategory?.map((sub, index) =>
                                            <div key={index} className='hidden sm:block text-xs text-white/30'>
                                                <p className=''>{sub.name}</p>
                                            </div>)}
                                    </div>
                                    : ''}
                            </div>
                        )}
                    </div>
                    <div>
                        {footer.map((foo, index) =>
                            <div key={index}>
                                {foo.id === 8 ?
                                    <div>
                                        <p className='font-bold uppercase'>{foo.name}</p>
                                        {foo.subCategory?.map((sub, index) =>
                                            <div key={index} className='hidden sm:block text-xs text-white/30'> <p>{sub.name}</p> </div>)}
                                    </div>
                                    : ''}
                            </div>
                        )}
                    </div >
                    <div className=''>
                        <div className='flex gap-3'>
                            <IconBtn icon={twitter} footer={true} />
                            <IconBtn icon={facebook} footer={true} />
                            <IconBtn icon={youtube} footer={true} />
                            <IconBtn icon={instagram} footer={true} />
                        </div>
                    </div>
                </div>
                <ul className='flex justify-end gap-3 text-xs'>
                    <li>Guides</li>
                    <li>Terms of Sales</li>
                    <li>Terms of Use</li>
                    <li>Nike Privacy Policy</li>
                    <li>Your Privacy Choices</li>
                </ul>
                <ul className='flex gap-3 text-xs'>
                    <li>United States</li>
                    <li>2023 Nike. Inc. ALl Rights Reserved</li>

                </ul>
            </div>
        </footer>
    )
}