import React from 'react'
import { Banner } from '@/core'
import { useEffect, useState } from 'react';
type Props = {}

export default function membership({ }: Props) {
    const [length, setLength] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('scroll', function scroll() {
            if (this.scrollY > 200) {
                setLength(true);
            } else {
                setLength(false);
            }
        });
    }, [length]);
    return (
        <section>
            <Banner
                BannerVersion={1}
                ButtonName="Join Us"
                ButtonPathName='/sign_in'
                BannerImg={'/pictures/desktop/banner/section1.jpg'}
                SmallScreenImage={'/pictures/mobile/banner/section2-mobile.webp'}
                TitleFirstPart="BECOME"
                TitleSecondPart="A MEMBER"
                DescriptionFirstPart="Wherever you decide to run or hike, Nike Trail & Nike ACG"
                DescriptionSecondPart="are here for your next adventure."
                ButtonTextWhiteBackgroundBlack={true}
                BannerTitle='Nike Membership'
            />
            <div className={`font-medium duration-500 ${length ? 'text-md fixed top-0 left-0 pl-[5%] py-3 justify-center bg-white shadow w-full' : 'md:text-2xl  text-md'
                } z-20`}>
                Nike Membership
            </div>
            <h2>Featured Benefits</h2>
        </section>
    )
}