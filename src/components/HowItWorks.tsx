import React from 'react';
import { Smartphone, UtensilsCrossed, Bike } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'ORDER',
      hindiTitle: 'ऑर्डर करें',
      desc: 'अपना पसंदीदा मटन चुनें और ऑर्डर करें।',
      subDesc: 'WhatsApp या कॉल के माध्यम से आसानी से अपना ऑर्डर बुक करें।',
      icon: Smartphone
    },
    {
      num: '02',
      title: 'PREPARE',
      hindiTitle: 'ताज़ा तैयारी',
      desc: 'आपके ऑर्डर के अनुसार ताज़ा तैयारी की जाती है।',
      subDesc: 'धीमी आँच और खड़े मसालों के साथ शुद्ध बिहारी शैली में पकाया जाता है।',
      icon: UtensilsCrossed
    },
    {
      num: '03',
      title: 'DELIVER',
      hindiTitle: 'सुरक्षित डिलीवरी',
      desc: 'गरमा-गरम स्वाद आपके पसंदीदा Muzaffarpur location तक।',
      subDesc: 'हाइजीनिक सीलबंद कंटेनर में समय पर डिलीवरी।',
      icon: Bike
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#151413] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C98A4B]">
            <span>ORDER PROCESS</span>
            <span className="text-white/20">·</span>
            <span>सरल 3 चरण</span>
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF8F5]">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#C8C2B7]">
            आयाची ग्राम की रसोई से आपकी मेज़ तक पहुँचने का आसान और व्यवस्थित तरीक़ा।
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative bg-[#181615] rounded-lg p-8 border border-white/10 hover:border-[#C98A4B]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-2xl font-bold tracking-wider text-[#C98A4B]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-[#FAF8F5] group-hover:text-[#C98A4B] transition-colors bg-[#121110]">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title and Hindi Title */}
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold tracking-wide text-[#FAF8F5]">
                      {step.title}
                    </h3>
                    <span className="text-xs text-[#C98A4B] font-medium">
                      ({step.hindiTitle})
                    </span>
                  </div>

                  {/* Main Quote / Desc from User Prompt */}
                  <p className="mt-4 text-base font-medium text-[#FAF8F5] leading-snug">
                    “{step.desc}”
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-[#C8C2B7] leading-relaxed">
                    {step.subDesc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-[#C8C2B7]/60 flex items-center justify-between">
                  <span>Step {idx + 1} of 3</span>
                  <span className="text-[#C98A4B]">Mutton Rasoi Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
