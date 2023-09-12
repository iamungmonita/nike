import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllPopular } from '@/service/popular'
import useApi from '@/hooks/useApi'
import { Category } from '@/models/Category'
type Props = {}

export default function items2({ }: Props) {
    const [items, setItems] = useState<Category[]>([])
    const promiseAll = () => Promise.resolve(getAllPopular())
    const { response } = useApi({ service: promiseAll, effects: [] })

    useEffect(() => {
        if (response?.length) {
            setItems(response)
        }
    }, [response?.length])
    return (
        <div>
            {
                items.map((item) => <Link href={`/product/[id]`} as={`/product/${item.name}`}>
                    <p>{item.name}</p>
                </Link>)
            }
        </div>
    )
}

