export interface Header {
    id: number,
    name: string,
    description?: string,
    route?: string,
    routePath: string,
    subCategories: SubHeader[]

}
export interface SubHeader {
    id: number,
    name: string,
    routePath: string,
    categoryId: number,
    subCategories: SubSubHeader[]
    isExpanded?: boolean | undefined
}
export interface SubSubHeader {
    id: number,
    name: string,
    routePath: string,
    subCategoryId: number
}

