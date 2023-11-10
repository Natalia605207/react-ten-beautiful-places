import { useState } from "react";

function TopTenCountries({countries, setCountries, places}) {
    const [showMore, setShowMore] = useState(false);

    const removeCountry = (id) => {
        let newCountries = countries.filter(element => element.id !== id);
        setCountries(newCountries);
    }
    
    const showTextClick = (country) => {
        country.showMore = !showMore;
        setShowMore(!showMore);
    }

    return(
        <div>
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
        </div>
    )
}

export default TopTenCountries;