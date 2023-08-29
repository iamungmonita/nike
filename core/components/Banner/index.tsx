import React from 'react'
import Image from 'next/image'
import Button from '../Button'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
type BannerProps = {
    onClick?: () => void,
    ButtonName: string,
    BannerImg: string | StaticImport,
    titleFirstPart: string,
    titleSecondPart?: string,
    subtitleFirstPart?: string,
    subtitleSecondPart?: string,
    descriptionFirstPart?: string,
    descriptionSecondPart?: string,
    SmallScreenImage: string | StaticImport,
    textColor?: boolean,
    removeTitle?: boolean,
    TextColorWhite?: boolean,
    TextDownMiddle?: boolean,
    ExtraButton?: boolean,
    ExtraButtonName?: string,
    BannerVersion: number,
    BannerTitle?: string,
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
        TextDownMiddle,
        ExtraButton,
        ExtraButtonName,
        subtitleFirstPart,
        subtitleSecondPart,
        BannerVersion,
        BannerTitle
    } = props

    return (
        <section>
            <div className='block sm:hidden'>
                {BannerTitle && <h2 className={`text-2xl font-medium px-[5%] py-5`}>{BannerTitle}</h2>}
                <div className='relative h-[20%] px-[5%] w-auto'>
                    <Image
                        src={SmallScreenImage}
                        width={1000}
                        height={1000}
                        alt={titleFirstPart as string} />
                    {BannerVersion === 1 ? <div className={`${titleSecondPart === 'MEMBER' && 'absolute bottom-[10%] left-[10%]'} space-y-5 my-[5%] max-w-[95%]`} >
                        <div className={`${removeTitle && 'hidden sm:block'} font-extrabold tracking-[-3px] w-[95%]`}>
                            <span className={`text-5xl h-10 ${TextColorWhite && titleSecondPart === 'MEMBER' && 'text-white'}`}>{titleFirstPart} <br />{titleSecondPart}</span >
                        </div>
                        <p className={`${TextColorWhite && titleSecondPart === 'MEMBER' && 'text-white'}`}>{descriptionFirstPart}</p>

                        <Button ButtonName={ButtonName} buttonColor={textColor} />
                        {ExtraButton && <Button ButtonName={ExtraButtonName} buttonColor={textColor} />}

                    </div> : <div className={`absolute bottom-0 left-[10%] space-y-5 max-w-[95%]`} >

                        <div className={`${removeTitle && 'hidden sm:block'} font-medium w-[95%]`}>
                            <span className={`text-2xl h-10 ${TextColorWhite && titleSecondPart === 'MEMBER' && 'text-white'}`}>{subtitleFirstPart} <br />{subtitleSecondPart}</span >
                        </div>
                        <p className={`${TextColorWhite && titleSecondPart === 'MEMBER' && 'text-white'}`}>{descriptionFirstPart}</p>

                        <Button ButtonName={ButtonName} buttonColor={textColor} />
                        {ExtraButton && <Button ButtonName={ExtraButtonName} buttonColor={textColor} />}

                    </div>}
                </div>
            </div>

            <div className='hidden sm:block'>
                {BannerTitle && <h2 className={`text-2xl font-medium px-[5%] py-5`}>{BannerTitle}</h2>}
                <div className={`${TextDownMiddle ? 'h-auto' : 'h-[300px]'} relative w-full `}>
                    <Image
                        src={BannerImg} className='w-[100%] h-[100%] object-cover'
                        width={1000}
                        height={1000}
                        alt={titleFirstPart as string} />
                    {BannerVersion === 1 ? <div className={`${TextDownMiddle ? ' text-center mt-[5%] mb-[5%] space-y-10' : 'sm:absolute space-y-5'} top-[15%] left-[5%] hidden sm:block`} >
                        <div className={`font-extrabold tracking-[-3px] ${TextColorWhite && 'text-white'}`}>
                            <h2 className={`${TextDownMiddle ? 'text-7xl h-14' : 'text-5xl h-10'}`}>{titleFirstPart}</h2 >
                            <h2 className={`${TextDownMiddle ? 'text-7xl h-14' : 'text-5xl h-10'}`}> {titleSecondPart}</h2 >
                        </div>
                        <p className={`${TextColorWhite && 'text-white'}`}>{descriptionFirstPart} <br /> {descriptionSecondPart}</p>
                        <Button ButtonName={ButtonName} buttonColor={textColor} />
                    </div> :
                        <div className={`absolute bottom-0 left-[10%] space-y-1 my-[5%] max-w-[95%]`} >
                            <div className={`${removeTitle && 'hidden sm:block'} font-medium `}>
                                <span className={`text-2xl h-10 ${TextColorWhite && titleSecondPart === 'MEMBER' && 'text-white'}`}>{subtitleFirstPart} <br />{subtitleSecondPart}</span >
                            </div>
                            <p className={`${TextColorWhite && titleSecondPart === 'MEMBER' && 'text-white'}`}>{descriptionFirstPart}</p>

                            <Button ButtonName={ButtonName} buttonColor={textColor} />
                            {ExtraButton && <Button ButtonName={ExtraButtonName} buttonColor={textColor} />}

                        </div>}
                </div >
            </div>
        </section >
    )
}