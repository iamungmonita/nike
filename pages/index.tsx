import { AHelmet, Card } from '@/core';
import { Banner } from '@/core';
import { Category } from '@/models/Category';
import { getAllTrending } from '@/service/trending';
import { useEffect, useState } from 'react';
import Image from 'next/image';
export default function Home() {
  const [items, setItems] = useState<Category[]>([])

  useEffect(() => {
    initFunction()
  }, [])

  function initFunction() {
    Promise.resolve(getAllTrending()).then((response: Category[]) => {
      setItems(response)
    })
  }
  return (
    <main>
      <AHelmet>Nike. Just Do it. Nike.com</AHelmet>
      <Banner ButtonName='Shop' BannerImg={'/pictures/desktop/banner/section1.webp'} SmallScreenImage={'/pictures/mobile/banner/section1-mobile.webp'} titleFirstPart={' EXTRA 20 % OFF'} titleSecondPart={'SELECT STYLES'} descriptionFirstPart='Members: Don’t forget to sign in and use code READY to save. Ends 8.27.' descriptionSecondPart='Exclusions apply.' textColor={false} removeTitle={true} TextColorWhite={true} />
      <Banner ButtonName='Shop' BannerImg={'/pictures/desktop/banner/section2.webp'} SmallScreenImage={'/pictures/mobile/banner/section2-mobile.webp'} titleFirstPart='REDISCOVER' titleSecondPart='THE WORLD' descriptionFirstPart='Wherever you decide to run or hike, Nike Trail & Nike ACG are here for your next adventure' textColor={true} TextDownMiddle={true} />

      <Banner ButtonName='Shop All' BannerImg={'/pictures/desktop/banner/section4.webp'} SmallScreenImage={'/pictures/mobile/banner/section4-mobile.webp'} titleFirstPart={'BACK TO SCHOOL'} titleSecondPart={'ESSENTIALS'} descriptionFirstPart='Score everything you need for day one and beyond.' textColor={true} />
    </main >
  )
}
