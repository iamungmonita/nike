import React from 'react'
import Image from 'next/image'
import Button from '../Button'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
type BannerProps = {
    onClick?: () => void,
    ButtonName: string,
    BannerImg: string | StaticImport,
    titleFirstPart: string,
    titleSecondPart: string,
    descriptionFirstPart: string,
    descriptionSecondPart?: string,
    SmallScreenImage: string | StaticImport,
    textColor: boolean,
    removeTitle?: boolean,
    TextColorWhite?: boolean,
    TextDownMiddle?: boolean,
}

export default function Banner(props: BannerProps) {
    const {
        onClick,
        ButtonName,
        BannerImg,
        titleFirstPart,
        titleSecondPart,
        descriptionFirstPart,
        descriptionSecondPart,
        SmallScreenImage,
        textColor,
        removeTitle,
        TextColorWhite,
        TextDownMiddle
    } = props

    return (
        <section>
            <div className='block sm:hidden h-[20%] px-[5%] w-auto'>
                <h2>Title</h2>
                <Image
                    src={SmallScreenImage}
                    width={1000}
                    height={1000}
                    alt={titleFirstPart as string} />
                <div className='space-y-5 my-[5%] max-w-[95%]' >
                    <div className={`${removeTitle && 'hidden sm:block'} font-extrabold tracking-[-3px] w-[95%]`}>
                        <span className='text-5xl h-10'>{titleFirstPart} <br />{titleSecondPart}</span >
                    </div>
                    <p className=''>{descriptionFirstPart}</p>
                    <Button ButtonName={ButtonName} buttonColor={textColor} />
                </div>
            </div>
            <div className={`${TextDownMiddle ? 'h-auto' : 'h-[300px]'} relative w-screen hidden sm:block`}>
                <Image
                    src={BannerImg} className='w-[100%] h-[100%] object-cover'
                    width={1000}
                    height={1000}
                    alt={titleFirstPart as string} />
                <div className={`${TextDownMiddle ? 'sm:relative text-center mt-[5%] mb-[10%]' : 'sm:absolute '} top-[15%] left-[5%] space-y-5 hidden sm:block`} >
                    <div className={`font-extrabold tracking-[-3px] ${TextColorWhite && 'text-white'}`}>
                        <h2 className={`${TextDownMiddle ? 'text-7xl h-14' : 'text-5xl h-10'}`}>{titleFirstPart}</h2 >
                        <h2 className={`${TextDownMiddle ? 'text-7xl h-14' : 'text-5xl h-10'}`}> {titleSecondPart}</h2 >
                    </div>
                    <p className={`${TextColorWhite && 'text-white'}`}>{descriptionFirstPart} <br />{descriptionSecondPart}</p>
                    <Button ButtonName={ButtonName} buttonColor={textColor} />
                </div>
            </div >
        </section >
    )
}