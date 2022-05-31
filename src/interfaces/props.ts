import { ReactNode } from "react";

export interface SearchProps {
    filter(value: string): void;
  }

export interface StoresProviderProps {
    children: ReactNode
}