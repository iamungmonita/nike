import React from 'react'
import Image from 'next/image'
type Props = {}

export default function index({ }: Props) {
    return (
        <section className='my-5'>
            <Image className='w-full h-full object-cover' src={'/pictures/autoslider.webp'} alt='picture' width={1000} height={1000} />
        </section>
    )
}