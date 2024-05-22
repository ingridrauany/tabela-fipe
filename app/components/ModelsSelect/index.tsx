'use client';

import { useFetchModels } from '@/app/hooks/useModels';
import { TabelaFipeContext } from '@context/TabelaFipeContext';
import { Model } from '@customTypes/Models';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext } from 'react';

export const ModelsSelect = () => {
  const { inputValues, setLoader, handleInputChange } = useContext(TabelaFipeContext);
  const { data } = useFetchModels(inputValues.brand);

  return (
    <FormControl sx={{ minWidth: '300px' }}>
      <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Modelo"
        onChange={(e) => handleInputChange('model', e.target.value)}
        value={inputValues.model}
        disabled={inputValues.brand !== '' ? false : true}
      >
        {data &&
          data.modelos.map((model: Model) => {
            return (
              <MenuItem value={model.codigo} key={`${model.codigo}`}>
                {model.nome}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};