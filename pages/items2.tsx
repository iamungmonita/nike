import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllPopular } from '@/service/popular'
import useApi from '@/hooks/useApi'
import { Header } from '@/models/Header'
import { IconButton } from '@/core'
import { useRouter } from 'next/router'
import { getHeaderMiddle } from '@/service/header'
type Props = {}

export default function items2({ }: Props) {
    const [items, setItems] = useState<Header[]>([])
    const promiseAll = () => Promise.resolve(getHeaderMiddle())
    const { response } = useApi({ service: promiseAll, effects: [] })
    const [inputValue, setInputValue] = useState<string>('')
    const router = useRouter()
    useEffect(() => {
        if (response?.length) {
            setItems(response)
        }
    }, [response?.length])
    return (
        <div className='flex max-w-[80vw] mx-auto justify-between items-start'>
            {/* {items.map((item) =>
                <div className='flex flex-col group/item relative h-10 w-full'>
                    <p>{item.name}</p>
                    <div className='z-20 top-10 absolute left-[50%] -translate-x-[50%] bg-white w-full overflow-x-hidden duration-300 min-h-[60vh] hover:block px-[10%]'>
                        {item.subCategories &&
                            <div>
                                {item.subCategories.map((sub) =>
                                    <div className='bg-blue-100 w-full z-20 opacity-0 -mt-5 group-hover/item:mt-0 group-hover/item:opacity-100 duration-300 '>
                                        <p>{sub.name}</p>
                                        {sub.subCategories &&
                                            <div>
                                                {sub.subCategories.map((subsub) =>
                                                    <div>
                                                        <p className='text-sm bg-blue-50'>{subsub.name}</p>
                                                    </div>
                                                )}
                                            </div>
                                        }
                                    </div>
                                )}
                            </div>

                        }
                    </div>
                </div>
            )} */}
        </div>
    )
}

