import { Model } from '../types/Models';
import { axiosClient } from './axiosClient';

export const fetchModels = async (brandId: string): Promise<Model[]> => {
  const { data } = await axiosClient.get(`carros/marcas/${brandId}/modelos`);

  return data;
};
