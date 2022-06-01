export interface Stores {
    name: string;
    city: string;
    latitude: number;
    longitude: number;
    revenue: number;
}

export interface StoresContextData {
    stores: Stores[];
    setStores: () => void;
}
