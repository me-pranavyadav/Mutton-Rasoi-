import React from 'react';
import { Flame, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const features = [
    {
      icon: Flame,
      titleHindi: 'Authentic Bihar Taste',
      subtitleHindi: 'असली बिहारी स्वाद',
      description: 'बिहार के पारंपरिक स्वाद और मसालों का असली अनुभव।',
      note: 'खड़े मसाले · शुद्ध सरसों तेल'
    },
    {
      icon: Clock,
      titleHindi: 'Freshly Prepared',
      subtitleHindi: 'ताज़ा तैयारी',
      description: 'हर ऑर्डर के लिए ताज़ा और स्वादिष्ट तैयारी।',
      note: 'शून्य बासीपन · रोज़ की ताज़गी'
    },
    {
      icon: HeartHandshake,
      titleHindi: 'Made With Passion',
      subtitleHindi: 'स्नेह और समर्पण',
      description: 'स्वाद, गुणवत्ता और साफ-सफाई पर पूरा ध्यान।',
      note: 'पारिवारिक परंपरा · उच्च स्वच्छता'
    },
    {
      icon: ShieldCheck,
      titleHindi: 'Traditional Methods',
      subtitleHindi: 'पारंपरिक पकाने का अंदाज़',
      description: 'धीमी आँच पर मटन को उसके प्राकृतिक रसों में पकाने का प्राचीन तरीका।',
      note: 'आयाची ग्राम की धरोहर'
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-[#121110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C98A4B]">
            <span>OUR PROMISE</span>
            <span className="text-white/20">·</span>
            <span>गुणवत्ता और पहचान</span>
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF8F5]">
            Why Mutton Rasoi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#C8C2B7] max-w-xl mx-auto">
            आयाची ग्राम से आपके घर तक — हर कौर में असली मिट्टी की खुशबू और शुद्धता का वादा।
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleHindi}
                className="group relative bg-[#181615] p-7 rounded-lg border border-white/5 hover:border-[#C98A4B]/40 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Minimal Line Icon (No colorful cartoon badges) */}
                  <div className="w-11 h-11 rounded border border-white/10 flex items-center justify-center text-[#C98A4B] group-hover:border-[#C98A4B]/60 transition-colors mb-5 bg-[#121110]">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  {/* Clean unboxed index */}
                  <div className="text-[11px] font-mono tracking-wider text-[#C8C2B7]/60 mb-1">
                    0{idx + 1}
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg font-semibold text-[#FAF8F5] tracking-tight">
                    {feature.titleHindi}
                  </h3>
                  <div className="text-xs text-[#C98A4B] font-medium mt-0.5">
                    {feature.subtitleHindi}
                  </div>

                  {/* Feature Description */}
                  <p className="mt-3.5 text-sm text-[#C8C2B7] leading-relaxed">
                    “{feature.description}”
                  </p>
                </div>

                {/* Quiet unboxed metadata */}
                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-[#C8C2B7]/60 font-medium">
                  {feature.note}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
