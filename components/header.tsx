'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'menu', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#menu', label: 'Menu', id: 'menu' },
    
    { href: '#gallery', label: 'Gallery', id: 'gallery' },
    { href: '#about', label: 'About Us', id: 'about' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#E8DDD5]/50' 
          : 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-[#E8DDD5]/30'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Optimized Size */}
          <div className="flex items-center flex-shrink-0 z-10 -ml-2 sm:ml-0">
            <Link 
              href="#home" 
              className="flex items-center group transition-all duration-300 hover:scale-105 relative"
              onClick={handleLinkClick}
            >
              <div className="relative">
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-[#782B23]/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110" />
                
                {/* Logo with optimized size - visible but not overwhelming */}
                <Image
                  src="/logo.png"
                  alt="Bheema's Indian Kitchen & Bar"
                  width={240}
                  height={96}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 group-hover:opacity-95"
                  priority
                  quality={95}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 mx-4 xl:mx-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === link.id
                    ? 'text-[#782B23] font-semibold'
                    : 'text-[#2A2420] hover:text-[#782B23]'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(link.id);
                    if (element) {
                      const offset = 70;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                <span className="relative z-10">{link.label}</span>
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#782B23] rounded-full" />
                )}
                <span className="absolute inset-0 bg-[#782B23]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="inline-flex bg-[#782B23] hover:bg-[#5A1F1A] text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Link
                href="https://order.toasttab.com/online/bheemas-llc-110-s-shackleford-rd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sm:hidden">Order</span>
                <span className="hidden sm:inline">Order Now</span>
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#2A2420] hover:bg-[#E8DDD5]/50 rounded-lg transition-all duration-300 relative z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-[#2A2420] transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-[#2A2420] transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-[#2A2420] transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-3 border-t border-[#E8DDD5]/50">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link, index) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-[#782B23] bg-[#782B23]/10'
                      : 'text-[#2A2420] hover:text-[#782B23] hover:bg-[#E8DDD5]/30'
                  } ${isMenuOpen ? 'animate-slide-in-down' : ''}`}
                  style={{
                    animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick();
                    const element = document.getElementById(link.id);
                    if (element) {
                      const offset = 70;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-1.5 mx-4 bg-[#782B23] hover:bg-[#5A1F1A] text-white py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link
                  href="https://order.toasttab.com/online/bheemas-llc-110-s-shackleford-rd"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  Order Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

    </header>
  );
}
