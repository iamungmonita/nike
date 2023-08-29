import React from 'react'

type Props = {
    onClick?: () => void
    ButtonName?: string,
    buttonColor?: boolean
}

export default function Button({ onClick, ButtonName, buttonColor }: Props) {
    return (
        <button className={`px-5 py-2  text-center rounded-full pointer hover:bg-gray-200 bg-black text-white ${buttonColor ? 'sm:bg-black' : 'sm:bg-white'} ${buttonColor ? 'sm:text-white' : 'sm:text-black'}`} onClick={onClick}>{ButtonName}</button>
    )
}