import useApi from '@/hooks/useApi'
import { Header } from '@/models/Header'
import React, { useEffect, useState } from 'react'
import style from '@/styles/Side.module.scss'
import { IconButton } from '@/core/components'
import { getAllSideCategory, getAllSideComponent } from '@/service/side'
import { Category } from '@/models/Category'


type Props = {}
type Response = [Category[], Category[]]

export default function Side({ }: Props) {
    const [titles, setTitle] = useState<Category[] | null>(null)
    const [subTitles, setSubTitle] = useState<Category[] | null>(null)
    const PromiseAll = () => Promise.all([getAllSideCategory(), getAllSideComponent()])
    const { response } = useApi({ service: PromiseAll, effects: [] })


    useEffect(() => {
        init()
    }, [response?.length])

    function init() {
        if (response?.length) {
            const [sideCategory, sideComponent] = response
            if (!titles?.length) {
                setTitle(sideCategory)
                setSubTitle(sideComponent)
            }
        }
    }
    return (
        <div className={`col-span-1 py-[5%] overflow-y-scroll h-[80vw] ${style.scroll__bar}`}>
            <div className='mr-[10%]'>
                <div className='py-5 border-b flex justify-between items-center pr-[5%]'>
                    <p>Pick Up Today</p>
                    <label className='switch'>
                        <input type="checkbox" />
                        <span className='slider'></span>
                    </label>
                </div>
                <div className='py-5 border-b flex flex-col justify-between gap-y-3 font-medium'>
                    {titles?.map((title, index) =>
                        <p key={index}>{title.name}</p>
                    )}
                </div>
                {subTitles?.map((subTitle, index) =>
                    <div key={index} className={`py-5 border-b`}>
                        <div className={`flex justify-between items-center font-medium `}>
                            <p>{subTitle.name}</p>
                            <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} NoBackgroundHover={true} />
                        </div>
                        <div className={`${subTitle.name === "Colors" ? 'grid grid-cols-3 gap-3 justify-between' : ''}`}>
                            {subTitle.subCategories && subTitle.subCategories.map((subCat, index) =>
                                <div key={index}>
                                    <span className={`flex items-center pr-[5%] ${subTitle.name !== "Colors" ? 'block' : 'hidden'}`}><input type="checkbox" className='h-5 w-5 mr-5' name="sale" id="" /><p>{subCat.name}</p></span>
                                    <span className={`flex flex-col justify-between items-center pr-[5%] ${subTitle.name === "Colors" ? 'block' : 'hidden'}`}>
                                        <div className={`w-10 h-10 rounded-full border`} style={{ backgroundColor: subCat.name.toLocaleLowerCase() }}></div>
                                        <p className='text-sm'>{subCat.name}</p>
                                    </span>
                                </div>)
                            }
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}