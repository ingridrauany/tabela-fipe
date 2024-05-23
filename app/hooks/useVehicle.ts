import { Vehicle } from '@customTypes/Vehicle';
import { fetchVehicle } from '@services/vehicleService';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useFetchVechicle = <T = Vehicle>(
  brandId: string,
  modelId: string,
  yearId: string,
): UseQueryResult<T, Error> => {
  return useQuery({
    queryFn: async () => await fetchVehicle(brandId, modelId, yearId),
    queryKey: ['vechile', [brandId, modelId, yearId]],
    enabled: !!brandId && !!modelId && !!yearId,
  });
};
