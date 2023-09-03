import { GET } from "@/core/services";
import { Category } from "@/models/Category";

export function getAllSideCategory() {
    return GET<Category[]>('/data/category/side-category.json')
}
export function getAllSideComponent() {
    return GET<Category[]>('/data/side/side-component.json')
}
