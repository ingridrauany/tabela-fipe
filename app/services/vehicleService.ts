import { axiosClient } from './axiosClient';

export const fetchVehicle = async (brandId: string, modelId: string, yearId: string): Promise<any> => {
  const { data } = await axiosClient.get(`carros/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`);
  return data;
};
