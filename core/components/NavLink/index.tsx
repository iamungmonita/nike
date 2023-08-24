import React from 'react'
import Link from 'next/link'
type Props = {
    routePath: string,
    name: string,
    index: number
}

export default function NavLink({ routePath, name, index }: Props) {
    return (
        <Link key={index} href={routePath}>{name}</Link>
    )
}