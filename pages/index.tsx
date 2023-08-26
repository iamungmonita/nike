import { AHelmet } from '@/core';
import { Header } from '@/models/Header';
import { getHeaderTop } from '@/service/header';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [navlinks, setNavlinks] = useState<Header[]>([])
  useEffect(() => {
    initFunction()
  }, [])

  function initFunction() {
    Promise.resolve((getHeaderTop())).then((response) => {
      setNavlinks(response)
    })
  }

  return (
    <main>
      <AHelmet>Nike. Just Do it. Nike.com</AHelmet>
    </main>
  )
}
