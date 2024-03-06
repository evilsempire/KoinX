import React, { useEffect, useState } from "react";
import TradingViewWidget from "./TradingViewWidget";
import CoinDetails from "./CoinDetails";
import TabGroup from "./tabs/TabGroup";

const Chart = () => {
  const [coinPrice, setCoinPrice] = useState(null);

  useEffect(() => {
  getCointPrice();
  }, []);

  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-api-key": "CG-fsPajWfwSjUmFUcSrn7gSDkD",
    },
  };

  const getCointPrice = async () => {
    // const response = await fetch(
    //   "https://api.coingecko.com/api/v3//simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true",
    //   API_OPTIONS
    // );
    const response = await fetch("https://mocki.io/v1/fe7bdf8c-e2e4-405f-877d-d36211e0de2c");
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
