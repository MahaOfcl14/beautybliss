"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from './ui/button';
import { heroImages } from '@/lib/data';
import Autoplay from "embla-carousel-autoplay";
import { motion } from 'framer-motion';

export function HeroCarousel() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <Carousel 
        className="w-full h-full"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="w-full h-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={image['data-ai-hint']}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      </Carousel>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg text-green-900 dark:text-green-300">
            Your one stop solution for Hair related problems
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md text-green-900 dark:text-green-200">
            Discover the secret to naturally beautiful hair with our serum-based oils.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg">
              <Link href="/#products">Shop Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
