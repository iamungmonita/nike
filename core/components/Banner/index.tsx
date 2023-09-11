import React from 'react'
import Image from 'next/image'
import Button from '../Button'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface BannerProps {
    onClick?: () => void,
    ButtonName: string,
    BannerImg: string | StaticImport,
    TitleFirstPart: string,
    TitleSecondPart?: string,
    DescriptionFirstPart?: string,
    DescriptionSecondPart?: string,
    SmallScreenImage: string | StaticImport,
    ButtonTextWhiteBackgroundBlack?: boolean,
    TextColor?: string
    ExtraButtonName?: string,
    BannerVersion: number,
    BannerTitle?: string,
}

export default function Banner(props: BannerProps) {
    const {
        onClick,
        ButtonName,
        BannerImg,
        TitleFirstPart,
        TitleSecondPart,
        DescriptionFirstPart,
        DescriptionSecondPart,
        SmallScreenImage,
        ButtonTextWhiteBackgroundBlack,
        TextColor,
        ExtraButtonName,
        BannerVersion,
        BannerTitle
    } = props

    return (
        <section>
            {/* Version 1 */}
            {BannerVersion === 1 &&
                <>
                    {/* Small Screen */}
                    <div className='px-[5%] block sm:hidden'>
                        {BannerTitle && <h2 className={`text-2xl font-medium py-5`}>{BannerTitle}</h2>}
                        <Image
                            src={SmallScreenImage}
                            width={1000}
                            height={1000}
                            alt={TitleFirstPart as string} />
                        <div className={`space-y-10 my-10 max-w-[95%]`} >
                            <div className={`font-extrabold tracking-[-3px] mb-10`}>
                                <h2 className='text-5xl'>{TitleFirstPart} <br />{TitleSecondPart}</h2 >
                            </div>
                            <p className={`text-black max-w-[90%]`}>{DescriptionFirstPart} {DescriptionSecondPart}</p>
                            <Button ButtonName={ButtonName} ButtonTextWhiteBackgroundBlack={ButtonTextWhiteBackgroundBlack} customStyle='py-2 px-5' />
                        </div>
                    </div>

                    {/* Large Screen */}
                    <div className='hidden sm:block'>
                        {BannerTitle && <h2 className={`text-2xl font-medium px-[5%] py-5`}>{BannerTitle}</h2>}
                        <div className={`h-auto w-full`}>
                            <Image
                                src={BannerImg} className='w-[100%] h-[100%] object-cover'
                                width={1000}
                                height={1000}
                                alt={TitleFirstPart as string} />
                        </div>
                        <div className={`space-y-10 my-10 text-center`}>
                            <div className='mb-10 font-extrabold tracking-[-3px]'>
                                <h2 className='text-7xl h-14'>{TitleFirstPart}</h2 >
                                <h2 className='text-7xl h-14'>{TitleSecondPart}</h2 >
                            </div>
                            <p className={`text-black`}>{DescriptionFirstPart} <br /> {DescriptionSecondPart}</p>
                            <Button ButtonName={ButtonName} ButtonTextWhiteBackgroundBlack={ButtonTextWhiteBackgroundBlack} customStyle='py-2 px-5' />
                        </div>
                    </div>
                </>
            }
            {/* Version 2  */}
            {BannerVersion === 2 &&
                <>
                    {/* Small SCreen */}
                    <div className='px-[5%] block sm:hidden'>
                        {BannerTitle && <h2 className={`text-2xl font-medium py-5`}>{BannerTitle}</h2>}
                        <Image
                            src={SmallScreenImage}
                            width={1000}
                            height={1000}
                            alt={TitleFirstPart as string} />
                        <div className={`space-y-10 my-10`} >
                            <div className={`font-extrabold tracking-[-3px] mb-10`}>
                                <h2 className='text-5xl'>{TitleFirstPart} <br /> {TitleSecondPart}</h2 >
                            </div>
                            <p className={`text-black max-w-[95%]`}>{DescriptionFirstPart} {DescriptionSecondPart}</p>
                            <Button ButtonName={ButtonName} ButtonTextWhiteBackgroundBlack={ButtonTextWhiteBackgroundBlack} customStyle='py-2 px-5' />
                        </div>
                    </div>

                    {/* Large Screen */}
                    <div className='hidden sm:block relative'>
                        {BannerTitle && <h2 className={`text-2xl font-medium px-[5%] py-5`}>{BannerTitle}</h2>}
                        <div className={`h-[300px] w-full`}>
                            <Image
                                src={BannerImg} className='w-[100%] h-[100%] object-cover'
                                width={1000}
                                height={1000}
                                alt={TitleFirstPart as string} />
                        </div>
                        <div className={`space-y-5 absolute bottom-[15%] left-[5%]`}>
                            <div className=' font-extrabold tracking-[-3px]'>
                                <h2 className='text-5xl h-10'>{TitleFirstPart}</h2 >
                                <h2 className='text-5xl h-10'>{TitleSecondPart}</h2 >
                            </div>
                            <p className={`text-black`}>{DescriptionFirstPart} <br /> {DescriptionSecondPart}</p>
                            <Button ButtonName={ButtonName} ButtonTextWhiteBackgroundBlack={ButtonTextWhiteBackgroundBlack} customStyle='py-2 px-5' />
                        </div>
                    </div>
                </>
            }
            {/* Version 3 */}
            {BannerVersion === 3 &&
                <>
                    {/* Small SCreen */}
                    <div className='block sm:hidden relative'>
                        <Image
                            src={SmallScreenImage}
                            width={1000}
                            height={1000}
                            alt={TitleFirstPart as string} />
                        <div className={`space-y-10 absolute bottom-[5%] left-[5%] text-${TextColor}`} >
                            <h2 className={`text-2xl font-medium text-${TextColor}`}>{TitleFirstPart} <br /> {TitleSecondPart}</h2 >
                            {DescriptionFirstPart || DescriptionSecondPart && <p>{DescriptionFirstPart} <br /> {DescriptionSecondPart}</p>}
                            <div className='flex gap-x-3'>
                                <Button ButtonName={ButtonName} ButtonTextWhiteBackgroundBlack={ButtonTextWhiteBackgroundBlack} customStyle='py-2 px-5' />
                            </div>
                        </div>
                    </div>

                    {/* Large Screen */}
                    <div className='hidden sm:block'>
                        <div className='gap-x-3'>
                            <div className='relative'>
                                <div className={`h-auto w-full`}>
                                    <Image
                                        src={BannerImg} className='w-[100%] h-[100%] object-cover'
                                        width={1000}
                                        height={1000}
                                        alt={TitleFirstPart as string} />
                                </div>
                                <div className={`space-y-7 absolute bottom-[10%] left-[5%] text-white`}>
                                    <h2 className={`text-2xl font-medium text-${TextColor}`}>{TitleFirstPart} <br /> {TitleSecondPart}</h2 >
                                    {DescriptionFirstPart || DescriptionSecondPart && <p>{DescriptionFirstPart} <br /> {DescriptionSecondPart}</p>}
                                    <div className='flex gap-x-3'>
                                        <Button ButtonName={ButtonName} ButtonTextWhiteBackgroundBlack={ButtonTextWhiteBackgroundBlack} customStyle='py-2 px-5' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {/* Version 4 */}
            {BannerVersion === 4 &&
                <>
                    {/* Small SCreen */}
                    <div className='px-[5%] block sm:hidden relative my-10'>
                        {BannerTitle && <h2 className={`text-2xl font-medium py-5`}>{BannerTitle}</h2>}
                        <Image
                            src={SmallScreenImage}
                            width={1000}
                            height={1000}
                            alt={TitleFirstPart as string} />
                        <div className={`space-y-10 absolute bottom-[5%] left-[5%] px-[5%] text-${TextColor}`} >
                            <div className={`font-extrabold tracking-[-3px] mb-10`}>
                                <h2 className='text-5xl flex flex-wrap'>{TitleFirstPart} <br /> {TitleSecondPart}</h2 >
                            </div>
                            <p>{DescriptionFirstPart} {DescriptionSecondPart}</p>
                            <div className='flex gap-x-3'>
                                <Button ButtonName={ButtonName} ButtonTextWhiteBackgroundBlack={ButtonTextWhiteBackgroundBlack} customStyle='py-2 px-5' />
                                <Button ButtonName={ExtraButtonName} ButtonTextWhiteBackgroundBlack={ButtonTextWhiteBackgroundBlack} customStyle='py-2 px-5' />
                            </div>
                        </div>
                    </div>

                    {/* Large Screen */}
                    <div className='hidden sm:block relative my-10'>
                        {BannerTitle && <h2 className={`text-2xl font-medium px-[5%] py-5`}>{BannerTitle}</h2>}
                        <div className={`h-[300px] w-full px-[5%]`}>
                            <Image
                                src={BannerImg} className='w-[100%] h-[100%] object-cover'
                                width={1000}
                                height={1000}
                                alt={TitleFirstPart as string} />
                        </div>
                        <div className={`space-y-7 absolute bottom-[10%] left-[10%] text-white`}>
                            <div className=' font-extrabold tracking-[-3px]'>
                                <h2 className='text-7xl h-14'>{TitleFirstPart}</h2 >
                                <h2 className='text-7xl h-14'>{TitleSecondPart}</h2 >
                            </div>
                            <p>{DescriptionFirstPart} <br /> {DescriptionSecondPart}</p>
                            <div className='flex gap-x-3'>
                                <Button ButtonName={ButtonName} ButtonTextWhiteBackgroundBlack={ButtonTextWhiteBackgroundBlack} customStyle='py-2 px-5' />
                                <Button ButtonName={ExtraButtonName} ButtonTextWhiteBackgroundBlack={ButtonTextWhiteBackgroundBlack} customStyle='py-2 px-5' />
                            </div>
                        </div>
                    </div>
                </>
            }
        </section >
    )
}