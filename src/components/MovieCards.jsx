import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MovieCards() {
    const [movies, setMovies] = useState([]); // stato locale per i film

    const apiKey = import.meta.env.VITE_API_KEY;
    const imagePath = import.meta.env.VITE_IMG_PATH; // percorso base per le immagini dei film

    // chiamata API
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=it_IT`;

        axios
            .get(url) // richiesta per ottenere i film
            .then((response) => {
                setMovies(response.data.results); // aggiorno lo stato di movies con i dati dei film
            })
            .catch((error) => console.error('Errore nella ricerca:', error));
    }, [apiKey]);

    return (
        <div className="row">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <div key={movie.id} className="col-md-3 mb-4">
                        <div className="card">
                            {movie.poster_path && (
                                <img
                                    src={`${imagePath}${movie.poster_path}`}
                                    alt={movie.title}
                                    className="card-img-top"
                                />
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p>Nessun film</p>
            )}
        </div>
    );
};
