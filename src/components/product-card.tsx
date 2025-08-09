"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Button } from './ui/button';
import { useCart } from '@/hooks/use-cart';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card rounded-lg overflow-hidden shadow-md border border-border/60 flex flex-col group"
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product['data-ai-hint']}
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">
          <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-2xl font-bold text-primary mb-4">Rs. {product.price}</p>
        <div className="mt-auto">
          <Button 
            onClick={() => addToCart(product)} 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
