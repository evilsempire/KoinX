import React from "react";
import CoinContainer from "./common/CoinContainer";
import useTrendingCoins from "../utils/useTrendingCoins";
import Carousel from "./common/Carousel";

const OtherCoins = () => {
  const trendingCoins = useTrendingCoins();

  return (
    <div className="bg-white p-10 mt-7">
      <div className="font-semibold text-2xl pb-5">You May also like</div>

      {/* <div className="flex overflow-x-auto">
        {
            trendingCoins?.length && (
                trendingCoins?.slice(0,8).map((coin) => <CoinContainer key={coin.item.coin_id} coin={coin}/>)
            )
        }
        </div> */}
      <div className="pb-5">
        {trendingCoins?.length && (
          <Carousel coins={trendingCoins?.slice(0, 8)} />
        )}
      </div>

      <div className="font-semibold text-2xl pb-5">Trending Coins</div>

      <div className="pb-5">
        {trendingCoins?.length && (
          <Carousel    sel coins={trendingCoins?.slice(0, 8)} />
        )}
      </div>
    </div>
  );
};

export default OtherCoins;
