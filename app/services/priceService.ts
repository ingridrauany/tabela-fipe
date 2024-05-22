import { axiosClient } from './axiosClient';

export const fetchPrice = async (brandId: string, yearId: string): Promise<any> => {
  const { data } = await axiosClient.get(`carros/marcas/${brandId}/modelos/${yearId}/anos`);
  return data;
};
