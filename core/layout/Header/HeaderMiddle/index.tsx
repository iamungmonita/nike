import React, { useEffect, useState } from 'react'
import { nike } from '@/public/pictures'
import { heart, search, shoppingbag, menu } from '@/public/icons'
import Image from 'next/image'
import Link from 'next/link'
import { Category, MappedCategory, SubCategory } from '@/models/category'
import { getAllCategory, getAllSubCategory } from '@/service/category'
import { filter } from 'lodash'
import { IconBtn } from '@/core/components'
type Props = {};

export default function () {
    const [category, setCategory] = useState<MappedCategory[]>([]);

    useEffect(() => {
        initCategory();
    }, []);


    function initCategory() {
        Promise.all([
            getAllCategory(),
            getAllSubCategory(),
        ]).then((response: [Category[], SubCategory[]]) => {
            const categories = response[0];
            const subCategories = response[1];

            if (!category.length) {
                const mappedObject = categories.map((item): MappedCategory => {
                    const filterSub = filter(subCategories, { categoryId: item.id });
                    return {
                        ...item,
                        subCategories: filterSub,
                    };
                });
                setCategory(mappedObject)
            }
        });
    }



    return (
        <div className='max-w-6xl mx-auto px-5 py-3 md:py-3 md:px-0 flex justify-between items-center'>
            <Link href={'/'}>
                <Image src={nike} width={60} height={60} alt='nike' />
            </Link>

            <div className='flex gap-12 justify-between items-center'>
                <ul className='md:flex gap-5 font-medium hidden'>
                    {category.map((middle, index) =>
                        <Link href={middle.routePath} key={index}>{middle.name}</Link>
                    )}
                </ul>
                <div>
                    <span className='p-2 hidden md:flex bg-backgroundHeader hover:bg-gray-200 rounded-full gap-3'>
                        <Image src={search} width={20} height={20} alt='search' />
                        <input className='bg-transparent w-36 outline-none' type="text" placeholder='Search...' />
                    </span>
                </div>
                <div className='flex gap-2'>
                    <IconBtn icon={search} footer={false} />
                    <IconBtn icon={heart} hidden={true} footer={false} />
                    <IconBtn icon={shoppingbag} footer={false} />
                    <IconBtn icon={menu} md_hidden={true} footer={false} />
                </div>
            </div>
        </div>
    )
}