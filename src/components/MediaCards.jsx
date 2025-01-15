import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import Card from './Card';

const flags = ["de", "en", "es", "it", "fr"];

export default function MediaCards({ dataKey, loadingMessage, emptyMessage }) {
    const { loading, ...dataSets } = useContext(GlobalContext);
    const data = dataSets[dataKey] || [];

    const flag = (language) =>
        flags.includes(language) ? language + ".jpg" : "placeholder.png";

    return (
        <div className="row">
            {loading ? (
                <p>{loadingMessage}</p>
            ) : data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id} className="col-md-3 mb-4">
                        <Card
                            item={item}
                            flag={flag(item.original_language)}
                        />
                    </div>
                ))
            ) : (
                <p>{emptyMessage}</p>
            )}
        </div>
    );
}
