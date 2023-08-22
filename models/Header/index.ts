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

export interface subFooter {
    id: number,
    name: string,
    categoryId: number
    routePath: string,
}

export interface Footer {
    id: number,
    name: string,
    routePath: string,

}
export interface MappedFooter {
    id: number,
    name: string,
    routePath: string,
    subCategories: subFooter[]
}