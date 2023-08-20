import React from 'react'
import { Header } from '@/core/layout'
import { Footer } from '@/core/layout'
type Props = {
  children: React.ReactNode
}

export default function index({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}