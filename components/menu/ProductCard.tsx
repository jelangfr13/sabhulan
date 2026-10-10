'use client';

import React from 'react';
import Image from 'next/image';
import { Plus, Minus, AlertCircle } from 'lucide-react';
import { Product } from '@/types';
import { formatRupiah } from '@/lib/currency';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetail }: ProductCardProps) {
  const { addToCart, updateQuantity, removeFromCart, getItemQuantity, isLoaded } = useCart();
  const quantityInCart = isLoaded ? getItemQuantity(product.id) : 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.isAvailable) return;
    addToCart(product.id, 1);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.isAvailable) return;
    addToCart(product.id, 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (quantityInCart > 1) {
      updateQuantity(product.id, quantityInCart - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div
      onClick={() => onOpenDetail(product)}
      className="group relative bg-white rounded-2xl border border-sabhulan-creamDark overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
    >
      {/* Product Image Container */}
      <div className="relative w-full h-48 sm:h-52 bg-sabhulan-cream overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Status Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.isAvailable ? (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-sm backdrop-blur-sm">
              Tersedia
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200 shadow-sm backdrop-blur-sm flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              Habis
            </span>
          )}

          {product.isPopular && product.isAvailable && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sabhulan-goldLight text-sabhulan-brownDark border border-sabhulan-goldMuted shadow-sm">
              Favorit
            </span>
          )}
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif font-bold text-lg text-sabhulan-brown group-hover:text-sabhulan-goldHover transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-sabhulan-brownLight/80 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="mt-4 pt-3 border-t border-sabhulan-cream flex items-center justify-between">
          <div>
            <span className="text-xs text-sabhulan-brownLight/70 block">Harga</span>
            <span className="text-base sm:text-lg font-black text-sabhulan-brown font-serif">
              {formatRupiah(product.price)}
            </span>
          </div>

          {!product.isAvailable ? (
            <span className="px-3 py-2 rounded-xl text-xs font-semibold bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed">
              Habis
            </span>
          ) : quantityInCart > 0 ? (
            /* Icon Kurangi | Jumlah Dipesan | Icon Tambah */
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 bg-sabhulan-cream border border-sabhulan-gold/40 rounded-xl p-1 shadow-xs"
            >
              <button
                type="button"
                onClick={handleDecrement}
                className="w-7 h-7 rounded-lg bg-white hover:bg-sabhulan-goldLight text-sabhulan-brown flex items-center justify-center transition-all shadow-xs active:scale-90"
                aria-label={`Kurangi ${product.name}`}
              >
                <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <span className="min-w-[24px] text-center font-bold text-sabhulan-brown text-sm">
                {quantityInCart}
              </span>

              <button
                type="button"
                onClick={handleIncrement}
                className="w-7 h-7 rounded-lg bg-sabhulan-gold hover:bg-sabhulan-goldHover text-sabhulan-brownDark flex items-center justify-center transition-all shadow-xs active:scale-90"
                aria-label={`Tambah ${product.name}`}
              >
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          ) : (
            /* Tombol Tambah Pertama Kali */
            <button
              type="button"
              onClick={handleQuickAdd}
              className="px-3 py-2 rounded-xl font-medium text-xs flex items-center gap-1.5 transition-all shadow-sm bg-sabhulan-gold hover:bg-sabhulan-goldHover text-sabhulan-brownDark hover:shadow-md active:scale-95"
              title="Tambah ke keranjang"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span className="font-bold">Pesan</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
