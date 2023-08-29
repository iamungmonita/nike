import { GET } from "@/core/services";
import { Category } from "@/models/Category";

export function getAllPopular() {
    return GET<Category[]>('/data/category/popular-category.json')
}
