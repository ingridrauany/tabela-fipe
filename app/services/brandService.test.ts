import { afterEach, describe, expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import { Brand } from '../types/Brand';
import { axiosClient } from './axiosClient';
import { fetchBrands } from './brandService';

var axiosMock = new MockAdapter(axiosClient);

describe('fetchBrands', () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it('should fetch brands successfully', async () => {
    const mockBrands: Brand[] = [
      { codigo: '1', nome: 'Brand 1' },
      { codigo: '2', nome: 'Brand 2' },
    ];

    axiosMock.onGet().reply(200, mockBrands);

    const expectedResult = await fetchBrands();
    expect(expectedResult).toEqual(mockBrands);
  });

  it('should handle errors', async () => {
    const errorMessage = 'Network Error';
    axiosMock.onGet('/carros/marcas').networkError();

    await expect(fetchBrands()).rejects.toThrow(errorMessage);
  });
});
