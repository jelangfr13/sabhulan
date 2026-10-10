'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Flame,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Soup,
  ChevronRight,
  Award,
} from 'lucide-react';
import { PRODUCTS } from '@/data/menuData';
import ProductCard from '@/components/menu/ProductCard';
import ProductDetailModal from '@/components/menu/ProductDetailModal';
import { Product } from '@/types';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Ambil produk populer untuk section highlight
  const popularProducts = PRODUCTS.filter((p) => p.isPopular).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sabhulan-creamLight via-sabhulan-cream to-sabhulan-creamDark/40 pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-sabhulan-creamDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Brand & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sabhulan-goldLight border border-sabhulan-goldMuted text-xs font-bold text-sabhulan-brownDark tracking-wide shadow-xs animate-fadeIn">
                <Flame className="w-4 h-4 text-sabhulan-goldHover fill-sabhulan-gold" />
                <span>Sajian Kuliner Hangat Nusantara</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif text-sabhulan-brown leading-tight tracking-tight">
                Cita Rasa Hangat,{' '}
                <span className="text-sabhulan-goldHover underline decoration-sabhulan-gold decoration-wavy decoration-2">
                  Kelezatan Memikat
                </span>{' '}
                di Setiap Suapan.
              </h1>

              <p className="text-base sm:text-lg text-sabhulan-brownLight leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sabhulan menghadirkan aneka hidangan kuah hangat, olahan rempah pilihan, dan lauk
                istimewa yang dimasak penuh cinta. Pesan langsung dengan mudah via WhatsApp tanpa
                perlu registrasi.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/menu"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-sabhulan-gold hover:bg-sabhulan-goldHover text-sabhulan-brownDark font-bold text-base shadow-warm-lg hover:shadow-xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Lihat Katalog Menu</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </Link>

                <a
                  href="#tentang-kami"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-sabhulan-cream text-sabhulan-brown font-semibold text-base border border-sabhulan-creamDark shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <span>Tentang Sabhulan</span>
                  <ChevronRight className="w-4 h-4 text-sabhulan-gold" />
                </a>
              </div>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sabhulan-creamDark/60 max-w-lg mx-auto lg:mx-0 text-center">
                <div>
                  <span className="block text-2xl font-black font-serif text-sabhulan-brown">
                    100%
                  </span>
                  <span className="text-xs text-sabhulan-brownLight font-medium">
                    Bahan Alami
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-black font-serif text-sabhulan-brown">
                    10+
                  </span>
                  <span className="text-xs text-sabhulan-brownLight font-medium">
                    Pilihan Sajian
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-black font-serif text-sabhulan-brown">
                    Instan
                  </span>
                  <span className="text-xs text-sabhulan-brownLight font-medium">
                    Pesan via WA
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-sabhulan-gold/20 via-sabhulan-cream to-sabhulan-gold/10 p-4 border border-sabhulan-creamDark shadow-warm-lg flex items-center justify-center">
                {/* Visual Logo Centerpiece */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-full p-6 shadow-xl border-4 border-sabhulan-cream overflow-hidden group">
                  <Image
                    src="/brand/sabhulan-logo.png"
                    alt="Logo Kuliner Sabhulan"
                    fill
                    sizes="(max-width: 640px) 256px, 320px"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Floating highlight badge */}
                <div className="absolute -bottom-3 sm:bottom-2 -left-2 sm:left-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-warm border border-sabhulan-creamDark flex items-center gap-3 animate-bounce">
                  <div className="p-2 bg-sabhulan-goldLight rounded-xl text-sabhulan-brown">
                    <Soup className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-sabhulan-brown block">
                      Hangat & Segar
                    </span>
                    <span className="text-[11px] text-sabhulan-brownLight">
                      Dimasak Tiap Hari
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DISHES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sabhulan-goldHover mb-1">
              <Sparkles className="w-4 h-4 text-sabhulan-gold" />
              Rekomendasi Terbaik
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-sabhulan-brown">
              Menu Favorit Sabhulan
            </h2>
            <p className="text-sm text-sabhulan-brownLight mt-1">
              Paling digemari pelanggan setia kami untuk santap siang maupun malam.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-bold text-sabhulan-brown hover:text-sabhulan-goldHover transition-colors group"
          >
            <span>Buka Semua Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      </section>

      {/* TENTANG KAMI SECTION */}
      <section
        id="tentang-kami"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-sabhulan-creamDark shadow-warm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-sabhulan-goldHover">
              Cerita di Balik Sabhulan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-sabhulan-brown leading-tight">
              Menghadirkan Kehangatan Dapur Rumah ke Meja Makan Anda
            </h2>
            <p className="text-sm sm:text-base text-sabhulan-brownLight leading-relaxed">
              Nama <strong>Sabhulan</strong> terinspirasi dari kehangatan sinar rembulan malam hari
              yang menemani waktu berkumpul keluarga. Di dapur Sabhulan, setiap kuah sup dan bumbu
              rempah diracik dari bahan-bahan pilihan tanpa kompromi pada mutu dan kesegaran rasa.
            </p>
            <p className="text-sm sm:text-base text-sabhulan-brownLight leading-relaxed">
              Kami percaya bahwa makanan yang lezat bukan hanya mengenyangkan perut, tetapi juga
              menenangkan hati dan menyatukan kebersamaan.
            </p>
            <div className="pt-2">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sabhulan-cream hover:bg-sabhulan-creamDark text-sabhulan-brown font-bold text-sm transition-colors border border-sabhulan-creamDark"
              >
                <span>Jelajahi Resep Khas Kami</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-inner border border-sabhulan-creamDark">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
              alt="Suasana Dapur Kuliner Sabhulan"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sabhulan-brownDark/60 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-sm font-semibold">
                Dibuat dengan bahan baku segar dari petani dan peternak lokal terpercaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KENAPA PILIH KAMI SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sabhulan-goldHover">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif text-sabhulan-brown">
            Kenapa Memilih Sabhulan?
          </h2>
          <p className="text-sm text-sabhulan-brownLight">
            Komitmen kami untuk selalu memberikan pengalaman kuliner terbaik bagi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-7 rounded-3xl border border-sabhulan-creamDark shadow-warm hover:shadow-warm-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-sabhulan-gold flex items-center justify-center border border-amber-100">
              <Award className="w-6 h-6 text-sabhulan-goldHover" />
            </div>
            <h3 className="font-serif font-bold text-lg text-sabhulan-brown">
              Rempah Otentik Pilihan
            </h3>
            <p className="text-xs sm:text-sm text-sabhulan-brownLight leading-relaxed">
              Racikan bumbu tradisional nusantara yang kaya rasa, harum, dan tanpa pengawet buatan.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-7 rounded-3xl border border-sabhulan-creamDark shadow-warm hover:shadow-warm-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-sabhulan-brown">
              Higienis & Selalu Segar
            </h3>
            <p className="text-xs sm:text-sm text-sabhulan-brownLight leading-relaxed">
              Diproses dengan standar kebersihan tinggi dan dimasak segar saat pesanan Anda masuk.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-7 rounded-3xl border border-sabhulan-creamDark shadow-warm hover:shadow-warm-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-green-50 text-brand-wa flex items-center justify-center border border-green-100">
              <MessageCircle className="w-6 h-6 text-brand-waHover" />
            </div>
            <h3 className="font-serif font-bold text-lg text-sabhulan-brown">
              Pesan Mudah via WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-sabhulan-brownLight leading-relaxed">
              Pilih menu langsung di web, pesan terformat rapi dan terhubung ke WhatsApp dalam 1 klik.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-7 rounded-3xl border border-sabhulan-creamDark shadow-warm hover:shadow-warm-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-sabhulan-brown">
              Sajian Selalu Hangat
            </h3>
            <p className="text-xs sm:text-sm text-sabhulan-brownLight leading-relaxed">
              Kemasan dirancang khusus menjaga suhu kuah dan kelezatan hidangan hingga siap disantap.
            </p>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
