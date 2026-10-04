/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandIntro } from './components/BrandIntro';
import { WhyUs } from './components/WhyUs';
import { SignatureMenu } from './components/SignatureMenu';
import { StoryOrigin } from './components/StoryOrigin';
import { HowItWorks } from './components/HowItWorks';
import { ServiceAreas } from './components/ServiceAreas';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { DemoNoticeBanner } from './components/DemoNoticeBanner';
import { BRAND_INFO, getWhatsAppUrl } from './data/brandData';

export default function App() {
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121110] text-[#EDE8DF] flex flex-col selection:bg-[#C98A4B] selection:text-black">
      {/* Presentation Demo Banner */}
      <DemoNoticeBanner />

      {/* Sticky 1-Row 3-Zone Navigation */}
      <Navbar onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onExploreMenu={() => {
          const el = document.getElementById('menu');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 2. Brand Introduction */}
        <BrandIntro />

        {/* 3. Why Mutton Rasoi */}
        <WhyUs />

        {/* 4. Signature Menu */}
        <SignatureMenu onSelectItemForOrder={() => setIsOrderDrawerOpen(true)} />

        {/* 5. The Story / Our Origin */}
        <StoryOrigin />

        {/* 6. How It Works */}
        <HowItWorks />

        {/* 7. Service Areas */}
        <ServiceAreas />

        {/* 8. Customer Testimonials (Sample/Demo) */}
        <CustomerTestimonials />

        {/* 9. Large Dark CTA Section */}
        <CtaSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Quick WhatsApp Order Composer Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
      />

      {/* Subtle Floating WhatsApp Action for Instant Access */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsOrderDrawerOpen(true)}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#181615] text-[#FAF8F5] border border-[#C98A4B]/40 hover:border-[#C98A4B] rounded-full text-xs font-semibold uppercase tracking-wider shadow-xl transition-all duration-150 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#C98A4B] animate-pulse" />
          <span>Quick Order</span>
        </button>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order directly on WhatsApp"
          className="w-13 h-13 rounded-full bg-[#C98A4B] hover:bg-[#D99B5C] active:bg-[#B27539] text-[#121110] flex items-center justify-center shadow-2xl transition-transform hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
