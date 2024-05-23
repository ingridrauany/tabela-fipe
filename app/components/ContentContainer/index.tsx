'use client';

import { TabelaFipeContext } from '@/app/context/TabelaFipeContext';
import { useFetchVechicle } from '@/app/hooks/useVehicle';
import { BrandsSelect, ModelsSelect, YearsSelect } from '@components/index';
import { Button, Paper, Typography } from '@mui/material';
import { useContext } from 'react';

export const ContentContainer = () => {
  const { inputValues } = useContext(TabelaFipeContext);
  const { data, loading, error, fetchData } = useFetchVechicle(inputValues.brand, inputValues.model, inputValues.year);

  return (
    <>
      <Typography variant="h1" gutterBottom color={'#424242'} fontWeight={600}>
        Tabela Fipe
      </Typography>
      <Typography variant="h2" gutterBottom color={'#424242'} fontWeight={600}>
        Consulte o Valor de Veículo de Forma Gratuita
      </Typography>
      <Paper
        elevation={1}
        sx={{
          width: '40%',
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
          disabled={inputValues.brand !== '' && inputValues.model !== '' && inputValues.year !== '' ? false : true}
          sx={{
            textTransform: 'none',
            backgroundColor: '#5d00bf',
          }}
          onClick={fetchData}
        >
          Consultar Preço
        </Button>

        {data && (
          <Typography variant="h3" gutterBottom color={'#424242'}>
            {data?.CodigoFipe}
          </Typography>
        )}
      </Paper>
    </>
  );
};
