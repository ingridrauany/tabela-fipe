'use client';

import { useFetchYears } from '@/app/hooks/useYears';
import { TabelaFipeContext } from '@context/TabelaFipeContext';
import { Year } from '@customTypes/Years';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext } from 'react';

export const YearsSelect = () => {
  const { inputValues, setLoader, handleInputChange } = useContext(TabelaFipeContext);
  const { data, isLoading, isError, error } = useFetchYears(inputValues.brand, inputValues.model);

  return (
    <FormControl sx={{ minWidth: '300px' }}>
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
