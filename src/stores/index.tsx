import { createContext, useContext } from 'react';
import { useLanguage } from './languageStore';

interface StoresContextType {
    languageStore: {
        english: boolean,
        setEnglish: React.Dispatch<React.SetStateAction<boolean>>
    }
}

const storesCtx = createContext<StoresContextType | null>(null);

export function useStores() {
    return useContext(storesCtx);
}

export function StoresProvider({ children }: { children: React.ReactNode }) {

    const languageStore = useLanguage();

    return (
        <storesCtx.Provider value={
            {
                languageStore
            }}>
            {children}
        </storesCtx.Provider>
    );
}