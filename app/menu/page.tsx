'use client';

import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '@/data/menuData';
import { Product } from '@/types';
import CategoryFilter from '@/components/menu/CategoryFilter';
import SearchBar from '@/components/menu/SearchBar';
import ProductCard from '@/components/menu/ProductCard';
import ProductDetailModal from '@/components/menu/ProductDetailModal';
import { Utensils, RotateCcw } from 'lucide-react';

export default function MenuPage() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('cat-all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      // 1. Category check
      const matchesCategory =
        selectedCategoryId === 'cat-all' || product.categoryId === selectedCategoryId;

      // 2. Search query check (case-insensitive name match)
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryId, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategoryId('cat-all');
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Title & Introduction */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black font-serif text-sabhulan-brown">
          Katalog Menu Sabhulan
        </h1>
        <p className="text-sm text-sabhulan-brownLight max-w-2xl">
          Pilih sajian favorit Anda dari menu kuah hangat, makanan utama, lauk rempah, hingga
          minuman segar penyegar dahaga.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4 bg-white/70 backdrop-blur-xs p-4 sm:p-6 rounded-3xl border border-sabhulan-creamDark shadow-warm">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <SearchBar
            value={searchQuery}
            onChange={(val) => setSearchQuery(val)}
            placeholder="Cari nama hidangan (contoh: Sup Iga, Rawon, Soto)..."
          />

          <div className="text-xs text-sabhulan-brownLight font-medium self-end md:self-center">
            Menampilkan{' '}
            <strong className="text-sabhulan-brown font-bold">{filteredProducts.length}</strong>{' '}
            menu
          </div>
        </div>

        <CategoryFilter
          categories={CATEGORIES}
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={(id) => setSelectedCategoryId(id)}
        />
      </div>

      {/* Menu Cards Grid / Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-sabhulan-creamDark shadow-warm space-y-4 max-w-md mx-auto my-12 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-sabhulan-cream flex items-center justify-center mx-auto text-sabhulan-goldHover">
            <Utensils className="w-8 h-8" />
          </div>
          <h3 className="font-serif font-black text-xl text-sabhulan-brown">
            Menu Tidak Ditemukan
          </h3>
          <p className="text-xs sm:text-sm text-sabhulan-brownLight leading-relaxed">
            Tidak ada hidangan yang cocok dengan kata kunci &quot;{searchQuery}&quot; pada kategori
            ini. Coba gunakan kata kunci lain atau lihat seluruh menu.
          </p>
          <div className="pt-2">
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sabhulan-gold hover:bg-sabhulan-goldHover text-sabhulan-brownDark font-bold text-xs sm:text-sm transition-all shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tampilkan Semua Menu</span>
            </button>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
