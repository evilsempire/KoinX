import React from "react";

const Performance = () => {
  return (
    <div className="px-7">
      <div className="text-3xl font-bold py-5">Performance</div>
      <div className="flex py-5">
        <div className="basis-1/3">
          <div>Today's Low</div>
          <div className="">46,930.22</div>
        </div>
        <div className="basis-2/3 text-center">
          <div className="basis-1/2 w-[700px] h-[5px] m-[20px] bg-gradient-to-r from-orange-600 via-yellow-500 to-green-500 rounded-sm"></div>
        </div>
        <div className="basis-1/3 text-right">
          <div>Today's High</div>
          <div className="">46,930.22</div>
        </div>
      </div>

      <div className="flex py-5">
        <div className="basis-1/3">
          <div>52W Low</div>
          <div className="">46,930.22</div>
        </div>
        <div className="basis-2/3 text-center">
          <div className="basis-1/2 w-[700px] h-[5px] m-[20px] bg-gradient-to-r from-orange-600 via-yellow-500 to-green-500 rounded-sm"></div>
        </div>
        <div className="basis-1/3 text-right">
          <div>52W High</div>
          <div className="">46,930.22</div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
