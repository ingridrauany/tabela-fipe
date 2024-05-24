import { Typography } from '@mui/material';

export const ContainerHeader = () => {
  return (
    <>
      <Typography variant="h1" gutterBottom sx={{ color: '#424242', fontWeight: 700, textAlign: 'center' }}>
        Tabela Fipe
      </Typography>
      <Typography variant="h2" gutterBottom sx={{ color: '#424242', fontWeight: 700, textAlign: 'center' }}>
        Consulte o Valor de Veículo de Forma Gratuita
      </Typography>
    </>
  );
};
