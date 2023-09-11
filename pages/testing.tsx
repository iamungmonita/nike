
import React, { useEffect, useState } from 'react'
import { useCounter } from '@/store/counterStore'
import { shallow } from 'zustand/shallow'
import { useGetState } from '@/hooks/useGetState'
type Props = {}

export default function testing({ }: Props) {
  const counter = useGetState(useCounter, ((state: any) => state.count))

  const { increment } = useCounter()

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => increment(10)}>increment by 10</button>
    </div>
  )
} 