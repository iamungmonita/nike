import useApi from '@/core/services/useApi'
import { Header } from '@/models/Header'
import React from 'react'
import style from '@/styles/Scrollbar.module.scss'
import { IconButton } from '@/core/components'

type Props = {}

export default function Side({ }: Props) {
    const { response } = useApi<Header[]>('/data/header/header-middle.json')

    const result = response.slice(3, 4)
    const items = result.map((e: any) => e.subCategories)
    const names = items.map((a: any) => (a.slice(5, 6).map((b: any) => b.subCategories)))



    // items.map((a: any) => (a.slice(5, 6).map((b: any) => console.log(b.subCategories.map((c: any) => c.name))
    // )))









    return (
        <div className={`col-span-1 py-[5%] pr-[5%] overflow-y-scroll h-80 font-medium ${style.scroll_bar}`}>
            {[{
                id: 1,
                name: "Pick Up Today"
            }].map((e) =>
                <div className='py-5 border-b flex justify-between items-center'>
                    <p>{e.name}</p>
                    <input type="checkbox" />
                </div>
            )}

            {[{
                id: 1,
                name: "Sale & Offer"
            }].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    <div className=''>
                        <span className='flex justify-between items-center pr-[5%]'><p>Back To School</p><input type="checkbox" name="sale" id="" /></span>
                        <span className='flex justify-between items-center pr-[5%]'><p>Sale</p><input type="checkbox" name="sale" id="" /></span>
                    </div>
                </div>
            )}
            {[{
                id: 1,
                name: "Gender"
            }].map((e) =>
                <div className='py-5 border-b flex justify-between items-center'>
                    <p>{e.name}</p>
                    <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                </div>
            )}
            {[{
                id: 1,
                name: "Kids"
            }].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    <div className=''>
                        <span className='flex justify-between items-center pr-[5%]'><p>Boys</p><input type="checkbox" name="sale" id="" /></span>
                        <span className='flex justify-between items-center pr-[5%]'><p>Girls</p><input type="checkbox" name="sale" id="" /></span>
                    </div>
                </div>
            )}
            {[{
                id: 1,
                name: "Shop by Price"
            }].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    <div className=''>
                        <span className='flex justify-between items-center pr-[5%]'><p>40% Off and Up</p><input type="checkbox" name="sale" id="" /></span>
                        <span className='flex justify-between items-center pr-[5%]'><p>30% Off and Up</p><input type="checkbox" name="sale" id="" /></span>
                        <span className='flex justify-between items-center pr-[5%]'><p>0% Off and Up</p><input type="checkbox" name="sale" id="" /></span>
                        <p>+ More</p>
                    </div>
                </div>
            )}
            {[{
                id: 1,
                name: "Products Discounts"
            }].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    <div className=''>
                        <span className='flex justify-between items-center pr-[5%]'><p>40% Off and Up</p><input type="checkbox" name="sale" id="" /></span>
                        <span className='flex justify-between items-center pr-[5%]'><p>30% Off and Up</p><input type="checkbox" name="sale" id="" /></span>
                        <span className='flex justify-between items-center pr-[5%]'><p>0% Off and Up</p><input type="checkbox" name="sale" id="" /></span>
                        <p>+ More</p>
                    </div>
                </div>
            )}
            {[{
                id: 1,
                name: "Colors"
            }].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    <div className='flex gap-3 flex-wrapp'>
                        {[
                            {
                                id: 1,
                                name: "Purple",
                                color: '#800080',
                            },
                            {
                                id: 2,
                                name: "Black",
                                color: '#800080',
                            },
                            {
                                id: 3,
                                name: "Red",
                                color: '#800080',
                            },
                            {
                                id: 4,
                                name: "Orange",
                                color: '#800080',
                            },
                            {
                                id: 5,
                                name: "Blue",
                                color: '#800080',
                            },
                            {
                                id: 6,
                                name: "White",
                                color: '#800080',
                            },
                        ].map((e) =>
                            <div className='flex flex-col justify-center '>
                                <div className={`rounded-full w-10 h-10 bg-[${e.color}]`}></div>
                                <p className='py-5 border-b'>{e.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {[
                {
                    id: 1,
                    name: "Brands",
                }
            ].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    {[
                        {
                            id: 1,
                            name: "Nike Sportwears",
                        },
                        {
                            id: 2,
                            name: "Jordan",
                        },
                        {
                            id: 3,
                            name: "NikeLab",
                        },
                        {
                            id: 4,
                            name: "ACG",
                        },].map((e) => <span className='flex justify-between items-center pr-[5%]'><p>{e.name}</p><input type="checkbox" name="sale" id="" /></span>)}
                    <p>+ More</p>
                </div>
            )}
            {[
                {
                    id: 1,
                    name: "Sports & Activities",
                }
            ].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    {[
                        {
                            id: 1,
                            name: "Lifestyle",
                        },
                        {
                            id: 2,
                            name: "Running",
                        },
                        {
                            id: 3,
                            name: "Training & Gym",
                        },
                        {
                            id: 4,
                            name: "Yoga",
                        },].map((e) => <span className='flex justify-between items-center pr-[5%]'><p>{e.name}</p><input type="checkbox" name="sale" id="" /></span>)}
                    <p>+ More</p>
                </div>
            )}
            {[
                {
                    id: 1,
                    name: "Icons",
                }
            ].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    {[
                        {
                            id: 1,
                            name: "Air Force 1",
                        },
                        {
                            id: 2,
                            name: "Air Max",
                        },
                        {
                            id: 3,
                            name: "Alpha Huarache",
                        },
                        {
                            id: 4,
                            name: "Benassi",
                        },].map((e) => <span className='flex justify-between items-center pr-[5%]'><p>{e.name}</p><input type="checkbox" name="sale" id="" /></span>)}
                    <p>+ More</p>
                </div>
            )}
            {[
                {
                    id: 1,
                    name: "Sports & Activities",
                }
            ].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    {[
                        {
                            id: 1,
                            name: "Air Max 1",
                        },
                        {
                            id: 2,
                            name: "Air Max 90",
                        },
                        {
                            id: 3,
                            name: "Air Max 95",
                        },
                        {
                            id: 4,
                            name: "Air Max 97",
                        },].map((e) => <span className='flex justify-between items-center pr-[5%]'><p>{e.name}</p><input type="checkbox" name="sale" id="" /></span>)}
                    <p>+ More</p>
                </div>
            )}
            {[
                {
                    id: 1,
                    name: "Athletes",
                }
            ].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    {[
                        {
                            id: 1,
                            name: "LeBron James ",
                        },
                        {
                            id: 2,
                            name: "Kevin Durant",
                        },
                        {
                            id: 3,
                            name: "Paul Goerge",
                        },
                        {
                            id: 4,
                            name: "Tiger Woods",
                        },].map((e) => <span className='flex justify-between items-center pr-[5%]'><p>{e.name}</p><input type="checkbox" name="sale" id="" /></span>)}
                    <p>+ More</p>
                </div>
            )}
            {[
                {
                    id: 1,
                    name: "Collaborator",
                }
            ].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    {[
                        {
                            id: 1,
                            name: "Nike & MMW",
                        },
                        {
                            id: 2,
                            name: "Gyakusou",
                        }].map((e) => <span className='flex justify-between items-center pr-[5%]'><p>{e.name}</p><input type="checkbox" name="sale" id="" /></span>)}
                    <p>+ More</p>
                </div>
            )}
            {[
                {
                    id: 1,
                    name: "Best For",
                }
            ].map((e) =>
                <div className='py-5 border-b '>
                    <div className='flex justify-between items-center'>
                        <p>{e.name}</p>
                        <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} />
                    </div>
                    {[
                        {
                            id: 1,
                            name: "Warm Weather ",
                        },
                        {
                            id: 2,
                            name: "Wet Weather Conditions",
                        },
                        {
                            id: 3,
                            name: "Cold Weather",
                        },
                        {
                            id: 4,
                            name: "Dry Weather Conditions",
                        },].map((e) => <span className='flex justify-between items-center pr-[5%]'><p>{e.name}</p><input type="checkbox" name="sale" id="" /></span>)}
                    <p>+ More</p>
                </div>
            )}
        </div>
    )
}