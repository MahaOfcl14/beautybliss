export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  usps: string[];
  description?: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
