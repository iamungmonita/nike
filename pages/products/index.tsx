
import { Products } from '@/core';
import useApi from '@/hooks/useApi';
import { Category } from '@/models/Category';
import { getAllPopular } from '@/service/popular';
import { log } from 'console';
import React, { useEffect, useState } from 'react'
Products
type Props = {}

export default function index() {
    const [products, setProducts] = useState<Category[]>([])
    const promiseAll = () => Promise.resolve(getAllPopular())
    const { response } = useApi({ service: promiseAll, effects: [] })
    useEffect(() => {
        if (response?.length) {
            setProducts(response)
        }
    }, [response?.length])



    return (
        <Products products={products} />
    )
}
