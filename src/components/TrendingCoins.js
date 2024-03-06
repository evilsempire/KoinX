import React, { useEffect, useState } from "react";
import useTrendingCoins from "../utils/useTrendingCoins";

const TrendingCoins = () => {

  const trendingCoins = useTrendingCoins();

  return (
    <div className="bg-white p-4 rounded-lg my-5">
      <div className="font-semibold text-2xl pb-5">Trending Coins (24h)</div>

      {trendingCoins.length &&
        trendingCoins?.slice(0,3).map((coin) => (
          <>
            <div className="flex flex-row " key={coin?.item?.id}>
              <div class="basis-1/9">
                <img
                  className="w-[30px] h-[30px] m-2 rounded-full"
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
