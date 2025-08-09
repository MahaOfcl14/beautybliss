"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              Your one stop solution for Hair related problems
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl text-muted-foreground">
              Discover the secret to naturally beautiful hair with our serum-based oils.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg"
              >
                <Link href="/#products">Shop Now</Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://placehold.co/600x500.png"
              alt="Woman with beautiful, healthy hair"
              fill
              className="object-cover"
              priority
              data-ai-hint="woman hair"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}