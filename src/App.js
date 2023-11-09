import { useState } from "react";
import { places } from "./places";
import { photos } from "./photos";
import leftBtn from "./assets/left-btn.png";
import rightBtn from "./assets/right-btn.png";
import './App.css';

function App() {
  const [countries, setCountries] = useState(places);
  const [showMore, setShowMore] = useState(false);
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

  const removeCountry = (id) => {
    let newCountries = countries.filter(element => element.id !== id);
    setCountries(newCountries);
  }

  const showTextClick = (country) => {
    country.showMore = !showMore;
    setShowMore(!showMore);
  }

  return(
    <div className="main">
      <div className="container">
        <h1>The {countries.length} Most Beautiful Places in the World</h1>
      </div>
      <hr></hr>
      <div className="container">
        <h3><span>*</span>From my point of view</h3>
      </div>
      <div className="container">
        <img src={photo} alt="nice view" width="800px" height="500px" />
      </div>
      <div className="container">
        <h3>{place}</h3>
      </div>
      <div className="container">
        <img className="arrowBtn" src={leftBtn} onClick={previousSlide} alt="arrow" />
        <img className="arrowBtn" src={rightBtn} onClick={nextSlide} alt="arrow" />
      </div>
      <div className="container">
        <h3 className="remark"><span>*</span> You can delete any place from the list below if you consider this place not to be beautiful enough<span>😊</span></h3>
      </div>

      {countries.map(country => {
        const {id, name, image, description, showMore} = country;

        return(
          <div key={id}>
            <div className="item">
            <div className="container">
              <h2>{id}. {name}</h2>
            </div>
            <div className="container">
              <img src={image} alt="beautiful place" width="800px" height="500px" />
            </div>
            <div className="container">
              <p>{showMore ? description : description.substring(0, 220) +"..."}
              <button className="showMoreBtn" onClick = {() => showTextClick(country)}>{showMore ? "Show less" : "Show more"}</button></p>
            </div>
            <div className="container">
              <button className="btn" onClick = {() => removeCountry(id)}>Delete this place</button>
            </div>
            </div>
          </div>
        )
      })}
      <div className="container">
        <button className="btn deleteAllBtn" onClick = {() => setCountries([])}>Delete All</button>
        </div>
        <hr></hr>
        <div className="container">
          <p>2023© Copyright Natalia Musikhina</p>
        </div>
    </div>
  )
}

export default App;
