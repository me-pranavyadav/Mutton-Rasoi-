import { MenuItem, ServiceArea, Testimonial } from '../types';

export const BRAND_INFO = {
  name: 'MUTTON RASOI',
  taglineHindi: 'आज का खाना घर से आया है!',
  subheadlineHindi: 'आयाची ग्राम, बैरिया से निकला असली देसी मटन का स्वाद — अब मुज़फ्फरपुर के आपके दरवाज़े तक।',
  origin: 'Ayachi Gram, Baharia, Bihar',
  serviceCity: 'Muzaffarpur',
  phoneDisplay: '+91 XXXXX XXXXX',
  phoneTel: '+919876543210',
  whatsappDisplay: '+91 XXXXX XXXXX',
  whatsappNumber: '919876543210',
  defaultWhatsAppMessage: "Hello MUTTON RASOI, I would like to place an order. Please share today's menu and availability.",
  deliveryNote: '3 KM तक फ्री delivery',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'mutton-curry',
    name: 'MUTTON CURRY',
    hindiName: 'मटन करी',
    category: 'signature',
    description: 'देसी मसालों में धीमी आँच पर तैयार किया गया rich mutton curry.',
    priceNote: 'Price on Order',
    image: '/src/assets/images/dish_mutton_curry_1791109578062.jpg',
    tags: ['Slow Cooked', 'Traditional Gravy', 'Mustard Oil Base'],
    preparationTime: 'Slow-simmered',
    spiciness: 'Medium Spiced'
  },
  {
    id: 'mutton-masala',
    name: 'MUTTON MASALA',
    hindiName: 'मटन मसाला',
    category: 'signature',
    description: 'गाढ़ी मसालेदार ग्रेवी और authentic Bihar-style flavour.',
    priceNote: 'Price on Order',
    image: '/src/assets/images/dish_mutton_masala_1791109598094.jpg',
    tags: ['Thick Gravy', 'Bhuna Masala', 'Whole Spices'],
    preparationTime: 'Slow-roasted',
    spiciness: 'Rich & Bold'
  },
  {
    id: 'mutton-special',
    name: 'MUTTON SPECIAL',
    hindiName: 'मटन स्पेशल',
    category: 'signature',
    description: 'हमारी signature preparation — खास मसालों और traditional cooking style के साथ।',
    priceNote: 'Price on Order',
    image: '/src/assets/images/dish_mutton_handi_special_1791109611422.jpg',
    tags: ['Chef Signature', 'Earthen Pot / Ahuna Style', 'Secret Desi Blend'],
    preparationTime: 'Handi Cooked',
    spiciness: 'Authentic Desi'
  },
  {
    id: 'tawa-roti',
    name: 'Roti / Tawa Roti',
    hindiName: 'तवा रोटी',
    category: 'accompaniment',
    description: 'गरमा-गरम शुद्ध गेहूँ की मुलायम तवा रोटी, मटन ग्रेवी के साथ सर्वोत्तम।',
    priceNote: 'Price on Order',
    tags: ['Freshly Puffed', 'Whole Wheat']
  },
  {
    id: 'steamed-rice',
    name: 'Rice',
    hindiName: 'चावल',
    category: 'accompaniment',
    description: 'खुशबूदार बासमती चावल, जो गाढ़े देसी मटन के रस को पूरी तरह सोख ले।',
    priceNote: 'Price on Order',
    tags: ['Steamed Grain', 'Perfect Pairing']
  },
  {
    id: 'fresh-salad',
    name: 'Salad',
    hindiName: 'देसी सलाद',
    category: 'accompaniment',
    description: 'कटा हुआ लच्छा प्याज, हरी मिर्च और नींबू का ताज़ा देसी मिश्रण।',
    priceNote: 'Price on Order',
    tags: ['Crisp & Fresh', 'Lemon & Green Chili']
  },
  {
    id: 'special-chutney',
    name: 'Chutney',
    hindiName: 'चटनी',
    category: 'accompaniment',
    description: 'पारंपरिक सिलबट्टा स्टाइल लहसुन और पुदीना-धनिया की तीखी चटनी।',
    priceNote: 'Price on Order',
    tags: ['Silbatta Style', 'Spiced Herb']
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'muzaffarpur-city',
    name: 'Muzaffarpur City',
    hindiName: 'मुज़फ्फरपुर सिटी',
    zone: 'Central Commercial Hub',
    freeDeliveryEligible: true
  },
  {
    id: 'laxmi-chowk',
    name: 'Laxmi Chowk',
    hindiName: 'लक्ष्मी चौक',
    zone: 'Residential & Market Corridor',
    freeDeliveryEligible: true
  },
  {
    id: 'zeromile',
    name: 'Zeromile',
    hindiName: 'जीरोमाइल',
    zone: 'Key Transport & Business Junction',
    freeDeliveryEligible: true
  },
  {
    id: 'akharaghat',
    name: 'Akharaghat',
    hindiName: 'अखाड़ाघाट',
    zone: 'Historic & High-Density Hub',
    freeDeliveryEligible: true
  },
  {
    id: 'mithanpura',
    name: 'Mithanpura',
    hindiName: 'मिठनपुरा',
    zone: 'Prime Residential Colony',
    freeDeliveryEligible: false
  },
  {
    id: 'bhagwanpur',
    name: 'Bhagwanpur',
    hindiName: 'भगवानपुर',
    zone: 'Commercial & Institutional Hub',
    freeDeliveryEligible: false
  },
  {
    id: 'gobarsahi',
    name: 'Gobarsahi',
    hindiName: 'गोबरसही',
    zone: 'South Muzaffarpur Zone',
    freeDeliveryEligible: false
  },
  {
    id: 'bramhpura',
    name: 'Bramhpura',
    hindiName: 'ब्रह्मपुरा',
    zone: 'North Transit Corridor',
    freeDeliveryEligible: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Authentic taste और मसालों का balance शानदार है.',
    author: 'Demo Customer',
    location: 'Laxmi Chowk, Muzaffarpur',
    isDemo: true
  },
  {
    id: 'test-2',
    quote: 'गाँव वाले मटन का स्वाद शहर में मिलना अपने आप में खास है.',
    author: 'Demo Customer',
    location: 'Zeromile, Muzaffarpur',
    isDemo: true
  },
  {
    id: 'test-3',
    quote: 'Fresh, rich और बेहद satisfying.',
    author: 'Demo Customer',
    location: 'Akharaghat, Muzaffarpur',
    isDemo: true
  }
];

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || BRAND_INFO.defaultWhatsAppMessage);
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`;
}
