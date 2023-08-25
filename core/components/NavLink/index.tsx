import Link from 'next/link';
import React from 'react';

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