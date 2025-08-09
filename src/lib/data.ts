import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'magical-red-oil',
    name: 'Magical Red Oil',
    price: 299,
    imageUrl: 'https://placehold.co/600x600.png',
    usps: ['No boil process', 'Non sticky', 'Sun kissed herbs', 'Serum based oil', '100% natural'],
    description: 'A unique serum-based natural oil formulation with no boil process. Unlock the ancient secrets to luscious, healthy hair.',
    category: "Oils",
    'data-ai-hint': 'hair oil',
  },
  {
    id: '2',
    slug: 'ancient-secret-hair-oil',
    name: 'Ancient Secret Hair Oil',
    price: 299,
    imageUrl: 'https://placehold.co/600x600.png',
    usps: ['Deep nourishment', 'Strengthens roots', 'Reduces hair fall', 'Adds natural shine', 'Time-tested formula'],
    description: 'Rediscover timeless hair care wisdom. Our Ancient Secret Hair Oil is crafted to fortify your hair from root to tip.',
    category: "Oils",
    'data-ai-hint': 'hair oil',
  },
  {
    id: '3',
    slug: 'goatmilk-shampoo',
    name: 'Goatmilk Shampoo',
    price: 299,
    imageUrl: 'https://placehold.co/600x600.png',
    usps: ['Gentle cleansing', 'Rich in proteins', 'Moisturizes scalp', 'Leaves hair soft', 'Sulfate-free'],
    description: 'Indulge your hair with the creamy goodness of Goatmilk. This shampoo gently cleanses while providing intense hydration.',
    category: "Shampoos",
    'data-ai-hint': 'shampoo bottle',
  },
  {
    id: '4',
    slug: 'hair-volume-booster-pack',
    name: 'Hair Volume Booster Pack',
    price: 499,
    imageUrl: 'https://placehold.co/600x600.png',
    usps: ['Adds instant volume', 'Thickens strands', 'Lifts from the roots', 'Lightweight formula', 'Complete hair care kit'],
    description: 'Get the voluminous, bouncy hair you\'ve always dreamed of. Our booster pack is the ultimate solution for fine, limp hair.',
    category: "Packs",
    'data-ai-hint': 'hair product',
  }
];

export const hotSellingProducts = products.filter(p => p.slug === 'magical-red-oil' || p.slug === 'hair-volume-booster-pack');

export const heroImages = [
  { src: 'https://placehold.co/1200x600.png', alt: 'Model with beautiful hair', 'data-ai-hint': 'woman hair' },
  { src: 'https://placehold.co/1200x600.png', alt: 'Hair care product display', 'data-ai-hint': 'hair product' },
  { src: 'https://placehold.co/1200x600.png', alt: 'Natural ingredients for hair care', 'data-ai-hint': 'natural ingredients' },
];
