import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export default function MovieCards() {
    const { movies, loading } = useContext(GlobalContext); // Ottieni movies dal contesto

    return (
        <div className="row">
            {loading ? (
                <p>Caricamento...</p>
            ) : movies.length > 0 ? (
                movies.map((movie) => (
                    <div key={movie.id} className="col-md-3 mb-4">
                        <div className="card">
                            {movie.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="card-img-top"
                                />
                            )}
                        </div>
                        <div className="card-body">
                            <h5>{movie.title}</h5>
                        </div>
                    </div>
                ))
            ) : (
                <p>Nessun film trovato</p>
            )}
        </div>
    );
}
