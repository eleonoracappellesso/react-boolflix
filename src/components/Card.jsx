import { FaStar, FaRegStar } from "react-icons/fa";
import style from "./Card.module.css";

export default function Card({ item, flag, isMovie = true }) {
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
        <div className={`card ${style.cardWrapper} ${style.cardEffect}`}>
            {item.poster_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={isMovie ? item.title : item.name}
                    className={`card-img-top ${style.cardImg}`}
                />
            )}
            <div className={`p-3 ${style.cardInner}`}>
                <p className="my-3">
                    <strong>Titolo:</strong> {item.title || item.name}
                </p>
                {isMovie && (
                    <p className={`overview ${style.overview}`}>
                        <strong>Overview:</strong> {item.overview || "Descrizione non disponibile"}
                    </p>
                )}
                <div className={`my-2 ${style.flag}`}>
                    <img src={`/img/${flag}`} alt={flag} className="img-fluid" />
                </div>
                {isMovie && (
                    <div className={style.cardStar}>{drawStars(item.vote_average)}</div>
                )}
                <p>
                    <strong>Voto:</strong> {isMovie ? item.vote_average : "N/A"}
                </p>
            </div>
        </div>
    );
}
