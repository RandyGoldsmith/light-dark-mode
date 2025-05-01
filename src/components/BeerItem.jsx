import Button from "./UI/Button";

export default function BeerItem({ beer }) {
  const url = "https://punkapi.online/v3";
  const imageUrl =
    beer.image === "keg.png"
      ? `${url}/images/keg.png`
      : `${url}/images/${String(beer.id).padStart(3, "0")}.png`;

  return (
    <li className="beer-item">
      <article>
        <img src={imageUrl} alt={beer.name} style={{ maxWidth: "100px" }} />

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
