import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

export default function Dropdown({ }: Props) {
    const countries = ['Cambodia', 'Thailand', 'Vietnam', 'Myanmar', 'Vietnam']
    const [value, setValue] = useState('')
    const [selectItem, setSelectItem] = useState('')
    const [open, setOpen] = useState<boolean>(true)
    return (
        <div >
            <div className='flex' onClick={() => setOpen(!open)} >
                <h2>{selectItem ? selectItem : 'Select Country'}</h2>
                <Image src={'/icons/arrow_down.svg'} width={25} height={25} alt='' />
            </div>
            <div className={` overflow-hidden ${open ? 'max-h-60' : 'max-h-0'}`}>
                <div className='flex p-2 bg-slate-100 items-center justify-between w-[250px]'>
                    <input type="text" placeholder='search country' className=' outline-none bg-slate-100' value={value} onChange={(e) => setValue(e.target.value)} />
                    <Image src={'/icons/search.svg'} width={25} height={25} alt='' />
                </div>
                {countries.map((country) =>
                    <div key={country}
                        className={`${country.toLowerCase().startsWith(value) ? 'block' : 'hidden'}`}
                        onClick={() => {
                            if (country.toLowerCase() !== selectItem.toLowerCase()) {
                                setSelectItem(country)
                                setOpen(false)
                            }
                        }}
                    >
                        {country}
                    </div>
                )}
            </div>
        </div>
    )
}