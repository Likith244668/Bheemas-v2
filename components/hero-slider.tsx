'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/ambience/00.jpeg',
    heading: 'Bheemas Indian Kitchen & Bar',
    subheading: 'Elegant dining atmosphere with authentic Indian ambiance',
    cta: 'View Menu',
    targetSection: 'menu'
  },
  {
    id: 2,
    image: '/ambience/bar-02.jpeg',
    heading: 'Authentic Indian Restaurant Experience',
    subheading: 'Family-friendly fine dining Indian cuisine in Little Mount',
    cta: 'Explore',
    targetSection: 'gallery'
  },
  {
    id: 3,
    image: '/butter-chicken.jpg',
    heading: 'Premium Tandoori Specialties',
    subheading: 'Experience traditional tandoori dishes in Little Mount',
    cta: 'Order Now',
    targetSection: 'menu',
    targetUrl: 'https://order.toasttab.com/online/bheemas-llc-110-s-shackleford-rd'
  }
 
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (
    sectionId: string | undefined,
    targetUrl?: string
  ) => {
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.heading}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-2xl animate-fade-in">
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {slides[currentSlide].heading}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-balance leading-relaxed">
            {slides[currentSlide].subheading}
          </p>
          <button 
            onClick={() =>
              handleButtonClick(
                slides[currentSlide].targetSection,
                slides[currentSlide].targetUrl
              )
            }
            className="bg-[#782B23] hover:bg-[#5A1F1A] text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg"
            disabled={
              !slides[currentSlide].targetSection &&
              !slides[currentSlide].targetUrl
            }
          >
            {slides[currentSlide].cta}
          </button>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-[#782B23] w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
}
