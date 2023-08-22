export interface Header {
    id: number,
    name: string,
    route?: string,
    routePath: string,
    description?: string,
    subCategories?: subCategory[]
}

export interface subCategory {
    id: number,
    name: string,
    routePath: string,
} 