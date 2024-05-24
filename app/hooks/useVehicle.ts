import { Vehicle } from '@customTypes/Vehicle';
import { fetchVehicle } from '@services/vehicleService';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

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
    refetchOnWindowFocus: false,
  });

  const fetchData = () => {
    setEnabled(true);
  };

  useEffect(() => {
    if (queryResult.isSuccess || queryResult.isError) {
      setEnabled(false);
    }
  }, [queryResult.isSuccess, queryResult.isError]);

  return {
    ...queryResult,
    fetchData,
  };
};
