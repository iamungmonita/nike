import React, { useEffect, useState } from 'react';

import { IconButton } from '@/core/components';
import useApi from '@/hooks/useApi';
import { Category } from '@/models/Category';
import { getAllSideCategory, getAllSideComponent } from '@/service/side';
import style from '@/styles/Side.module.scss';

type Props = {}
type Response = [Category[], Category[]]

export default function Side({ }: Props) {
    const [refresh, setRefresh] = useState(false)
    const [titles, setTitle] = useState<Category[] | []>([])
    const [subTitles, setSubTitle] = useState<Category[] | []>([])
    const PromiseAll = () => Promise.all([getAllSideCategory(), getAllSideComponent()])
    const { response } = useApi({ service: PromiseAll, effects: [] })


    useEffect(() => {
        init()
    }, [response?.length, refresh])

    function init() {
        if (response?.length) {
            const [sideCategory, sideComponent] = response
            if (!titles?.length) {
                setTitle(sideCategory);
                setSubTitle(sideComponent);
            }
        }
    }

    function onClickExpanded(index: number) {
        subTitles[index].isExpanded = !subTitles[index].isExpanded;
        setSubTitle(subTitles);
        setRefresh(!refresh);
    }

    return (
        <div className={`col-span-1 py-[5%] overflow-y-scroll h-[80vw] hidden lg:block ${style.scroll__bar}`}>
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
                    <div key={subTitle.id} className={`py-5 border-b`}>
                        <div onClick={() => onClickExpanded(index)} className="flex justify-between items-center font-medium cursor-pointer">
                            <p>{subTitle.name}</p>
                            <IconButton IconImage='/icons/arrow_down.svg' IconHeight={20} IconWidth={20} NoBackgroundHover={true} />
                        </div>
                        <div className={`${subTitle.name === "Colors" ? 'grid grid-cols-3 gap-3 justify-between' : ''}`}>
                            {subTitle.isExpanded && subTitle.subCategories.length > 0 && subTitle.subCategories.map((subCat) =>
                                <div key={subTitle.id}>
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