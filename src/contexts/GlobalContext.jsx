import { createContext, useState } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(false); // Stato di caricamento

    // Funzione per eseguire la ricerca
    const search = async (query) => {
        setLoading(true); // Inizia il caricamento

        const apiKey = import.meta.env.VITE_API_KEY;
        const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=it_IT`;
        const seriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}&language=it_IT`;

        try {
            // Chiamata API per i film
            const movieResponse = await axios.get(movieUrl);
            setMovies(movieResponse.data.results);

            // Chiamata API per le serie
            const seriesResponse = await axios.get(seriesUrl);
            setSeries(seriesResponse.data.results);
        } catch (error) {
            console.error('Errore nella ricerca:', error);
        } finally {
            setLoading(false); // Ferma il caricamento
        }
    };

    return (
        <GlobalContext.Provider value={{ movies, setMovies, series, setSeries, search, loading }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
