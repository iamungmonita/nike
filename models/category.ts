export interface SubCategory {
    id: number;
    name: string;
    categoryId: number;
}

export interface Category {
    id: number;
    name: string;
    routePath: string;
}

export interface MappedCategory {
    id: number;
    name: string;
    routePath: string;
    subCategories: SubCategory[];
}