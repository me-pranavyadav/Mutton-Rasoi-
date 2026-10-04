import React, { useState } from 'react';
import { Sparkles, Utensils, Compass } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const introImage = '/src/assets/images/dish_mutton_curry_1791109578062.jpg';

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#151413] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C98A4B]">
              <span>AUTHENTIC BIHAR HERITAGE</span>
              <span className="text-white/20">·</span>
              <span>BAHARIA ORIGIN</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5] leading-tight">
              “स्वाद, जो गाँव से आता है।”
            </h2>

            <div className="h-0.5 w-16 bg-[#C98A4B]/60" />

            <p className="text-base sm:text-lg text-[#EDE8DF]/90 font-normal leading-relaxed">
              “MUTTON RASOI सिर्फ एक cloud kitchen नहीं, बल्कि बिहार के पारंपरिक मटन के स्वाद को शहर तक पहुँचाने की एक कोशिश है। आयाची ग्राम, बहारिया से तैयार किया गया हमारा मटन अपने देसी स्वाद, मसालों और पारंपरिक पकाने के अंदाज़ के लिए खास है।”
            </p>

            <p className="text-sm sm:text-base text-[#C8C2B7] leading-relaxed">
              हमारा विश्वास है कि असली मटन का ज़ायका किसी शॉर्टकट से नहीं बनता। शुद्ध कच्ची घानी सरसों का तेल, खड़े गरम मसाले, धीमी आँच और मिट्टी के बर्तनों की सोंधी खुशबू — यही है वह देसी पहचान जो मुज़फ्फरपुर के हर मटन प्रेमी को घर के आँगन की याद दिलाती है।
            </p>

            {/* Editorial Highlight Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 text-xs sm:text-sm">
              <div>
                <div className="text-[#C98A4B] font-semibold tracking-wide uppercase">रसोई का उद्गम</div>
                <div className="text-[#EDE8DF] mt-1">आयाची ग्राम, बहारिया</div>
              </div>
              <div>
                <div className="text-[#C98A4B] font-semibold tracking-wide uppercase">पकाने का अंदाज़</div>
                <div className="text-[#EDE8DF] mt-1">धीमी आँच व खड़े मसाले</div>
              </div>
              <div>
                <div className="text-[#C98A4B] font-semibold tracking-wide uppercase">सेवा क्षेत्र</div>
                <div className="text-[#EDE8DF] mt-1">समस्त मुज़फ्फरपुर</div>
              </div>
            </div>
          </div>

          {/* Premium Image Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer atmospheric hairline border */}
              <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-[#1E1C1A]">
                {!imageError ? (
                  <img
                    src={introImage}
                    alt="Authentic Bihari Mutton Curry in traditional brass kansa bowl"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-80 sm:h-96 lg:h-[430px] object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-transform duration-500 group-hover:scale-102"
                  />
                ) : (
                  <div className="w-full h-80 sm:h-96 lg:h-[430px] bg-[#1E1C1A] flex items-center justify-center p-8 text-center text-[#C8C2B7]">
                    <span>Authentic Bihari Preparation</span>
                  </div>
                )}
                {/* Subtle dark gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                {/* Quiet caption inside image frame */}
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#FAF8F5]/90 flex justify-between items-end">
                  <div>
                    <div className="font-semibold text-sm">देसी सरसों तेल व खड़ा लहसुन</div>
                    <div className="text-[#C8C2B7]">Ayachi Gram Tradition</div>
                  </div>
                  <span className="text-[#C98A4B] text-[11px] uppercase tracking-wider font-medium">Bihari Rasoi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
