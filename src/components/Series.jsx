// import { useContext } from 'react';
// import { GlobalContext } from '../contexts/GlobalContext';
// import Card from './Card';

// const flags = ["de", "en", "es", "it", "fr"];

// export default function SeriesCards() {
//     const { series, loading } = useContext(GlobalContext);

//     const flag = (language) =>
//         flags.includes(language) ? language + ".jpg" : "placeholder.png";

//     return (
//         <div className="row">
//             {loading ? (
//                 <p>Caricamento...</p>
//             ) : series.length > 0 ? (
//                 series.map((serie) => (
//                     <div key={serie.id} className="col-md-3 mb-4">
//                         <Card item={serie} flag={flag(serie.original_language)} isMovie={false} />
//                     </div>
//                 ))
//             ) : (
//                 <p>Nessuna serie trovata</p>
//             )}
//         </div>
//     );
// }

import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import Card from './Card';

const flags = ["de", "en", "es", "it", "fr"];

export default function MovieCards() {
    const { series, loading } = useContext(GlobalContext);

    const flag = (language) =>
        flags.includes(language) ? language + ".jpg" : "placeholder.png";

    return (
        <div className="row">
            {loading ? (
                <p>Caricamento...</p>
            ) : series.length > 0 ? (
                series.map((serie) => (
                    <div key={serie.id} className="col-md-3 mb-4">
                        <Card item={serie} flag={flag(serie.original_language)} isSerie={true} />
                    </div>
                ))
            ) : (
                <p>Nessun film trovato</p>
            )}
        </div>
    );
}


