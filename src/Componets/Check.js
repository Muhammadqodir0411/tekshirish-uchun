import React, { useEffect, useState } from "react";

function Card() {
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((rec) => rec.json())
      .then((data) => {
        console.log(data);
        setCard(data);
      });
  }, []);
  const [card, setCard] = useState([]);
  return (
    <div className="">
      <header className="shadow p-3">
        <nav className="container">
          <h1>where are you from in the world ?</h1>
        </nav>
      </header>
      <main>
        <section className="container mt-5">
          <input
            type="text"
            className="form-control w-75 p-3"
            placeholder="Search for a country..."
          />
        </section>
      </main>
      <div className="container card-wrapper mt-5">
        {card.map((item) => {
          return (
            <div className="wrap-list" key={Math.random() + 1}>
              <div className="card wrap-list-item shadow">
                <img src={item.flags.svg} alt="flag" width={300} height={200} />
                <div className="p-3">
                  <h2>{item.name.common}</h2>
                  <p>
                    <strong>population: {item.area}</strong>
                  </p>
                  <p>
                    <strong>Region: {item.region}</strong>
                  </p>
                  <p>
                    <strong>Capital: {item.capital}</strong>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <p></p>
      </div>
    </div>
  );
}

export default Card;
