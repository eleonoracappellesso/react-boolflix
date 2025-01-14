
export default function Card() {
    return (
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
    )
}