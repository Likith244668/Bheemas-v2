'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent body scroll while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Check if page is fully loaded
    const handleLoad = () => {
      // Add a small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
        // Fade out animation
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = '';
        }, 500); // Fade out duration
      }, 1000); // Minimum display time
    };

    // If page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        document.body.style.overflow = '';
      };
    }
  }, [isLoading]);

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        pointerEvents: isLoading ? 'auto' : 'none',
      }}
    >
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A2420] via-[#1F3A2A] to-[#2A2420]">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(196,136,92,0.15),transparent_50%)] animate-pulse" />
        </div>
      </div>

      {/* Blurred backdrop overlay - stronger blur */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/40" />

      {/* Logo Container - Logo is always clear and sharp */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo - Always visible clearly, no blur, with smooth fade-in */}
        <div
          className="relative animate-fade-in-scale"
          style={{
            filter: 'none', // Ensure no blur on logo
          }}
        >
          <Image
            src="/logo.png"
            alt="Bheemas Indian Kitchen & Bar"
            width={400}
            height={400}
            className="object-contain w-auto h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] drop-shadow-2xl"
            priority
            quality={100}
            style={{
              filter: 'none', // Ensure logo is always sharp and clear
            }}
          />
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="mt-8 flex items-center gap-2">
            <div className="w-2 h-2 bg-[#782B23] rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2 h-2 bg-[#782B23] rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2 h-2 bg-[#782B23] rounded-full animate-bounce" />
          </div>
        )}
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#782B23]/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
