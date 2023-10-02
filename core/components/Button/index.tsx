
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'


export interface ButtonProps {
    onClick?: () => void
    ButtonName?: string,
    ButtonTextWhiteBackgroundBlack?: boolean
    customStyle?: string,


}

export default function Button(props: ButtonProps) {
    const { onClick, ButtonName, ButtonTextWhiteBackgroundBlack, customStyle } = props
    return (
        <button
            className={`text-center rounded-full cursor-pointer ${customStyle} ${ButtonTextWhiteBackgroundBlack ? 'text-white bg-black' : 'text-black bg-white'} `}
            onClick={onClick}>{ButtonName} </button>
    )
}