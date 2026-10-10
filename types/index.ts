export interface Category {
  id: string;
  slug: string;
  name: string;
  sortOrder?: number;
  iconName?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  categoryId: string;
  price: number; // integer rupiah, >= 0
  imageUrl: string;
  isAvailable: boolean;
  isPopular?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number; // positive integer
}

export interface CartItemDetailed extends CartItem {
  product: Product;
  subtotal: number;
}

export interface CheckoutDetails {
  customerName: string;
  customerNote?: string;
}
