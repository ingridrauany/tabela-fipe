'use client';

import { useFetchYears } from '@/app/hooks/useYears';
import { Year } from '@/app/types/Years';
import { TabelaFipeContext } from '@context/TabelaFipeContext';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext } from 'react';

export const YearsSelect = () => {
  const { inputValues, handleInputChange } = useContext(TabelaFipeContext);
  const { data, isError, error } = useFetchYears(inputValues.brand, inputValues.model);

  if (isError) return <div>Ouve um erro ao buscar as Anos: {error.message}</div>;

  return (
    <FormControl sx={{ minWidth: '200px' }}>
      <InputLabel id="demo-simple-select-label">Ano</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Ano"
        onChange={(e) => handleInputChange('year', e.target.value)}
        value={inputValues.year}
        disabled={(inputValues.brand && inputValues.model) !== '' ? false : true}
      >
        {data &&
          data.map((year: Year) => {
            return (
              <MenuItem value={year.codigo} key={`${year.codigo}`}>
                {year.nome}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};
