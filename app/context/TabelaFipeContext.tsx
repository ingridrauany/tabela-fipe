import React, { createContext, useReducer } from 'react';

export interface InputState {
  brand: string;
  model: string;
  year: string;
  [key: string]: string;
}

export const initialState: InputState = {
  brand: '',
  model: '',
  year: '',
};

export const INPUT_CHANGE = 'INPUT_CHANGE';

interface InputChangeAction {
  type: typeof INPUT_CHANGE;
  payload: {
    name: string;
    value: string;
  };
}

type InputAction = InputChangeAction;

export const tabelaFipeReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case INPUT_CHANGE:
      if (action.payload.name === 'brand') {
        return { ...state, brand: action.payload.value, model: '', year: '' };
      } else if (action.payload.name === 'model') {
        return { ...state, model: action.payload.value, year: '' };
      } else if (action.payload.name === 'year') {
        return { ...state, year: action.payload.value };
      } else {
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      }
    default:
      return state;
  }
};

interface TabelaFipeContextValue {
  inputValues: InputState;
  handleInputChange: (name: string, value: string) => void;
}

const defaultValue: TabelaFipeContextValue = {
  inputValues: {
    brand: '',
    model: '',
    year: '',
  },
  handleInputChange: () => {},
};

export const TabelaFipeContext = createContext<TabelaFipeContextValue>(defaultValue);

export const TabelaFipeProvider = ({ children }: { children: React.ReactNode }) => {
  const [inputValues, dispatch] = useReducer(tabelaFipeReducer, initialState);

  const handleInputChange = (name: string, value: string) => {
    dispatch({ type: INPUT_CHANGE, payload: { name, value } });
  };

  return <TabelaFipeContext.Provider value={{ inputValues, handleInputChange }}>{children}</TabelaFipeContext.Provider>;
};
