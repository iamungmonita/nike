import { GET } from "@/core/services";
import { Product } from "@/models/product";

export function getAllFeatured() {
    return GET<Product[]>('/category/featured.json')
}
