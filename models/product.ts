import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SubCategory } from "./category";
export interface Product {
    id?: number;
    name: string;
    tag?: string,
    routePath?: string;
    pic: string | StaticImport
    categoryId?: number;
    price?: number
    description?: string,
    subCategory?: SubCategory[]
    shop?: boolean,
    gender?: string
}