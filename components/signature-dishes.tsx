'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';

const dishes = [
  {
    name: 'Vijayawada Chicken Pulav',
    description: 'Authentic Vijayawada style chicken pulav - fragrant basmati rice cooked with tender chicken and traditional Andhra spices',
    image: '/hero-biryani.jpg'
  },
  {
    name: 'Andhra ChickenCurry',
    description: 'Spicy Andhra style chicken curry - traditional South Indian curry with bold flavors and aromatic spices',
    image: '/butter-chicken.jpg'
  },
  {
    name: 'Paneer Butter Masala',
    description: 'Soft paneer cubes in rich tomato-based curry - a favorite vegetarian dish at our authentic Indian restaurant',
    image: '/paneer-masala.jpg'
  },
  {
    name: 'Masala Dosa',
    description: 'Crispy South Indian dosa with spiced potato filling - traditional Indian cuisine from our restaurant in Little Rock',
    image: '/masala-dosa.jpg'
  }
];

export default function SignatureDishes() {
  return (
    <section id="signature-dishes" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with SEO */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#2A2420] mb-4 text-balance"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Signature Dishes at Bheemas Indian Kitchen & Bar
          </h2>
          <p className="text-lg text-[#6B5D54] max-w-2xl mx-auto">
            Discover the best Indian food Little Rock has to offer - our signature dishes showcase authentic North Indian and South Indian cuisine
          </p>
        </div>

        {/* Dishes Grid - staggered scroll reveal */}
        <ScrollReveal
          variant="fadeUpStagger"
          staggerDelay={100}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {dishes.map((dish) => (
            <article key={dish.name} className="h-full flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-white border border-[#E8DDD5]">
              <div className="relative h-48 w-full flex-shrink-0">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={`${dish.name} - Authentic Indian restaurant dish in Little Rock`}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col min-h-0">
                <h3 
                  className="text-2xl font-bold text-[#782B23] mb-2"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {dish.name}
                </h3>
                <p className="text-[#6B5D54] leading-relaxed text-sm min-h-[6.5rem]">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </ScrollReveal>

        {/* SEO Keyword Section */}
        <div className="mt-16 text-center">
          <p className="text-[#6B5D54] text-sm max-w-3xl mx-auto leading-relaxed">
            Experience the best Indian restaurant in Little Rock serving traditional tandoori dishes, authentic North Indian and South Indian food, 
            with a family-friendly atmosphere perfect for all occasions. Our biryani restaurant specializes in premium fine dining Indian cuisine.
          </p>
        </div>
      </div>
    </section>
  );
}
