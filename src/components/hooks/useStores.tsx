import { createContext, useContext, useState } from "react";
import { StoresProviderProps } from "../../interfaces/props";
import { Stores, StoresContextData } from "../../interfaces/types";

import data from '../../data/data.json'


const StoresContext = createContext<StoresContextData>({
    stores: data.stores,
});

export function StoresProvider({ children }: StoresProviderProps) {
    const [stores, setStores] = useState<Stores[]>(data.stores);

    return (
       <StoresContext.Provider value={{ stores }}>
           {children}
       </StoresContext.Provider>   
    )
}

export const useStores = () => {
    const context = useContext(StoresContext);

    return context;
};