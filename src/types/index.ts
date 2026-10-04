export interface MenuItem {
  id: string;
  name: string;
  hindiName: string;
  category: 'signature' | 'accompaniment';
  description: string;
  priceNote: string;
  image?: string;
  tags?: string[];
  preparationTime?: string;
  spiciness?: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  hindiName: string;
  zone: string;
  freeDeliveryEligible: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  isDemo: true;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}
