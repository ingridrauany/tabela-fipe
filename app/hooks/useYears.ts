import { Year } from '@customTypes/Years';
import { fetchYears } from '@services/yearsService';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useFetchYears = <T = Year[]>(brandId: string, modelId: string): UseQueryResult<T, Error> => {
  return useQuery({
    queryFn: async () => await fetchYears(brandId, modelId),
    queryKey: ['years', [brandId, modelId]],
    enabled: !!brandId && !!modelId,
  });
};
