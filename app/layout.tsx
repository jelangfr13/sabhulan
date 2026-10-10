import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'Sabhulan — Sajian Kuliner Hangat Nusantara',
  description:
    'Katalog kuliner online Sabhulan. Temukan sajian sup hangat, hidangan utama rempah istimewa, dan minuman segar, pesan langsung melalui WhatsApp.',
  icons: {
    icon: '/brand/sabhulan-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-sans bg-sabhulan-cream text-sabhulan-brown selection:bg-sabhulan-goldLight selection:text-sabhulan-brownDark">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
