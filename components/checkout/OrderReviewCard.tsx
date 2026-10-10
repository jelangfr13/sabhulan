'use client';

import React, { useState } from 'react';
import { MessageSquare, Copy, Check, ExternalLink, AlertTriangle, ShieldCheck } from 'lucide-react';
import { CartItemDetailed, CheckoutDetails } from '@/types';
import { formatRupiah } from '@/lib/currency';
import { createWhatsAppMessage, buildWhatsAppUrl, DEFAULT_WHATSAPP_NUMBER } from '@/lib/whatsapp';

interface OrderReviewCardProps {
  items: CartItemDetailed[];
  details: CheckoutDetails;
  totalAmount: number;
  onValidate: () => boolean;
}

export default function OrderReviewCard({
  items,
  details,
  totalAmount,
  onValidate,
}: OrderReviewCardProps) {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const formattedMessage = createWhatsAppMessage(details, items, totalAmount);
  const waUrl = buildWhatsAppUrl(formattedMessage, DEFAULT_WHATSAPP_NUMBER);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    const isValid = onValidate();
    if (!isValid) {
      e.preventDefault();
      return;
    }
    // Form is valid, window.open waUrl
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    const isValid = onValidate();
    if (!isValid) return;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-sabhulan-creamDark shadow-warm space-y-6">
      <div className="border-b border-sabhulan-cream pb-4">
        <h3 className="font-serif font-black text-xl text-sabhulan-brown">
          Rincian & Checkout
        </h3>
        <p className="text-xs text-sabhulan-brownLight mt-1">
          Periksa kembali pesanan Anda sebelum diteruskan ke WhatsApp.
        </p>
      </div>

      {/* Item summary list */}
      <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
        {items.map((item) => (
          <div key={item.productId} className="flex justify-between items-center text-sm">
            <div className="min-w-0 pr-3">
              <span className="font-bold text-sabhulan-brown block line-clamp-1">
                {item.product.name}
              </span>
              <span className="text-xs text-sabhulan-brownLight">
                {item.quantity} x {formatRupiah(item.product.price)}
              </span>
            </div>
            <span className="font-semibold text-sabhulan-brown text-sm whitespace-nowrap">
              {formatRupiah(item.subtotal)}
            </span>
          </div>
        ))}
      </div>

      {/* Total calculation */}
      <div className="pt-4 border-t border-sabhulan-cream space-y-2">
        <div className="flex justify-between items-baseline">
          <span className="font-bold text-base text-sabhulan-brown">Total Pesanan</span>
          <span className="font-serif font-black text-2xl text-sabhulan-goldHover">
            {formatRupiah(totalAmount)}
          </span>
        </div>
      </div>

      {/* Toggle Message Preview */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          className="text-xs font-semibold text-sabhulan-goldHover hover:text-sabhulan-brown transition-colors flex items-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{showPreview ? 'Sembunyikan' : 'Lihat'} Teks Pesanan WhatsApp</span>
        </button>

        {showPreview && (
          <div className="mt-2.5 p-3.5 bg-sabhulan-cream/80 border border-sabhulan-creamDark rounded-2xl text-xs font-mono text-sabhulan-brownDark whitespace-pre-wrap leading-relaxed animate-fadeIn">
            {formattedMessage}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        {/* Send via WhatsApp */}
        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="w-full py-4 px-6 rounded-2xl bg-brand-wa hover:bg-brand-waHover text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/20 active:scale-98 transition-all"
        >
          <MessageSquare className="w-5 h-5 fill-white stroke-none" />
          <span>Lanjut ke WhatsApp</span>
          <ExternalLink className="w-4 h-4" />
        </button>

        {/* Fallback Copy Text */}
        <button
          type="button"
          onClick={handleCopyMessage}
          className="w-full py-3 px-6 rounded-2xl bg-sabhulan-cream hover:bg-sabhulan-creamDark text-sabhulan-brown font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-sabhulan-creamDark"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
              <span className="text-emerald-700 font-bold">Rincian Berhasil Disalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-sabhulan-brown" />
              <span>Salin Format Pesanan (Fallback)</span>
            </>
          )}
        </button>
      </div>

      {/* Notice info banner */}
      <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-2xl flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block">Pemberitahuan:</span>
          Menekan tombol di atas akan membuka WhatsApp bisnis Sabhulan. Anda tetap perlu menekan tombol{' '}
          <strong>Kirim (Send)</strong> di aplikasi WhatsApp agar pesanan terkirim dan dikonfirmasi langsung oleh tim Sabhulan.
        </div>
      </div>
    </div>
  );
}
