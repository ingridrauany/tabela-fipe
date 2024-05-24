'use client';

import { TabelaFipeContext } from '@/app/context/TabelaFipeContext';
import { useFetchVechicle } from '@/app/hooks/useVehicle';
import { BrandsSelect, ContainerHeader, ModelsSelect, VehiclePrice, YearsSelect } from '@components/index';
import { Button, Paper } from '@mui/material';
import { useContext } from 'react';

export const ContentContainer = () => {
  const { inputValues } = useContext(TabelaFipeContext);
  const { data, fetchData } = useFetchVechicle(inputValues.brand, inputValues.model, inputValues.year);

  return (
    <>
      <ContainerHeader />
      <Paper
        elevation={1}
        sx={{
          minWidth: '40%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          padding: '40px',
        }}
      >
        <BrandsSelect />
        <ModelsSelect />
        <YearsSelect />
        <Button
          variant="contained"
          disabled={!!inputValues.brand && !!inputValues.model && !!inputValues.year ? false : true}
          sx={{
            textTransform: 'none',
            backgroundColor: '#5d00bf',
          }}
          onClick={() => fetchData()}
        >
          Consultar Preço
        </Button>
      </Paper>
      {data && <VehiclePrice vehicle={data} />}
    </>
  );
};
