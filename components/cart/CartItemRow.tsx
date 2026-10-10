'use client';

import React from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItemDetailed } from '@/types';
import { formatRupiah } from '@/lib/currency';
import { useCart } from '@/context/CartContext';

interface CartItemRowProps {
  item: CartItemDetailed;
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.productId, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.productId, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.productId);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-2xl border border-sabhulan-creamDark shadow-sm gap-4 transition-all hover:border-sabhulan-goldMuted">
      {/* Product Details & Thumbnail */}
      <div className="flex items-center space-x-3.5">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-sabhulan-cream flex-shrink-0 border border-sabhulan-creamDark">
          <Image
            src={item.product.imageUrl}
            alt={item.product.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <h4 className="font-serif font-bold text-base text-sabhulan-brown line-clamp-1">
            {item.product.name}
          </h4>
          <p className="text-xs text-sabhulan-brownLight mt-0.5">
            Satuan: {formatRupiah(item.product.price)}
          </p>
          <div className="sm:hidden mt-2 font-bold text-sabhulan-brown text-sm">
            Subtotal: {formatRupiah(item.subtotal)}
          </div>
        </div>
      </div>

      {/* Quantity & Delete Controls */}
      <div className="flex items-center justify-between sm:justify-end space-x-4 sm:space-x-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-sabhulan-cream">
        {/* Quantity Controller */}
        <div className="flex items-center space-x-2 bg-sabhulan-cream px-2 py-1 rounded-full border border-sabhulan-creamDark">
          <button
            onClick={handleDecrement}
            disabled={item.quantity <= 1}
            className="w-7 h-7 rounded-full bg-white text-sabhulan-brown flex items-center justify-center hover:bg-sabhulan-goldLight disabled:opacity-40 disabled:cursor-not-allowed shadow-xs transition-all"
            aria-label="Kurangi jumlah item"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="w-6 text-center font-bold text-xs sm:text-sm text-sabhulan-brown">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="w-7 h-7 rounded-full bg-white text-sabhulan-brown flex items-center justify-center hover:bg-sabhulan-goldLight shadow-xs transition-all"
            aria-label="Tambah jumlah item"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>

        {/* Subtotal (Desktop) */}
        <div className="hidden sm:block text-right min-w-[100px]">
          <span className="text-xs text-sabhulan-brownLight/70 block">Subtotal</span>
          <span className="font-serif font-bold text-base text-sabhulan-brown">
            {formatRupiah(item.subtotal)}
          </span>
        </div>

        {/* Delete Item Button */}
        <button
          onClick={handleRemove}
          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors"
          title="Hapus dari keranjang"
          aria-label="Hapus menu dari keranjang"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
