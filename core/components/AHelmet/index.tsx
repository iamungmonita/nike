import React from 'react'
import Head from 'next/head'
type AHelmetProps = {
    children: any
}

export default function index({ children }: AHelmetProps) {
    return (
        <Head><title>{children}</title></Head>
    )
}