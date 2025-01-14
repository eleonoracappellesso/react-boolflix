import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

import style from "./Card.module.css";

const flags = ["de", "en", "es", "it", "fr"];

export default function SeriesCards() {
    const { series, loading } = useContext(GlobalContext); // Ottieni series dal contesto

    const flag = flags.includes(series.original_language)
        ? series.original_language + ".jpg"
        : "placeholder.png";

    const drawStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            const star =
                i <= Math.ceil(series.vote_average / 2) ? (
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
            ) : series.length > 0 ? (
                series.map((serie) => (
                    <div key={serie.id} className="col-md-3 mb-4">
                        <div className={`card ${style.cardWrapper} ${style.cardEffect}`}>
                            {serie.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                                    alt={serie.name}
                                    className={`card-img-top ${style.cardImg}`}
                                />
                            )}
                        </div>
                        <div className={style.cardInner}>
                            <h5>{serie.title}</h5>
                            <p className='p-2'>{serie.overview}</p>
                            <div className={style.flag}>
                                <img src={`/img/${flag}`} alt={flag} className="img-fluid" />
                            </div>
                            <div className={style.cardStar}>{drawStars()}</div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Nessuna serie trovata</p>
            )}
        </div>
    );
}
