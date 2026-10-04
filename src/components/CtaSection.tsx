import React from 'react';
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/brandData';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0E0D0C] border-t border-b border-white/10 relative overflow-hidden">
      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C98A4B]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C98A4B] mb-6">
          <span>FRESH DESI MUTTON · TODAY'S RASOI</span>
        </div>

        {/* Large Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF8F5] leading-tight">
          “आज क्या खाएँगे?”
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-2xl text-[#EDE8DF] max-w-2xl mx-auto leading-relaxed">
          “असली देसी मटन का स्वाद — आयाची ग्राम से आपके शहर तक।”
        </p>

        {/* CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-[#121110] bg-[#C98A4B] hover:bg-[#D99B5C] active:bg-[#B27539] rounded transition-all duration-150 shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Order on WhatsApp</span>
          </a>

          <a
            href={`tel:${BRAND_INFO.phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium tracking-wider uppercase text-[#FAF8F5] bg-white/5 hover:bg-white/10 border border-white/20 rounded transition-all duration-150 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-[#C98A4B]" />
            <span>Call to Order</span>
          </a>
        </div>

        {/* Delivery note & time note */}
        <div className="mt-12 text-xs sm:text-sm text-[#C8C2B7]/70 space-y-1">
          <div>लंच और डिनर दोनों के लिए ऑर्डर स्वीकार किए जाते हैं</div>
          <div className="text-[#C98A4B] font-medium">{BRAND_INFO.deliveryNote}</div>
        </div>
      </div>
    </section>
  );
};
