'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { CartItem, CartItemDetailed, Product } from '@/types';
import { PRODUCTS } from '@/data/menuData';

interface CartContextType {
  items: CartItem[];
  detailedItems: CartItemDetailed[];
  totalCount: number;
  totalAmount: number;
  getItemQuantity: (productId: string) => number;
  addToCart: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isLoaded: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'sabhulan_cart_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount (client-side only)
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          // Filter to only valid items with quantity >= 1
          const validItems = parsed.filter(
            (item): item is CartItem =>
              item &&
              typeof item.productId === 'string' &&
              typeof item.quantity === 'number' &&
              item.quantity > 0
          );
          setItems(validItems);
        }
      }
    } catch (e) {
      console.warn('Failed to load cart from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever items change, after initial load
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save cart to localStorage:', e);
    }
  }, [items, isLoaded]);

  // Get quantity of a specific product in cart
  const getItemQuantity = (productId: string): number => {
    const item = items.find((i) => i.productId === productId);
    return item ? item.quantity : 0;
  };

  // Add to cart or increment quantity
  const addToCart = (productId: string, quantity = 1) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product || !product.isAvailable) return;

    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.productId === productId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [...prev, { productId, quantity: Math.max(1, quantity) }];
      }
    });
  };

  // Update quantity (if <= 0, remove item from cart)
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.floor(quantity) } : item
      )
    );
  };

  // Remove single product from cart
  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  // Clear all items in cart
  const clearCart = () => {
    setItems([]);
  };

  // Join cart items with current product catalog for accurate prices
  const detailedItems: CartItemDetailed[] = useMemo(() => {
    return items
      .map((item) => {
        const product = PRODUCTS.find((p) => p.id === item.productId);
        if (!product) return null;
        return {
          ...item,
          product,
          subtotal: product.price * item.quantity,
        };
      })
      .filter((item): item is CartItemDetailed => item !== null);
  }, [items]);

  // Total quantity of all products in cart
  const totalCount = useMemo(() => {
    return items.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [items]);

  // Total monetary price of all items
  const totalAmount = useMemo(() => {
    return detailedItems.reduce((acc, curr) => acc + curr.subtotal, 0);
  }, [detailedItems]);

  return (
    <CartContext.Provider
      value={{
        items,
        detailedItems,
        totalCount,
        totalAmount,
        getItemQuantity,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
