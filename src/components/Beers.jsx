import { useState, useEffect } from "react";
import BeerItem from "./BeerItem";

export default function Beers() {
  const [loadedBeers, setLoadedBeers] = useState([]);

  useEffect(() => {
    async function fetchBeers() {
      const url = "https://punkapi.online/v3/beers?page=2";
      const response = await fetch(url);
      const beer = await response.json();
      setLoadedBeers(beer);
      console.log(beer);
    }

    fetchBeers();
  }, []);

  const displayedBeers = loadedBeers.slice(0, 12);

  return (
    <>
      <h1>Our Beers</h1>
      <ul className="beers">
        {displayedBeers.map((beer) => (
          <BeerItem key={beer.id} beer={beer} />
        ))}
      </ul>
    </>
  );
}
