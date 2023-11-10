import { useState } from "react";
import CarouselSlider from "./CarouselSlider";
import TopTenCountries from './TopTenCountries';
import { places } from "./places";
import './App.css';

function App() {
  const [countries, setCountries] = useState(places);
  
  return(
    <div className="main">
      <div className="container">
        <h1>The {countries.length} Most Beautiful Places in the World</h1>
      </div>
      <hr></hr>
      <div className="container">
        <h3><span>*</span>From my point of view</h3>
      </div>
      <CarouselSlider />   
      <div className="container">
        <h3 className="remark"><span>*</span> You can delete any place from the list below if you consider this place not to be beautiful enough<span>😊</span></h3>
      </div>
      <TopTenCountries countries={countries} setCountries={setCountries} />
        <hr></hr>
        <div className="container">
          <p>2023© Copyright Natalia Musikhina</p>
        </div>
    </div>
  )
}

export default App;
