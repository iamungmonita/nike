export interface Footer {
    id: number,
    name: string,
    routePath: string,
    subCategories: subCategory[]
}

export interface FooterTermOfUse {
    id: number,
    name: string,
    routePath: string,
    subCategories: subCategory[]
}

export interface subCategory {
    id: number,
    name: string,
    routePath: string,
}

export interface subFooter {
    id: number,
    name: string,
    routePath: string,
    categoryId: number,
    subCategories: subCategory[]
}