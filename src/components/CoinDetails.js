import React from "react";
import { convertToLocalString } from "../utils/helper";

const CoinDetails = (props) => {
  console.log(props);
  return (
    <div className="bg-white p-5 mr-5">
      <div className="flex ">
        <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400" 
            className="mx-1"
            width={40}
        />
        <div className="font-bold text-3xl mx-1">Bitcoin</div>
        <div className="font-semibold text-slate-500 mx-3 align-baseline mt-[8px]" >BTC</div>
        <div className="mx-5">
          <button className="bg-slate-500 text-white p-2 rounded-md">
            Rank #1
          </button>
        </div>
      </div>

      <div className="price mt-10">
        <div className="flex ">
          <div className="font-bold text-3xl mr-[25px]">{`$${convertToLocalString(props?.coinPrice?.usd)}`}</div>
          <div className="bg-green-200 px-3 percentage text-green-500 font-bold justify-center">{props?.coinPrice?.inr_24h_change?.toFixed(2)}%</div>
          <div className="font-semibold ml-4 percentage text-slate-500">(24H)</div>
        </div>

        <div className="price-inr font-semibold text-xl mt-3 "> ₹ {convertToLocalString(props?.coinPrice?.inr)}</div>
      </div>
    </div>
  );
};

export default CoinDetails;
