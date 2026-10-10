# Sabhulan — Katalog Kuliner Online

Website resmi katalog kuliner **Sabhulan**, dibangun menggunakan **Next.js (App Router)**, **TypeScript**, dan **Tailwind CSS**. Memungkinkan pelanggan menemukan menu hidangan kuah hangat dan masakan rempah nusantara, mengelola keranjang belanja, dan meneruskan pesanan langsung ke WhatsApp Bisnis resmi Sabhulan tanpa kewajiban registrasi akun (*guest checkout*).

---

## 🌟 Fitur Utama (MVP Fase 1 & Fase 2)

- **Identitas & Tema Sabhulan:**
  - Desain hangat berbasis logo resmi Sabhulan (`/public/brand/sabhulan-logo.png`).
  - Palet warna: Warm Cream (`#FAF6F0`), Deep Brown (`#4A2311`), Amber Gold (`#F59E0B`), dan Aksen WhatsApp Green (`#25D366`).
- **Beranda & Profil Bisnis (`/`):**
  - Hero banner dengan ajakan pesan menu hangat.
  - Seksi *Tentang Sabhulan* (cerita dapur rempah) dan *Kenapa Pilih Kami* (4 keunggulan mutu).
  - Seksi highlight menu favorit dengan akses pesan langsung.
- **Katalog Menu Interaktif (`/menu`):**
  - Filter kategori (*Semua Menu*, *Sup & Kuah Hangat*, *Makanan Utama*, *Camilan*, *Minuman*).
  - Pencarian cepat (*live search*, *case-insensitive*).
  - Status ketersediaan menu (*Tersedia* vs *Stok Habis*).
  - Modal detail produk dengan informasi lengkap dan pemilih kuantitas.
- **Keranjang Belanja Persisten (`/cart`):**
  - Sinkronisasi instan di `localStorage` (isi keranjang tidak hilang saat refresh).
  - Kontrol penambahan/pengurangan kuantitas (minimum 1) dan tombol hapus item.
  - Perhitungan subtotal dan total harga Rupiah secara otomatis dan deterministik.
  - Empty state ramah dengan tombol langsung ke katalog.
- **Checkout ke WhatsApp (`/checkout`):**
  - Form data pemesan (Nama Pemesan wajib, Catatan Khusus opsional).
  - Validasi inline mencegah pengiriman form kosong.
  - Ringkasan pesanan & pratinjau teks format pesan WhatsApp.
  - Tombol **Lanjut ke WhatsApp** (`wa.me`) dengan nomor internasional terkonfigurasi.
  - Tombol **Salin Pesanan** sebagai alternatif jika WhatsApp web/aplikasi terkendala.

---

## 🛠️ Stack Teknologi

- **Framework:** Next.js 14 (App Router)
- **Bahasa:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **State Management:** React Context API + LocalStorage Persistence

---

## 🚀 Panduan Menjalankan Proyek

### 1. Prasyarat
- Node.js versi 18+ (disarankan Node.js v20+)
- npm / pnpm / yarn

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment (Opsional)
Buat file `.env.local` jika ingin mengubah nomor WhatsApp bisnis tujuan:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```
*(Default nomor placeholder jika tidak disetel adalah `6281234567890`)*

### 4. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### 5. Melakukan Build Produksi
```bash
npm run build
npm run start
```

---

## 📂 Struktur Proyek

```text
WebKuliner/
├── app/
│   ├── layout.tsx            # Root layout (Header, Footer, CartProvider, SEO)
│   ├── page.tsx              # Beranda (Hero, Menu Populer, Cerita, Keunggulan)
│   ├── globals.css           # Styling global & token warna Tailwind
│   ├── menu/page.tsx         # Katalog menu, filter kategori, live search
│   ├── cart/page.tsx         # Keranjang belanja & rincian biaya
│   └── checkout/page.tsx     # Form pemesan & tombol handoff WhatsApp
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navigasi responsif, logo, dan cart counter badge
│   │   └── Footer.tsx        # Info jam buka, alamat, kontak, copyright
│   ├── menu/
│   │   ├── ProductCard.tsx   # Kartu hidangan, harga, tombol pesan/habis
│   │   ├── CategoryFilter.tsx# Pill filter kategori menu
│   │   ├── SearchBar.tsx     # Pencarian teks instan
│   │   └── ProductDetailModal.tsx # Modal detail menu & pemilih kuantitas
│   ├── cart/
│   │   ├── CartItemRow.tsx   # Baris item di keranjang (kontrol +/- & hapus)
│   │   └── CartSummary.tsx   # Ringkasan subtotal & tombol ke checkout
│   └── checkout/
│       ├── CustomerForm.tsx  # Input nama pemesan & catatan
│       └── OrderReviewCard.tsx # Preview pesan, tombol wa.me, tombol salin
├── context/
│   └── CartContext.tsx       # State keranjang belanja & persistensi localStorage
├── data/
│   └── menuData.ts           # Mock data kategori & menu realistis Sabhulan
├── lib/
│   ├── currency.ts           # Formatter Rupiah (Intl.NumberFormat id-ID)
│   └── whatsapp.ts           # Message builder & URL generator wa.me
├── public/
│   └── brand/
│       └── sabhulan-logo.png # Aset resmi logo Sabhulan
├── types/
│   └── index.ts              # Definisi tipe TypeScript
└── prd/
    └── PRD_Sabhulan_Antigravity.md # Spesifikasi acuan PRD
```

---

## 🔒 Batasan & Catatan MVP

1. **Tanpa Payment Gateway:** Pembayaran tidak diproses di website; transaksi disepakati dan dikonfirmasi via WhatsApp.
2. **Guest Order:** Pengguna tidak diwajibkan mendaftar akun untuk melakukan pemesanan.
3. **Data Menu:** Menggunakan mock data lokal terstruktur di `data/menuData.ts`, siap digantikan API backend atau CMS headless di masa mendatang.
