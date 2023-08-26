import { Category } from "../Category";


export interface Header {
    id: number,
    name: string,
    description?: string,
    route?: string,
    routePath: string,
    subCategories: Category[]
}