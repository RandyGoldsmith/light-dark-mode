import logoImg from "../assets/people.png";
import Button from "./UI/Button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>Randy Goldsmith</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
        <button>Light/Dark Mode</button>
      </nav>
    </header>
  );
}
