import { GET } from '@/core/services';

// export function getAllProducts() {
//   const queryParam = {
//     limit: 10,
//     offset: 0,
//   };
//   return GET<Products[], QueryParam>('/products/data.json', queryParam);
// }

// export interface Products {
//   name: string;
// }

// export interface QueryParam {
//   limit: number;
//   offset: number;
// }

import { Category } from '@/models/Category';

export function getAllProducts() {
  return GET<Category[]>('/data/products/index.json');
}
