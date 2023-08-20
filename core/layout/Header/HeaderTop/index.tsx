import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { jordan, converse } from '@/public/pictures'
import { HeaderTop } from '@/constants'

type Props = {}

export default function index({ }: Props) {
  return (
    <div className=' hidden md:block bg-backgroundHeader '>
      <div className='max-w-6xl mx-auto py-2 flex justify-between items-center'>
        <div className='flex gap-3'>
          <Image src={jordan} width={20} height={20} alt='jordan' />
          <Image src={converse} width={30} height={20} alt='coverse' />
        </div>
        <ul className={`flex gap-5 text-xs items-center`}>
          {HeaderTop.map((top, index) =>
            <Link className='top__navigation pr-5' href={top.path} key={index}>{top.link}</Link>
          )}
        </ul>

      </div>
    </div >
  )
}