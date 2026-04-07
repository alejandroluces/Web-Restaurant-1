export interface Dish {
  id: string;
  nameES: string;
  nameEN: string;
  descriptionES: string;
  descriptionEN: string;
  detailedDescriptionES: string;
  detailedDescriptionEN: string;
  price: number;
  image: string;
  category: string;
  ingredients: string[];
  allergens?: string[];
  pairingES?: string;
  pairingEN?: string;
}

export interface Category {
  id: string;
  nameES: string;
  nameEN: string;
  dishes: Dish[];
}

export type Language = 'es' | 'en';