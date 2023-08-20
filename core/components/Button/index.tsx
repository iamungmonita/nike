import React from 'react'

type Props = {
    bg_color: boolean,
    text: string
}

export default function index({ bg_color, text }: Props) {
    return (
        <button className={`hover:bg-gray-600 rounded-full py-2 px-5 ${bg_color ? 'bg-white' : 'bg-black'} ${bg_color ? 'text-black' : 'text-white'}`}>
            {text}
        </button>
    )
}