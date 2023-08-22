import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '@/core';
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }: AppProps) {
  // const rouer = useRouter();
  // const isWithLayout = ['/product'].includes(rouer.pathname);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // (!isWithLayout && (
    //   <Layout>

    //   </Layout>
    // ))
  )
}
