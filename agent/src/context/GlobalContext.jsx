// GlobalContext.js
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [results, setResults] = useState("");

    return (
        <GlobalContext.Provider value={{ results, setResults }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}
