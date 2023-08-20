import { GET } from "@/core/services";
import { Product } from "@/models/product";

export function getAllPopular() {
    return GET<Product[]>('/category/popular-category.json')
}
