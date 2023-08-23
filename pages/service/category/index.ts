import { GET } from "@/core/services";


export function getAllCategory() {
    return GET<Category[]>('/category/data.json')
}

export function getAllSubCategory() {
    return GET<SubCategory[]>('/category/sub-category.json')
}
