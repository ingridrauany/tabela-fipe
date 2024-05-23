import { afterEach, describe, expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import { Year } from '../types/Years';
import { axiosClient } from './axiosClient';
import { fetchYears } from './yearsService';

var axiosMock = new MockAdapter(axiosClient);

describe('fetchYears', () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it('should fetch years by brand and model successfully', async () => {
    const mockModels: Year[] = [
      { codigo: '1', nome: 'Year 01' },
      { codigo: '2', nome: 'Year 01' },
    ];

    axiosMock.onGet().reply(200, mockModels);

    const expectedResult = await fetchYears('1', '2');
    expect(expectedResult).toEqual(mockModels);
  });

  it('should handle errors', async () => {
    const errorMessage = 'Network Error';
    axiosMock.onGet('carros/marcas/2/modelos/2/anos').networkError();

    await expect(fetchYears('2', '2')).rejects.toThrow(errorMessage);
  });
});
