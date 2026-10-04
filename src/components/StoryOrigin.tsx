import React, { useState } from 'react';
import { ArrowDown, Flame, PackageCheck, Truck, Home, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

export const StoryOrigin: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const villageImage = '/src/assets/images/traditional_chulha_cooking_1791109559796.jpg';

  const journeySteps = [
    {
      title: 'AYACHI GRAM, BAHARIA',
      hindiTitle: 'आयाची ग्राम, बहारिया',
      desc: 'प्राचीन मिट्टी, शुद्ध सरसों तेल और स्थानीय खड़े मसालों का उद्गम केंद्र।',
      icon: Home
    },
    {
      title: 'TRADITIONAL PREPARATION',
      hindiTitle: 'पारंपरिक धीमी आँच',
      desc: 'पारंपरिक हांडी में घंटों तक मटन के प्राकृतिक रसों के साथ धीमा सिम्मरिंग।',
      icon: Flame
    },
    {
      title: 'FRESHLY PACKED',
      hindiTitle: 'ताज़ा व सुरक्षित पैकिंग',
      desc: 'स्वाद, गरमाहट और शुद्धता को बरकरार रखने वाली हाइजीनिक पैकिंग।',
      icon: PackageCheck
    },
    {
      title: 'MUZAFFARPUR',
      hindiTitle: 'मुज़फ्फरपुर आगमन',
      desc: 'शहर के प्रमुख रिहायशी व व्यावसायिक क्षेत्रों तक सुरक्षित ट्रांजिट।',
      icon: MapPin
    },
    {
      title: 'DELIVERED TO YOU',
      hindiTitle: 'सीधे आपके दरवाज़े पर',
      desc: 'गरमा-गरम, प्रामाणिक गाँव का स्वाद — आज का खाना घर से आया है!',
      icon: Truck
    }
  ];

  return (
    <section id="story" className="py-20 sm:py-28 bg-[#121110] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C98A4B]">
            <span>OUR ROOTS</span>
            <span className="text-white/20">·</span>
            <span>गाँव की सोंधी खुशबू</span>
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F5]">
            “आयाची ग्राम से शुरू हुई कहानी।”
          </h2>
        </div>

        {/* Split Layout: Left Visual, Right Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Village & Traditional Cooking Visual */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#181615] shadow-2xl">
              {!imageError ? (
                <img
                  src={villageImage}
                  alt="Traditional cooking over mud chulha stove in Ayachi Gram Baharia"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center filter brightness-[0.88] contrast-[1.08]"
                />
              ) : (
                <div className="w-full h-[400px] sm:h-[480px] bg-[#181615] flex items-center justify-center p-8 text-center text-[#C8C2B7]">
                  <span>Traditional Village Slow Cooking Visual</span>
                </div>
              )}
              {/* Bottom Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5]">
                <div className="text-xs uppercase tracking-widest text-[#C98A4B] font-semibold">
                  Heritage Hearth · Baharia
                </div>
                <div className="text-sm sm:text-base font-medium mt-1">
                  मिट्टी का चूल्हा, देसी मसाले और पीढ़ियों पुराना पकाने का कौशल
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#181615] border border-white/5 text-xs text-[#C8C2B7] leading-relaxed">
              <span className="font-semibold text-[#FAF8F5]">रसोई का सिद्धांत:</span> हम कभी भी फ्रोजन मटन या रासायनिक ग्रेवी बेस का इस्तेमाल नहीं करते। हर batch ताज़ा तैयार होता है।
            </div>
          </div>

          {/* Right Column: Brand Story & Visual Journey */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#EDE8DF]/90 leading-relaxed font-normal">
              <p>
                बिहार के गाँव-देहात में जब मटन पकता है, तो उसकी खुशबू पूरे मुहल्ले में फैल जाती है। सरसों तेल का झाँझ, लहसुन की साबुत कलियाँ, और धीमी आँच पर धीरे-धीरे गलते हुए मटन का वह गहरा स्वाद — यह केवल खाना नहीं, एक उत्सव है।
              </p>
              <p className="text-sm sm:text-base text-[#C8C2B7]">
                <span className="text-[#FAF8F5] font-semibold">MUTTON RASOI</span> का संकल्प इसी पारंपरिक स्वाद को आधुनिक cloud-kitchen मॉडल के ज़रिये मुज़फ्फरपुर के घरों और दफ्तरों तक पहुँचाना है। हमारे कारीगर आयाची ग्राम, बहारिया की उसी देहाती विधि से हर ऑर्डर को तैयार करते हैं।
              </p>
              <p className="text-sm sm:text-base text-[#C8C2B7]">
                हमारा मानना है कि शहर की भागदौड़ में भी आपको गाँव जैसा शुद्ध और इत्मीनान से बना खाना मिलना चाहिए। इसीलिए हमारा वादा है: <span className="text-[#E09F5E] italic">“आज का खाना घर से आया है!”</span>
              </p>
            </div>

            {/* Visual Journey: Ayachi Gram to Muzaffarpur */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C98A4B] mb-5">
                The Journey of Flavor · स्वाद का सफ़र
              </div>

              <div className="space-y-3">
                {journeySteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === journeySteps.length - 1;
                  return (
                    <div key={step.title} className="relative">
                      <div className="flex items-start gap-4 p-3.5 rounded-lg bg-[#181615] border border-white/5 hover:border-white/15 transition-colors">
                        <div className="w-8 h-8 rounded border border-[#C98A4B]/40 flex items-center justify-center text-[#C98A4B] shrink-0 mt-0.5 bg-[#121110]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="text-xs font-bold tracking-wider text-[#FAF8F5]">
                              {step.title}
                            </span>
                            <span className="text-xs text-[#C98A4B] font-medium shrink-0">
                              {step.hindiTitle}
                            </span>
                          </div>
                          <p className="text-xs text-[#C8C2B7] mt-1 leading-normal">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Connector Arrow */}
                      {!isLast && (
                        <div className="flex justify-center my-1">
                          <ArrowDown className="w-3.5 h-3.5 text-[#C98A4B]/60" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
