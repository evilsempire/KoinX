import React from "react";
import { convertToLocalString } from "../../utils/helper";

const CoinInfo = ({ label, number, number2 = 0, sign = "", backsign = "" }) => {
  const generateNumberWithLocal = (sign, number, backsign) => {
    return `${sign}${convertToLocalString(number)}${backsign}`;
  };

  return (
    <div className="flex text-sm border-b-2 border-slate-100 py-4 mr-7">
      <div className="basis-1/2  text-slate-400 font-normal">{label}</div>

      <div className="basis-1/2 font-semibold text-right">
        {generateNumberWithLocal(sign, number, backsign) +
          (number2
            ? " / " + generateNumberWithLocal(sign, number2, backsign)
            : "")}
      </div>
    </div>
  );
};




export default CoinInfo;
