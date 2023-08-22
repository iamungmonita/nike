import React from 'react'
import { Header } from '@/core/components'
type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}