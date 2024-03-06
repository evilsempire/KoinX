import React from "react";

const CoinContainer = (props) => {
  console.log(props)
  const {thumb, symbol, data} = props?.coin.item
  return (
    <div className="border border-slate-300 rounded-lg m-2 pr-24 pb-4">
      <div className="flex p-2 ">
        <img
          className="w-[40px] h-[40px] p-2 rounded-full"
          src={thumb}
        />
        <div className="py-2">{symbol}</div>
        <div 
          dangerouslySetInnerHTML={{__html:  `${data?.price_change_percentage_24h?.usd?.toFixed(2)}%`}}
        className="mx-2 bg-green-100 px-2 percentage text-green-400 font-semibold text-sm justify-center">
         
        </div>
      </div>

      <div className="px-4 font-semibold text-xl">
        {data?.price}
      </div>
      <img
          className="p-2 ml-6 "
          src={data?.sparkline}
        />
    </div>
  );
};

export default CoinContainer;
