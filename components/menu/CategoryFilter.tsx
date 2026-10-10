'use client';

import React from 'react';
import { Category } from '@/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategoryId,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2 sm:gap-3 min-w-max pb-1">
        {categories.map((category) => {
          const isSelected = selectedCategoryId === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                isSelected
                  ? 'bg-sabhulan-brown text-white border-sabhulan-brown shadow-md scale-105'
                  : 'bg-white text-sabhulan-brown border-sabhulan-creamDark hover:bg-sabhulan-cream hover:border-sabhulan-goldMuted'
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
