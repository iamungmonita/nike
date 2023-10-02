import { GET } from '@/core/services';

export interface SortByProps {
  id: number;
  name: string;
}

export function getSortBy() {
  return GET<SortByProps[]>('/data/sort-by/index.json');
}
