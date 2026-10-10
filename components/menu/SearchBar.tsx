'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Cari menu hidangan lezat...',
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-sabhulan-brownLight">
        <Search className="w-4 h-4 text-sabhulan-brownLight/70" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 bg-white border border-sabhulan-creamDark rounded-full text-sm text-sabhulan-brown placeholder:text-sabhulan-brownLight/50 focus:outline-none focus:ring-2 focus:ring-sabhulan-gold focus:border-transparent transition-all shadow-sm"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-sabhulan-brownLight hover:text-sabhulan-brown transition-colors"
          aria-label="Bersihkan pencarian"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
