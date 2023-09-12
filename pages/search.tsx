import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function search() {
    const [type, setType] = useState<number>(0)
    const router = useRouter()

    const [items, setItems] = useState<any[]>([])
    function handleSubmit(e: any) {
        e.preventDefault()
        updateParam(type)
    }
    const fetchData = async (filter: number) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${filter}`)
        const data = await res.json()
        setItems(data)
    }


    const updateParam = (type: number) => {
        const searchParam = new URLSearchParams(window.location.search)
        if (type) {
            searchParam.set('teamId', type.toString())

        } else {
            searchParam.delete(type.toString())
        }


        const newPathname = `${window.location.pathname}?${searchParam}`
        router.push(newPathname)
        fetchData(type)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='number' placeholder='find those in team #' onChange={(e) => setType(e.currentTarget.valueAsNumber)} />
            <button type='submit'>Submit</button>
            {items.map((e, index) => <p key={index}>{e.email}</p>)}
        </form>
    )
}