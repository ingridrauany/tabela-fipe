'use client';
import { TabelaFipeContext } from '@context/TabelaFipeContext';
import { Brand } from '@customTypes/Brand';
import { useFetchBrands } from '@hooks/useBrands';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext } from 'react';

export const BrandsSelect = () => {
  const { data, isError, error } = useFetchBrands<Brand[]>();
  const { inputValues, handleInputChange } = useContext(TabelaFipeContext);

  if (isError) return <div>Ouve um erro ao buscar as Marcas: {error.message}</div>;

  return (
    <FormControl sx={{ minWidth: '300px' }}>
      <InputLabel id="demo-simple-select-label">Marca</InputLabel>
      <Select
        labelId="marca-label"
        id="marca-select"
        label="Marca"
        onChange={(e) => handleInputChange('brand', e.target.value)}
        value={inputValues.brand}
      >
        {data &&
          data.map((brand: Brand) => {
            return (
              <MenuItem value={brand.codigo} key={`${brand.codigo}`}>
                {brand.nome}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};
