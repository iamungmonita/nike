import { StaticImport } from "next/dist/shared/lib/get-img-props"


export interface Category {
    id: number,
    name: string,
    routePath: string,
    picture?: string | StaticImport
}