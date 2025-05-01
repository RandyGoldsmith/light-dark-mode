import "./App.css";
import Beers from "./components/Beers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import ThemeContext from "./components/store/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={theme === "dark" ? "dark-mode" : ""}
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Beers />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
