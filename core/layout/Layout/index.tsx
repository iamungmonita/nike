import React from 'react'
import Header from '../Header/index'
import Footer from '../Footer'
import { useRouter } from 'next/router'
import HeaderTop from '../Header/HeaderTop'
import HeaderMiddle from '../Header/HeaderMiddle'

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
                    <HeaderMiddle />
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