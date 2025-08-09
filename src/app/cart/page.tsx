"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link href="/#products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 bg-card p-6 rounded-lg shadow-sm border">
          <div className="space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <Link href={`/products/${item.slug}`} className="font-semibold text-lg hover:text-primary">{item.name}</Link>
                  <p className="text-muted-foreground">Rs. {item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    className="w-16 text-center"
                    min="1"
                  />
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="font-semibold text-lg w-24 text-center">Rs. {item.price * item.quantity}</p>
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 bg-card p-6 rounded-lg shadow-sm border sticky top-24">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal ({cartCount} items)</span>
              <span>Rs. {cartTotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>Rs. {cartTotal}</span>
            </div>
          </div>
          <Button asChild size="lg" className="w-full mt-6 text-lg">
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
