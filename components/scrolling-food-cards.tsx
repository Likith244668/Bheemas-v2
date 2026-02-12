'use client';

import Image from 'next/image';

const foodCards = [
  {
    title: 'Butter Chicken',
    image: '/Food-items/butter-chicken.jpeg',
    description: 'Creamy and rich tomato-based curry'
  },
  {
    title: 'Chicken Biryani',
    image: '/Food-items/chicken-briyani.jpeg',
    description: 'Aromatic basmati rice with tender chicken'
  },
  {
    title: 'Paneer Butter Masala',
    image: '/Food-items/panner-butter-masala.jpeg',
    description: 'Creamy curry with soft paneer cubes'
  },
  {
    title: 'Paneer Biryani',
    image: '/Food-items/panner-biriyani.jpeg',
    description: 'Fragrant rice dish with spiced paneer'
  },
  {
    title: 'Mushroom Biryani',
    image: '/Food-items/mushroom-biryani.jpeg',
    description: 'Delicious biryani with fresh mushrooms'
  },
  {
    title: 'Dhal Curry',
    image: '/Food-items/Dhal-curry.jpeg',
    description: 'Traditional lentil curry, rich and flavorful'
  },
  {
    title: 'Fried Rice With Chicken Tikka Masala',
    image: '/Food-items/fried-rice.jpeg',
    description: 'Spiced and seasoned rice with vegetables and chicken tikka masala gravy '
  },
  {
    title: 'Butter Naan',
    image: '/Food-items/Butter naan.jpeg',
    description: 'Soft, buttery traditional Indian bread'
  },
  {
    title: 'Onion Pakoda',
    image: '/Food-items/onion-pokoda.jpeg',
    description: 'Crispy onion fritters, perfect snack'
  },
  {
    title: 'Bonda',
    image: '/Food-items/Bonda.jpeg',
    description: 'Deep-fried savory snack, South Indian favorite'
  }
];

export default function ScrollingFoodCards() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl md:text-5xl font-bold text-[#2A2420] text-center mb-12"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Explore Indian Food Variety
        </h2>

        {/* Scrolling Container */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4 animate-scroll" style={{
              animation: 'scroll 20s linear infinite',
              width: 'fit-content'
            }}>
              {[...foodCards, ...foodCards].map((card, index) => (
                <article 
                  key={index}
                  className="flex-shrink-0 w-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition bg-white border border-[#E8DDD5]"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={`${card.title} - Authentic Indian restaurant dish`}
                      fill
                      className="object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 
                      className="text-xl font-bold text-[#782B23] mb-2"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-[#6B5D54] text-sm">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Text */}
        <div className="mt-12 text-center">
          <p className="text-[#6B5D54] max-w-3xl mx-auto leading-relaxed">
            Best Indian restaurant in Little Rock offering authentic North Indian and South Indian food. 
            Our menu features traditional tandoori dishes, aromatic biryani, family-friendly options, and premium fine dining cuisine.
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
