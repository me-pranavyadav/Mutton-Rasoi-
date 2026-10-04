import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu as MenuIcon, X } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/brandData';

interface NavbarProps {
  onOpenOrderDrawer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Service Areas', href: '#service-areas' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#121110]/95 backdrop-blur-md border-white/10 shadow-lg'
            : 'bg-gradient-to-b from-[#121110]/90 via-[#121110]/60 to-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Strictly 1-Row, 3-Zone Top Bar Contract */}
          <div className="h-18 flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="group flex items-baseline gap-2 text-xl sm:text-2xl font-display font-bold tracking-wider text-[#F7F4EE] hover:text-[#C98A4B] transition-colors whitespace-nowrap"
            >
              <span>MUTTON RASOI</span>
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#C8C2B7]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#F7F4EE] transition-colors hover:underline underline-offset-8 decoration-[#C98A4B]/60 decoration-1 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${BRAND_INFO.phoneTel}`}
                className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-wider text-[#C8C2B7] hover:text-[#F7F4EE] px-3 py-2 transition-colors"
                title="Call to Order"
              >
                <Phone className="w-3.5 h-3.5 text-[#C98A4B]" />
                <span className="font-medium whitespace-nowrap">Call</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#121110] bg-[#C98A4B] hover:bg-[#D99B5C] active:bg-[#B27539] rounded transition-colors whitespace-nowrap shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Now</span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#C8C2B7] hover:text-[#F7F4EE] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#181615] border-b border-white/10 px-6 py-6 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#C98A4B] font-medium pb-2 border-b border-white/10">
              Serving Muzaffarpur from Ayachi Gram
            </div>
            <nav className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-[#EDE8DF] hover:text-[#C98A4B] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#121110] bg-[#C98A4B] rounded"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href={`tel:${BRAND_INFO.phoneTel}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider text-[#EDE8DF] border border-white/15 rounded hover:bg-white/5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C98A4B]" />
                <span>Call: {BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
