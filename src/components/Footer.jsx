import { useContext } from "react";
import ThemeContext from "./store/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={theme === "dark" ? "dark-footer" : ""}>
      <p>&copy; 2025 RG Beer Store</p>
    </footer>
  );
};

export default Footer;
