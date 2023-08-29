import { StaticImport } from "next/dist/shared/lib/get-img-props"


export interface Category {
    id: number,
    name: string,
    routePath: string,
    picture: string | StaticImport,
    tag: string,
    category: string,
    price: number,
    categoryId: number,
    productItem: Category[],
    description: string,
    shop: boolean,
    headline: boolean,
    closer: boolean,
    subCategories: {
        id: number,
        name: string,
        routePath: string,
    }[]
}