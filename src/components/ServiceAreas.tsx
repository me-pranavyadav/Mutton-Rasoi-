import React, { useState } from 'react';
import { MapPin, MessageCircle, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS, BRAND_INFO, getWhatsAppUrl } from '../data/brandData';

export const ServiceAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = SERVICE_AREAS.filter((area) =>
    area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.hindiName.includes(searchQuery) ||
    area.zone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInquireLocation = (areaName: string) => {
    const message = `Hello MUTTON RASOI, does your delivery cover ${areaName} in Muzaffarpur? Please let me know delivery timing and charges.`;
    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <section id="service-areas" className="py-20 sm:py-28 bg-[#121110] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C98A4B]">
            <span>DELIVERY NETWORK</span>
            <span className="text-white/20">·</span>
            <span>वितरण क्षेत्र</span>
          </div>

          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F5]">
            “मुज़फ्फरपुर में आपके पास।”
          </h2>

          {/* Delivery perk highlight banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#C98A4B]/15 border border-[#C98A4B]/30 text-xs sm:text-sm font-medium text-[#E09F5E]">
            <CheckCircle2 className="w-4 h-4 text-[#C98A4B]" />
            <span className="font-semibold text-[#FAF8F5]">{BRAND_INFO.deliveryNote}</span>
            <span className="text-white/30">|</span>
            <span>ताज़ा और गरम डिलीवरी की गारंटी</span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#C8C2B7]">
            आयाची ग्राम, बहारिया से मुज़फ्फरपुर के प्रमुख रिहायशी व बाज़ार क्षेत्रों में गरमा-गरम प्रामाणिक मटन पहुँचाया जाता है।
          </p>
        </div>

        {/* Location Filter & Search */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C8C2B7]/60" />
            <input
              type="text"
              placeholder="Search area (e.g. Laxmi Chowk, Zeromile)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#181615] border border-white/10 rounded text-xs sm:text-sm text-[#FAF8F5] placeholder-[#C8C2B7]/50 focus:outline-none focus:border-[#C98A4B]"
            />
          </div>

          <div className="text-xs text-[#C8C2B7]">
            Showing key residential and commercial hubs
          </div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => setSelectedArea(area.id)}
              className={`p-5 rounded-lg bg-[#181615] border transition-all duration-150 flex flex-col justify-between group cursor-pointer ${
                selectedArea === area.id
                  ? 'border-[#C98A4B] ring-1 ring-[#C98A4B]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-[#C98A4B] bg-[#121110]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  {area.freeDeliveryEligible && (
                    <span className="text-[10px] text-[#C98A4B] font-medium tracking-wide uppercase">
                      Free Deliv. Zone
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-lg font-bold text-[#FAF8F5] group-hover:text-[#C98A4B] transition-colors">
                    {area.name}
                  </h3>
                  <div className="text-xs text-[#C98A4B] font-medium mt-0.5">
                    {area.hindiName}
                  </div>
                  <p className="mt-2 text-xs text-[#C8C2B7] leading-relaxed">
                    {area.zone}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInquireLocation(area.name);
                  }}
                  className="text-xs text-[#C98A4B] hover:text-[#D99B5C] font-medium flex items-center gap-1"
                >
                  <span>Inquire for here</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Inquiry Card as specified in user request */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-[#181615] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-semibold text-[#FAF8F5]">
              क्या आपकी जगह ऊपर सूचीबद्ध नहीं है?
            </h3>
            <p className="text-sm text-[#C8C2B7]">
              “अपना Location पूछने के लिए WhatsApp करें।” हम आपकी दूरी और डिलीवरी समय तुरंत बता देंगे।
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello MUTTON RASOI, I want to check delivery availability and charges for my location in Muzaffarpur. My location is: ")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#121110] bg-[#C98A4B] hover:bg-[#D99B5C] rounded transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp पर Location पूछें</span>
          </a>
        </div>
      </div>
    </section>
  );
};
