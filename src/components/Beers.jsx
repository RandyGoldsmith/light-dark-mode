import { useState, useEffect, useContext } from "react";
import ThemeContext from "./store/ThemeContext";
import BeerItem from "./BeerItem";

export default function Beers() {
  const [loadedBeers, setLoadedBeers] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function fetchBeers() {
      try {
        const url = "https://punkapi.online/v3/beers?page=2";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch beers: ${response.status}`);
        }
        const beerData = await response.json();

        const beersWithPrices = beerData.map((beer, index) => ({
          ...beer,
          price: 9.0 + index * 1.5,
        }));
        setLoadedBeers(beersWithPrices);
      } catch (e) {
        console.error("Error fetching beers:", e);
      }
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
