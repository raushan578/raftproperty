
export interface PropertyDetails {
  id: string;
  title: string;
  price: string;
  location: string;
  coordinates: { lat: number; lng: number };
  images: string[];
  description: string;
  features: { icon: string; label: string }[];
  rating: number;
  reviewsCount: number;
  reviews: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  size: string;
  yearBuilt: number;
  contact: {
    name: string;
    phone: string;
    email: string;
    agency: string;
  };
  tags : string[]
}
