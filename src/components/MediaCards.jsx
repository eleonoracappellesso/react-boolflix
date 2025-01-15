import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";

const flags = ["de", "en", "es", "it", "fr"];

export default function MediaCards({ dataKey, loadingMessage, emptyMessage }) {
    const { loading, ...dataSets } = useContext(GlobalContext);

    const data = dataSets[dataKey] || [];

    const flag = (language) =>
        flags.includes(language) ? `${language}.jpg` : "placeholder.png";

    const carouselSettings = {
        dots: true,
        infinite: false, // Disabilita il loop infinito
        speed: 800,
        slidesToShow: Math.min(data.length, 4),
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(data.length, 3),
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(data.length, 2),
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: Math.min(data.length, 1),
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Mostra un messaggio di caricamento o di assenza di dati
    if (loading) {
        return <p>{loadingMessage}</p>;
    }

    if (!data || data.length === 0) {
        return <p>{emptyMessage}</p>;
    }


    const getColumnClass = () => {
        if (data.length === 1) return "col-12";  // 1 elemento occupa tutta la riga
        if (data.length === 2) return "col-6";   // 2 elementi, 50% della riga
        if (data.length === 3) return "col-4";   // 3 elementi, 33.33% della riga
        return "col-md-3";                        // Default per 4 o più elementi
    };

    // Renderizza il carosello solo se ci sono dati
    return (
        <div className="row">
            <Slider {...carouselSettings}>
                {data.map((item) => (
                    <div key={item.id} className={getColumnClass()}>
                        <Card
                            item={item}
                            flag={flag(item.original_language)}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}