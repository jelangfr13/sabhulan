'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { formatRupiah } from '@/lib/currency';

interface CartSummaryProps {
  totalCount: number;
  totalAmount: number;
}

export default function CartSummary({ totalCount, totalAmount }: CartSummaryProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-sabhulan-creamDark shadow-warm space-y-5">
      <h3 className="font-serif font-black text-xl text-sabhulan-brown border-b border-sabhulan-cream pb-3">
        Ringkasan Belanja
      </h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-sabhulan-brownLight">
          <span>Jumlah Porsi</span>
          <span className="font-semibold text-sabhulan-brown">{totalCount} item</span>
        </div>

        <div className="flex justify-between text-sabhulan-brownLight">
          <span>Estimasi Produk</span>
          <span className="font-semibold text-sabhulan-brown">{formatRupiah(totalAmount)}</span>
        </div>

        <div className="pt-3 border-t border-sabhulan-cream flex justify-between items-baseline">
          <span className="font-bold text-base text-sabhulan-brown">Total Pembayaran</span>
          <span className="font-serif font-black text-2xl text-sabhulan-goldHover">
            {formatRupiah(totalAmount)}
          </span>
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <Link
          href="/checkout"
          className="w-full py-3.5 px-6 rounded-2xl bg-sabhulan-gold hover:bg-sabhulan-goldHover text-sabhulan-brownDark font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
        >
          <span>Lanjut ke Checkout</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </Link>

        <Link
          href="/menu"
          className="w-full py-3 px-6 rounded-2xl bg-sabhulan-cream hover:bg-sabhulan-creamDark text-sabhulan-brown font-semibold text-sm flex items-center justify-center gap-2 transition-colors border border-sabhulan-creamDark"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Tambah Menu Lain</span>
        </Link>
      </div>

      <p className="text-[11px] text-center text-sabhulan-brownLight/70 leading-normal">
        *Ringkasan pesanan akan dikirimkan ke WhatsApp resmi Sabhulan untuk konfirmasi ketersediaan & jadwal penyajian.
      </p>
    </div>
  );
}
