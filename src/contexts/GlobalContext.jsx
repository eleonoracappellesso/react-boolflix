import { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    return (
        <GlobalContext.Provider value={{ movies, setMovies, series, setSeries }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider }