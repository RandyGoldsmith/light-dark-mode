import { useState, useEffect, useContext } from "react";
import ThemeContext from "./store/ThemeContext";
import BeerItem from "./BeerItem";

export default function Beers() {
  const [loadedBeers, setLoadedBeers] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function fetchBeers() {
      const url = "https://punkapi.online/v3/beers?page=2";
      const response = await fetch(url);
      const beer = await response.json();
      setLoadedBeers(beer);
    }

    fetchBeers();
  }, []);

  const displayedBeers = loadedBeers.slice(0, 12);

  return (
    <>
      <ul className={theme === "dark" ? "beers dark-beers" : "beers"}>
        {displayedBeers.map((beer) => (
          <BeerItem key={beer.id} beer={beer} />
        ))}
      </ul>
    </>
  );
}
