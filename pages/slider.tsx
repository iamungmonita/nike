import useApi from '@/hooks/useApi'
import React, { useEffect, useState } from 'react'
import { Category } from '@/models/Category'
import { getAllPopular } from '@/service/popular'
import { Card, Carousel } from '@/core'
import Swiper from 'swiper'
type Props = {}

export default function slider({ }: Props) {
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
            <Carousel productItem={items} CardVersion={1} itemTitle='Get Popular' />
        </div>
    )
}