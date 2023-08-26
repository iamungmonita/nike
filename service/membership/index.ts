import { GET } from '@/core/services';
import { Product } from '@/models/product';

export function getAllMemberShip() {
    return GET<Product[]>('/category/membership.json')
}
