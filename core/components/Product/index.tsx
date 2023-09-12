import { Category } from '@/models/Category'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
type Props = {
    product: Category
}

export default function Product(props: Props) {
    const { product } = props
    return (
        <Link href={'/products/[id]'} as={`/products/${product.id}`} key={product.id}>
            <Image src={product.picture} width={300} height={300} alt={product.name as string} />
            <p>{product.name}</p>
        </Link>
    )
}