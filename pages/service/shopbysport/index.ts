import { GET } from "@/core/services";
import { Product } from "@/models/product";

export function getAllShopSport() {
    return GET<Product[]>('/category/shop-sport.json')
}
