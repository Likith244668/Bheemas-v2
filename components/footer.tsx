'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Clock,
  Phone,
  Mail,
  MapPin,
  Navigation,
  Instagram,
  Facebook,
} from 'lucide-react';

const HOURS = [
  { day: 'Wed', hours: '11 AM – 10 PM' },
  { day: 'Thu', hours: '11 AM – 10 PM' },
  { day: 'Fri', hours: '11 AM – 10 PM' },
  { day: 'Sat', hours: '11 AM – 10 PM' },
  { day: 'Sun', hours: '11 AM – 10 PM' },
  { day: 'Mon', hours: '11 AM – 10 PM' },
  { day: 'Tue', hours: 'Closed' },
] as const;

const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=Bheemas+Indian+Kitchen+Little+Rock+AR';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
] as const;

export default function Footer() {
  return (
    <footer
      id="contact"
      role="contentinfo"
      className="bg-[#0f1f18] text-white"
      aria-label="Contact, hours, and location"
    >
      {/* Top: accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent opacity-80" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand + Logo — spans 4 cols */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6 sm:gap-8">
            <Link
              href="#home"
              className="flex items-center gap-4 group w-fit min-w-0"
              aria-label="Bheemas Indian Kitchen - Home"
            >
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-md ring-1 ring-[#243d32] group-hover:ring-[#D4A574]/50 transition-all">
                <Image
                  src="/logo.png"
                  alt=""
                  width={80}
                  height={80}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="min-w-0">
                <h2
                  className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-[#D4A574] transition-colors whitespace-nowrap overflow-x-auto scrollbar-hide"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Bheemas Indian Kitchen & Bar
                </h2>
                <p className="text-sm text-[#8a9a90] mt-0.5 whitespace-nowrap">
                  Little Rock · North & South Indian
                </p>
              </div>
            </Link>
            <div className="flex gap-3 lg:mt-2">
              <a
                href="https://www.instagram.com/bheemas_indian_kitchen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1a2f24] text-[#e0e8e3] hover:bg-[#D4A574] hover:text-[#0f1f18] transition-all border border-[#243d32] hover:border-[#D4A574]/50"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden />
              </a>
              <a
                href="https://www.facebook.com/BheemasIndianKitchen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1a2f24] text-[#e0e8e3] hover:bg-[#D4A574] hover:text-[#0f1f18] transition-all border border-[#243d32] hover:border-[#D4A574]/50"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Contact — 3 cols: min width so email fits; never clipped */}
          <div className="lg:col-span-3 min-w-0 overflow-visible lg:min-w-[17rem]">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D4A574] mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm text-[#c5d0ca] overflow-visible">
              <a
                href="tel:+15013568776"
                className="flex items-center gap-3 hover:text-[#D4A574] transition-colors"
                aria-label="Call (501) 356-8776"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1a2f24] text-[#D4A574]">
                  <Phone className="w-4 h-4" aria-hidden />
                </span>
                <span className="whitespace-nowrap">(501) 356-8776</span>
              </a>
              <a
                href="mailto:Bheemas.littlerock@gmail.com"
                className="flex items-center gap-3 hover:text-[#D4A574] transition-colors min-w-0 w-full"
                aria-label="Email Bheemas.littlerock@gmail.com"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1a2f24] text-[#D4A574]">
                  <Mail className="w-4 h-4" aria-hidden />
                </span>
                {/* Full email on one line; scrolls horizontally if narrow, scrollbar hidden */}
                <span className="flex-1 min-w-0 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide text-inherit">
                  Bheemas.littlerock@gmail.com
                </span>
              </a>
            </address>
          </div>

          {/* Hours — 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D4A574] mb-4 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" aria-hidden />
              Hours
            </h3>
            <ul className="space-y-1.5 text-sm">
              {HOURS.map(({ day, hours }) => (
                <li
                  key={day}
                  className="flex justify-between gap-3 text-[#c5d0ca]"
                >
                  <span>{day}</span>
                  <span
                    className={
                      hours === 'Closed'
                        ? 'text-[#D4A574] font-medium'
                        : 'text-[#8a9a90]'
                    }
                  >
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map + Directions — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D4A574] mb-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" aria-hidden />
              Visit
            </h3>
            <div className="rounded-xl overflow-hidden border border-[#1a2f24] bg-[#1a2f24]/60 shadow-xl">
              <div className="aspect-[16/10] min-h-[120px] w-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283!2d-92.954759!3d34.746481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d28c4b038a3b9d%3A0x6c2c1e2f3d4e5f6a!2sLittle+Rock%2C+AR!5e0!3m2!1sen!2sus"
                  title="Bheemas Indian Kitchen - Little Rock, AR"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold bg-[#D4A574] text-[#0f1f18] hover:bg-[#c4956a] transition-colors"
                aria-label="Get directions"
              >
                <Navigation className="w-4 h-4" aria-hidden />
                Directions
              </a>
            </div>
            <p className="text-xs text-[#8a9a90] mt-2">Little Rock, AR</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1a2f24] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#6b7a70]">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-[#D4A574] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <p>
            &copy; {new Date().getFullYear()} Bheemas Indian Kitchen & Bar, Little Rock.
          </p>
        </div>
      </div>
    </footer>
  );
}
