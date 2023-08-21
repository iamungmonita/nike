import React, { useEffect, useState } from 'react'
import { Button } from '@/core/components'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type Props = {
    background: string | StaticImport,
    backgroundmobile: string | StaticImport,
    btnBgColor: boolean,
    btnText: string,
    titleStart: string,
    titleEnd: string,
    textStart: string,
    textEnd?: string,
    MainTitle?: string,
}

export default function index(

    { background, backgroundmobile, btnBgColor, btnText, titleStart, titleEnd, textStart, textEnd, MainTitle }: Props) {
    const [width, setWidth] = useState(0)
    const Resize = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', Resize)
    }, [])
    return (
        <section>

            {width > 600 ? <div className={`relative`}>
                <p className={`ml-14 mb-5 text-3xl ${MainTitle ? 'mt-20' : ''}`}>{MainTitle}</p>
                <Image src={background} className='object-cover w-full h-80' alt='background' />
                <div className='max-w-6xl mx-auto '>
                    <div className={`absolute ${!MainTitle ? "top-16" : "top-32"} space-y-5`}>
                        <h2 className={`text-[45px] line-clamp-2 leading-10 font-extrabold tracking-tighter ${btnBgColor ? 'text-white' : 'text-black'}`}> {titleStart} <br />
                            {titleEnd}</h2>
                        <p className={`leading-6 ${btnBgColor ? 'text-white' : 'text-black'} `}>{textStart} <br /> {textEnd}</p>
                        <Button bg_color={btnBgColor} text={btnText} />
                    </div>
                </div>
            </div> : <div className={`relative`}>
                <p className={`ml-14 mb-5 text-3xl ${MainTitle ? 'mt-20' : ''}`}>{MainTitle}</p>
                <Image src={backgroundmobile} className='object-contain w-full h-full p-3' alt='background' />

            </div>}
        </section>

    )
}