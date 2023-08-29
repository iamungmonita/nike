import { AHelmet } from '@/core';
import { Banner, Carousel } from '@/core';
import { Category } from '@/models/Category';
import { getAllMemberShip } from '@/service/membership';
import { getAllPopular } from '@/service/popular';
import { getAllShopSport } from '@/service/shopbysport';
import { getAllTrending } from '@/service/trending';
import { useEffect, useState } from 'react';
import { getAllIconic } from '@/service/iconic';

export default function Home() {
  const [items, setItems] = useState<Category[]>([])
  const [popular, setPopular] = useState<Category[]>([])
  const [member, setMember] = useState<Category[]>([])
  const [sport, setSport] = useState<Category[]>([])
  const [iconic, setIconic] = useState<Category[]>([])
  useEffect(() => {
    initFunction()
  }, [])

  function initFunction() {
    Promise.all([getAllTrending(), getAllPopular(), getAllShopSport(), getAllMemberShip(), getAllIconic()]).then((response: [Category[], Category[], Category[], Category[], Category[]]) => {
      const trending = response[0]
      const popular = response[1]
      const sport = response[2]
      const member = response[3]
      const iconic = response[4]
      setItems(trending)
      setPopular(popular)
      setSport(sport)
      setMember(member)
      setIconic(iconic)
    })
  }
  return (
    <main>
      <AHelmet>Nike. Just Do it. Nike.com</AHelmet>

      <Banner BannerVersion={1} ButtonName='Shop' BannerImg={'/pictures/desktop/banner/section1.webp'} SmallScreenImage={'/pictures/mobile/banner/section1-mobile.webp'} titleFirstPart={' EXTRA 20 % OFF'} titleSecondPart={'SELECT STYLES'} descriptionFirstPart='Members: Don’t forget to sign in and use code READY to save. Ends 8.27.' descriptionSecondPart='Exclusions apply.' textColor={false} removeTitle={true} TextColorWhite={true} />
      <Banner BannerVersion={1} ButtonName='Shop' BannerImg={'/pictures/desktop/banner/section2.webp'} SmallScreenImage={'/pictures/mobile/banner/section2-mobile.webp'} titleFirstPart='REDISCOVER' titleSecondPart='THE WORLD' descriptionFirstPart='Wherever you decide to run or hike, Nike Trail & Nike ACG' descriptionSecondPart='are here for your next adventure.' textColor={true} TextDownMiddle={true} />
      <div className='space-y-20'>
        <Carousel productItem={items} itemVersion={1} itemSize={400} itemTitle='Trending' />
        <Banner BannerVersion={1} ButtonName='Shop All' BannerImg={'/pictures/desktop/banner/section4.webp'} SmallScreenImage={'/pictures/mobile/banner/section4-mobile.webp'} titleFirstPart={'BACK TO SCHOOL'} titleSecondPart={'ESSENTIALS'} descriptionFirstPart='Score everything you need for day one and beyond.' textColor={true} BannerTitle={`Let's Go`} />


        <div>
          <h2 className={`text-2xl font-medium px-[5%] py-5`}>Featured</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:px-[5%]'>
            <div className='gap-x-2'>
              <Banner BannerVersion={2} titleFirstPart='' subtitleFirstPart='Rise & Shine in Phoenix Fleece' ButtonName='Shop' BannerImg={'/pictures/desktop/featured/1.webp'} SmallScreenImage={'/pictures/mobile/featured/1.webp'} TextDownMiddle={true} textColor={true} />
            </div>
            <div className=''>
              <Banner BannerVersion={2} titleFirstPart='' subtitleFirstPart='Must-Have Air Max' ButtonName='Shop All' BannerImg={'/pictures/desktop/featured/2.webp'} SmallScreenImage={'/pictures/mobile/featured/2.webp'} TextDownMiddle={true} textColor={true} />
            </div>
          </div>
        </div>
        <Carousel productItem={iconic} itemVersion={1} itemSize={300} itemTitle='Always Iconic' />
        <Carousel productItem={sport} itemVersion={1} itemSize={400} itemTitle='Shop by Sport' />
        <Carousel productItem={popular} itemVersion={2} itemSize={400} itemTitle='Popular Right Now' />
        <div>
          <Banner BannerVersion={1} ButtonName='Join Us' BannerImg={'/pictures/desktop/banner/nike-membership.png'} SmallScreenImage={'/pictures/mobile/banner/nike-membership-mobile.webp'} titleFirstPart={'BECOME A'} titleSecondPart={'MEMBER'} descriptionFirstPart='Sign up for free. Join the community.' textColor={false} TextColorWhite={true} ExtraButton={true} ExtraButtonName='Sign In' BannerTitle='Nike Membership' />
          <Carousel productItem={member} itemVersion={2} itemTitleCloser={true} itemSize={400} />
        </div>
      </div>
    </main >
  )
}
