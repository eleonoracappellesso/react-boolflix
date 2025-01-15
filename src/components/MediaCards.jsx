import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

// import carousel component from react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import Card from './Card';

const flags = ["de", "en", "es", "it", "fr"];

export default function MediaCards({ dataKey, loadingMessage, emptyMessage }) {
    const { loading, ...dataSets } = useContext(GlobalContext);
    const data = dataSets[dataKey] || [];

    const flag = (language) =>
        flags.includes(language) ? language + ".jpg" : "placeholder.png";

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

    return (
        <div className="row">
            <Slider {...carouselSettings}>
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
                )
                }
            </Slider>
        </div>
    );
}
