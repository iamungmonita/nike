'use client';
import '@/styles/globals.scss';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { Layout } from '@/core';

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isWithLayout = ['/sign_in'].includes(router.pathname);

  return !isWithLayout ? (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/icons/nike.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <>
      <Head>
        <link rel="shortcut icon" href="/icons/nike.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
