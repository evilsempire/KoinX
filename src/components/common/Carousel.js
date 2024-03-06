import React, { useState } from "react";

import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";

import CoinContainer from "./CoinContainer";

const Carousel = ({ coins }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(coins.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === coins.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 20}%)`,
        }}
      >
        {coins.map((coin) => {
          return <CoinContainer key={coin.item.coin_id} coin={coin}/>;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex   text-3xl">
        <button onClick={previousSlide}>
          <IoChevronBackCircleSharp  />
        </button>
        <button onClick={nextSlide}>
          <IoChevronForwardCircleSharp   />
        </button>
      </div>

    </div>
  );
}


export default Carousel;