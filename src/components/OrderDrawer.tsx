import React, { useState } from 'react';
import { X, MessageCircle, Phone, Plus, Minus, Check, MapPin } from 'lucide-react';
import { MENU_ITEMS, SERVICE_AREAS, BRAND_INFO, getWhatsAppUrl } from '../data/brandData';
import { MenuItem } from '../types';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({ isOpen, onClose }) => {
  const [selectedQuantities, setSelectedQuantities] = useState<Record<string, number>>({
    'mutton-curry': 1,
    'tawa-roti': 4,
  });
  const [selectedArea, setSelectedArea] = useState<string>('Muzaffarpur City');
  const [specialInstructions, setSpecialInstructions] = useState<string>('');

  if (!isOpen) return null;

  const updateQuantity = (itemId: string, delta: number) => {
    setSelectedQuantities((prev) => {
      const current = prev[itemId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const getComposedWhatsAppMessage = () => {
    const itemsList = Object.entries(selectedQuantities)
      .map(([id, qty]) => {
        const item = MENU_ITEMS.find((m) => m.id === id);
        return item ? `• ${item.name} (${item.hindiName}) x ${qty}` : null;
      })
      .filter(Boolean)
      .join('\n');

    let msg = `Hello MUTTON RASOI,\nI would like to place an order from Ayachi Gram cloud kitchen:\n\n`;
    if (itemsList) {
      msg += `Items:\n${itemsList}\n\n`;
    } else {
      msg += `Items: Today's Special Mutton\n\n`;
    }
    msg += `Delivery Area: ${selectedArea}, Muzaffarpur\n`;
    if (specialInstructions.trim()) {
      msg += `Notes: ${specialInstructions.trim()}\n`;
    }
    msg += `\nPlease confirm availability and total price.`;
    return msg;
  };

  const handleSendOrder = () => {
    const text = getComposedWhatsAppMessage();
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#151413] border-l border-white/10 shadow-2xl flex flex-col justify-between text-[#EDE8DF]">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C98A4B]">
                Ayachi Gram to Muzaffarpur
              </div>
              <h2 className="font-display text-xl font-bold text-[#FAF8F5]">
                Quick WhatsApp Order
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#C8C2B7] hover:text-[#FAF8F5] rounded-full hover:bg-white/5 transition-colors"
              aria-label="Close Order Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Tagline Banner */}
            <div className="p-3.5 rounded-lg bg-[#181615] border border-white/5 text-xs text-[#C8C2B7]">
              <span className="font-display text-sm text-[#C98A4B] font-semibold italic">
                “{BRAND_INFO.taglineHindi}”
              </span>
              <p className="mt-1">
                चुनें अपने पसंदीदा व्यंजन और सीधे WhatsApp पर त्वरित पुष्टि प्राप्त करें।
              </p>
            </div>

            {/* Step 1: Select Dishes */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] mb-3">
                1. Select Items (चुनें व्यंजन)
              </label>
              <div className="space-y-2.5">
                {MENU_ITEMS.map((item) => {
                  const qty = selectedQuantities[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className={`p-3 rounded-lg border transition-all flex items-center justify-between ${
                        qty > 0
                          ? 'bg-[#1E1C1A] border-[#C98A4B]/50'
                          : 'bg-[#181615] border-white/5'
                      }`}
                    >
                      <div className="pr-3">
                        <div className="text-sm font-medium text-[#FAF8F5] flex items-center gap-1.5">
                          <span>{item.name}</span>
                          <span className="text-xs text-[#C98A4B]">({item.hindiName})</span>
                        </div>
                        <div className="text-[11px] text-[#C8C2B7]/70">
                          {item.priceNote}
                        </div>
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center gap-2">
                        {qty > 0 && (
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 rounded border border-white/20 flex items-center justify-center text-[#C8C2B7] hover:text-[#FAF8F5] hover:bg-white/5"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                        )}
                        <span className="text-xs font-mono font-bold w-5 text-center text-[#FAF8F5]">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded bg-[#C98A4B] text-[#121110] flex items-center justify-center font-bold hover:bg-[#D99B5C]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Delivery Area in Muzaffarpur */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C98A4B]" />
                <span>2. Delivery Location (मुज़फ्फरपुर क्षेत्र)</span>
              </label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full p-2.5 bg-[#181615] border border-white/10 rounded text-xs sm:text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C98A4B]"
              >
                {SERVICE_AREAS.map((area) => (
                  <option key={area.id} value={area.name}>
                    {area.name} ({area.hindiName}) {area.freeDeliveryEligible ? '— Free Delivery' : ''}
                  </option>
                ))}
                <option value="Other Area in Muzaffarpur">Other Area in Muzaffarpur</option>
              </select>
            </div>

            {/* Step 3: Special Notes */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] mb-2">
                3. Special Preference (मसाला या निर्देश)
              </label>
              <input
                type="text"
                placeholder="e.g. Medium spice, extra garlic pod, lunch timing..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full p-2.5 bg-[#181615] border border-white/10 rounded text-xs text-[#FAF8F5] placeholder-[#C8C2B7]/50 focus:outline-none focus:border-[#C98A4B]"
              />
            </div>

            {/* Message Preview */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C8C2B7]/60 mb-1.5">
                WhatsApp Message Preview
              </div>
              <div className="p-3 bg-[#121110] rounded border border-white/10 text-[11px] font-mono text-[#C8C2B7] whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto">
                {getComposedWhatsAppMessage()}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10 bg-[#181615] space-y-3">
            <button
              type="button"
              onClick={handleSendOrder}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#121110] bg-[#C98A4B] hover:bg-[#D99B5C] active:bg-[#B27539] rounded transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Order on WhatsApp</span>
            </button>

            <div className="flex items-center justify-between text-xs text-[#C8C2B7]">
              <span>Prefer phone call?</span>
              <a
                href={`tel:${BRAND_INFO.phoneTel}`}
                className="text-[#FAF8F5] hover:text-[#C98A4B] flex items-center gap-1 font-medium"
              >
                <Phone className="w-3 h-3 text-[#C98A4B]" />
                <span>Call: {BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
