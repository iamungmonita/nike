import { GET } from '@/core/services';
import { Category } from '@/models/Category';

export function getAllShopSport() {
  return GET<Category[]>('/data/category/shop-sport.json');
}
