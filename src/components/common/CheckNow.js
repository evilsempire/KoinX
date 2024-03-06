import React from "react";
import { MdOutlineArrowForward } from "react-icons/md";

const CheckNow = ({gradientColor, image, label}) => {
  return (
    <div className={"flex py-3 px-3 mt-4 mr-6 bg-gradient-to-br  w-[45%] rounded-md " + gradientColor }>
      <img className="w-[130px] h-[120px] rounded-md" src={image} />
      <div className="ml-5 w-[40%]">
        <h3 className="font-bold text-white text-xl mb-4">
          {label}
        </h3>
        <button className="bg-white text-black px-4 py-[6px] text-sm rounded-md font-semibold flex items-center">
          Check now <MdOutlineArrowForward className="text-xl ml-2"/>
        </button>
      </div>
    </div>
  );
};

export default CheckNow;
