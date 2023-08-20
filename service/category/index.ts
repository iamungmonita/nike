import { GET } from "@/core/services";
import { Category, SubCategory } from "@/models/category";

export function getAllCategory() {
    return GET<Category[]>('/category/data.json')
}

export function getAllSubCategory() {
    return GET<SubCategory[]>('/category/sub-category.json')
}

