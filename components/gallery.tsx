'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { XIcon, ZoomIn } from 'lucide-react';

// Restaurant ambience images (00-08)
const restaurantImages = [
  { src: '/ambience/00.jpeg', alt: 'Elegant restaurant dining area with traditional Indian decor' },
  { src: '/ambience/01.jpeg', alt: 'Warm and inviting restaurant atmosphere' },
  { src: '/ambience/02.jpeg', alt: 'Fine dining setting with premium Indian restaurant ambiance' },
  { src: '/ambience/03.jpeg', alt: 'Beautiful restaurant interior showcasing authentic Indian design' },
  { src: '/ambience/04.jpeg', alt: 'Spacious dining area perfect for family gatherings' },
  { src: '/ambience/05.jpeg', alt: 'Elegant table setting in our premium Indian restaurant' },
  { src: '/ambience/06.jpeg', alt: 'Sophisticated restaurant ambience with traditional touches' },
  { src: '/ambience/07.jpeg', alt: 'Restaurant interior with exposed brick wall and traditional Indian artwork' },
  { src: '/ambience/08.jpeg', alt: 'Buffet setup showcasing our authentic Indian cuisine and elegant decor' },
];

// Bar section images
const barImages = [
  { src: '/ambience/bar01.jpeg', alt: 'Modern bar area with premium selection of beverages' },
  { src: '/ambience/bar-02.jpeg', alt: 'Elegant bar setting with sophisticated atmosphere' },
];

interface ImageLightboxProps {
  images: typeof restaurantImages;
  initialIndex: number;
  onClose: () => void;
}

function ImageLightbox({ images, initialIndex, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [images.length, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Close lightbox"
      >
        <XIcon className="w-6 h-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
        <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

type GalleryImage = { src: string; alt: string };

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  /** 'restaurant' | 'bar' – controls column count and aspect */
  variant: 'restaurant' | 'bar';
}

function GalleryGrid({ images, onImageClick, variant }: GalleryGridProps) {
  const isRestaurant = variant === 'restaurant';
  const isBar = variant === 'bar';

  return (
    <div
      className={`grid gap-3 sm:gap-4 md:gap-5 ${
        isBar
          ? 'grid-cols-1 sm:grid-cols-2'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      }`}
    >
      {images.map((item, index) => (
        <div
          key={index}
          className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#eee] border border-[#E8DDD5] shadow-md hover:shadow-xl hover:border-[#d4c9bf] transition-all duration-300 group cursor-pointer"
          onClick={() => onImageClick(index)}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
            sizes={
              variant === 'bar'
                ? '(max-width: 768px) 100vw, 50vw'
                : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            }
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <ZoomIn className="h-5 w-5 text-[#2A2420]" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState(restaurantImages);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (images: typeof restaurantImages, index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F5F1ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2A2420] mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Our Ambience
            </h2>
            <p className="text-lg md:text-xl text-[#6B5D54] max-w-3xl mx-auto leading-relaxed">
              Step into an atmosphere where traditional elegance meets modern sophistication. 
              Experience our beautifully designed spaces that create the perfect backdrop for your dining experience.
            </p>
          </div>

          {/* Tabs for Restaurant and Bar */}
          <Tabs defaultValue="restaurant" className="w-full">
            <div className="flex justify-center mb-8 md:mb-12">
              <TabsList className="bg-white/80 backdrop-blur-sm border border-[#E8DDD5] p-1.5">
                <TabsTrigger
                  value="restaurant"
                  className="px-6 py-2.5 text-base font-medium data-[state=active]:bg-[#2A2420] data-[state=active]:text-white transition-all"
                >
                  Restaurant
                </TabsTrigger>
                <TabsTrigger
                  value="bar"
                  className="px-6 py-2.5 text-base font-medium data-[state=active]:bg-[#2A2420] data-[state=active]:text-white transition-all"
                >
                  Bar
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="restaurant" className="mt-0">
              <GalleryGrid
                variant="restaurant"
                images={restaurantImages}
                onImageClick={(index) => handleImageClick(restaurantImages, index)}
              />
            </TabsContent>

            <TabsContent value="bar" className="mt-0">
              <GalleryGrid
                variant="bar"
                images={barImages}
                onImageClick={(index) => handleImageClick(barImages, index)}
              />
            </TabsContent>
          </Tabs>

          {/* SEO Content Block */}
          <div className="mt-16 md:mt-20 bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#E8DDD5] shadow-sm">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Experience Fine Dining at Little Rock's Best Indian Restaurant
            </h3>
            <div className="space-y-4 text-[#6B5D54] leading-relaxed">
              <p>
                Our Indian restaurant in Little Rock combines traditional Indian culinary excellence with modern fine dining aesthetics. 
                The warm, welcoming ambiance makes it an ideal choice for families and working professionals seeking authentic North Indian and South Indian cuisine. 
                Every dish is prepared with premium ingredients and traditional cooking methods to deliver the best Indian food experience in Little Rock.
              </p>
              <p>
                From our signature tandoori specialties to aromatic biryani, each meal is served in an elegant setting that celebrates Indian heritage. 
                Visit us for an unforgettable dining experience at the premier authentic Indian restaurant in Little Rock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
