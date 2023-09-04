import React, { useState, useEffect } from "react";

const Tempapp = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const apiKey = "0b59618437895595f7dd4779b0372204";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`;

      try {
        let response = await fetch(url);
        let data = await response.json();
        setCity(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="maindiv">
        <div className="box">
          <input
            type="search"
            placeholder="Enter your city"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        {!city ? (
          <p>Data not found</p>
        ) : (
          <div>
            <h2>{search}</h2>
            <h1>{city?.main?.temp} K</h1>
            <p>{city?.weather && city?.weather[0]?.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
