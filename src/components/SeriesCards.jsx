import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export default function SeriesCards() {
    const { series, loading } = useContext(GlobalContext); // Ottieni series dal contesto

    return (
        <div className="row">
            {loading ? (
                <p>Caricamento...</p>
            ) : series.length > 0 ? (
                series.map((serie) => (
                    <div key={serie.id} className="col-md-3 mb-4">
                        <div className="card">
                            {serie.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                                    alt={serie.name}
                                    className="card-img-top"
                                />
                            )}
                        </div>
                        <div className="card-body">
                            <h5>{serie.name}</h5>
                        </div>
                    </div>
                ))
            ) : (
                <p>Nessuna serie trovata</p>
            )}
        </div>
    );
}
