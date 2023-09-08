import { GET } from '@/core/services';
import { Category } from '@/models/Category';

export function getAllMemberShip() {
  return GET<Category[]>('/data/category/membership.json');
}
