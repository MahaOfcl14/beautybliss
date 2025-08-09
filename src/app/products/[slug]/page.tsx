import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { AddToCartButton } from './add-to-cart-button';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - BeautyBlissOfficial`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border/60">
          <div className="relative w-full aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={product['data-ai-hint']}
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-primary mb-6">Rs. {product.price}</p>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Why you'll love it:</h2>
            <ul className="space-y-3">
              {product.usps.map((usp, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{usp}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
