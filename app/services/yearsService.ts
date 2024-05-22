import { Year } from '@customTypes/Years';
import { axiosClient } from '@services/axiosClient';

export const fetchYears = async (brandId: string, modelId: string): Promise<Year[]> => {
  const { data } = await axiosClient.get(`carros/marcas/${brandId}/modelos/${modelId}/anos`);
  return data;
};
