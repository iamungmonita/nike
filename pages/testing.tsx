
import { SubHeader, SubSubHeader } from '@/models/Header'
import { log } from 'console'
import { filter } from 'lodash'

import React, { useEffect, useState } from 'react'
import { Header } from '@/models/Header'
import { getAllHeaderId1, getAllSubHeaderId1 } from '@/service/header/subHeader'
import useApi from '@/hooks/useApi'

type Props = {}

type Response = [SubHeader[], SubSubHeader[]]

export default function testing({ }: Props) {
    const [categoriesItems, setCategoriesItems] = useState<SubHeader[]>([])
    const PromiseAll = () => Promise.all([getAllHeaderId1(), getAllSubHeaderId1()])
    const { response } = useApi({ service: PromiseAll, effects: [] })


    useEffect(() => {
        init()
    }, [response?.length])

    function init() {
        if (response?.length) {
            const [HeaderId1, subHeaderId1] = response
            if (!categoriesItems.length) {
                const mappedCategory = HeaderId1.map((cat: SubHeader) => {
                    const filterSub = filter(subHeaderId1, { subCategoryId: cat.id })
                    return {
                        ...cat,
                        categoryId: cat.id,
                        subCategories: filterSub
                    }
                })
                setCategoriesItems(mappedCategory)
            }
        }
    }
    return (
        <div className='flex max-w-[70vw] mx-auto'>
            <div className='max-w-[25%] bg-red-200 '>
                {categoriesItems.map((item) =>
                    <div className='flex flex-col gap-y-5'>
                        <div>
                            <h2 className='font-medium'>{item.id === 1 && item.name}</h2>
                            <p>{item.subCategories.map((sub) => <p>{sub.subCategoryId === 1 && sub.name}</p>)}</p>
                        </div>
                        <div>
                            <h2 className='font-medium'>{item.id === 2 && item.name}</h2>
                            <p>{item.subCategories.map((sub) => <p>{sub.subCategoryId === 2 && sub.name}</p>)}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className='max-w-[25%] bg-red-200 '>
                {categoriesItems.map((item) =>
                    <div className='flex flex-col gap-y-5'>
                        <div>
                            <h2 className='font-medium'>{item.id === 1 && item.name}</h2>
                            <p>{item.subCategories.map((sub) => <p>{sub.subCategoryId === 1 && sub.name}</p>)}</p>
                        </div>
                        <div>
                            <h2 className='font-medium'>{item.id === 2 && item.name}</h2>
                            <p>{item.subCategories.map((sub) => <p>{sub.subCategoryId === 2 && sub.name}</p>)}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}