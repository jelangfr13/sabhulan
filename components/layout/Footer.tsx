import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, MapPin, Heart, MessageCircle } from 'lucide-react';
import { DEFAULT_WHATSAPP_NUMBER } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-sabhulan-brownDark text-sabhulan-cream border-t border-sabhulan-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 bg-white rounded-full p-1">
                <Image
                  src="/brand/sabhulan-logo.png"
                  alt="Logo Sabhulan"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold font-serif text-white tracking-wide">
                Sabhulan
              </span>
            </div>
            <p className="text-sm text-sabhulan-cream/80 leading-relaxed">
              Kelezatan kuliner hangat dengan resep rempah istimewa. Hadirkan kehangatan cita rasa
              istimewa untuk keluarga dan momen santai Anda.
            </p>
          </div>

          {/* Jam Operasional */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sabhulan-gold">
              Jam Operasional
            </h4>
            <ul className="space-y-2 text-sm text-sabhulan-cream/80">
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-sabhulan-gold flex-shrink-0 mt-0.5" />
                <span>Senin — Minggu: 10.00 — 21.00 WIB</span>
              </li>
              <li className="text-xs text-sabhulan-cream/60">
                *Pesanan di luar jam buka akan diproses saat toko beroperasi kembali.
              </li>
            </ul>
          </div>

          {/* Hubungi & Alamat */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sabhulan-gold">
              Kontak & Pemesanan
            </h4>
            <ul className="space-y-2 text-sm text-sabhulan-cream/80">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-wa flex-shrink-0" />
                <span>WhatsApp: +{DEFAULT_WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-sabhulan-gold flex-shrink-0 mt-0.5" />
                <span>Dapur Sabhulan, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sabhulan-gold">
              Navigasi Cepat
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-sabhulan-cream/80">
              <Link href="/" className="hover:text-sabhulan-gold transition-colors">
                Beranda
              </Link>
              <Link href="/menu" className="hover:text-sabhulan-gold transition-colors">
                Katalog Menu
              </Link>
              <Link href="/cart" className="hover:text-sabhulan-gold transition-colors">
                Keranjang Belanja
              </Link>
              <Link href="/checkout" className="hover:text-sabhulan-gold transition-colors">
                Checkout Pesanan
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-sabhulan-brown/60 flex flex-col sm:flex-row items-center justify-between text-xs text-sabhulan-cream/60 gap-4">
          <p>© 2026 Sabhulan. Seluruh Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> untuk penikmat kuliner nusantara.
          </p>
        </div>
      </div>
    </footer>
  );
}
