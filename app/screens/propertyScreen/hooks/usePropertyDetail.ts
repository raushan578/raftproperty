import { propertiedDetailsAtom } from "@/lib/propertiesAtom";
import { PropertyDetails } from "@/types/interface/DetailedProperty.interface";
import { useAtom } from "jotai";

export const usePropertyById = (id: string): PropertyDetails | undefined => {
  const [properties] = useAtom(propertiedDetailsAtom);
  return properties.find((property) => property?.id === id);
};