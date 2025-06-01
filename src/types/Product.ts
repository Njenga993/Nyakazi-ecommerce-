export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  quantity?: number; // 👈 Optional, so dummy products don't need it
}
