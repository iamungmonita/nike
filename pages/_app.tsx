'use client'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '@/core';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isWithLayout = ['/product'].includes(router.pathname);

  return (
    (!isWithLayout && (
      <Layout>
        <Head>
          <link rel="shortcut icon" href="/icons/nike.svg" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    ))
  )
}
