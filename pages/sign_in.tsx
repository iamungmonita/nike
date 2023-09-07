import { Button, IconButton } from '@/core'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function sign_in({ }: Props) {
    function handleSubmit(e: any) {
        e.preventDefault()
        console.log('submitted');

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='max-w-[460px] mx-auto flex flex-col'>
                <div className=' w-full h-[100px] flex items-center gap-x-5'>
                    <IconButton IconImage={'/icons/nike.svg'} IconHeight={50} IconWidth={50} NoBackgroundHover={true} NoPadding={true} />
                    <IconButton IconImage={'/icons/jordan.svg'} IconHeight={40} IconWidth={40} NoBackgroundHover={true} NoPadding={true} />
                </div>
                <div className='h-[120px]'>
                    <h2 className='text-3xl'>Enter your email to join us or sign in.</h2>
                    <p className='mt-5'>Korea, Republic of <span><Link className='underline ' href={'/'}>Change</Link></span></p>
                </div>
                <div className='w-full h-[100px]'>
                    <input type="text" className='px-5 w-full rounded-md py-4 border' placeholder='Email' required />

                </div>
                <div className='w-[80%] text-gray-500 h-[100px]'>
                    <p className='font-light'>By continue, I agree to Nike's <span><Link href={'/'} className='underline font-medium'>Privacy Policy</Link></span> and <span><Link className='underline font-medium' href={'/'}>Terms of Use</Link></span></p>
                </div>
                <div className='self-end'>
                    <Button ButtonName='Continue' ButtonTextWhiteBackgroundBlack={true} />
                </div>
            </div>
        </form>
    )
}