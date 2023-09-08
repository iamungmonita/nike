import { GET } from '@/core/services';
import { Category } from '@/models/Category';

export function getAllIconic() {
  return GET<Category[]>('/data/category/iconic.json');
}
