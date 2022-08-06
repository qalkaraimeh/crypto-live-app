import React from "react";
import { Link } from "react-router-dom";
import CoinItem from "./CoinItem";
import CoinPage from "./pages/CoinPage";
import "./Coins.css";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">volume</p>
          <p className="hide-mobile">MKT Cap</p>
        </div>
        {coins.map((coin) => {
          return (
            <Link to={`coin/${coin.id}`} element={CoinPage} key={coin.id}>
              <CoinItem coins={coin} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
