import { Model } from '@customTypes/Models';
import { fetchModels } from '@services/modelService';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useFetchModels = <T = Model>(brandId: string): UseQueryResult<T, Error> => {
  return useQuery({
    queryFn: async () => await fetchModels(brandId),
    queryKey: ['models', brandId],
    enabled: !!brandId,
  });
};
