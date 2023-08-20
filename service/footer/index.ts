import { GET } from "@/core/services";
import { Product } from "@/models/product";

export function getFooter() {
    return GET<Product[]>('/category/footer.json')
}
