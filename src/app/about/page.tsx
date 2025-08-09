import { Instagram, Leaf, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya S.",
    avatar: "PS",
    text: "The Magical Red Oil is truly magical! My hair has never felt so soft and looked so shiny. I'm a customer for life!",
  },
  {
    name: "Anjali K.",
    avatar: "AK",
    text: "I was skeptical about the Goatmilk Shampoo, but it's amazing. It's so gentle on my scalp and has reduced my hair fall significantly.",
  },
  {
    name: "Rohan M.",
    avatar: "RM",
    text: "The Hair Volume Booster Pack is a game-changer. My hair looks so much fuller and has a natural bounce. Highly recommend!",
  },
];

export default function AboutPage() {
  return (
    <>
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

      <section className="py-12 md:py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground/90">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <Avatar>
                    <AvatarImage src={`https://placehold.co/40x40.png`} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}