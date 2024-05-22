'use client';

import { BrandsSelect, ModelsSelect, YearsSelect } from '@components/index';
import { TabelaFipeContext } from '@context/TabelaFipeContext';
import { Badge, CircularProgress, Paper, Typography } from '@mui/material';
import { useContext } from 'react';

export const ContentContainer = () => {
  const { loader } = useContext(TabelaFipeContext);

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

          padding: '40px',
        }}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={!loader ? <CircularProgress size={68} style={{ color: 'green' }} /> : undefined}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <BrandsSelect />
          <ModelsSelect />
          <YearsSelect />
        </Badge>
      </Paper>
    </>
  );
};
