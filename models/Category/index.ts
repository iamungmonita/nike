import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface Category {
  id: number;
  name: string;
  routePath: string;
  picture: string | StaticImport;
  tag: string;
  category: string;
  price: number;
  categoryId: number;
  productItem: Category[];
  description: string;
  shop: boolean;
  discountedPrice: number;
  headline: boolean;
  closer: boolean;
  imageSize: number;
  imageSmallScreen: number;
  isExpanded: boolean | undefined;
  quantity: number;
  subCategories: {
    id: number;
    name: string;
    routePath: string;
  }[];
}
