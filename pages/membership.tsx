import React from 'react'
import { Banner, Dropdown, Card } from '@/core'
import { useEffect, useState } from 'react';

import { Category } from '@/models/Category';
import { getAllMemberShip } from '@/service/membership';
import useApi from '@/hooks/useApi';

type Props = {}

export default function membership({ }: Props) {
    const [members, setMember] = useState<Category[]>([])
    const [length, setLength] = useState<boolean>(false);
    const [toggle, setToggle] = useState<boolean>(false);
    const promiseALl = () => Promise.resolve(getAllMemberShip())
    const { response } = useApi({ service: promiseALl, effects: [] })
    useEffect(() => {
        window.addEventListener('scroll', function scroll() {
            if (this.scrollY > 200) {
                setLength(true);
            } else {
                setLength(false);
            }
        });
    }, [length]);
    useEffect(() => {
        if (response?.length) {
            setMember(response)
        }
    }, [response?.length])
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
            <div className='text-center text-2xl font-semibold'>
                <h2>Featured Benefits</h2>
                <section>
                    <div className="w-full grid grid-cols-2 gap-x-3 flex-row py-3 px-[5%]">
                        {members.map((member, index) => (
                            <Card
                                key={index}
                                CardVersion={4}
                                itemCurrentSlide={0}
                                itemName={member.name}
                                itemPicture={member.picture}
                                itemSize={370}
                                itemTag={member.tag}
                                itemTitleCloser={true}
                            />
                        ))}
                    </div>
                </section>
            </div>


        </section >
    )
}