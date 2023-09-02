import { GET } from '@/core/services';
import { SubSubHeader } from '@/models/Header';

export function getAllCategoryID(): Promise<SubSubHeader[]> {
  return GET<SubSubHeader[]>('/data/header/sub-categories/categoryId1.json')
}

export function getAllSubCategoryID(): Promise<SubSubHeader[]> {
  return GET<SubSubHeader[]>('/data/header/sub-category/sub-categoryId1.json')
}
