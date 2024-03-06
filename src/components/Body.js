import React from "react";
import BreadCrumb from "./BreadCrumb";
import Overview from "./Overview";
import Promotion from "./Promotion";
import OtherCoins from "./OtherCoins";

const Body = () => {
  return (
    <div className="body ">
      <BreadCrumb />
      <div className=" flex flex-row px-10">
          <Overview />
          <Promotion />
      </div>

      <OtherCoins />
    </div>
  );
};

export default Body;
