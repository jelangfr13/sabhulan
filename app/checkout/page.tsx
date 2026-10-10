'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CheckoutDetails } from '@/types';
import CustomerForm from '@/components/checkout/CustomerForm';
import OrderReviewCard from '@/components/checkout/OrderReviewCard';

export default function CheckoutPage() {
  const { detailedItems, totalAmount, isLoaded } = useCart();

  const [details, setDetails] = useState<CheckoutDetails>({
    customerName: '',
    customerNote: '',
  });

  const [errors, setErrors] = useState<{ customerName?: string }>({});

  const validateForm = (): boolean => {
    const trimmedName = details.customerName.trim();
    const newErrors: { customerName?: string } = {};

    if (!trimmedName) {
      newErrors.customerName = 'Nama pemesan wajib diisi.';
    } else if (trimmedName.length < 2) {
      newErrors.customerName = 'Nama pemesan minimal 2 karakter.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  if (!isLoaded) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-10 h-10 border-4 border-sabhulan-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-sabhulan-brownLight font-medium">Menyiapkan pesanan...</p>
      </div>
    );
  }

  // Jika keranjang kosong, cegah checkout dan arahkan ke menu
  if (detailedItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-3xl p-12 max-w-md mx-auto border border-sabhulan-creamDark shadow-warm space-y-4">
          <div className="w-16 h-16 rounded-full bg-sabhulan-cream flex items-center justify-center mx-auto text-sabhulan-brownLight">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="font-serif font-black text-2xl text-sabhulan-brown">
            Keranjang Anda Kosong
          </h2>
          <p className="text-sm text-sabhulan-brownLight">
            Tidak ada pesanan untuk di-checkout. Silakan pilih menu hidangan terlebih dahulu.
          </p>
          <div className="pt-2">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-sabhulan-gold hover:bg-sabhulan-goldHover text-sabhulan-brownDark font-bold text-sm shadow-md transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Katalog Menu</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Title & Back Link */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sabhulan-creamDark pb-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black font-serif text-sabhulan-brown">
            Checkout Pesanan
          </h1>
          <p className="text-sm text-sabhulan-brownLight mt-1">
            Isi nama dan teruskan rincian pesanan langsung ke WhatsApp resmi Sabhulan.
          </p>
        </div>

        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sabhulan-brown hover:text-sabhulan-goldHover transition-colors self-start sm:self-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Keranjang</span>
        </Link>
      </div>

      {/* Checkout Form & Order Review Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Customer Form */}
        <div className="lg:col-span-7">
          <CustomerForm
            details={details}
            onChange={(newDetails) => {
              setDetails(newDetails);
              if (errors.customerName && newDetails.customerName.trim().length >= 2) {
                setErrors({});
              }
            }}
            errors={errors}
          />
        </div>

        {/* Right: Order Review & WhatsApp Button */}
        <div className="lg:col-span-5 sticky top-28">
          <OrderReviewCard
            items={detailedItems}
            details={details}
            totalAmount={totalAmount}
            onValidate={validateForm}
          />
        </div>
      </div>
    </div>
  );
}
