import "./App.css";
import Beers from "./components/Beers";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Beers />
      <Footer />
    </div>
  );
}

export default App;
