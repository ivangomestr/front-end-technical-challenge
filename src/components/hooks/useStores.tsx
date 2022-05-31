import { useState, createContext, useContext, useEffect } from 'react';
import { Stores, StoresContextData } from '../../interfaces/types';
import { StoresProviderProps } from '../../interfaces/props';

import data from '../../data/data.json';

const StoresContext = createContext({} as StoresContextData);

export function StoresProvider({ children }: StoresProviderProps) {
  const [stores, setStores] = useState<Stores[]>(data.stores);

  return (
    <StoresContext.Provider value={{ stores, setStores }}>
      {children}
    </StoresContext.Provider>
  );
}

export const useStores = () => {
  const context = useContext(StoresContext);

  return context;
};
