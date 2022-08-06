import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Coins from "./components/Coins";
import CoinPage from "./components/pages/CoinPage";
import AboutPage from "./components/pages/AboutPage";
import Footer from "./components/Footer";
function App() {
  const [coins, setCoins] = useState([]);
  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false";

  // fetching data from url using axios and useEffect hook
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<CoinPage />}>
          <Route path=":coinId" element={<CoinPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
