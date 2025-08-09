import { Instagram, Leaf } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground/90">
              BeautyBlissOfficial
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            A unique serum-based natural oil formulation with No boil process.
            Your hair needs complete hair care kit — here it is! We believe in
            the power of nature to bring out your hair's true potential.
          </p>
          <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium">100% Natural Ingredients</p>
              </div>
              <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium">Cruelty-Free & Vegan</p>
              </div>
              <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium">Sustainable & Eco-Friendly</p>
              </div>
          </div>
          <Button asChild>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" /> Follow us on Instagram
            </Link>
          </Button>
        </div>
        <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://placehold.co/600x700.png"
            alt="Natural hair care ingredients"
            width={600}
            height={700}
            className="object-cover w-full h-full"
            data-ai-hint="natural ingredients"
          />
        </div>
      </div>
    </div>
  );
}
