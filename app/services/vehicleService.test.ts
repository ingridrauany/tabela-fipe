import { Vehicle } from '@customTypes/Vehicle';
import { afterEach, describe, expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import { axiosClient } from './axiosClient';
import { fetchVehicle } from './vehicleService';

var axiosMock = new MockAdapter(axiosClient);

describe('fetchVehicle', () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it('should fetch the vehicle by brand, model and year successfully', async () => {
    const mockModels: Vehicle[] = [
      {
        TipoVeiculo: 1,
        Valor: 'R$ 104.933,00',
        Marca: 'VW - VolksWagen',
        Modelo: 'AMAROK High.CD 2.0 16V TDI 4x4 Dies. Aut',
        AnoModelo: 2014,
        Combustivel: 'Diesel',
        CodigoFipe: '005340-6',
        MesReferencia: 'maio de 2024',
        SiglaCombustivel: 'D',
      },
    ];

    axiosMock.onGet().reply(200, mockModels);

    const expectedResult = await fetchVehicle('1', '2', '3');
    expect(expectedResult).toEqual(mockModels);
  });

  it('should handle errors', async () => {
    const errorMessage = 'Network Error';
    axiosMock.onGet('carros/marcas/2/modelos/2/anos/3').networkError();

    await expect(fetchVehicle('2', '2', '3')).rejects.toThrow(errorMessage);
  });
});
