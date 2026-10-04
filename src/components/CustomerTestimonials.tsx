import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/brandData';

export const CustomerTestimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#151413] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C98A4B]">
            <span>VOICES OF TASTE</span>
            <span className="text-white/20">·</span>
            <span>ग्राहक अनुभव</span>
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF8F5]">
            Customer Testimonials
          </h2>
          {/* Explicit Demo Content Notice to meet strict guidelines */}
          <p className="mt-2 text-xs text-[#C8C2B7]/70">
            [Sample / Demo Testimonials for Business Owner Presentation]
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#181615] rounded-lg p-7 border border-white/5 hover:border-white/15 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#C98A4B]/60 mb-4" />
                <p className="font-display text-lg sm:text-xl text-[#FAF8F5] leading-relaxed italic">
                  “{t.quote}”
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#EDE8DF]">
                    — {t.author}
                  </div>
                  <div className="text-xs text-[#C8C2B7]/60">
                    {t.location}
                  </div>
                </div>

                {/* Explicit Sample Content Badge in quiet clean typography */}
                <span className="text-[11px] text-[#C98A4B] font-mono tracking-wider">
                  Sample Feedback
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
