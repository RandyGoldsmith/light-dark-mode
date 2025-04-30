import logoImg from "../assets/people.png";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>Randy Goldsmith</h1>
      </div>
      <nav>
        <button>Light/Dark Mode</button>
      </nav>
    </header>
  );
}
