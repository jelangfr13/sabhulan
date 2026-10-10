'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Plus, Minus, ShoppingBag, Check, AlertCircle } from 'lucide-react';
import { Product } from '@/types';
import { formatRupiah } from '@/lib/currency';
import { useCart } from '@/context/CartContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!product.isAvailable) return;
    addToCart(product.id, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 800);
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sabhulan-brownDark/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-sabhulan-creamDark animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-sabhulan-brown hover:bg-white hover:text-sabhulan-brownDark transition-all shadow-md"
          aria-label="Tutup jendela detail"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="relative w-full h-64 sm:h-72 bg-sabhulan-cream">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 512px"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4">
            {product.isAvailable ? (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-sm">
                Tersedia
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-200 shadow-sm flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                Stok Habis
              </span>
            )}
          </div>
        </div>

        {/* Content & Actions */}
        <div className="p-6 sm:p-7 space-y-4">
          <div>
            <h2 className="text-2xl font-black font-serif text-sabhulan-brown">
              {product.name}
            </h2>
            <p className="mt-2 text-sm text-sabhulan-brownLight leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-sabhulan-cream">
            <div>
              <span className="text-xs text-sabhulan-brownLight/70 block">Harga Satuan</span>
              <span className="text-xl font-black font-serif text-sabhulan-brown">
                {formatRupiah(product.price)}
              </span>
            </div>

            {/* Quantity Selector (Only if available) */}
            {product.isAvailable && (
              <div className="flex items-center space-x-2 bg-sabhulan-cream p-1 rounded-full border border-sabhulan-creamDark">
                <button
                  onClick={decrement}
                  disabled={quantity <= 1}
                  className="w-8 h-8 rounded-full bg-white text-sabhulan-brown flex items-center justify-center hover:bg-sabhulan-goldLight disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
                  aria-label="Kurangi kuantitas"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-bold text-sabhulan-brown text-sm">
                  {quantity}
                </span>
                <button
                  onClick={increment}
                  className="w-8 h-8 rounded-full bg-white text-sabhulan-brown flex items-center justify-center hover:bg-sabhulan-goldLight shadow-sm transition-all"
                  aria-label="Tambah kuantitas"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            {product.isAvailable ? (
              <button
                onClick={handleAddToCart}
                disabled={addedSuccess}
                className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all ${
                  addedSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-sabhulan-gold hover:bg-sabhulan-goldHover text-sabhulan-brownDark active:scale-98'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-5 h-5 stroke-[2.5]" />
                    Berhasil Ditambahkan!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    Tambah ke Keranjang • {formatRupiah(product.price * quantity)}
                  </>
                )}
              </button>
            ) : (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-center text-xs text-red-700 font-medium">
                Maaf, menu ini sedang habis hari ini. Silakan pilih sajian hangat lainnya!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
