
import { fetchProperties } from '@/services/property.services';
import { useQuery } from '@tanstack/react-query';

export const useProperties = () => {
  return useQuery({
    queryKey: ['properties'],
    queryFn: fetchProperties,
  });
};
