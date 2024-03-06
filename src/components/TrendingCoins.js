import React, { useEffect, useState } from "react";
import { MdOutlineArrowDropUp  } from "react-icons/md";

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
              <div className="basis-1/9">
                <img
                  className="w-[30px] h-[30px] m-2 rounded-full"
                  src={coin?.item?.thumb}
                />
              </div>
              <div className="basis-3/4">
                <div className="p-2 font-semibold text-md">{coin?.item?.name} ({coin?.item?.symbol})</div>
              </div>
              <div className="basis-1/6">
                <div className="flex bg-green-200 pr-1 pt-1  percentage text-green-500 font-semibold justify-center text-sm">
                <MdOutlineArrowDropUp  className="text-2xl"/> {coin?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2)}%
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default TrendingCoins;
