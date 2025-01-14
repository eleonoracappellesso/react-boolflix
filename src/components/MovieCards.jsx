import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
//import { fa-star } from "react-icons/fa";
import style from "./Card.module.css";

const flags = ["de", "en", "es", "it", "fr"];

export default function MovieCards() {
    const { movies, loading } = useContext(GlobalContext); // Ottieni movies dal contesto

    const flag = flags.includes(movies.original_language)
        ? movies.original_language + ".jpg"
        : "placeholder.png";

    const drawStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            const star =
                i <= Math.ceil(movies.vote_average / 2) ? (
                    <i className='fa-star' key={i} />
                ) : (
                    <i className='fa-reg-star' key={i} />
                );
            stars.push(star);
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
                            <div className={style.cardInner}>
                                <h5>{movie.title}</h5>
                                <p className='p-2'>{movie.overview}</p>
                                <div className={style.flag}>
                                    <img src={`/img/${flag}`} alt={flag} className="img-fluid" />
                                </div>
                                <div className={style.cardStar}>{drawStars()}</div>
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
