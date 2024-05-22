import { Brand } from '../types/Brand';
import { axiosClient } from './axiosClient';

export const fetchBrands = async (): Promise<Brand[]> => {
  const { data } = await axiosClient.get(`carros/marcas`);
  return data;
};
