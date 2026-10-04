import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/brandData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E0D0C] text-[#C8C2B7] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-wider text-[#FAF8F5]">
              {BRAND_INFO.name}
            </h2>
            <p className="font-display text-lg text-[#C98A4B] italic">
              “{BRAND_INFO.taglineHindi}”
            </p>
            <p className="text-xs sm:text-sm text-[#C8C2B7]/80 max-w-sm leading-relaxed">
              आयाची ग्राम, बहारिया से निकला शुद्ध बिहारी मटन का प्रामाणिक स्वाद। पारंपरिक चूल्हा-हांडी तकनीक और शुद्ध सरसों तेल के साथ मुज़फ्फरपुर के लिए तैयार।
            </p>

            {/* Social Icons as requested */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-[#C8C2B7] hover:text-[#FAF8F5] hover:border-white/30 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-[#C8C2B7] hover:text-[#FAF8F5] hover:border-white/30 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-[#C8C2B7] hover:text-[#C98A4B] hover:border-[#C98A4B]/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-[#FAF8F5] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FAF8F5] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#FAF8F5] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-[#FAF8F5] transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAF8F5] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Cloud Kitchen Location & Details */}
          <div id="contact" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
              Origin & Hub
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-[#C8C2B7]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C98A4B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#FAF8F5] font-medium">Location</div>
                  <div>{BRAND_INFO.origin}</div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-4 h-4 text-[#C98A4B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#FAF8F5] font-medium">Service Hub</div>
                  <div>{BRAND_INFO.serviceCity}, Bihar</div>
                  <div className="text-[11px] text-[#C98A4B]">{BRAND_INFO.deliveryNote}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Placeholders */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
              Direct Order & Inquiry
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={`tel:${BRAND_INFO.phoneTel}`}
                className="flex items-center gap-2 hover:text-[#FAF8F5] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C98A4B]" />
                <span>Phone: {BRAND_INFO.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C98A4B] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C98A4B]" />
                <span>WhatsApp: {BRAND_INFO.whatsappDisplay}</span>
              </a>

              <div className="pt-3 text-[11px] text-[#C8C2B7]/60">
                ऑर्डर समय: 11:00 AM – 10:00 PM (दैनिक)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Presentation Disclaimer */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C8C2B7]/60 gap-4">
          <div>
            © 2026 {BRAND_INFO.name}. All Rights Reserved.
          </div>
          <div className="text-center sm:text-right">
            Sample / Demo Website for Business Presentation · Ayachi Gram to Muzaffarpur
          </div>
        </div>
      </div>
    </footer>
  );
};
