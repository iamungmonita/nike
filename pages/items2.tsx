import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllPopular } from '@/service/popular'
import useApi from '@/hooks/useApi'
import { Category } from '@/models/Category'
import { IconButton } from '@/core'
import { useRouter } from 'next/router'
type Props = {}

export default function items2({ }: Props) {
    const [items, setItems] = useState<Category[]>([])
    const promiseAll = () => Promise.resolve(getAllPopular())
    const { response } = useApi({ service: promiseAll, effects: [] })
    const [inputValue, setInputValue] = useState<string>('')
    const router = useRouter()
    useEffect(() => {
        if (response?.length) {
            setItems(response)
        }
    }, [response?.length])
    return (
        <div>
            <div className='flex items-center justify-between w-[250px]'>
                <input
                    className='py-2 px-5 bg-slate-100'
                    type="search" onChange={(e) => setInputValue(e.target.value.toLowerCase())} />
                <IconButton IconHeight={15} IconWidth={15} IconImage={'/icons/search.svg'} />
            </div>
            <p>{inputValue}</p>
            {
                items.map((item) => <Link href={`/products/categories/[id]`} as={`/products/categories/${item.id}`}>
                    <p className={`${item.name.toLowerCase().includes(inputValue) ? 'block' : 'hidden'}`}
                        onClick={() => setInputValue('')}>{item.name}</p>
                </Link>)
            }
        </div>
    )
}

