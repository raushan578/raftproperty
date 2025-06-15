import { PropertyDetails } from "@/types/interface/DetailedProperty.interface";
import { atom } from "jotai";

export interface Property {
  id: string;
  image: string;
  title: string;
  price: string;
  location: string;
  details: string;
}

export const propertiesAtom = atom<Property[]>([
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    title: "Modern Downtown Apartment",
    price: "$2,500/month",
    location: "San Francisco, CA",
    details: "2 Bedrooms · 2 Bathrooms · Parking · Pool",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    title: "Luxury Beach House",
    price: "$5,000/month",
    location: "Malibu, CA",
    details: "4 Bedrooms · 3 Bathrooms · Beachfront · Private Pool",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    title: "Cozy Mountain Cabin",
    price: "$1,800/month",
    location: "Aspen, CO",
    details: "3 Bedrooms · 2 Bathrooms · Fireplace · Scenic View",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Spacious Family Home",
    price: "$3,200/month",
    location: "Austin, TX",
    details: "4 Bedrooms · 3 Bathrooms · Garage · Backyard",
  },
  {
    id: "5",
    image: "https://remington-realestate.com/_vercel/image?url=https:%2F%2Fdhvpbmbivx840.cloudfront.net%2Fproperties%2F9e7c5471-1021-4720-816a-3a548b5f6546%2Fconversions%2Fvila_a_ext_1_optimized-list_thumb.jpg&w=1536&q=100",
    title: "Stylish Loft",
    price: "$2,100/month",
    location: "Brooklyn, NY",
    details: "1 Bedroom · 1 Bathroom · Open Plan · Pet Friendly",
  },
  {
    id: "6",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuq9rbE-Slk5VcSuoaAzi6tH1ihPKQpfJVRhLOMOoMKx-zIXPKhZ118tsHRsyaXclzkc&usqp=CAU",
    title: "Modern Condo with City View",
    price: "$2,800/month",
    location: "Seattle, WA",
    details: "2 Bedrooms · 2 Bathrooms · Balcony · Gym Access",
  },
  {
    id: "7",
    image: "https://img.jamesedition.com/listing_images/2025/03/14/16/06/38/bfaa3589-4480-4876-b9c5-88f44bdd5a9c/je/507x312xc.jpg",
    title: "Suburban Retreat",
    price: "$2,400/month",
    location: "Orlando, FL",
    details: "3 Bedrooms · 2 Bathrooms · Garden · Garage",
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    title: "Urban Studio Apartment",
    price: "$1,500/month",
    location: "Chicago, IL",
    details: "Studio · 1 Bathroom · Central Location · Secure Entry",
  },
]);

