import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2f9c3e0661fe1e100e833c4ea389f562`;

  const inputRef = useRef(null); // Create a ref to the input element

  const initMap = () => {
    // Initialize Google Places Autocomplete
    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current
    );

    // Listen for place selection
    autocomplete.addListener("place_changed", () => {
      const selectedPlace = autocomplete.getPlace();
      if (
        selectedPlace &&
        selectedPlace.geometry &&
        selectedPlace.geometry.location
      ) {
        setLocation(selectedPlace.formatted_address);
      }
    });
  };

  useEffect(() => {
    // Check if the Google Maps API is already loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // The API hasn't loaded yet, you can handle this case or retry later
    }
  }, []);

  const searchLocation = () => {
    if (location === "") {
      alert("Please search for a city.");
      return;
    }

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        alert("Please type a valid city.");
      });
    // setLocation("");
  };

  return (
    <div className="app">
      <div className="container">
        <div className="searchbar">
          <input
            className="input-box"
            ref={inputRef}
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            type="text"
          />
          <button onClick={searchLocation}>Search</button>
        </div>

        <div className="above_image">
          <div className="location">
            <p>{data.name}</p>
          </div>

          <div className="temperature">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
          </div>

          <div className="description">
            {data.main !== undefined && (
              <div className="max_min">
                {data.main ? <p>{data.main.temp_max.toFixed()}</p> : null}
                <span>/</span>
                {data.main ? <p>{data.main.temp_min.toFixed()}</p> : null}
              </div>
            )}

            <div className="sky">
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
          </div>
        </div>

        <div className="weather_icoin">
          {data.weather ? (
            <img alt="weather" src={`icons/${data.weather[0].icon}.png`} />
          ) : null}
        </div>

        {data.name !== undefined && (
          <div className="footer">
            <div className="feels_like">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()} °C</p>
              ) : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold">{data.main.humidity.toFixed()} %</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="Winds">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Winds</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
