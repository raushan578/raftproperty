import { Property } from "@/lib/propertiesAtom";


export const filterProperties = (properties: Property[], searchText: string): Property[] => {
  if (!searchText.trim()) return properties;

  const text = searchText.toLowerCase();

  return properties.filter((property) => {
    return (
      property.title.toLowerCase().includes(text) ||
      property.details.toLowerCase().includes(text) ||
      property.location.toLowerCase().includes(text)
    );
  });
};
