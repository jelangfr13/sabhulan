import { Category, Product } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-all',
    slug: 'semua',
    name: 'Semua Menu',
    sortOrder: 0,
  },
  {
    id: 'cat-sup',
    slug: 'sup-kuah',
    name: 'Sup & Kuah Hangat',
    sortOrder: 1,
  },
  {
    id: 'cat-utama',
    slug: 'makanan-utama',
    name: 'Makanan Utama',
    sortOrder: 2,
  },
  {
    id: 'cat-camilan',
    slug: 'camilan',
    name: 'Camilan & Kudapan',
    sortOrder: 3,
  },
  {
    id: 'cat-minuman',
    slug: 'minuman',
    name: 'Minuman',
    sortOrder: 4,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    slug: 'sup-iga-sabhulan-rempah',
    name: 'Sup Iga Sabhulan Rempah',
    description:
      'Iga sapi pilihan dimasak empuk dengan kuah kaldu rempah beraroma sedap, disajikan hangat dengan potongan wortel, kentang, dan taburan bawang goreng renyah.',
    categoryId: 'cat-sup',
    price: 48000,
    imageUrl:
      'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isPopular: true,
  },
  {
    id: 'prod-02',
    slug: 'soto-betawi-daging-kuah-susu',
    name: 'Soto Daging Kuah Santan Gurih',
    description:
      'Daging sapi lembut dengan kuah gurih perpaduan santan dan rempah tradisional, dilengkapi emping melinjo dan sambal cabai rawit pedas segar.',
    categoryId: 'cat-sup',
    price: 38000,
    imageUrl:
      'https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isPopular: true,
  },
  {
    id: 'prod-03',
    slug: 'rawon-daging-kuah-hitam-khas',
    name: 'Rawon Daging Spesial Sabhulan',
    description:
      'Kuah kluwek hitam pekat nan gurih dipadukan dengan potongan daging sapi empuk, disajikan lengkap dengan tauge pendek segar dan sambal terasi.',
    categoryId: 'cat-sup',
    price: 42000,
    imageUrl:
      'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isPopular: false,
  },
  {
    id: 'prod-04',
    slug: 'nasi-goreng-rempah-sabhulan',
    name: 'Nasi Goreng Rempah Signature',
    description:
      'Nasi goreng dengan bumbu racikan khas Sabhulan, potongan ayam suwir gurih, telur mata sapi setengah matang, kerupuk udang, dan acar timun segar.',
    categoryId: 'cat-utama',
    price: 32000,
    imageUrl:
      'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isPopular: true,
  },
  {
    id: 'prod-05',
    slug: 'ayam-bakar-madu-bumbu-rujak',
    name: 'Ayam Bakar Madu Gurih',
    description:
      'Ayam ungkep bumbu rempah dibakar dengan olesan madu alami dan kecap manis, menghasilkan aroma smokey karamel yang meresap hingga ke serat tulang.',
    categoryId: 'cat-utama',
    price: 35000,
    imageUrl:
      'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isPopular: true,
  },
  {
    id: 'prod-06',
    slug: 'nasi-campur-sabhulan-komplit',
    name: 'Nasi Liwet Komplit Sabhulan',
    description:
      'Nasi liwet wangi daun salam dan serai, disajikan dengan ayam suwir opor, labu siam gurih, telur pindang cokelat, dan sambal goreng krecek.',
    categoryId: 'cat-utama',
    price: 36000,
    imageUrl:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    isAvailable: false, // Ditandai habis untuk pengujian disabled state
    isPopular: false,
  },
  {
    id: 'prod-07',
    slug: 'tahu-tempe-mendoan-crispy',
    name: 'Tempe Mendoan Hangat & Sambal Kecap',
    description:
      'Tempe kedelai berbalut adonan tepung daun bawang digoreng setengah matang renyah lembut, disajikan dengan cocolan sambal kecap rawit pedas manis.',
    categoryId: 'cat-camilan',
    price: 18000,
    imageUrl:
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isPopular: false,
  },
  {
    id: 'prod-08',
    slug: 'bakwan-jagung-manis-renyah',
    name: 'Bakwan Jagung Manis Renyah (3 pcs)',
    description:
      'Perpaduan biji jagung manis renyah dengan daun seledri dan rempah pilihan, digoreng garing keemasan di luar dan empuk di dalam.',
    categoryId: 'cat-camilan',
    price: 16000,
    imageUrl:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isPopular: false,
  },
  {
    id: 'prod-09',
    slug: 'es-teh-manis-sabhulan-pandan',
    name: 'Es Teh Manis Pandan Wangi',
    description:
      'Seduhan teh melati premium berpadu aroma daun pandan alami dengan tingkat manis pas dan es batu kristal yang menyegarkan dahaga.',
    categoryId: 'cat-minuman',
    price: 8000,
    imageUrl:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isPopular: true,
  },
  {
    id: 'prod-10',
    slug: 'wedang-jahe-rempah-hangat',
    name: 'Wedang Jahe Madu Hangat',
    description:
      'Rebusan jahe merah bakar, serai, cengkeh, dan kayu manis dengan pemanis madu murni. Menghangatkan tenggorokan dan menyegarkan tubuh.',
    categoryId: 'cat-minuman',
    price: 15000,
    imageUrl:
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
    isPopular: false,
  },
];
