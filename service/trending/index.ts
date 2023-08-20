import { GET } from "@/core/services";
import { Product } from "@/models/product";

export function getAllTrending() {
    return GET<Product[]>('/category/trending-category.json')
}
