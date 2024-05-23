import { Vehicle } from '@customTypes/Vehicle';
import { fetchVehicle } from '@services/vehicleService';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const useFetchVechicle = <T = Vehicle>(
  brandId: string,
  modelId: string,
  yearId: string,
): UseQueryResult<T, Error> & { fetchData: () => void } => {
  const [enabled, setEnabled] = useState(false);

  const queryResult = useQuery({
    queryFn: async () => await fetchVehicle(brandId, modelId, yearId),
    queryKey: ['vechile', [brandId, modelId, yearId]],
    enabled: enabled && !!brandId && !!modelId && !!yearId,
  });

  const fetchData = () => {
    if (brandId && modelId && yearId) {
      setEnabled(true);
    }
  };

  return {
    ...queryResult,
    fetchData,
  };
};
