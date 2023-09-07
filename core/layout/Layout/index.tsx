import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useRouter } from 'next/router'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    const router = useRouter();
    const isWithLayout = ['/sign_in'].includes(router.pathname);

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}