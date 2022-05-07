export interface IProduct {
  _id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ITypes;
  gender: 'men'|'women'|'kid'|'unisex';

  createdAt: string;
  updatedAt: string;
}

export type ISizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'3XL';
export type ITypes = 'shirts'|'pants'|'hoodies'|'hats';