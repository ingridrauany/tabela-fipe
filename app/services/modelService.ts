import { axiosClient } from './axiosClient';

export const fetchModels = async (brandId: string): Promise<any> => {
  const { data } = await axiosClient.get(`carros/marcas/${brandId}/modelos`);

  return data;
};
