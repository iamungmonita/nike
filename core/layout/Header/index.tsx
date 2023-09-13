import React from 'react'
import HeaderBottom from './HeaderBottom'
import HeaderMiddle from './HeaderMiddle'
import HeaderTop from './HeaderTop'
type Props = {}

export default function index({ }: Props) {
    return (
        <div>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </div>
    )
}