import React, { useState } from 'react';
import { MessageCircle, Check, ArrowRight, Utensils, Info } from 'lucide-react';
import { MENU_ITEMS, getWhatsAppUrl } from '../data/brandData';
import { MenuItem } from '../types';

interface SignatureMenuProps {
  onSelectItemForOrder?: (item: MenuItem) => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({ onSelectItemForOrder }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'signature' | 'accompaniments'>('all');
  const [showFullMenu, setShowFullMenu] = useState(false);

  const signatureDishes = MENU_ITEMS.filter((item) => item.category === 'signature');
  const accompaniments = MENU_ITEMS.filter((item) => item.category === 'accompaniment');

  const toggleItemSelection = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const getCustomOrderWhatsAppUrl = () => {
    if (selectedItems.length === 0) {
      return getWhatsAppUrl();
    }
    const itemNames = selectedItems
      .map((id) => {
        const found = MENU_ITEMS.find((m) => m.id === id);
        return found ? found.name : id;
      })
      .join(', ');
    const msg = `Hello MUTTON RASOI, I would like to order: ${itemNames}. Please share today's availability and price.`;
    return getWhatsAppUrl(msg);
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#151413] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C98A4B]">
              <span>AUTHENTIC RECIPES</span>
              <span className="text-white/20">·</span>
              <span>पारंपरिक रसोई</span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F5]">
              Signature Menu
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#C8C2B7] max-w-xl">
              आयाची ग्राम की आंच पर बने पारंपरिक मटन व्यंजन। ताज़गी और शुद्ध देसी स्वाद की गारंटी।
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#1E1C1A] rounded-md border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#C98A4B] text-[#121110] font-semibold'
                  : 'text-[#C8C2B7] hover:text-[#FAF8F5]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setActiveTab('signature')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeTab === 'signature'
                  ? 'bg-[#C98A4B] text-[#121110] font-semibold'
                  : 'text-[#C8C2B7] hover:text-[#FAF8F5]'
              }`}
            >
              Signature Mutton
            </button>
            <button
              onClick={() => setActiveTab('accompaniments')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeTab === 'accompaniments'
                  ? 'bg-[#C98A4B] text-[#121110] font-semibold'
                  : 'text-[#C8C2B7] hover:text-[#FAF8F5]'
              }`}
            >
              Roti & Sides
            </button>
          </div>
        </div>

        {/* 3 SIGNATURE MUTTON DISHES (LARGE FOOD CARDS) */}
        {(activeTab === 'all' || activeTab === 'signature') && (
          <div className="mb-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {signatureDishes.map((dish) => {
                const isSelected = selectedItems.includes(dish.id);
                return (
                  <div
                    key={dish.id}
                    className={`group relative bg-[#181615] rounded-lg overflow-hidden border transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#C98A4B] ring-1 ring-[#C98A4B]'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      {/* Dish Image (65-70% visual focus) */}
                      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#121110]">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.06] transition-transform duration-500 group-hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#181615] via-transparent to-transparent opacity-90" />

                        {/* Quiet top unboxed metadata */}
                        <div className="absolute top-3.5 left-4 right-4 flex justify-between items-center text-[11px] text-white/90">
                          <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-[#C98A4B] font-medium tracking-wide">
                            {dish.preparationTime}
                          </span>
                          <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-white/80">
                            {dish.spiciness}
                          </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6">
                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAF8F5] tracking-tight">
                            {dish.name}
                          </h3>
                          <span className="text-xs text-[#C98A4B] font-medium shrink-0">
                            {dish.hindiName}
                          </span>
                        </div>

                        {/* Tagline / Description */}
                        <p className="mt-3 text-sm text-[#C8C2B7] leading-relaxed">
                          “{dish.description}”
                        </p>

                        {/* Quiet text tags separated by dots */}
                        {dish.tags && (
                          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#C8C2B7]/70">
                            {dish.tags.map((tag, i) => (
                              <React.Fragment key={tag}>
                                <span>{tag}</span>
                                {i < dish.tags!.length - 1 && <span aria-hidden="true">·</span>}
                              </React.Fragment>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action / Price Baselines */}
                    <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-[#C8C2B7]/60">Price</div>
                        <div className="text-sm font-medium text-[#FAF8F5] tabular-nums">
                          {dish.priceNote}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => toggleItemSelection(dish.id)}
                          className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-[#C98A4B] border-[#C98A4B] text-[#121110]'
                              : 'border-white/20 text-[#FAF8F5] hover:bg-white/5'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Selected</span>
                            </>
                          ) : (
                            <span>+ Add to WhatsApp</span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ACCOMPANIMENTS (ROTI, RICE, SALAD, CHUTNEY) */}
        {(activeTab === 'all' || activeTab === 'accompaniments') && (
          <div className="mt-6 pt-10 border-t border-white/10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#FAF8F5]">
                  Accompaniments & Sides
                </h3>
                <p className="text-xs sm:text-sm text-[#C8C2B7]">
                  मटन के साथ संपूर्ण भोजन के लिए शुद्ध और ताज़ा साइड्स
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {accompaniments.map((item) => {
                const isSelected = selectedItems.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className={`bg-[#181615] p-5 rounded-lg border transition-all duration-150 flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#C98A4B] bg-[#1E1C1A]'
                        : 'border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div>
                      <div className="flex items-baseline justify-between">
                        <h4 className="font-medium text-[#FAF8F5] text-base">{item.name}</h4>
                        <span className="text-xs text-[#C98A4B]">{item.hindiName}</span>
                      </div>
                      <p className="mt-2 text-xs text-[#C8C2B7] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs text-[#C8C2B7]/70 tabular-nums">{item.priceNote}</span>
                      <button
                        type="button"
                        onClick={() => toggleItemSelection(item.id)}
                        className={`text-xs px-2.5 py-1 rounded border transition-colors ${
                          isSelected
                            ? 'bg-[#C98A4B] text-[#121110] border-[#C98A4B] font-medium'
                            : 'text-[#C8C2B7] border-white/15 hover:border-white/30'
                        }`}
                      >
                        {isSelected ? '✓ Added' : '+ Add'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Items Floating Drawer / Order Trigger Bar */}
        {selectedItems.length > 0 && (
          <div className="mt-10 p-4 rounded-lg bg-[#1E1C1A] border border-[#C98A4B]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C98A4B] text-[#121110] flex items-center justify-center font-bold text-xs">
                {selectedItems.length}
              </div>
              <div className="text-xs sm:text-sm text-[#FAF8F5]">
                <span className="font-semibold">Selected items for order inquiry:</span>{' '}
                <span className="text-[#C8C2B7]">
                  {selectedItems
                    .map((id) => MENU_ITEMS.find((m) => m.id === id)?.name)
                    .filter(Boolean)
                    .join(', ')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setSelectedItems([])}
                className="text-xs text-[#C8C2B7] hover:text-[#FAF8F5] px-2 py-1"
              >
                Clear
              </button>
              <a
                href={getCustomOrderWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#121110] bg-[#C98A4B] hover:bg-[#D99B5C] rounded transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* View Full Menu CTA as requested */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl("Hello MUTTON RASOI, please share your complete full menu and today's rates.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-wider text-[#FAF8F5] border border-white/20 hover:border-[#C98A4B] hover:bg-white/5 rounded transition-colors"
          >
            <span>View Full Menu & Daily Rates on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C98A4B]" />
          </a>
          <p className="mt-2 text-xs text-[#C8C2B7]/60">
            *ताज़ी तैयारी के कारण सीमित मात्रा उपलब्ध रहती है। पूर्व-ऑर्डर की सलाह दी जाती है।
          </p>
        </div>
      </div>
    </section>
  );
};
