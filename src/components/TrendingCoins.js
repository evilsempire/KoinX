import React, { useEffect, useState } from "react";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-api-key": "CG-fsPajWfwSjUmFUcSrn7gSDkD",
    },
  };

  const getTrendingCoins = async () => {
    // const response = await fetch(
    //       "https://api.coingecko.com/api/v3/search/trending",
    //       API_OPTIONS
    //     );
    const response = await fetch(
      "https://mocki.io/v1/a1ed1de7-b584-4106-8dca-8e08f0d9e4e9"
    );
    const details = await response.json();
    console.log(details);
    setTrendingCoins(details?.coins);
  };

  useEffect(() => {
    getTrendingCoins();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg my-5">
      <div className="font-semibold text-2xl pb-5">Trending Coins (24h)</div>

      {trendingCoins.length &&
        trendingCoins?.slice(0,3).map((coin) => (
          <>
            <div className="flex flex-row " key={coin?.item?.id}>
              <div class="basis-1/9">
                <img
                  className="w-[30px] h-[30px] m-2"
                  src={coin?.item?.thumb}
                />
              </div>
              <div class="basis-3/4">
                <div className="p-2 font-semibold text-lg">{coin?.item?.name} ({coin?.item?.symbol})</div>
              </div>
              <div class="basis-1/6">
                <div className="bg-green-200 px-3 py-1 percentage text-green-500 font-bold justify-center">
                  {coin?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2)}%
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default TrendingCoins;
