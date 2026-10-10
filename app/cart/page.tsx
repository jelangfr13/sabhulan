'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowLeft, Trash2, Utensils } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartItemRow from '@/components/cart/CartItemRow';
import CartSummary from '@/components/cart/CartSummary';

export default function CartPage() {
  const { detailedItems, totalCount, totalAmount, clearCart, isLoaded } = useCart();

  if (!isLoaded) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-10 h-10 border-4 border-sabhulan-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-sabhulan-brownLight font-medium">Memuat keranjang Anda...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Title & Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sabhulan-creamDark pb-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black font-serif text-sabhulan-brown">
            Keranjang Belanja
          </h1>
          <p className="text-sm text-sabhulan-brownLight mt-1">
            Periksa dan sesuaikan menu pilihan Anda sebelum melanjutkan ke checkout.
          </p>
        </div>

        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sabhulan-brown hover:text-sabhulan-goldHover transition-colors self-start sm:self-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Menu</span>
        </Link>
      </div>

      {/* Cart Content: Empty vs Populated */}
      {detailedItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Items List (Left Column) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between text-xs text-sabhulan-brownLight px-1">
              <span>{detailedItems.length} jenis hidangan di keranjang</span>
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 flex items-center gap-1 font-semibold transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Kosongkan Keranjang</span>
              </button>
            </div>

            <div className="space-y-3">
              {detailedItems.map((item) => (
                <CartItemRow key={item.productId} item={item} />
              ))}
            </div>
          </div>

          {/* Order Summary (Right Column) */}
          <div className="lg:col-span-4 sticky top-28">
            <CartSummary totalCount={totalCount} totalAmount={totalAmount} />
          </div>
        </div>
      ) : (
        /* Empty Cart State */
        <div className="bg-white rounded-3xl p-12 text-center border border-sabhulan-creamDark shadow-warm space-y-5 max-w-md mx-auto my-8 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-sabhulan-cream flex items-center justify-center mx-auto text-sabhulan-brownLight">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-serif font-black text-2xl text-sabhulan-brown">
              Keranjang Masih Kosong
            </h3>
            <p className="text-sm text-sabhulan-brownLight mt-1.5 leading-relaxed">
              Belum ada sajian lezat yang ditambahkan. Mari jelajahi menu istimewa kami dan tentukan
              hidangan favorit Anda!
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-sabhulan-gold hover:bg-sabhulan-goldHover text-sabhulan-brownDark font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Utensils className="w-4 h-4" />
              <span>Lihat Katalog Menu</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
