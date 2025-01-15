import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true); // Stato di caricamento globale

    const apiKey = import.meta.env.VITE_API_KEY;

    // Funzione per ottenere tutti i film e le serie iniziali
    const fetchAllData = () => {
        setLoading(true);

        const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=it_IT`;
        const seriesUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=it_IT`;

        // Chiamata per ottenere i film
        axios.get(movieUrl)
            .then((movieResponse) => {
                setMovies(movieResponse.data.results);
            })
            .catch((error) => {
                console.error('Errore durante il caricamento dei film:', error);
            });

        // Chiamata per ottenere le serie
        axios.get(seriesUrl)
            .then((seriesResponse) => {
                setSeries(seriesResponse.data.results);
            })
            .catch((error) => {
                console.error('Errore durante il caricamento delle serie:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };


    // Funzione per eseguire la ricerca
    const search = (query) => {
        setLoading(true);

        if (!query) {
            fetchAllData()
            return
        }

        const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=it_IT`;
        const seriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}&language=it_IT`;

        // Chiamata per i film
        axios.get(movieUrl)
            .then((movieResponse) => {
                setMovies(movieResponse.data.results);
            })
            .catch((error) => {
                console.error('Errore durante la ricerca dei film:', error);
            });

        // Chiamata per le serie
        axios.get(seriesUrl)
            .then((seriesResponse) => {
                setSeries(seriesResponse.data.results);
            })
            .catch((error) => {
                console.error('Errore durante la ricerca delle serie:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };


    // Fetch iniziale per ottenere i dati
    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <GlobalContext.Provider value={{ movies, setMovies, series, setSeries, search, loading }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
