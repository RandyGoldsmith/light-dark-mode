export default function BeerItem({ beer }) {
  const url = "https://punkapi.online/v3/";

  return (
    <ul>
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
          <h3>{beer.tagline}</h3>
        </div>
      </article>
    </ul>
  );
}
