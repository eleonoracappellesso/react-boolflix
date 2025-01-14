import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { FaStar, FaRegStar } from "react-icons/fa";
import style from "./Card.module.css";

const flags = ["de", "en", "es", "it", "fr"];

export default function MovieCards() {
    const { movies, loading } = useContext(GlobalContext); // Ottieni movies dal contesto

    const flag = flags.includes(movies.original_language)
        ? movies.original_language + ".jpg"
        : "placeholder.png";

    const drawStars = (vote_average) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= Math.ceil(vote_average / 2) ? (
                    <FaStar key={i} />
                ) : (
                    <FaRegStar key={i} />
                )
            );
        }
        return stars;
    };

    return (
        <div className="row">
            {loading ? (
                <p>Caricamento...</p>
            ) : movies.length > 0 ? (
                movies.map((movie) => (
                    <div key={movie.id} className="col-md-3 mb-4">
                        <div className={`card ${style.cardWrapper} ${style.cardEffect}`}>
                            {movie.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className={`card-img-top ${style.cardImg}`}
                                />
                            )}
                            <div className={`p-3 ${style.cardInner}`}>
                                <p className='my-3'><strong>Titolo:</strong> {movie.title || "Titolo non disponibile"}</p>
                                <p className={`overview ${style.overview}`}><strong>Overview:</strong> {movie.overview || "Descrizione non disponibile"}</p>
                                <div className={`my-2 ${style.flag}`}>
                                    <img src={`/img/${flag}`} alt={flag} className="img-fluid" />
                                </div>
                                <div className={style.cardStar}>{drawStars(movie.vote_average)}</div>
                                <p><strong>Voto:</strong> {movie.vote_average}</p>
                            </div>
                        </div>
                    </div>

                ))
            ) : (
                <p>Nessun film trovato</p>
            )}
        </div>
    );
}
