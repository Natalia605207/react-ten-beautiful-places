import { useState } from "react";
import { photos } from "./photos";
import leftBtn from "./assets/left-btn.png";
import rightBtn from "./assets/right-btn.png";

function CarouselSlider() {
    const [carousel, setCarousel] = useState(0);
    const {id, photo, place} = photos[carousel];

    const previousSlide = () => {
        setCarousel((carousel => {
            carousel --;
            if (carousel < 0) {
            return photos.length - 1;
            }
            return carousel;
        }))
        }
    
    const nextSlide = () => {
        setCarousel((carousel => {
            carousel ++;
            if (carousel > photos.length - 1) {
            carousel = 0;
            }
            return carousel;
        }))
    }

    return(
        <div>
            <div className="container">
                <img src={photo} alt="nice view" width="800px" height="500px" />
            </div>
            <div className="container">
                <h3>{id}. {place}</h3>
            </div>
            <div className="container">
                <img className="arrowBtn" src={leftBtn} onClick={previousSlide} alt="arrow" />
                <img className="arrowBtn" src={rightBtn} onClick={nextSlide} alt="arrow" />
            </div>
        </div>
    )
}

export default CarouselSlider;