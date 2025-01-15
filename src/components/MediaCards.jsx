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
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
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

    // Renderizza il carosello solo se ci sono dati
    return (
        <div className="row">
            <Slider {...carouselSettings}>
                {data.map((item) => (
                    <div key={item.id} className="col-md-3 mb-4">
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