export const propertiedDetailsAtom = atom<PropertyDetails[]>([
  {
    id: "1",
    title: "Modern Downtown Apartment",
    price: "$2,500/month",
    location: "San Francisco, CA",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    ],
    tags: ["Downtown", "Smart Home", "Luxury", "Tech Hub", "Transit Nearby", "Balcony", "Secure Entry"],
    description:
      "Luxury apartment in downtown SF with smart features, close to tech hubs and transit.",
    features: [
      { icon: "bed-king", label: "2 Bedrooms" },
      { icon: "bathtub", label: "2 Bathrooms" },
      { icon: "car-arrow-right", label: "Parking" },
      { icon: "pool", label: "Pool" },
    ],
    rating: 4.6,
    reviewsCount: 94,
    reviews: [
      {
        user: "Alice",
        rating: 5,
        comment: "Excellent stay!",
        date: "2024-10-05",
      },
    ],
    size: "1,100 sq ft",
    yearBuilt: 2018,
    contact: {
      name: "John Doe",
      phone: "+1 555-123-4567",
      email: "john@urbannest.com",
      agency: "UrbanNest Realty",
    },
  },
  {
    id: "2",
    title: "Luxury Beach House",
    price: "$5,000/month",
    location: "Malibu, CA",
    coordinates: { lat: 34.0259, lng: -118.7798 },
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
    ],
    tags: ["Beachfront", "Ocean View", "Private Pool", "Luxury", "Vacation Ready", "Outdoor Dining", "Modern"],
    description:
      "Private beachfront villa with panoramic ocean views and luxury interiors.",
    features: [
      { icon: "bed-king", label: "4 Bedrooms" },
      { icon: "bathtub", label: "3 Bathrooms" },
      { icon: "umbrella-beach-outline", label: "Beachfront" },
      { icon: "pool", label: "Private Pool" },
    ],
    rating: 4.9,
    reviewsCount: 211,
    reviews: [
      {
        user: "Sophie",
        rating: 5,
        comment: "Dream vacation home!",
        date: "2024-12-20",
      },
    ],
    size: "3,500 sq ft",
    yearBuilt: 2015,
    contact: {
      name: "Lisa Moore",
      phone: "+1 555-777-8888",
      email: "lisa@coastalhomes.com",
      agency: "Coastal Homes",
    },
  },
  {
    id: "3",
    title: "Cozy Mountain Cabin",
    price: "$1,800/month",
    location: "Aspen, CO",
    coordinates: { lat: 39.1911, lng: -106.8175 },
    images: [
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    ],
    tags: ["Mountain View", "Rustic", "Fireplace", "Nature Escape", "Private", "Wood Interiors", "Seasonal Rental"],
    description:
      "Rustic cabin retreat with mountain views, a fireplace, and natural charm.",
    features: [
      { icon: "bed-king", label: "3 Bedrooms" },
      { icon: "bathtub", label: "2 Bathrooms" },
      { icon: "fireplace", label: "Fireplace" },
      { icon: "landscape", label: "Scenic View" },
    ],
    rating: 4.4,
    reviewsCount: 67,
    reviews: [
      {
        user: "Mike",
        rating: 4,
        comment: "Perfect for winter escape.",
        date: "2024-11-10",
      },
    ],
    size: "1,500 sq ft",
    yearBuilt: 2009,
    contact: {
      name: "Robert Blake",
      phone: "+1 555-987-1234",
      email: "robert@aspenhomes.com",
      agency: "Aspen Realty",
    },
  },
  {
    id: "4",
    title: "Spacious Family Home",
    price: "$3,200/month",
    location: "Austin, TX",
    coordinates: { lat: 30.2672, lng: -97.7431 },
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c"],
    tags: ["Suburban", "Backyard", "Garage", "Family Friendly", "Quiet Area", "Schools Nearby", "Large Kitchen"],
    description:
      "Ideal suburban family house with backyard, garage, and space for kids.",
    features: [
      { icon: "bed-king", label: "4 Bedrooms" },
      { icon: "bathtub", label: "3 Bathrooms" },
      { icon: "garage", label: "Garage" },
      { icon: "yard", label: "Backyard" },
    ],
    rating: 4.5,
    reviewsCount: 80,
    reviews: [
      {
        user: "Janet",
        rating: 5,
        comment: "Our family loved it here.",
        date: "2024-08-12",
      },
    ],
    size: "2,800 sq ft",
    yearBuilt: 2012,
    contact: {
      name: "Rachel Smith",
      phone: "+1 555-654-7890",
      email: "rachel@texasrealty.com",
      agency: "Texas Realty",
    },
  },
  {
    id: "5",
    title: "Stylish Loft",
    price: "$2,100/month",
    location: "Brooklyn, NY",
    coordinates: { lat: 40.6782, lng: -73.9442 },
    images: ["https://remington-realestate.com/_vercel/image?url=https:%2F%2Fdhvpbmbivx840.cloudfront.net%2Fproperties%2F9e7c5471-1021-4720-816a-3a548b5f6546%2Fconversions%2Fvila_a_ext_1_optimized-list_thumb.jpg&w=1536&q=100"],
    tags: ["Loft", "Industrial", "Pet Friendly", "City Life", "Creative Space", "High Ceilings", "Modern"],
    description:
      "Chic loft with industrial aesthetics, open plan design, and pet friendly.",
    features: [
      { icon: "bed-king", label: "1 Bedroom" },
      { icon: "bathtub", label: "1 Bathroom" },
      { icon: "grid_view", label: "Open Plan" },
      { icon: "pets", label: "Pet Friendly" },
    ],
    rating: 4.7,
    reviewsCount: 45,
    reviews: [
      {
        user: "Kevin",
        rating: 5,
        comment: "Loved the decor and vibe.",
        date: "2025-01-03",
      },
    ],
    size: "850 sq ft",
    yearBuilt: 2016,
    contact: {
      name: "Monica Lee",
      phone: "+1 555-234-5678",
      email: "monica@brooklynspace.com",
      agency: "Brooklyn Space",
    },
  },
  {
    id: "6",
    title: "Modern Condo with City View",
    price: "$2,800/month",
    location: "Seattle, WA",
    coordinates: { lat: 47.6062, lng: -122.3321 },
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuq9rbE-Slk5VcSuoaAzi6tH1ihPKQpfJVRhLOMOoMKx-zIXPKhZ118tsHRsyaXclzkc&usqp=CAU"],
    tags: ["Condo", "City View", "Gym Access", "Modern", "Balcony", "Secure Entry", "Urban Living"],
    description:
      "Condo with skyline views, balcony, and access to gym & wellness amenities.",
    features: [
      { icon: "bed-king", label: "2 Bedrooms" },
      { icon: "bathtub", label: "2 Bathrooms" },
      { icon: "balcony", label: "Balcony" },
      { icon: "fitness_center", label: "Gym Access" },
    ],
    rating: 4.8,
    reviewsCount: 52,
    reviews: [
      {
        user: "Ava",
        rating: 5,
        comment: "Modern & peaceful.",
        date: "2024-07-21",
      },
    ],
    size: "1,200 sq ft",
    yearBuilt: 2020,
    contact: {
      name: "David Wang",
      phone: "+1 555-321-7654",
      email: "david@cityhomes.com",
      agency: "CityHomes Seattle",
    },
  },
  {
    id: "7",
    title: "Suburban Retreat",
    price: "$2,400/month",
    location: "Orlando, FL",
    coordinates: { lat: 28.5383, lng: -81.3792 },
    images: ["https://img.jamesedition.com/listing_images/2025/03/14/16/06/38/bfaa3589-4480-4876-b9c5-88f44bdd5a9c/je/507x312xc.jpg"],
    tags: ["Garden", "Quiet", "Family Area", "Garage", "Safe Neighborhood", "Affordable", "Sunlight"],
    description:
      "Quiet retreat with lush garden, perfect for relaxed family living.",
    features: [
      { icon: "bed-king", label: "3 Bedrooms" },
      { icon: "bathtub", label: "2 Bathrooms" },
      { icon: "park", label: "Garden" },
      { icon: "garage", label: "Garage" },
    ],
    rating: 4.3,
    reviewsCount: 40,
    reviews: [
      {
        user: "Daniel",
        rating: 4,
        comment: "Comfortable and green.",
        date: "2025-03-02",
      },
    ],
    size: "1,700 sq ft",
    yearBuilt: 2010,
    contact: {
      name: "Emma Garcia",
      phone: "+1 555-112-3344",
      email: "emma@flhomes.com",
      agency: "Florida Homes",
    },
  },
  {
    id: "8",
    title: "Urban Studio Apartment",
    price: "$1,500/month",
    location: "Chicago, IL",
    coordinates: { lat: 41.8781, lng: -87.6298 },
    images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811"],
    tags: ["Studio", "Compact", "City Center", "Secure Entry", "Work Friendly", "Affordable", "Minimalist"],
    description:
      "Compact studio in city center, ideal for solo professionals or students.",
    features: [
      { icon: "bed", label: "Studio" },
      { icon: "bathtub", label: "1 Bathroom" },
      { icon: "location-city", label: "Central Location" },
      { icon: "lock", label: "Secure Entry" },
    ],
    rating: 4.2,
    reviewsCount: 23,
    reviews: [
      {
        user: "Nina",
        rating: 4,
        comment: "Perfect for remote work.",
        date: "2025-04-05",
      },
    ],
    size: "600 sq ft",
    yearBuilt: 2014,
    contact: {
      name: "Chris Allen",
      phone: "+1 555-776-9988",
      email: "chris@chicagoliving.com",
      agency: "Chicago Living Co.",
    },
  },
]);
