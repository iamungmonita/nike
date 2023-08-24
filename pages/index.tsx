import { useEffect, useState } from "react"
import { Category } from "@/models/Category"
import { Card } from "@/core"
import { useRouter } from "next/router"
import { AHelmet } from "@/core"
import { getAllTrending } from "./service/trending"

export default function Home() {
  const [items, setItems] = useState<Category[]>([])

  useEffect(() => {
    initFunction()
  }, [])

  function initFunction() {
    Promise.resolve((getAllTrending()).then((response) => {
      setItems(response)
    }))
  }

  return (
    <main>
      <AHelmet>Nike. Just Do it. Nike.com</AHelmet>
    </main>
  )
}
