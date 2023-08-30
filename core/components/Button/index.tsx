import React from 'react'

export interface ButtonProps {
    onClick?: () => void
    ButtonName?: string,
    ButtonTextWhiteBackgroundBlack?: boolean
}

export default function Button(props: ButtonProps) {
    const { onClick, ButtonName, ButtonTextWhiteBackgroundBlack } = props
    return (
        <button
            className={`px-5 py-2  text-center rounded-full cursor-pointer hover:bg-hover  ${ButtonTextWhiteBackgroundBlack ? 'text-white bg-black' : 'text-black bg-white'} `}
            onClick={onClick}>{ButtonName}</button>
    )
}