import { afterEach, describe, expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import { Model } from '../types/Models';
import { axiosClient } from './axiosClient';
import { fetchModels } from './modelService';

var axiosMock = new MockAdapter(axiosClient);

describe('fetchModels', () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it('should fetch models by brandId successfully', async () => {
    const mockModels: Model[] = [
      { codigo: 1, nome: 'Brand 1' },
      { codigo: 2, nome: 'Brand 2' },
    ];

    axiosMock.onGet().reply(200, mockModels);

    const expectedResult = await fetchModels('1');
    expect(expectedResult).toEqual(mockModels);
  });

  it('should handle errors', async () => {
    const errorMessage = 'Network Error';
    axiosMock.onGet('/carros/marcas/2/modelos').networkError();

    await expect(fetchModels('2')).rejects.toThrow(errorMessage);
  });
});
