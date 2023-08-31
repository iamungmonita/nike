import { AHelmet, Card } from '@/core';
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
  const [members, setMembers] = useState<Category[]>([])
  const [sport, setSport] = useState<Category[]>([])
  const [iconic, setIconic] = useState<Category[]>([])
  useEffect(() => {
    initFunction()
  }, [])

  function initFunction() {
    Promise.all([getAllTrending(),
    getAllPopular(),
    getAllShopSport(),
    getAllMemberShip(),
    getAllIconic()]).then((response:
      [Category[],
        Category[],
        Category[],
        Category[],
        Category[]]) => {
      const trending = response[0]
      const popular = response[1]
      const sport = response[2]
      const member = response[3]
      const iconic = response[4]
      setItems(trending)
      setPopular(popular)
      setSport(sport)
      setMembers(member)
      setIconic(iconic)
    })
  }

  return (
    <main>
      <AHelmet>Nike. Just Do it. Nike.com</AHelmet>
      <Banner
        BannerVersion={1}
        ButtonName='Shop'
        BannerImg={'/pictures/desktop/banner/rediscover.webp'}
        SmallScreenImage={'/pictures/mobile/banner/section2-mobile.webp'}
        TitleFirstPart='REDISCOVER'
        TitleSecondPart='THE WORLD'
        DescriptionFirstPart='Wherever you decide to run or hike, Nike Trail & Nike ACG'
        DescriptionSecondPart='are here for your next adventure.'
        ButtonTextWhiteBackgroundBlack={true} />
      <Carousel productItem={items} CardVersion={1} itemTitle='Trending' />
      <Banner
        BannerVersion={2}
        ButtonName='Shop'
        BannerTitle={`Let's Go`}
        BannerImg={'/pictures/desktop/banner/back-to-school.webp'}
        SmallScreenImage={'/pictures/mobile/banner/back-to-school-mobile.webp'}
        TitleFirstPart='BACK TO SCHOOL'
        TitleSecondPart='ESSENTIALS'
        DescriptionFirstPart='Score everything you need for day one and beyond.'
        ButtonTextWhiteBackgroundBlack={true} />
      <section className='px-[5%] my-10'>
        <h2 className={`text-2xl font-medium py-5`}>Featured</h2>
        <div className='flex flex-col sm:flex-row items-center gap-3'>
          <Banner
            BannerVersion={3}
            ButtonName='Shop'
            BannerImg={'/pictures/desktop/banner/feature-1.webp'}
            SmallScreenImage={'/pictures/mobile/banner/feature-1-mobile.webp'}
            TitleFirstPart={'Rise & Shine in'} TitleSecondPart={'Phoenix Fleece'}
            ButtonTextWhiteBackgroundBlack={true}
            TextColor='black' />
          <Banner
            BannerVersion={3}
            ButtonName='Shop All'
            BannerImg={'/pictures/desktop/banner/feature-2.webp'}
            SmallScreenImage={'/pictures/mobile/banner/feature-2-mobile.webp'}
            TitleFirstPart={'Must-Have Air Max'}
            ButtonTextWhiteBackgroundBlack={true}
            TextColor='black' />
        </div>
      </section>
      <Carousel productItem={iconic} CardVersion={2} itemTitle='Always Iconic' />
      <Carousel productItem={sport} CardVersion={3} itemTitle='Shop by Sport' />
      <Carousel productItem={popular} CardVersion={1} itemTitle='Popular Right Now' />
      <Banner
        BannerVersion={4}
        ButtonName='Join Us'
        ExtraButtonName='Sign In'
        BannerImg={'/pictures/desktop/banner/nike-membership.png'}
        SmallScreenImage={'/pictures/mobile/banner/nike-membership-mobile.webp'}
        TitleFirstPart={'BECOME A'}
        TitleSecondPart={'MEMBER'}
        DescriptionFirstPart='Sign up for free. Join the community.'
        ButtonTextWhiteBackgroundBlack={false}
        TextColor='white'
        BannerTitle='Nike Membership' />
      <section>
        <div className='w-full flex flex-col gap-x-3 sm:flex-row px-[5%]'>
          {members.map((member, index) =>
            <Card key={index} CardVersion={4} itemCurrentSlide={0} itemName={member.name} itemPicture={member.picture} itemSize={370} itemTag={member.tag} itemTitleCloser={true} />
          )}
        </div>
      </section>
    </main >
  )
}
