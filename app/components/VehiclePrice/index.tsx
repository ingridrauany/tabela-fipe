import { Vehicle } from '@/app/types/Vehicle';
import { Box, Chip, Typography } from '@mui/material';

export const VehiclePrice = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#dcf5f2',
        width: '100%',
        padding: '20px',
        marginTop: '20px',
        gap: '15px',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: '#424242', textAlign: 'center', fontWeight: 600 }}>
        Tabela Fipe Preço: {vehicle.Marca} {vehicle.Modelo} {vehicle.AnoModelo}
      </Typography>
      <Chip
        label={vehicle.Valor}
        sx={{ backgroundColor: '#00a38c', color: '#fff', fontWeight: 600, fontSize: '1.5rem' }}
      />
      <Typography variant="caption" sx={{ display: 'block', color: '#848797' }} gutterBottom>
        Este é o preço de compra do veículo
      </Typography>
    </Box>
  );
};
