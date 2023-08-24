import { GET } from "@/core/services";
import { Category } from "@/models/Category";

export function getAllTrending() {
    return GET<Category[]>('/data/category/trending-category.json')
}
