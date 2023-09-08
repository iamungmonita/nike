import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useRouter } from 'next/router'
import HeaderTop from '../Header/HeaderTop'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    const router = useRouter();

    const isSpecificLayout = ['/cart'].includes(router.pathname);
    return (
        <div>
            {isSpecificLayout ?
                <div>
                    <HeaderTop />
                    {children}
                    <Footer />
                </div>
                :
                <div>
                    <Header />
                    {children}
                    <Footer />
                </div>

            }
        </div>
    )
}