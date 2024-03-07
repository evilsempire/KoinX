import React from "react";
import BreadCrumb from "./BreadCrumb";
import Overview from "./Overview";
import Promotion from "./Promotion";
import OtherCoins from "./OtherCoins";

const Body = () => {
  return (
    <div className="body ">
      <BreadCrumb />
      <div className=" flex lg:flex-row flex-col px-4 lg:px-10">
          <Overview />
          <Promotion />
      </div>

      <OtherCoins />
    </div>
  );
};

export default Body;
