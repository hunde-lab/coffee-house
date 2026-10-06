export type MenuCategory = 
  | 'ALL' 
  | 'ESPRESSO' 
  | 'MILK COFFEE' 
  | 'ETHIOPIAN COFFEE' 
  | 'COLD COFFEE' 
  | 'TEA & OTHER' 
  | 'FOOD';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'ALL'>;
  description: string;
  price: number;
  dietary?: ('Vegan' | 'Gluten-Free' | 'Signature' | 'Single-Origin' | 'Vegetarian')[];
  image?: string;
  isPopular?: boolean;
}

export interface CoffeeOrigin {
  id: string;
  name: string;
  region: string;
  tastingNotes: string[];
  notesSummary: string;
  roastLevel: 'Light' | 'Light-Medium' | 'Medium' | 'Medium-Dark';
  elevation: string;
  process: 'Washed' | 'Natural' | 'Honey' | 'Natural (Sun-Dried)' | 'Washed & Natural';
  brewingRecommendation: string;
  description: string;
  flavorScores: {
    acidity: number;
    sweetness: number;
    body: number;
    aroma: number;
  };
  image: string;
}

export interface CraftFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  options?: string;
  type: 'drink' | 'food' | 'beans';
}

export interface StoryPhase {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
