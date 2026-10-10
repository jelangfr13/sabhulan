'use client';

import React from 'react';
import { User, FileText, AlertCircle } from 'lucide-react';
import { CheckoutDetails } from '@/types';

interface CustomerFormProps {
  details: CheckoutDetails;
  onChange: (details: CheckoutDetails) => void;
  errors: { customerName?: string };
}

export default function CustomerForm({ details, onChange, errors }: CustomerFormProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-sabhulan-creamDark shadow-warm space-y-6">
      <div>
        <h3 className="font-serif font-black text-xl text-sabhulan-brown">
          Informasi Pemesan
        </h3>
        <p className="text-xs text-sabhulan-brownLight mt-1">
          Lengkapi data singkat ini agar pesanan dapat diproses dengan tepat oleh tim Sabhulan.
        </p>
      </div>

      <div className="space-y-4">
        {/* Customer Name */}
        <div>
          <label
            htmlFor="customerName"
            className="block text-xs font-bold text-sabhulan-brown uppercase tracking-wider mb-1.5"
          >
            Nama Pemesan <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-sabhulan-brownLight">
              <User className="w-4 h-4 text-sabhulan-brownLight/70" />
            </div>
            <input
              id="customerName"
              type="text"
              required
              placeholder="Contoh: Budi Santoso"
              value={details.customerName}
              onChange={(e) =>
                onChange({ ...details, customerName: e.target.value })
              }
              className={`w-full pl-10 pr-4 py-3 bg-sabhulan-creamLight/50 border rounded-2xl text-sm text-sabhulan-brown placeholder:text-sabhulan-brownLight/40 focus:outline-none focus:ring-2 transition-all ${
                errors.customerName
                  ? 'border-red-400 focus:ring-red-400 bg-red-50/30'
                  : 'border-sabhulan-creamDark focus:ring-sabhulan-gold focus:border-transparent'
              }`}
            />
          </div>
          {errors.customerName && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.customerName}
            </p>
          )}
        </div>

        {/* Customer Notes */}
        <div>
          <label
            htmlFor="customerNote"
            className="block text-xs font-bold text-sabhulan-brown uppercase tracking-wider mb-1.5"
          >
            Catatan Tambahan <span className="text-xs text-sabhulan-brownLight font-normal">(Opsional)</span>
          </label>
          <div className="relative">
            <div className="absolute top-3.5 left-3.5 pointer-events-none text-sabhulan-brownLight">
              <FileText className="w-4 h-4 text-sabhulan-brownLight/70" />
            </div>
            <textarea
              id="customerNote"
              rows={3}
              placeholder="Contoh: Sambal dipisah, jangan pakai bawang goreng, atau estimasi jam ambil..."
              value={details.customerNote || ''}
              onChange={(e) =>
                onChange({ ...details, customerNote: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 bg-sabhulan-creamLight/50 border border-sabhulan-creamDark rounded-2xl text-sm text-sabhulan-brown placeholder:text-sabhulan-brownLight/40 focus:outline-none focus:ring-2 focus:ring-sabhulan-gold focus:border-transparent transition-all resize-none"
            />
          </div>
          <p className="mt-1 text-[11px] text-sabhulan-brownLight/70">
            Tuliskan preferensi rasa atau permintaan khusus Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
