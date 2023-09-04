import React, { useState } from 'react'
import Image from 'next/image'
type Props = {}

export default function testing({ }: Props) {
    const [showSubtitle, setShowSubtitle] = useState<boolean>(true)
    const [showNumber, setShowNumber] = useState<number>(0)
    function toggleSubtitle(Id: number) {
        if ([{ id: 1, name: 'title', subtitle: 'subtitle' }, { id: 2, name: 'title' }, { id: 3, name: 'title', subtitle: 'subtitle' }, { id: 4, name: 'title' }].map((e) => e.id === Id)) {
            setShowSubtitle(!showSubtitle)
        }
        setShowNumber(Id)
    }
    return (
        <div>
            {[{ id: 1, name: 'title', subtitle: 'subtitle' }, { id: 2, name: 'title' }, { id: 3, name: 'title', subtitle: 'subtitle' }, { id: 4, name: 'title' }].map((e) =>
                <div>
                    <p className='flex w-[50px] justify-between'>{e.id}<Image src="/icons/arrow_down.svg" width={20} height={20} alt='' onClick={() => toggleSubtitle(e.id)} />
                    </p>
                    {showSubtitle && e.id === showNumber && <p>{e.subtitle} </p>}
                </div>)}

        </div>
    )
}