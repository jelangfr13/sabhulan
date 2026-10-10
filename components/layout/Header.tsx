'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, UtensilsCrossed, PhoneCall } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { DEFAULT_WHATSAPP_NUMBER } from '@/lib/whatsapp';

export default function Header() {
  const pathname = usePathname();
  const { totalCount, isLoaded } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Katalog Menu', href: '/menu' },
    { name: 'Keranjang', href: '/cart' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-sabhulan-creamLight/95 backdrop-blur-md border-b border-sabhulan-creamDark shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full p-1 shadow-sm border border-sabhulan-creamDark group-hover:scale-105 transition-transform">
              <Image
                src="/brand/sabhulan-logo.png"
                alt="Logo Sabhulan"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-sabhulan-brown font-serif block">
                Sabhulan
              </span>
              <span className="text-xs font-medium text-sabhulan-goldHover tracking-wide block uppercase">
                Katalog Kuliner Hangat
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-sabhulan-brown text-white shadow-sm'
                      : 'text-sabhulan-brown hover:bg-sabhulan-cream hover:text-sabhulan-brownDark'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Cart Icon & Actions */}
          <div className="flex items-center space-x-3">
            <Link
              href="/cart"
              className="relative p-2.5 rounded-full bg-sabhulan-cream hover:bg-sabhulan-goldLight text-sabhulan-brown transition-colors flex items-center justify-center border border-sabhulan-creamDark"
              aria-label="Keranjang Belanja"
            >
              <ShoppingBag className="w-5 h-5 text-sabhulan-brown" />
              {isLoaded && totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-sabhulan-gold text-sabhulan-brownDark font-extrabold text-xs min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {totalCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-sabhulan-brown md:hidden hover:bg-sabhulan-cream transition-colors"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sabhulan-creamLight border-b border-sabhulan-creamDark px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                  isActive
                    ? 'bg-sabhulan-brown text-white'
                    : 'text-sabhulan-brown hover:bg-sabhulan-cream'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-sabhulan-creamDark mt-3 flex items-center justify-between text-xs text-sabhulan-brownLight px-2">
            <span className="flex items-center gap-1">
              <UtensilsCrossed className="w-4 h-4 text-sabhulan-gold" />
              Sajian hangat Sabhulan
            </span>
            <span className="flex items-center gap-1 font-semibold text-brand-waHover">
              <PhoneCall className="w-3.5 h-3.5" />
              WA: +{DEFAULT_WHATSAPP_NUMBER}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
