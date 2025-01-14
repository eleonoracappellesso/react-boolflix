import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SeriesCards() {
    const [series, setSeries] = useState([]); // stato locale per le serie 

    const apiKey = import.meta.env.VITE_API_KEY;
    const imagePath = import.meta.env.VITE_IMG_PATH; // percorso base per le immagini delle serie

    // chiamata API
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=it_IT`;

        axios
            .get(url) // richiesta per ottenere le serie
            .then((response) => {
                setSeries(response.data.results); // aggiorno lo stato di movies con i dati delle serie
            })
            .catch((error) => console.error('Errore nella ricerca:', error));
    }, [apiKey]);

    return (
        <div className="row">
            {series.length > 0 ? (
                series.map((serie) => (
                    <div key={serie.id} className="col-md-3 mb-4">
                        <div className="card">
                            {serie.poster_path && (
                                <img
                                    src={`${imagePath}${serie.poster_path}`}
                                    alt={serie.title}
                                    className="card-img-top"
                                />
                            )}
                        </div>
                        <div className="card-body">
                            <h5>{serie.title}</h5>
                        </div>
                    </div>
                ))
            ) : (
                <p>Nessuna serie tv</p>
            )}
        </div>
    );
};
