import ThemeContext from "./store/ThemeContext";
import { useContext } from "react";
import logoImg from "../assets/people.png";
import Button from "./UI/Button";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header id="main-header" className={theme === "dark" ? "dark-header" : ""}>
      <div id="title">
        <img src={logoImg} />
        <h1 className={theme === "dark" ? "dark-title" : ""}>
          Randy Goldsmith
        </h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </nav>
    </header>
  );
}
