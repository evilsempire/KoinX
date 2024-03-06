import React from "react";
const CheckNow = ({gradientColor, image, label}) => {
  return (
    <div className={"flex py-3 px-3 mt-4 mr-4 bg-gradient-to-br  w-[40%] rounded-md " + gradientColor }>
      <img className="w-[130px] h-[120px] rounded-md" src={image} />
      <div className="ml-5 w-[40%]">
        <h3 className="font-bold text-white text-xl mb-4">
          {label}
        </h3>
        <button className="bg-white text-black px-5 py-1 text-sm rounded-md font-semibold">
          Check now
        </button>
      </div>
    </div>
  );
};

export default CheckNow;
