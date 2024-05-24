import { Brand } from '@customTypes/Brand';
import { fetchBrands } from '@services/brandService';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useFetchBrands = <T = Brand[]>(): UseQueryResult<T, Error> => {
  return useQuery({
    queryFn: async () => await fetchBrands(),
    queryKey: ['brands'],
  });
};
