import { filter } from 'lodash';
import React, { useEffect, useState } from 'react';

import useApi2 from '@/hooks/useApi';
import { SubHeader, SubSubHeader } from '@/models/Header';
import { getAllCategoryID, getAllSubCategoryID } from '@/service/sub-category';

type Props = {}

type Response = [SubSubHeader[], SubSubHeader[]];

export default function testing({ }: Props) {
    const [categoriesItems, setCategoriesItems] = useState<SubHeader[]>([]);
    const promiseAll = ()=>  Promise.all([getAllSubCategoryID(), getAllCategoryID()]);
    const { response } = useApi2({service: promiseAll, effects: []})

    useEffect(() => {
        init();
    }, [response?.length]);

    function init() {
        if (response?.length) {
            const [subCategoryId1, categoryId1] = response;
            if (!categoriesItems.length) {
                const mappedCategory = categoryId1.map((cat: SubSubHeader): SubHeader => {
                    const filterSub = filter(subCategoryId1, { subCategoryId: cat.id }) ?? [];
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
        <div>{categoriesItems.map((item) => <p>{item.subCategories.map((e) => <p>{e.name}</p>)}</p>)}</div>
    )
}