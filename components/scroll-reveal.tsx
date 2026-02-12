'use client';

import { useRef, useEffect, useState, type ReactNode, Children, isValidElement } from 'react';
import { cn } from '@/lib/utils';

type RevealVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'fadeUpStagger';

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation style when section enters viewport */
  variant?: RevealVariant;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** How much of element must be visible to trigger (0–1). Default 0.15 */
  threshold?: number;
  /** Root margin e.g. "0px 0px -80px" to trigger slightly before fully in view */
  rootMargin?: string;
  /** Run animation only once (default true) */
  once?: boolean;
  /** Extra class for the wrapper */
  className?: string;
  /** Stagger delay per child (ms), only for fadeUpStagger */
  staggerDelay?: number;
}

const variantClasses: Record<RevealVariant, { base: string; visible: string }> = {
  fadeUp: {
    base: 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
    visible: 'opacity-100 translate-y-0',
  },
  fadeLeft: {
    base: 'opacity-0 -translate-x-8 transition-all duration-700 ease-out',
    visible: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    base: 'opacity-0 translate-x-8 transition-all duration-700 ease-out',
    visible: 'opacity-100 translate-x-0',
  },
  scaleIn: {
    base: 'opacity-0 scale-[0.96] transition-all duration-700 ease-out',
    visible: 'opacity-100 scale-100',
  },
  fadeUpStagger: {
    base: 'opacity-0 translate-y-6 transition-all duration-600 ease-out',
    visible: 'opacity-100 translate-y-0',
  },
};

export function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
  className,
  staggerDelay = 80,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isStagger = variant === 'fadeUpStagger';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  const { base, visible } = variantClasses[variant];
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  if (isStagger) {
    const childArray = Children.toArray(children).filter(isValidElement);
    return (
      <div ref={ref} className={cn(className)}>
        {childArray.map((child, i) => (
          <div
            key={i}
            className={cn(base, isVisible && visible)}
            style={{
              transitionDelay: isVisible ? `${delay + i * staggerDelay}ms` : '0ms',
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        base,
        isVisible && visible,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
