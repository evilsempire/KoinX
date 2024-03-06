import React, { useEffect, useState } from "react";
import TradingViewWidget from "./TradingViewWidget";
import CoinDetails from "./CoinDetails";
import TabGroup from "./tabs/TabGroup";
import { API_OPTIONS, API_URL } from "../utils/constants";

const Chart = () => {
  const [coinPrice, setCoinPrice] = useState(null);

  useEffect(() => {
  getCointPrice();
  }, []);

  const getCointPrice = async () => {
    const response = await fetch(
       API_URL+"simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true",
      API_OPTIONS
    );
    const details = await response.json();
    
    setCoinPrice(details?.bitcoin)
  };

  return (
    <div>
      <CoinDetails coinPrice={coinPrice}/>
      <TradingViewWidget />

    </div>
  );
};

export default Chart;
