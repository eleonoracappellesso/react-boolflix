import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import Card from './Card';

const flags = ["de", "en", "es", "it", "fr"];

export default function MovieCards() {
    const { movies, loading } = useContext(GlobalContext);

    const flag = (language) =>
        flags.includes(language) ? language + ".jpg" : "placeholder.png";

    return (
        <div className="row">
            {loading ? (
                <p>Loading...</p>
            ) : movies.length > 0 ? (
                movies.map((movie) => (
                    <div key={movie.id} className="col-md-3 mb-4">
                        <Card item={movie} flag={flag(movie.original_language)} isMovie={true} />
                    </div>
                ))
            ) : (
                <p>Nessun film trovato</p>
            )}
        </div>
    );
}
