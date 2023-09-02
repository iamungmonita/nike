import useApi from '@/core/services/useApi'
import { SubHeader } from '@/models/Header'
import { log } from 'console'
import { filter } from 'lodash'
import { Header } from 'next/dist/lib/load-custom-routes'
import React, { useEffect, useState } from 'react'

type Props = {}



export default function testing({ }: Props) {
    const [categoriesItems, setCategoriesItems] = useState<SubHeader[]>([])
    const categoryId1 = useApi('/data/header/sub-categories/categoryId1.json').response
    const subCategoryId1 = useApi('/data/header/sub-category/sub-categoryId1.json').response

    useEffect(() => {
        init()
    }, [categoriesItems])

    function init() {
        if (!categoriesItems.length) {
            const mappedCategory = categoryId1.map((cat: SubHeader) => {
                const filterSub = filter(subCategoryId1, { subCategoryId1: cat.id })
                return {
                    ...cat,
                    subCategories: filterSub
                }
            })
            setCategoriesItems(mappedCategory)
        }
    }

    return (
        <div>{categoriesItems.map((item) => <p>{item.subCategories.map((e) => <p>{e.name}</p>)}</p>)}</div>
    )
}