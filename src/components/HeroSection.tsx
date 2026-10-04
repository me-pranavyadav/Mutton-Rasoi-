import React, { useState } from 'react';
import { MessageCircle, ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/brandData';

interface HeroSectionProps {
  onExploreMenu?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMenu }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const heroImageSrc = '/src/assets/images/hero_bihari_mutton_curry_1791109546451.jpg';

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreMenu) {
      onExploreMenu();
    } else {
      const menuEl = document.getElementById('menu');
      if (menuEl) {
        menuEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0E0D0C]">
      {/* Background Image with Fallback and Measured Scrim */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <img
            src={heroImageSrc}
            alt="Authentic Bihari Mutton Curry slow cooked in desi ghee and mustard oil"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] transition-opacity duration-700 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1C1714] via-[#121110] to-[#0D0C0B]" />
        )}

        {/* Sophisticated Multi-stop Scrim for 4.5:1 WCAG Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/70 to-[#121110]/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#121110]/40 to-[#121110]/85" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Subtle Location Indicator */}
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-xs sm:text-sm font-medium tracking-widest text-[#E09F5E] uppercase">
          <MapPin className="w-3.5 h-3.5 text-[#C98A4B]" />
          <span>Serving Muzaffarpur</span>
          <span className="text-white/30">·</span>
          <span>From Ayachi Gram, Baharia</span>
        </div>

        {/* Brand Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF8F5] max-w-4xl mx-auto leading-[1.15] text-balance drop-shadow-md">
          “आज का खाना घर से आया है!”
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#E5DFD4] font-normal max-w-3xl mx-auto leading-relaxed text-balance">
          {BRAND_INFO.subheadlineHindi}
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-[#121110] bg-[#C98A4B] hover:bg-[#D99B5C] active:bg-[#B27539] rounded transition-all duration-150 shadow-lg hover:shadow-[#C98A4B]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order Now</span>
          </a>

          <a
            href="#menu"
            onClick={scrollToMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wider uppercase text-[#EDE8DF] bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/20 rounded transition-all duration-150 backdrop-blur-sm"
          >
            <span>Explore Menu</span>
            <ArrowDown className="w-4 h-4 text-[#C98A4B]" />
          </a>
        </div>

        {/* Minimal Trust Kicker (Quiet Unboxed Text) */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#C8C2B7]/80">
          <span>आयाची ग्राम, बहारिया</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>पारंपरिक धीमी आँच</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>ताज़ा तैयारी</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span className="text-[#E09F5E]">{BRAND_INFO.deliveryNote}</span>
        </div>
      </div>
    </section>
  );
};
