import React from 'react'
import { BannerBackground, Button } from '@/core/components'
import { Slider } from '@/core/components'
import { getAllFeatured, getAllPopular, getAllTrending, getAllShopSport } from '@/pages/service'
import image1 from '@/public/pictures/section1.webp'
import image4 from '@/public/pictures/section4.webp'
import image2 from '@/public/pictures/section1-mobile.webp'
import { AutoSlider } from '@/core/components'
const index = () => {
    return (
        <>
            <BannerBackground background={image1} backgroundmobile={image2} btnText='Shop' btnBgColor={true} titleStart='EXTRA 20% OFF' titleEnd='SELECT STYLE' textStart="Members: Sign in and use code READY at check out. Ends 8/27." textEnd="Exclusions apply." />
            <AutoSlider />
            <section className='relative my-20'>
                <div className='space-y-3 text-center'>
                    <h2 className='text-[70px] tracking-tight font-extrabold'>STYLE IS IN THE AIR</h2>
                    <p>From the Air Max 97 to the Air VaporMax Plus, max out your look with the <br />latest air.</p>
                    <div className='flex gap-3 absolute left-[50%] -translate-x-[50%]'>
                        <Button text={`Shop Men's Air`} bg_color={false} />
                        <Button text={`Shop Women's Air`} bg_color={false} />
                        <Button text={`Shop Kid's Air`} bg_color={false} />
                    </div>
                </div>
            </section>
            <Slider getAllFunction={getAllTrending} MainTitle='Trending' />
            <BannerBackground background={image4} backgroundmobile={image1} btnText='Shop All' btnBgColor={false} MainTitle={`Day One's Coming Fast`} titleStart='BACK TO SCHOOL' titleEnd='ESSENTIALS' textStart="Score everything you'll need from day one and beyond." />
            <Slider getAllFunction={getAllShopSport} MainTitle='Shop By Sport' />
            <Slider getAllFunction={getAllPopular} MainTitle='Popular Right Now' />
            <Slider getAllFunction={getAllFeatured} MainTitle='Featured' />
        </>
    )
}

export default index