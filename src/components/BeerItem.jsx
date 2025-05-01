import Button from "./UI/Button";

export default function BeerItem({ beer }) {
  const url = "https://punkapi.online/v3/";

  return (
    <li className="beer-item">
      <article>
        {beer.image === "keg.png" ? (
          <img src={`${url}images/keg.png`} style={{ maxWidth: "100px" }} />
        ) : (
          <img
            src={`${url}images/${String(beer.id).padStart(3, "0")}.png`}
            style={{ maxWidth: "100px" }}
          />
        )}
        <div>
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>12.99</p>
        </div>
        <Button>Add to Cart</Button>
      </article>
    </li>
  );
}
