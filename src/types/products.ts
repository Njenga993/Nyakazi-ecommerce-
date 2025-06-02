export interface Product {
  id: string;
  title: string;
  category: string[];
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  ratingCount: number;
  description: string;
  benefits: string[];
  sku: string;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}