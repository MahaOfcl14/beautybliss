"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/lib/types";
import { ShoppingCart } from "lucide-react";
import { motion } from 'framer-motion';

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Button size="lg" onClick={() => addToCart(product)} className="w-full md:w-auto text-lg">
        <ShoppingCart className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>
    </motion.div>
  );
}
